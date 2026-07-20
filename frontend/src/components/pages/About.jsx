import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Clock, Heart, Star } from 'lucide-react'
import PageMeta from '../PageMeta'
import GoogleReviews from '../GoogleReviews'
import BookingReassurance from '../BookingReassurance'

const VALUES = [
  { icon: Shield, title: 'Licensed & Insured', desc: 'Every driver fully licensed, every vehicle commercially insured. Your safety is non-negotiable.' },
  { icon: Award, title: '4.9-Star Rated', desc: 'Over 15,000 satisfied customers and a 4.9 Google rating — earned one ride at a time.' },
  { icon: Clock, title: 'Always On Time', desc: "We track your flight and adjust automatically if it's delayed. No extra charge, no stress." },
  { icon: Heart, title: 'Proudly Kiwi', desc: 'A locally owned New Zealand business, based right here in Auckland.' },
]

const STATS = [
  { value: '15,000+', label: 'Happy Customers' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '24/7', label: 'Every Day of the Year' },
  { value: '11', label: 'Seats per Vehicle' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta title="About Us" description="Book A Ride NZ is Auckland's trusted private transfer service — professional drivers, premium vehicles, and thousands of happy customers from New Zealand and around the world." />

      {/* ── HERO BAND ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-8">
                <Heart className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">Locally Owned · Globally Trusted</span>
              </div>
            </motion.div>
            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
            >
              The Ride Behind
              <br />
              <span className="text-gold">Every Great Trip</span>
            </motion.h1>
            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl"
            >
              Private shuttle and airport shuttle in one — door-to-door across Auckland, for travellers from every corner of the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-gray-900 border-t border-white/10 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-center">
                <div className="text-gold font-bold text-3xl mb-1">{value}</div>
                <div className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY + FLEET PHOTO ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Auckland's Transfer Specialists</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                BookARide provides reliable, comfortable door-to-door transport between Auckland Airport and anywhere in the greater Auckland region — plus the journeys that make a New Zealand trip special: the Hobbiton Movie Set and the cruise terminal.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're catching a flight, arriving from the other side of the world, starting university, or heading to your ship — your driver, your vehicle, your schedule.
              </p>
              <Link to="/book-now" className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:gap-3 transition-all">
                Book your ride <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <img
              src="/images/fleet-van.jpg"
              alt="Book A Ride NZ modern Toyota Hiace high-roof passenger van"
              className="rounded-3xl shadow-2xl w-full h-[420px] object-cover border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white rounded-2xl p-8 border-2 border-gold/15 hover:border-gold transition-colors duration-200 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews dark={false} />

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience the Difference</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Get your exact price in 60 seconds — fixed rate, instant confirmation, driver at your door.</p>
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
