import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { services } from "@/lib/services";
import { dfwCities, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "DFW Metroplex Service Area",
  description:
    "CraftsmanOnDemand is building verified craftsman coverage across the Dallas-Fort Worth Metroplex — see current service categories and coverage by city.",
  path: "/dfw",
});

export default function DFWPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description:
      "Portfolio-first marketplace connecting Dallas-Fort Worth homeowners with verified independent craftsmen.",
    areaServed: dfwCities.map((city) => ({
      "@type": "City",
      name: `${city}, TX`,
    })),
    url: `${site.domain}/dfw`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line bg-canvas-raised py-14 sm:py-16">
        <Container>
          <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-rust">
            Service Area
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Verified Craftsmen Serving the {site.region}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We&apos;re onboarding verified craftsmen city by city across DFW rather than
            stretching thin everywhere at once. Below is where coverage stands today and where
            we&apos;re headed next — updated honestly as real craftsmen join, not auto-generated.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-xl font-bold text-ink">Cities in our build-out plan</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            We&apos;re onboarding craftsmen in waves. If you&apos;re a homeowner in any of these
            areas, posting a job now puts you on the list for the moment coverage opens in your
            zip code.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dfwCities.map((city) => (
              <Link
                key={city}
                href={`/get-a-quote?city=${encodeURIComponent(city)}`}
                className="rounded-full border border-line bg-canvas-raised px-4 py-2 font-utility text-sm text-ink-soft transition-colors hover:border-steel hover:text-ink"
              >
                {city}, TX
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-canvas-raised py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-xl font-bold text-ink">Services available across DFW</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-xl font-bold text-ink">Local guides</h2>
          <div className="mt-5 space-y-3">
            <Link
              href="/blog/drywall-repair-cost-dallas-fort-worth"
              className="block rounded-sm border border-line bg-canvas-raised p-4 hover:border-steel"
            >
              <span className="font-display font-bold text-ink">
                How Much Does Drywall Repair Cost in Dallas-Fort Worth?
              </span>
            </Link>
            <Link
              href="/blog/permits-for-handyman-work-in-texas"
              className="block rounded-sm border border-line bg-canvas-raised p-4 hover:border-steel"
            >
              <span className="font-display font-bold text-ink">
                Do You Need a Permit for Handyman Work in Texas?
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        heading="Don't see your zip code live yet?"
        body="Post your job anyway — it helps us prioritize which areas to open next, and you'll be first in line when coverage lands."
        primary={{ href: "/get-a-quote", label: "Get a Quote" }}
        secondary={{ href: "/craftsmen/apply", label: "Apply as a Craftsman" }}
      />
    </>
  );
}
