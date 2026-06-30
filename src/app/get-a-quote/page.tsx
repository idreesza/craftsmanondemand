import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GetAQuoteForm } from "@/components/GetAQuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Post a job and get bids from verified craftsmen across the ${site.region}.`,
};

export default function GetAQuotePage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="max-w-2xl">
        <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          Get a Quote
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Tell us about the job
        </h1>
        <p className="mt-3 text-ink-soft">
          Takes about two minutes. No cost to post, and no account required to get started.
        </p>

        <div className="mt-8 rounded-sm border border-line bg-canvas-raised p-6 sm:p-8">
          <GetAQuoteForm />
        </div>
      </Container>
    </section>
  );
}
