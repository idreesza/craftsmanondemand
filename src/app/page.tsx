import Link from "next/link";
import { Container } from "@/components/Container";
import { JobTicketHero } from "@/components/JobTicketHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { services } from "@/lib/services";
import { dfwCities, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line bg-canvas py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-utility text-xs font-semibold uppercase tracking-[0.2em] text-rust">
              {site.region} · Now building craftsman coverage
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl">
              See the work before you hire the worker.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {site.shortName} is a portfolio-first marketplace for DFW homeowners and verified
              independent craftsmen. Post a job, compare real bids side by side, and pick based on
              actual finished work — not just a star rating.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-a-quote"
                className="rounded-sm bg-rust px-6 py-3.5 text-center text-sm font-semibold text-canvas transition-colors hover:bg-rust-deep"
              >
                Get a Quote
              </Link>
              <Link
                href="/craftsmen/apply"
                className="rounded-sm border border-steel px-6 py-3.5 text-center text-sm font-semibold text-steel-deep transition-colors hover:bg-steel hover:text-canvas"
              >
                Apply as a Craftsman
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              No cost to post a job. You only pay a destination fee if a craftsman asks for one
              before visiting in person — and it&apos;s refunded if you don&apos;t accept a bid.
            </p>
          </div>

          <JobTicketHero />
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Built differently than the lead-gen apps you&apos;ve used before
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <DifferentiatorCard
              title="Portfolio, not just a profile"
              body="Every craftsman's bid links to real photos of finished work in your category — not a generic profile photo and a phone number."
            />
            <DifferentiatorCard
              title="Project bids, not hourly guessing"
              body="Craftsmen quote the job, not the clock. You know the price before anyone shows up."
            />
            <DifferentiatorCard
              title="A fee that filters out tire-kickers"
              body="A small, refundable destination fee means quotes come from someone who actually looked at the job — not a guess from a one-line description."
            />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-canvas-raised py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <HowItWorksTrack
              eyebrow="For homeowners"
              steps={[
                "Post your job with a few photos and your zip code — free, no account required to start.",
                "Verified craftsmen who work in your area bid with a price, not an hourly estimate.",
                "Compare bids sorted by verification, rating, and price — pick the one that fits.",
                "Pay only if you accept a bid. Destination fees are refunded if you don't.",
              ]}
            />
            <HowItWorksTrack
              eyebrow="For craftsmen"
              steps={[
                "Apply with your trade, service area, and portfolio photos.",
                "Pass identity verification to earn the Verified badge on your profile.",
                "See nearby jobs and bid with a flat price based on what the job actually needs.",
                "Get paid out directly — no chasing leads that go nowhere.",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Services across the {site.regionShort} Metroplex
            </h2>
            <Link href="/services" className="text-sm font-semibold text-steel-deep hover:text-rust">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* DFW teaser */}
      <section className="border-t border-line bg-canvas-raised py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Building craftsman coverage across {site.region}
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">
                We&apos;re onboarding verified craftsmen city by city across DFW rather than
                spreading thin everywhere at once. See current and upcoming coverage on the DFW
                service area page.
              </p>
              <Link
                href="/dfw"
                className="mt-6 inline-flex items-center gap-1 font-semibold text-rust hover:text-rust-deep"
              >
                View DFW service area →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 content-start">
              {dfwCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-line bg-canvas px-3 py-1.5 font-utility text-xs text-ink-soft"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        heading="Have a job that needs doing?"
        body="Post it in a couple of minutes — no cost, no obligation, no account required to get started."
        primary={{ href: "/get-a-quote", label: "Get a Quote" }}
        secondary={{ href: "/how-it-works", label: "See how it works" }}
      />
    </>
  );
}

function DifferentiatorCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-sm border border-line bg-canvas-raised p-6">
      <h3 className="font-display text-base font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function HowItWorksTrack({ eyebrow, steps }: { eyebrow: string; steps: string[] }) {
  return (
    <div>
      <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
        {eyebrow}
      </p>
      <ol className="mt-4 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-steel font-utility text-xs font-semibold text-steel-deep">
              {i + 1}
            </span>
            <span className="pt-0.5 text-sm leading-relaxed text-ink-soft">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
