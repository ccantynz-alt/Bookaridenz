import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Star, Plane, Globe, Clock, Shield, Users, Luggage,
  GraduationCap, Briefcase, Stethoscope, Handshake, Mail, Calendar, CreditCard, MapPin,
} from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'

const AUDIENCES = {
  'international-visitors': {
    icon: Globe,
    badge: 'Welcoming the World to New Zealand',
    title1: 'Your First Ride',
    title2: 'in New Zealand',
    subtitle: 'Land at Auckland Airport and step straight into a private transfer — booked from anywhere in the world, in your language, before you even fly.',
    seoTitle: 'Auckland Airport Transfers for International Visitors',
    seoDesc: 'Private airport transfers for international travellers to New Zealand. Book online from overseas in English, 中文, 日本語, 한국어, Español or Français. Flight tracking, fixed NZD prices, meet & greet. Auckland, Hobbiton & cruise transfers.',
    benefits: [
      { icon: Globe, title: 'Book From Anywhere', text: 'Our booking system works worldwide, in six languages, with instant email confirmation — sorted before you board your flight.' },
      { icon: Plane, title: 'We Track Your Flight', text: 'Delayed? Early? Your driver already knows. Pickup adjusts automatically at no extra charge.' },
      { icon: CreditCard, title: 'Fixed NZD Prices', text: 'See your exact price before you pay — no meters, no surge, no airport-taxi surprises in a foreign currency.' },
      { icon: Luggage, title: 'All Your Luggage', text: 'Suitcases, skis, surfboards, golf clubs — travelling to the other side of the world means bags. We handle them all.' },
      { icon: Users, title: 'Groups up to 11', text: 'One vehicle, one price for your whole family or tour group — far cheaper than multiple taxis.' },
      { icon: Star, title: 'Hobbiton & Cruises', text: "New Zealand's icons, door-to-door: private Hobbiton Movie Set transfers and cruise terminal connections." },
    ],
  },
  'student-transfers': {
    icon: GraduationCap,
    badge: 'Trusted by Students & Parents Worldwide',
    title1: 'Starting University',
    title2: 'in New Zealand?',
    subtitle: 'From Auckland Airport to your halls, homestay or apartment — a safe, pre-booked ride your parents can arrange and pay for from home.',
    seoTitle: 'Student Airport Transfers Auckland — Safe Pre-Booked Rides',
    seoDesc: 'Airport transfers for international students in Auckland. Parents can book and pay online from overseas. Safe, insured drivers, luggage-friendly vehicles, transfers to universities, halls of residence and homestays across Auckland.',
    benefits: [
      { icon: Shield, title: 'Safe & Fully Insured', text: 'Professional, vetted drivers and fully insured vehicles — reassurance for you and your family back home.' },
      { icon: CreditCard, title: 'Parents Can Book & Pay', text: 'Book from any country with secure online payment. Confirmation goes to every email you add.' },
      { icon: Luggage, title: 'Moving-In Luggage', text: 'Two years of your life in suitcases? No problem — our vans take everything, no surcharge surprises.' },
      { icon: MapPin, title: 'Every Campus & Hall', text: 'University of Auckland, AUT, Massey, halls of residence, homestays — we know them all, door-to-door.' },
      { icon: Plane, title: 'Flight Tracking', text: 'Long-haul flights run late. Your driver tracks your flight and waits — no stress after a 12-hour journey.' },
      { icon: Users, title: 'Group Arrivals', text: 'Arriving with friends or an orientation group? Up to 11 passengers, one fixed price per vehicle.' },
    ],
  },
  'corporate-transfers': {
    icon: Briefcase,
    badge: 'Executive Ground Transport',
    title1: 'Business Travel,',
    title2: 'Handled',
    subtitle: 'Reliable executive transfers for meetings, conferences and corporate guests — on time, every time, with receipts your finance team will love.',
    seoTitle: 'Corporate & Business Airport Transfers Auckland',
    seoDesc: 'Executive airport transfers in Auckland for business travellers and corporate clients. Professional drivers, on-time guarantee, flight tracking, instant receipts for expenses, quiet comfortable vehicles. Book online in 60 seconds.',
    benefits: [
      { icon: Clock, title: 'On-Time, Guaranteed', text: 'Flight-tracked pickups and drivers who arrive early. Your meeting starts when it should.' },
      { icon: Briefcase, title: 'Arrive Ready', text: 'Quiet, air-conditioned vehicles with Wi-Fi — take the call, finish the deck, arrive composed.' },
      { icon: CreditCard, title: 'Effortless Expenses', text: 'Instant email receipts with every booking — clean documentation for your finance team.' },
      { icon: Users, title: 'Team & Event Logistics', text: 'Conferences, offsites, visiting executives — vehicles up to 11 passengers and multi-pickup routing.' },
      { icon: Calendar, title: 'Book Ahead in Seconds', text: 'Lock in the whole trip — arrival, meetings, departure — with return bookings in one transaction.' },
      { icon: Shield, title: 'Professional Every Time', text: 'Vetted professional drivers, fully insured vehicles, consistent standards on every ride.' },
    ],
  },
  'medical-professionals': {
    icon: Stethoscope,
    badge: 'For Healthcare Heroes',
    title1: 'Doctors & Nurses,',
    title2: 'We’ve Got You',
    subtitle: 'Relocating to a New Zealand hospital, arriving for a placement, or catching a red-eye after a shift — reliable transfers at any hour, every day.',
    seoTitle: 'Airport Transfers for Doctors, Nurses & Healthcare Workers NZ',
    seoDesc: 'Reliable airport transfers for doctors, nurses and healthcare professionals relocating or on placement in New Zealand. 24/7 service for early and late shifts, luggage-friendly vehicles for relocations, fixed prices, hospital drop-offs across Auckland.',
    benefits: [
      { icon: Clock, title: 'Truly 24/7', text: 'Night shifts, 5am starts, red-eye arrivals — we operate around the clock, every day of the year.' },
      { icon: MapPin, title: 'Hospital Drop-Offs', text: 'Auckland City, Middlemore, North Shore, Waitakere — door-to-door to any hospital or clinic in the region.' },
      { icon: Luggage, title: 'Relocation-Ready', text: 'Moving your life across the world for a new role? Our vans handle relocation luggage with ease.' },
      { icon: Plane, title: 'Flight Tracking', text: 'Arriving from overseas for a new position? We track your flight and greet you on arrival, whatever the hour.' },
      { icon: CreditCard, title: 'Fixed Prices', text: 'Know your exact fare before you book — easy for relocation reimbursements and expense claims.' },
      { icon: Shield, title: 'Dependable', text: 'When your roster leaves no room for a no-show taxi, a pre-booked, confirmed transfer is peace of mind.' },
    ],
  },
  'travel-agents': {
    icon: Handshake,
    badge: 'Partner With Us',
    title1: 'Your Ground Transport',
    title2: 'Partner in NZ',
    subtitle: 'Travel agents and tour operators: give your clients premium private transfers across Auckland, Hobbiton and the cruise terminal — with instant confirmations you can forward straight to their itinerary.',
    seoTitle: 'Travel Agent Partnerships — NZ Ground Transport Partner',
    seoDesc: 'Partner with Book A Ride NZ for client ground transport in New Zealand. Instant online quotes and confirmations, fixed commissions-friendly pricing, private airport, Hobbiton and cruise transfers for up to 11 passengers. Trusted by agents worldwide.',
    benefits: [
      { icon: Calendar, title: 'Book For Your Clients', text: 'Get a live quote and confirmed booking in 60 seconds — no phone tag, no waiting for email quotes.' },
      { icon: Mail, title: 'Itinerary-Ready Confirmations', text: 'Instant email confirmations with booking reference — forward straight into your client’s travel documents.' },
      { icon: CreditCard, title: 'Transparent Fixed Pricing', text: 'Exact prices up front in NZD makes packaging and margins simple. No surge, no surprises for your clients.' },
      { icon: Star, title: 'Premium Product', text: 'Private vehicles, professional drivers, meet & greet, flight tracking — a service you can put your name behind.' },
      { icon: Users, title: 'Groups & Tours', text: 'Up to 11 passengers per vehicle with luggage, multi-pickup routing, Hobbiton day transfers and cruise connections.' },
      { icon: Handshake, title: 'A Partner, Not a Vendor', text: 'Talk to us about volume and agency arrangements: partners@bookaride.co.nz — we look after the agents who look after us.' },
    ],
    ctaEmail: 'partners@bookaride.co.nz',
  },
}

