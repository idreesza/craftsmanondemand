import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CraftsmanApplyForm } from "@/components/CraftsmanApplyForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply as a Craftsman",
  description: `Join the early access list for ${site.name} and get matched with homeowners across the ${site.region}.`,
};

export default function CraftsmanApplyPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-steel-deep">
            For Craftsmen
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Get matched with real jobs, not leads
          </h1>
          <p className="mt-4 text-ink-soft">
            {site.shortName} is built around project-based bids and real portfolio work — not
            pay-to-call leads. We&apos;re onboarding craftsmen city by city across DFW as we open
            coverage.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-soft">
            <li className="flex gap-2">
              <span className="text-rust">—</span>
              No pay-per-lead fees — you bid on jobs directly.
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span>
              Your portfolio does the selling, not a cold profile.
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span>
              Identity verification gets you the Verified badge homeowners see first.
            </li>
            <li className="flex gap-2">
              <span className="text-rust">—</span>
              Licensed trades (electrical, plumbing) open once license verification is live.
            </li>
          </ul>
        </div>

        <div className="rounded-sm border border-line bg-canvas-raised p-6 sm:p-8">
          <CraftsmanApplyForm />
        </div>
      </Container>
    </section>
  );
}
