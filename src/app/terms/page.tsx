import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service (Draft)",
};

export default function TermsPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="max-w-2xl">
        <div className="mb-8 rounded-sm border border-rust/40 bg-rust/10 p-4 text-sm leading-relaxed text-rust-deep">
          <strong>Draft — not yet reviewed by an attorney.</strong> This placeholder exists so the
          page has a stable URL and structure. Don&apos;t treat anything below as final or
          legally binding until it&apos;s been reviewed by counsel and replaced with the real
          Terms of Service and Craftsman Independent Contractor Agreement.
        </div>

        <h1 className="font-display text-3xl font-extrabold text-ink">Terms of Service</h1>
        <p className="mt-4 text-ink-soft">
          {site.name} is a marketplace connecting homeowners (&quot;Consumers&quot;) in the
          Dallas-Fort Worth Metroplex with independent craftsmen (&quot;Craftsmen&quot;).
          Craftsmen are independent contractors and are not employees, agents, or representatives
          of {site.name}.
        </p>
        <p className="mt-4 text-ink-soft">
          At this stage, {site.name} operates as a lead-matching service: job requests and
          craftsman applications are collected for the purpose of building service coverage
          across DFW. No payments are processed through the platform at this time.
        </p>
        <p className="mt-4 text-ink-soft">
          Full terms covering bidding, destination fees, escrow, refunds, dispute resolution, and
          craftsman obligations will be published here before any payment functionality goes
          live.
        </p>
      </Container>
    </section>
  );
}
