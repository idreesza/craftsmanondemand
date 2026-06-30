import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { craftsmanApplicationSchema } from "@/lib/validation";
import { notifyNewLead } from "@/lib/email";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = craftsmanApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  try {
    const application = await prisma.craftsmanApplication.create({
      data: {
        fullName: data.fullName,
        businessName: data.businessName || null,
        email: data.email,
        phone: data.phone,
        zipcode: data.zipcode,
        trades: data.trades,
        yearsExperience: data.yearsExperience ?? null,
        portfolioUrl: data.portfolioUrl || null,
        notes: data.notes || null,
      },
    });

    await notifyNewLead(
      `New craftsman application: ${data.fullName} (${data.zipcode})`,
      `<p><strong>${data.fullName}</strong>${data.businessName ? ` — ${data.businessName}` : ""}</p>
       <p>${data.email} / ${data.phone}</p>
       <p><strong>Zip:</strong> ${data.zipcode}</p>
       <p><strong>Trades:</strong> ${data.trades.join(", ")}</p>
       <p>${data.notes || ""}</p>`
    );

    return NextResponse.json({ id: application.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to save craftsman application:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your application. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
