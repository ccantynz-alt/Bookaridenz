import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Plane, Globe, CreditCard, Users, Luggage, Clock, Check } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import GoogleReviews from '../GoogleReviews'

import { COUNTRIES } from '../../data/countries'
export { COUNTRIES }
const SHARED = [
  { icon: Globe, title: 'Six Languages', text: 'Book in English, 中文, 日本語, 한국어, Español or Français — the whole site speaks your language.' },
  { icon: Plane, title: 'Flight Tracking', text: 'We watch your flight from departure to touchdown. Delayed? Your driver already knows.' },
  { icon: CreditCard, title: 'Fixed Prices, Paid Online', text: 'Your exact price in NZD before you fly, paid securely by card. No meters, no cash, no surprises.' },
  { icon: Users, title: 'Up to 11 Passengers', text: 'One vehicle, one price for the whole family or group — cheaper and easier than multiple taxis.' },
  { icon: Luggage, title: 'All Your Luggage', text: 'Big trips mean big bags. Skis, golf clubs, surfboards — our vans and trailers take it all.' },
  { icon: Clock, title: '24/7 Arrivals', text: 'Red-eye landings and dawn departures — we operate around the clock, every day of the year.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

export default function CountryLanding({ country }) {
  const c = COUNTRIES[country]

  return (
    <div className="min-h-screen bg-white">
      <PageMeta title={c.seoTitle} description={c.seoDesc} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={c.image} alt={c.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.15),transparent_55%)]" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-8">
                <span className="text-lg leading-none">{c.flag}</span>
                <span className="text-white/90 font-medium text-sm">Welcoming Travellers From {c.name}</span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              {c.title1}
              <br />
              <span className="text-gold">{c.title2}</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl"
            >
              {c.subtitle}
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Book Before You Fly
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="space-y-2.5">
              {c.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-white/75 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>{p}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SHARED BENEFITS ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Made for International Arrivals</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Private shuttle and airport shuttle in one — built around long-haul travel.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHARED.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 3} variants={fadeUp}
                className="bg-white rounded-2xl p-8 border-2 border-gold/15 hover:border-gold transition-colors duration-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Your New Zealand Trip Starts at the Airport Door</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Get your exact price in 60 seconds — fixed rate, instant confirmation, driver waiting at arrivals.</p>
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
