import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Users, Car, Check, X, Star, Award, Wifi, Baby, Luggage, Camera, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import GoogleReviews from '../GoogleReviews'

const COMPARISON = [
  { us: 'Leave when it suits you — timed to your tour slot', them: 'Fixed early-morning departure, one timetable for everyone' },
  { us: 'Door-to-door from anywhere in Auckland — hotel, airport, cruise terminal', them: 'Central-city meeting points only' },
  { us: 'Private vehicle for just your group (1–11 passengers)', them: 'Shared coach with up to 50 strangers' },
  { us: 'One fixed price per vehicle — unbeatable for families & groups', them: 'Per-person tickets that multiply fast' },
  { us: 'Photo stops across the Waikato on request', them: 'No unscheduled stops' },
  { us: 'Stay longer at the Green Dragon — your driver waits', them: 'Strict departure time, tour over when the bus leaves' },
]

const JOURNEY = [
  { time: 'Your door', title: 'Private Pickup', description: 'Your driver collects you anywhere in Auckland — hotel, home, airport arrivals, or the cruise terminal — at the time you choose.' },
  { time: '~2 hrs', title: 'Scenic Waikato Drive', description: 'Relax through rolling green farmland with Wi-Fi, bottled water, and photo stops whenever you like.' },
  { time: '2 hrs', title: 'Hobbiton Movie Set Tour', description: 'Your guided tour of the 12-acre set — 44 hobbit holes, the Mill, and a free drink at the Green Dragon Inn. We time your transfer perfectly to your ticket slot.' },
  { time: 'Whenever', title: 'Return in Comfort', description: 'No bus to catch. Browse the gift shop, linger over photos — your driver leaves when you do, straight back to your door.' },
]

const INCLUDED = [
  'Private air-conditioned vehicle & professional driver',
  'Door-to-door pickup anywhere in Auckland',
  'Timed to your Hobbiton tour booking',
  'Free Wi-Fi & bottled water on board',
  'Photo stops on request',
  'Child seats available on request',
  'Luggage welcome — ideal before/after flights & cruises',
  'Flight & cruise tracking for same-day connections',
]

const FAQS = [
  { q: 'How far is Hobbiton from Auckland?', a: 'The Hobbiton Movie Set is in Matamata, about 175km south of Auckland — roughly a 2-hour drive each way through the Waikato countryside. We recommend allowing 7–8 hours door-to-door for the full experience.' },
  { q: 'Are Hobbiton entry tickets included?', a: 'Your official Hobbiton Movie Set tour ticket is booked separately through Hobbiton Tours — we time your private transfer perfectly to the tour slot you choose. Tell us your tour time and we handle the rest.' },
  { q: 'Can you pick us up from the airport or cruise ship?', a: 'Yes — this is our specialty. We track your flight or ship arrival and can take you (and your luggage) to Hobbiton and on to your accommodation afterwards. Perfect for making the most of a stopover or port day.' },
  { q: 'How much does it cost for a group?', a: 'You pay per vehicle, not per person — so a family or group of up to 11 often pays far less in total than per-person coach tour tickets. Get your exact price in 60 seconds with our online calculator.' },
  { q: 'What if my tour runs late?', a: "No stress — your driver waits for you. There's no bus timetable, no strict departure. The vehicle is yours for the day." },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</div>}
    </div>
  )
}

export default function HobbitonTransfers() {
  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Hobbiton Private Transfers from Auckland — Better Than a Bus Tour"
        description="Private door-to-door Hobbiton Movie Set transfers from Auckland, your hotel, airport or cruise ship. Your schedule, your vehicle (up to 11), one fixed price per vehicle. Timed perfectly to your tour — book online in 60 seconds."
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584956861988-913b8c1c7270?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Hobbiton Movie Set — iconic hobbit hole with round green door"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.18),transparent_55%)]" />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full px-4 py-2 mb-8">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-white/90 font-medium text-sm">The Flexible Alternative to Coach Tours</span>
              </div>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" custom={1} variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
            >
              Hobbiton,
              <br />
              <span className="text-gold">On Your Schedule</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={2} variants={fadeUp}
              className="text-xl sm:text-2xl text-white/85 mb-10 leading-relaxed max-w-xl"
            >
              Skip the tour bus. Private door-to-door transfers from Auckland, your hotel, the airport or your cruise ship — timed perfectly to your Hobbiton Movie Set tour.
            </motion.p>

            <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Get Your Price in 60 Seconds
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              {[
                { icon: Users, label: 'Private — up to 11 passengers' },
                { icon: Clock, label: 'Any departure time' },
                { icon: Camera, label: 'Photo stops included' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gold" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Travellers Choose Us Over the Bus</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Coach day tours charge per person and run on their timetable. We run on yours.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-gold/30 overflow-hidden shadow-lg">
            <div className="grid grid-cols-2 bg-gray-900 text-center">
              <div className="py-5 px-4">
                <span className="text-gold font-bold text-sm sm:text-base">✨ Book A Ride NZ Private Transfer</span>
              </div>
              <div className="py-5 px-4 border-l border-white/10">
                <span className="text-white/60 font-semibold text-sm sm:text-base">Typical Coach Day Tour</span>
              </div>
            </div>
            {COMPARISON.map(({ us, them }, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="flex items-start gap-3 py-4 px-4 sm:px-6">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base">{us}</span>
                </div>
                <div className="flex items-start gap-3 py-4 px-4 sm:px-6 border-l border-gray-100">
                  <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{them}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR DAY, HOUR BY HOUR ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Day in Middle-earth</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From your door to the Shire and back — here's how the day flows.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {JOURNEY.map(({ time, title, description }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {i < JOURNEY.length - 1 && <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-gold/20" />}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gray-900 border-2 border-gold flex items-center justify-center">
                  <span className="text-gold font-bold text-[11px] text-center leading-tight px-1">{time}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
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

      {/* ── LIVE GOOGLE REVIEWS ─────────────────────────────── */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Good to Know</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">The Shire Is Waiting</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">One fixed price per vehicle. Instant confirmation. No bus timetables. Get your exact price now.</p>
          <Link
            to="/book-now"
            className="inline-flex items-center justify-center gap-3 h-14 bg-gold hover:bg-gold-500 text-white font-semibold text-lg px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Book Your Hobbiton Transfer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <BookingReassurance dark className="mt-10" />
        </div>
      </section>
    </div>
  )
}
