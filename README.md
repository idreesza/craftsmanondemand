# CraftsmanOnDemand — Phase 1 (Lead-Capture Site)

A Next.js marketing + lead-capture site for a DFW home-services marketplace.
This is the part that can go live *today* — before Stripe Connect, Checkr,
and the business entity are in place. See `docs/ROADMAP.md` for what comes
after this.

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind v4)
- **Postgres + Prisma** for lead storage (`Lead`, `CraftsmanApplication`)
- **Resend** (optional) for email notifications on new leads
- **Zod** for form validation

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in DATABASE_URL at minimum
npx prisma generate
npx prisma db push           # creates the Lead/CraftsmanApplication tables
npm run dev
```

Open http://localhost:3000.

If you don't have a database yet, the site will still render — only the two
form submissions (`/get-a-quote`, `/craftsmen/apply`) need `DATABASE_URL` to
actually save data.

## Deploying to production (today)

1. **Get a free Postgres database.** [Neon](https://neon.tech) or
   [Supabase](https://supabase.com) both work — copy the connection string
   they give you (it should start with `postgresql://`).
2. **Push this repo to GitHub** (private repo is fine).
3. **Deploy on [Vercel](https://vercel.com)**: "Add New Project" → import the
   GitHub repo → it auto-detects Next.js.
4. **Set environment variables in Vercel** (Project Settings → Environment
   Variables):
   - `DATABASE_URL` — from step 1
   - `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL` — optional, only if you
     want email alerts on new leads (sign up at [resend.com](https://resend.com))
5. **Run the database migration once**, from your local machine, pointed at
   the production database:
   ```bash
   DATABASE_URL="<your production connection string>" npx prisma db push
   ```
6. **Connect your domain** in Vercel's project settings (Domains tab), and
   update `domain` in `src/lib/site.ts` if it's not `craftsmanondemand.com`.
7. **Submit the sitemap** at `https://yourdomain.com/sitemap.xml` in
   [Google Search Council](https://search.google.com/search-console).

That's it — leads and craftsman applications start flowing into your
database immediately, and the site is fully indexable.

## Where leads go

Both forms write to Postgres via Prisma:

- `/get-a-quote` → `Lead` table
- `/craftsmen/apply` → `CraftsmanApplication` table

There's no admin UI yet — query the database directly (Neon and Supabase
both have a built-in SQL editor / table viewer), or connect a BI tool like
Retool if volume picks up before Phase 3's admin panel is built.

## Project structure

```
src/
  app/                 routes (App Router)
    page.tsx           home
    dfw/                DFW hub page
    services/[slug]/   service category pages (10 categories)
    blog/[slug]/       3 SEO/GEO-oriented guides
    get-a-quote/       consumer lead form
    craftsmen/apply/   craftsman waitlist form
    api/leads/         POST handler → Lead table
    api/craftsmen-apply/  POST handler → CraftsmanApplication table
    sitemap.ts / robots.ts
  components/          Header, Footer, forms, JobTicketHero (signature visual), etc.
  lib/
    site.ts            brand/nav/city constants — edit this first if rebranding
    services.ts        service category data (edit to add/remove categories)
    blog.ts             blog post content
    prisma.ts / email.ts / validation.ts
prisma/schema.prisma    Phase 1 schema (Lead, CraftsmanApplication)
docs/
  ROADMAP.md            phased plan: compliance → marketplace → SEO expansion
  phase-2-marketplace-schema.prisma   full marketplace schema, not active yet
```

## Things to change before going live

- `src/lib/site.ts` — confirm brand name, domain, support email.
- `/terms` and `/privacy` — currently clearly-labeled drafts. Get them
  reviewed by an attorney before relying on them (see `docs/ROADMAP.md`).
- Service categories in `src/lib/services.ts` — add real photos/portfolio
  examples once you have them; the licensing notes on `plumbing-repair` and
  `electrical-repair` should stay until license verification is actually built.
