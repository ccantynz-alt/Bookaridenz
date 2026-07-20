import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Ship, Plane, Navigation, Clock, Luggage, Award, Check, Star } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'

const PICKUP_LOCATIONS = [
  {
    icon: Ship,
    title: 'Downtown Ferry Terminal',
    location: 'Auckland Ferry Terminal Building',
    description: 'Direct pickup from the cruise ship terminal',
    address: 'Queens Wharf, Auckland CBD',
  },
  {
    icon: Plane,
    title: 'Auckland International Airport',
    location: 'AKL International Terminal',
    description: 'Meet & greet at the arrivals hall',
    address: 'VIP pickup option available',
  },
  {
    icon: Navigation,
    title: 'Auckland Domestic Airport',
    location: 'AKL Domestic Terminal',
    description: 'Seamless connection to your cruise',
    address: 'Quick transfers to the cruise terminal',
  },
]

const FEATURES = [
  { icon: Clock, title: 'On-Time Guarantee', description: 'We track cruise schedules and flights to ensure timely pickups — no missed sailings.' },
  { icon: Luggage, title: 'Luggage Assistance', description: "Help with bags and cruise luggage — we've got you covered from door to gangway." },
  { icon: Award, title: 'Cruise Specialists', description: 'Experienced with cruise passenger transfers, tender days, and tight turnaround schedules.' },
]

const INCLUDED = [
  'Meet & greet service at all pickup points',
  'Real-time flight & cruise tracking',
  'Luggage assistance included',
  'Child seats available on request',
  'Comfortable, air-conditioned vehicles',
  'Professional, friendly drivers',
  'Flexible booking & cancellation',
  '24/7 customer support',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

export default function CruiseTransfers() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Cruise Ship Transfers Auckland — Port & Airport Shuttle"
        description="Professional cruise transfer service in Auckland. Private transfers between the cruise terminal, airport and hotels with luggage assistance and an on-time guarantee. Book online with instant pricing."
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury cruise ship in Auckland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Ship className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">Auckland Cruise Terminal Specialists</span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Cruise Ship
              <br />
              <span className="text-gold">Transfers</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-xl"
            >
              Stress-free transfers between Auckland Airport, your hotel, and the cruise terminal — timed to your sailing.
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Get Instant Price
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-8 rounded-xl border border-white/20 transition-all duration-200"
              >
                All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PICKUP LOCATIONS ────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pickup & Drop-off Points</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We connect every key point of your cruise journey — port, airports, and hotels across Auckland.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PICKUP_LOCATIONS.map(({ icon: Icon, title, location, description, address }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white rounded-2xl p-8 border-2 border-gold/20 hover:border-gold transition-colors duration-200 shadow-sm"
              >
                <Icon className="w-10 h-10 text-gold mb-5" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gold font-medium text-sm mb-3">{location}</p>
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-gray-400 text-sm">{address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL FLEET ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-gray-700 font-medium text-sm">Not a stock photo — that's our van</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">This Is Us, Dockside</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our 11-seater vans and luggage trailers meet ships at Auckland's cruise terminal every sailing season. Your driver is waiting when you disembark — no shuttle queues, no taxi lines with all your luggage.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Straight from the gangway to your hotel, the airport, or a day trip to Hobbiton before you sail.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/cruise-van-ship.jpg"
                alt="Book A Ride van and luggage trailer at the Auckland cruise ship terminal"
                className="rounded-3xl shadow-2xl w-full h-[420px] object-cover border-4 border-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built Around Your Sailing</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Cruise timetables are unforgiving. Our service is designed so you board relaxed, every time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {FEATURES.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center px-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Every Cruise Transfer Includes</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/85">
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready for a Smooth Start to Your Cruise?</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">Get your exact price now — live pricing, fixed rates, and instant confirmation by email and SMS.</p>
          <Link
            to="/book-now"
            className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Book Your Cruise Transfer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <BookingReassurance className="mt-10" />
        </div>
      </section>
    </div>
  )
}
