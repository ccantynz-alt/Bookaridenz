import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Calendar, ArrowRight, MessageCircle } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta title="Contact" description="Get in touch with Book A Ride NZ. Book online 24/7 with instant pricing, or email us — we respond fast, every day of the year." />

      {/* ── HERO BAND ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-8">
                <MessageCircle className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">We Respond Fast — Every Day of the Year</span>
              </div>
            </motion.div>
            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
            >
              Let's Get You
              <br />
              <span className="text-gold">Moving</span>
            </motion.h1>
            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl"
            >
              The fastest answer to almost every question — dates, prices, availability — is the booking system. For everything else, email us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ───────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to="/book-now"
                className="block h-full bg-gray-900 rounded-3xl p-10 border-2 border-gold/40 hover:border-gold transition-all duration-200 shadow-lg hover:shadow-2xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Book Online 24/7</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Live pricing, instant confirmation by email and SMS, secure Stripe checkout — the whole thing takes 60 seconds.
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  Get an instant price <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <a
                href="mailto:info@bookaride.co.nz"
                className="block h-full bg-white rounded-3xl p-10 border-2 border-gold/20 hover:border-gold transition-all duration-200 shadow-sm hover:shadow-xl group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Questions about an existing booking, group travel, or a special request? Include your booking reference if you have one.
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  info@bookaride.co.nz <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100">
              <MapPin className="w-6 h-6 text-gold shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Auckland, New Zealand</h3>
                <p className="text-gray-500 text-sm">Serving the greater Auckland region, Hobbiton & the cruise terminal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100">
              <Clock className="w-6 h-6 text-gold shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">24/7 — We Never Sleep</h3>
                <p className="text-gray-500 text-sm">Early flights, late arrivals, public holidays — always on</p>
              </div>
            </div>
          </div>

          <BookingReassurance className="mt-12" />
        </div>
      </section>
    </div>
  )
}
