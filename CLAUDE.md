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

## Deploy

Vercel project `bookaridenz` — domains bookaridenz.com (308 → www) and
www.bookaridenz.com. No environment variables required.
