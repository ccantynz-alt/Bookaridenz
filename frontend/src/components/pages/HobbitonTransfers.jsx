import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Users, Car, Check, Star, Award } from 'lucide-react'
import PageMeta from '../PageMeta'

const HIGHLIGHTS = [
  { icon: MapPin, title: 'Direct Transfer', description: 'Door-to-door service from Auckland to the Hobbiton Movie Set in Matamata — a 175km scenic drive.' },
  { icon: Clock, title: 'Flexible Timing', description: 'Choose your preferred pickup time to match your tour booking. Return trips available.' },
  { icon: Users, title: 'Group Friendly', description: 'Perfect for families, groups, or solo travellers — up to 11 passengers per vehicle.' },
  { icon: Car, title: 'Premium Comfort', description: 'Clean, comfortable, air-conditioned vehicles for the journey through Waikato countryside.' },
]

const INCLUDED = [
  'Professional, experienced drivers',
  'Real-time flight monitoring',
  'Complimentary bottled water',
  'Free Wi-Fi on board',
  'Child seats available on request',
  'Luggage assistance included',
  'Flexible cancellation policy',
  '24/7 customer support',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

export default function HobbitonTransfers() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Hobbiton Movie Set Transfers from Auckland"
        description="Private transfers from Auckland to the Hobbiton Movie Set in Matamata. Door-to-door service timed to your tour, up to 11 passengers, instant online pricing. The easy way to visit Middle-earth."
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1920&q=80"
            alt="Hobbiton Movie Set — iconic hobbit hole with round green door"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">Auckland → Matamata · Timed for Your Tour</span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Hobbiton
              <br />
              <span className="text-gold">Movie Set Transfers</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed max-w-xl"
            >
              Travel to Middle-earth in comfort. Private door-to-door transfers from Auckland, perfectly timed to your Hobbiton tour.
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

      {/* ── HIGHLIGHTS ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The Easy Way to Visit Hobbiton</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">No rental cars, no tour-bus timetables — just your own vehicle, your own schedule.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white rounded-2xl p-8 border-2 border-gold/20 hover:border-gold transition-colors duration-200 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Every Hobbiton Transfer Includes</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Hobbiton Adventure Starts at Your Door</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">Get your exact price now — live pricing, fixed rates, and instant confirmation by email and SMS.</p>
          <Link
            to="/book-now"
            className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Book Your Hobbiton Transfer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
