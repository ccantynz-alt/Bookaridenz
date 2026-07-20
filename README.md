# Book A Ride NZ — bookaridenz.com

The original black & gold Book A Ride NZ website, restored from BookARide V2 and
wired into the live bookaride.co.nz booking platform so every booking lands in
the same database, admin dashboard, and inbox.

## How it works

- **Frontend** (`frontend/`): React 18 + Vite + Tailwind CSS — the original
  BookARideNZ.com design (airport transfers, Hobbiton tours, cruise transfers,
  international arrivals).
- **Booking system**: there is no backend in this repo. `vercel.json` proxies
  every `/api/*` request server-side to `https://www.bookaride.co.nz/api/*`,
  the production API that already powers bookaride.co.nz (bookings, live
  pricing, Stripe checkout, address autocomplete). Bookings made on
  bookaridenz.com are stored in the same Neon database and appear in the same
  admin dashboard as bookaride.co.nz bookings.

## Deploy (Vercel)

1. Import this repo as a new Vercel project.
2. No environment variables are required — the API proxy target is public.
3. Point the `bookaridenz.com` domain at the project.

## Local development

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL=https://www.bookaride.co.nz/api` in `frontend/.env.local` to
hit the live API during local development (the Vercel rewrite only applies in
production).
