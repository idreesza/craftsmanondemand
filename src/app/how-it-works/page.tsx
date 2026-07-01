import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "How CraftsmanOnDemand's bidding, verification, and destination-fee model works for DFW homeowners and craftsmen.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line bg-canvas-raised py-14 sm:py-16">
        <Container className="max-w-3xl">
          <p className="font-utility text-xs font-semibold uppercase tracking-[0.18em] text-rust">
            How It Works
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            How Verified Craftsman Bidding Works in Dallas-Fort Worth
          </h1>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            A bidding model built around seeing the work first.
          </p>
          <p className="mt-4 text-ink-soft">
            We&apos;re currently onboarding craftsmen across DFW. The flow below is how the
            platform works once bidding is live in your area — posting a job today puts you on
            the list for the moment it opens in your zip code.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl space-y-12">
          <Step
            number={1}
            title="Post the job"
            body="Add a title, description, a couple of photos, your zip code, and roughly when you'd like it done. No account required, no cost to post."
          />
          <Step
            number={2}
            title="Verified craftsmen bid"
            body="Craftsmen working your category and area see the job and submit a quoted price — not an hourly estimate. Each bid shows the craftsman's verification status, rating history, and portfolio."
          />
          <Step
            number={3}
            title="Compare bids, not just price"
            body="Bids are sorted with verified craftsmen first, then by rating, then by price — so a slightly cheaper unverified bid doesn't bury a better-vetted one."
          />
          <Step
            number={4}
            title="Pay a destination fee only if one's requested"
            body={`Some craftsmen quote sight-unseen from your description and photos. Others ask for a flat $${site.destinationFee} destination fee to visit in person and give an exact quote before any work starts — refunded in full if you don't accept their bid.`}
          />
          <Step
            number={5}
            title="Accept a bid and the job gets done"
            body={`If you accept a bid where a destination fee was paid, $${site.platformFee} covers the platform fee and the rest goes to the craftsman. If you don't accept any bid, the destination fee is refunded.`}
          />
          <Step
            number={6}
            title="Leave a review"
            body="Once the job's done, your review becomes part of that craftsman's portfolio and rating — the same thing future homeowners will see when comparing bids."
          />
        </Container>
      </section>

      <section className="border-t border-line bg-canvas-raised py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-xl font-bold text-ink">What &quot;Verified&quot; means today</h2>
          <p className="mt-3 text-ink-soft">
            A Verified badge means a craftsman has passed an identity and background check. For
            trades that Texas regulates at the state level — electrical and plumbing among them —
            we&apos;re building license verification into onboarding before opening those
            categories, so Verified will mean license-checked too, not just background-checked.
            Read more in our{" "}
            <Link href="/blog/permits-for-handyman-work-in-texas" className="text-rust hover:text-rust-deep">
              guide to permits and licensing in Texas
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTABand
        heading="Ready to get on the list?"
        body="Posting a job costs nothing and helps us prioritize where to open coverage next."
        primary={{ href: "/get-a-quote", label: "Get a Quote" }}
        secondary={{ href: "/craftsmen/apply", label: "Apply as a Craftsman" }}
      />
    </>
  );
}

function Step({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <div className="flex gap-5">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-steel font-utility text-sm font-semibold text-steel-deep">
        {number}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-1.5 leading-relaxed text-ink-soft">{body}</p>
      </div>
    </div>
  );
}
