# CraftsmanOnDemand — Roadmap

## Phase 1 — Lead-capture site (this codebase, ready now)

What's live in this repo:

- Marketing site: home, DFW service area hub, services index + 10 category pages
  (8 live, 2 "coming soon" for licensed trades), how-it-works, blog (3 posts).
- Two lead-capture flows, both writing to a real Postgres database:
  - `/get-a-quote` → `Lead` table (consumer job requests)
  - `/craftsmen/apply` → `CraftsmanApplication` table (craftsman waitlist)
- Technical SEO: server-rendered pages, sitemap.xml, robots.txt, Schema.org
  markup (LocalBusiness, Service, Article, FAQPage) on the relevant pages.
- No payments, no bidding, no accounts yet — by design. See Phase 3.

**Deploy checklist** — see README.md for the full walkthrough:

1. Push this repo to GitHub.
2. Create a free Postgres database (Neon or Supabase) and copy the connection string.
3. Deploy to Vercel, import the repo, set `DATABASE_URL` in environment variables.
4. Run `npx prisma db push` against that database (creates the `Lead` and
   `CraftsmanApplication` tables).
5. (Optional) Set up Resend, add `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL`
   so you get an email the moment a lead comes in.
6. Point your domain at the Vercel deployment.
7. Submit the sitemap (`/sitemap.xml`) in Google Search Console.

## Phase 2 — Compliance and payments groundwork (not started)

Do roughly in this order, before any real money moves through the platform:

1. **Form the LLC** (or appropriate entity) — needed before opening a real
   Stripe Connect platform account or business bank account.
2. **Marketplace-experienced attorney** drafts: Terms of Service, Craftsman
   Independent Contractor Agreement, Consumer Agreement, refund/dispute
   policy for the destination fee. Replace the draft `/terms` and `/privacy`
   pages with the reviewed versions.
3. **Stripe Connect** platform account (Express connected accounts) for
   craftsman payouts.
4. **Checkr** integration for background checks, using Checkr's own
   FCRA-compliant consent/disclosure templates — have the attorney sign off
   on the specific consent-timing and adverse-action flow you implement.
5. **Insurance broker** conversation re: general liability / E&O for the
   platform, and whether to require craftsmen to carry their own liability
   insurance.
6. **License verification flow** for TDLR/TSBPE-regulated trades (electrical,
   plumbing, HVAC, etc.) — this gates the `electrical-repair` and
   `plumbing-repair` categories that are currently "coming soon." Don't open
   those categories for bidding until this exists; the database schema
   reference in `phase-2-marketplace-schema.prisma` has `licenseNumber` /
   `licenseVerifiedAt` fields ready for this.

## Phase 3 — Merge in the marketplace (after Phase 2)

- Add the models from `docs/phase-2-marketplace-schema.prisma` to the live
  schema via a migration (don't drop `Lead` / `CraftsmanApplication` —
  migrate those rows into real `User` / `JobPost` records).
- Build account creation/auth (Clerk or Auth.js), the bidding flow, bid
  comparison/sorting (verified → rating → price), Stripe Connect payment
  intents for the destination fee, and the admin panel.
- Turn `/get-a-quote` into the real job-posting flow and `/craftsmen/apply`
  into real onboarding once verification is live.

## Phase 4 — Content & SEO expansion (ongoing, ties to real data)

Don't build this ahead of real local data — Google's scaled content abuse
policy specifically targets templated location pages with no differentiation,
and that's exactly what empty city pages would be.

- Once there are real craftsmen and real completed jobs: expand `/dfw` with
  genuine per-city detail (real craftsman counts, real review excerpts, real
  local price ranges) rather than templated city clones.
- Keep adding blog content answering real DFW homeowner questions, written
  with real local cost data once you have it, FAQ/TL;DR-first for both
  classic SEO and AI answer engines (GEO).
- Expand metro by metro only once DFW has real density — national rank for a
  two-sided marketplace follows supply density, not content volume.
