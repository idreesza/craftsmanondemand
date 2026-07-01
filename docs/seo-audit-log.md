# SEO Audit Log — CraftsmanOnDemand.com

## Business Profile
- Business name: CraftsmanOnDemand
- Domain: craftsmanondemand.com
- GitHub: idreesza/craftsmanondemand
- Hosting: Vercel (auto-deploy from main branch)
- Database: PostgreSQL on Neon (free tier)

## Standing Decisions
- URL format: clean URLs, no .html extensions
- Trailing slash: no trailing slash
- Canonical: non-www, https
- www redirect: www → non-www, configured via Vercel's Domains settings only (add
  `www.craftsmanondemand.com` as a domain and set it to redirect to
  `craftsmanondemand.com`). Do NOT also add an app-level redirect in `next.config.ts` for
  this — a same-direction redirect was added there on 2026-07-01 and caused an
  `ERR_TOO_MANY_REDIRECTS` loop against Vercel's own domain redirect once the custom
  domain was connected. It was removed the same day. Keep domain-level redirects entirely
  in Vercel's dashboard going forward.

## Fixed & Verified — 2026-07-01
- Removed `FAQPage` JSON-LD from `/services/[slug]` and `/blog/[slug]` (Rule 3 — deprecated
  by Google, was present in both templates). Visible on-page FAQ content was kept; only the
  structured data was removed.
- Added self-referencing `alternates.canonical` + per-page OpenGraph + `robots` (with
  `max-image-preview: large`) to all 11 routes via a shared `pageMetadata()` helper in
  `src/lib/seo.ts`. Previously no page emitted a canonical tag at all.
- Added homepage JSON-LD: `LocalBusiness` + `WebSite` + `Organization` (previously the
  homepage had zero structured data).
- Added `BreadcrumbList` JSON-LD to service pages and blog posts.
- Fixed homepage H1 — was the slogan "See the work before you hire the worker."; now
  "Verified Handymen & Craftsmen in Dallas-Fort Worth," with the slogan kept as a
  subheading. Same slogan-to-subheading fix applied to `/how-it-works` and
  `/craftsmen/apply`. Also tightened H1s on `/services`, `/get-a-quote`, `/dfw`, and
  `/blog` to be more search-aligned.
- Blog posts now have a distinct `h1` field separate from the `<title>`/meta description,
  matching the content spec (previously both used the same string).
- Changed canonical domain from `https://www.craftsmanondemand.com` to
  `https://craftsmanondemand.com` (non-www).
- Rewrote `robots.ts` to include the AI-crawler allow rules (GPTBot, ChatGPT-User,
  PerplexityBot, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended) and the
  `/admin/`, `/api/`, `/sign-in`, `/sign-up`, `/*?*` disallow rules — previously only had a
  single blanket `Allow: /` rule.
- Added `/public/llms.txt`.
- Verified no `AggregateRating` schema anywhere (Rule 2 — confirmed clean, none was ever
  added).
- Verified no invented pricing, review counts, or fake testimonials anywhere in copy —
  confirmed clean on read-through of `services.ts`, `blog.ts`, and all page copy.
- Verified no city sub-pages exist under `/dfw` (Rule 5 — confirmed clean).
- `npx tsc --noEmit`, `next build`, and `npx eslint src` all pass clean after the above
  changes.

## Fixed & Verified — 2026-07-01 (later same day)
- Removed the `next.config.ts` www→non-www redirect added earlier that day. It caused
  `ERR_TOO_MANY_REDIRECTS` once the custom domain was connected in Vercel, because it
  fought with Vercel's own domain-level redirect in the opposite/same direction. Domain
  redirects for this project are now handled exclusively through Vercel's Domains
  settings — see Standing Decisions above.

## Open Items
- [ ] DATABASE_URL environment variable set in Vercel
- [ ] RESEND_API_KEY and LEAD_NOTIFICATION_EMAIL (optional)
- [ ] Confirm in Vercel → Settings → Domains that craftsmanondemand.com is the primary
      production domain and www.craftsmanondemand.com is set to redirect to it (not the
      other way around, and not both pointing at each other)
- [ ] If DNS is proxied through Cloudflare or another CDN in front of Vercel, confirm SSL
      mode is "Full" or "Full (strict)" — "Flexible" SSL in front of Vercel is a common
      separate cause of redirect loops
- [ ] Google Search Console property created and sitemap submitted
- [ ] Google Business Profile claimed and set up as service-area business
- [ ] GBP hours: [OWNER TO CONFIRM: actual operating hours]
- [ ] Founding year: [OWNER TO CONFIRM]

## Standing Rules — Apply Every Session
- Never invent specific numbers, prices, or statistics
- Never add AggregateRating schema
- Never add FAQPage schema
- Always verify live after every push
- No city sub-pages until real craftsman data exists
