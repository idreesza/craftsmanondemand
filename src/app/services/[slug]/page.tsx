import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { GetAQuoteForm } from "@/components/GetAQuoteForm";
import { StampBadge } from "@/components/StampBadge";
import { services, getServiceBySlug } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.shortDescription} Compare bids from verified craftsmen across the ${site.region}.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isLive = service.status === "live";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
    },
    areaServed: site.region,
    description: service.shortDescription,
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="border-b border-line bg-canvas-raised py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {service.name}
            </h1>
            {!isLive && <StampBadge label="Coming Soon" tone="steel" />}
          </div>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{service.shortDescription}</p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {service.licenseNote && (
              <div className="mb-8 rounded-sm border border-brass/40 bg-brass/10 p-4 text-sm leading-relaxed text-ink">
                <strong className="font-display">Licensing note: </strong>
                {service.licenseNote}
              </div>
            )}

            {service.intro.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}

            {service.commonIssues.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-ink">Common requests</h2>
                <ul className="mt-3 space-y-2">
                  {service.commonIssues.map((issue) => (
                    <li key={issue} className="flex gap-2 text-sm text-ink-soft">
                      <span className="text-rust">—</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-lg font-bold text-ink">FAQ</h2>
                <div className="mt-3 space-y-5">
                  {service.faqs.map((f) => (
                    <div key={f.question}>
                      <h3 className="font-semibold text-ink">{f.question}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 rounded-sm border border-line bg-canvas-raised p-4 text-sm text-ink-soft">
              Want the full picture on Texas licensing rules?{" "}
              <Link href="/blog/permits-for-handyman-work-in-texas" className="font-semibold text-rust hover:text-rust-deep">
                Read our guide →
              </Link>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            {isLive ? (
              <div className="rounded-sm border border-line bg-canvas-raised p-6">
                <h2 className="font-display text-lg font-bold text-ink">Request a quote</h2>
                <p className="mt-1 mb-5 text-sm text-ink-soft">
                  Tell us what needs doing — verified craftsmen in your area will bid on it.
                </p>
                <GetAQuoteForm defaultCategory={service.slug} />
              </div>
            ) : (
              <div className="rounded-sm border border-line bg-canvas-raised p-6">
                <h2 className="font-display text-lg font-bold text-ink">Not open yet</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  This category opens once license verification is live. Apply as a craftsman or
                  check back soon.
                </p>
                <Link
                  href="/craftsmen/apply"
                  className="mt-4 inline-flex rounded-sm border border-steel px-4 py-2.5 text-sm font-semibold text-steel-deep hover:bg-steel hover:text-canvas"
                >
                  Apply as a Craftsman
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