const HOW = [
  { step: '01', title: 'Get an Instant Price', text: 'Enter pickup and drop-off in our booking system — your exact fixed price appears live.' },
  { step: '02', title: 'Book & Pay Securely', text: 'Secure Stripe checkout with instant email and SMS confirmation, from anywhere in the world.' },
  { step: '03', title: 'We Take Care of the Rest', text: 'Flight tracked, driver confirmed, door-to-door. Arrive relaxed.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

export default function AudienceLanding({ audience }) {
  const a = AUDIENCES[audience]
  const Icon = a.icon

  return (
    <div className="min-h-screen bg-white">
      <PageMeta title={a.seoTitle} description={a.seoDesc} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.18),transparent_55%)]" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-8">
                <Icon className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">{a.badge}</span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
            >
              {a.title1}
              <br />
              <span className="text-gold">{a.title2}</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl"
            >
              {a.subtitle}
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Book a Transfer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {a.ctaEmail && (
                <a
                  href={`mailto:${a.ctaEmail}`}
                  className="inline-flex items-center justify-center gap-2 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-8 rounded-xl border border-white/20 transition-all duration-200"
                >
                  <Mail className="w-5 h-5 text-gold" /> Partner With Us
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {a.benefits.map(({ icon: BIcon, title, text }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 3} variants={fadeUp}
                className="bg-white rounded-2xl p-8 border-2 border-gold/15 hover:border-gold transition-colors duration-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <BIcon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Booked in 60 Seconds</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {HOW.map(({ step, title, text }) => (
              <div key={step} className="text-center">
                <div className="text-gold font-bold text-5xl mb-4 opacity-40">{step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Exact Price Now</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Live pricing, fixed rates, instant confirmation — book online in 60 seconds from anywhere in the world.</p>
          <Link
            to="/book-now"
            className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Book Your Ride
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <BookingReassurance dark className="mt-10" />
        </div>
      </section>
    </div>
  )
}
