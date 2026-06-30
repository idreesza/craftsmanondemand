import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validation";
import { notifyNewLead } from "@/lib/email";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  try {
    const lead = await prisma.lead.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        zipcode: data.zipcode,
        category: data.category,
        title: data.title,
        description: data.description,
        preferredDate: data.preferredDate || null,
        budgetMin: data.budgetMin ?? null,
        budgetMax: data.budgetMax ?? null,
        source: data.source || "website",
      },
    });

    await notifyNewLead(
      `New job lead: ${data.title} (${data.zipcode})`,
      `<p><strong>${data.fullName}</strong> (${data.email}, ${data.phone || "no phone"}) posted a job in ${data.zipcode}.</p>
       <p><strong>Category:</strong> ${data.category}</p>
       <p><strong>Title:</strong> ${data.title}</p>
       <p>${data.description}</p>`
    );

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
