import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: `Browse home repair and improvement services available through ${site.name} across the ${site.region}.`,
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <section className="border-b border-line bg-canvas-raised py-14 sm:py-16">
        <Container>
          <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-rust">
            Services
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Home Repair &amp; Improvement Services in Dallas-Fort Worth
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            General handyman categories are live now. Licensed trades — electrical and plumbing —
            are marked &quot;coming soon&quot; until license verification is built into craftsman
            onboarding.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        heading="Don't see exactly what you need?"
        body="Post the job anyway with a description of what's involved — we'll match it to the closest category."
        primary={{ href: "/get-a-quote", label: "Get a Quote" }}
      />
    </>
  );
}
