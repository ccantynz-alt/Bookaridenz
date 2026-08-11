# CLAUDE.md — Book A Ride NZ (bookaridenz.com)

## What this repo is

The international storefront for Book A Ride NZ. React/Vite frontend only —
there is **no backend here**. All `/api/*` requests are proxied by
`vercel.json` to the live bookaride.co.nz platform (shared Neon database,
shared admin, shared Stripe). The booking page under `src/pages/BookNow.jsx`
and its components are copied **verbatim** from the bookaride.co.nz repo —
prefer re-syncing from that repo over rewriting them.

## Standing workflow rules (owner-approved)

1. **Ship green, ship current.** When work is complete and the build passes,
   push it and merge the PR immediately — do not leave approved work sitting
   in draft PRs or unmerged branches. The deployed system should always match
   the latest build.
2. **Keep `main` current.** Push work to `main` (or sync `main` with the
   working branch after every push) so Vercel production always deploys the
   latest state.
3. **Verify before merge**: `cd frontend && npm run build` must pass with
   zero errors.

## Business rules

- **No business phone number anywhere on the site** — the site drives online
  bookings only; email is the fallback contact. (Customer phone input in the
  booking form is required and fine.)
- Positioning: **both a private shuttle AND an airport shuttle** — keep this
  dual message in hero copy, trust bars, and meta descriptions.
- The 10% private-transfer surcharge is **admin quoting only** (adminQuote
  flag in the shared pricing API) — never applied to public website prices.
- Images: only production-proven URLs (already shipped on bookaride.co.nz)
  or self-hosted files in `frontend/public/images/` that have been visually
  verified. Never hotlink unverified stock-photo URLs.
- i18n: all customer-facing hero/nav/booking chrome must be translated in all
  six languages (en/zh/ja/ko/es/fr) in `frontend/src/i18n.js`.

## SEO infrastructure

- Country landing pages (`/from/<slug>`) are data-driven from
  `frontend/src/data/countries.js` — add a country there (with a visually
  verified hero image) and the route, footer links, audience-page links,
  prerender snapshot and sitemap entry all follow automatically.
- `frontend/scripts/prerender.mjs` runs as part of `npm run build`: it writes
  a static `dist/<route>/index.html` per marketing route (unique title,
  description, canonical, og tags, hreflang) and generates `dist/sitemap.xml`
  from `frontend/src/data/routes.js`. Vercel serves these static snapshots
  before the SPA rewrite, so non-JS crawlers (Baidu, Naver, link previews)
  see correct per-page HTML. When a page's `<PageMeta>` changes, update its
  entry in `routes.js` too.
- Chile was dropped from the country list because no hero image could be
  visually verified — add it back once a verified image exists.

## Deploy

Vercel project `bookaridenz` — domains bookaridenz.com (308 → www) and
www.bookaridenz.com. No environment variables required.
