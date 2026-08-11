// Central SEO route manifest — consumed by scripts/prerender.mjs at build
// time to emit a static, crawlable index.html per route (unique title,
// description, canonical, hreflang) plus sitemap.xml. Titles/descriptions
// for the static pages mirror the <PageMeta> values inside each page
// component — keep them in sync when page meta changes.
import { COUNTRIES } from './countries.js'

const STATIC_ROUTES = [
  {
    path: '/',
    title: null, // default site title
    desc: 'Premium airport transfers across Auckland — private door-to-door shuttles, Hobbiton tours and cruise terminal transfers. Instant online pricing, fixed rates, international bookings welcome.',
    priority: 1.0, changefreq: 'weekly',
  },
  {
    path: '/book-now',
    title: 'Book Your Auckland Transfer Online',
    desc: 'Book a private airport transfer in Auckland in 60 seconds. Instant online pricing, secure card payment, flight tracking and email confirmation — no phone calls needed.',
    priority: 0.9, changefreq: 'monthly',
  },
  {
    path: '/services',
    title: 'Airport Transfer Services Auckland',
    desc: 'Private airport shuttles, Hobbiton Movie Set tours, cruise terminal transfers and group transport across Auckland. Fixed prices, flight tracking, book online in 60 seconds.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/hobbiton-transfers',
    title: 'Hobbiton Private Transfers from Auckland — Better Than a Bus Tour',
    desc: 'Private door-to-door Hobbiton Movie Set transfers from Auckland, your hotel, airport or cruise ship. Your schedule, your vehicle (up to 11), one fixed price per vehicle. Timed perfectly to your tour — book online in 60 seconds.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/cruise-transfers',
    title: 'Cruise Ship Transfers Auckland — Port & Airport Shuttle',
    desc: 'Professional cruise transfer service in Auckland. Private transfers between the cruise terminal, airport and hotels with luggage assistance and an on-time guarantee. Book online with instant pricing.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/international-visitors',
    title: 'Auckland Airport Transfers for International Visitors',
    desc: 'Private airport transfers for international travellers to New Zealand. Book online from overseas in English, 中文, 日本語, 한국어, Español or Français. Flight tracking, fixed NZD prices, meet & greet. Auckland, Hobbiton & cruise transfers.',
    priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/student-transfers',
    title: 'Student Airport Transfers Auckland — Safe Pre-Booked Rides',
    desc: 'Airport transfers for international students in Auckland. Parents can book and pay online from overseas. Safe, insured drivers, luggage-friendly vehicles, transfers to universities, halls of residence and homestays across Auckland.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/corporate-transfers',
    title: 'Corporate & Business Airport Transfers Auckland',
    desc: 'Executive airport transfers in Auckland for business travellers and corporate clients. Professional drivers, on-time guarantee, flight tracking, instant receipts for expenses, quiet comfortable vehicles. Book online in 60 seconds.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/medical-professionals',
    title: 'Airport Transfers for Doctors, Nurses & Healthcare Workers NZ',
    desc: 'Reliable airport transfers for doctors, nurses and healthcare professionals relocating or on placement in New Zealand. 24/7 service for early and late shifts, luggage-friendly vehicles for relocations, fixed prices, hospital drop-offs across Auckland.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/travel-agents',
    title: 'Travel Agent Partnerships — NZ Ground Transport Partner',
    desc: 'Partner with Book A Ride NZ for client ground transport in New Zealand. Instant online quotes and confirmations, fixed commissions-friendly pricing, private airport, Hobbiton and cruise transfers for up to 11 passengers. Trusted by agents worldwide.',
    priority: 0.7, changefreq: 'monthly',
  },
  {
    path: '/about',
    title: 'About Us',
    desc: "Book A Ride NZ is Auckland's trusted private transfer service — professional drivers, premium vehicles, and thousands of happy customers from New Zealand and around the world.",
    priority: 0.5, changefreq: 'yearly',
  },
  {
    path: '/contact',
    title: 'Contact',
    desc: 'Get in touch with Book A Ride NZ. Book online 24/7 with instant pricing, or email us — we respond fast, every day of the year.',
    priority: 0.5, changefreq: 'yearly',
  },
]

const COUNTRY_ROUTES = Object.entries(COUNTRIES).map(([slug, c]) => ({
  path: `/from/${slug}`,
  title: c.seoTitle,
  desc: c.seoDesc,
  priority: 0.7,
  changefreq: 'monthly',
}))

export const ROUTES = [...STATIC_ROUTES, ...COUNTRY_ROUTES]
