import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Car, Ship, MapPin, Check, Globe, GraduationCap, Briefcase, Stethoscope, Handshake, Star } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import GoogleReviews from '../GoogleReviews'

const SERVICES = [
  {
    icon: Car,
    image: '/images/fleet-van.jpg',
    imageAlt: 'Book A Ride NZ modern Toyota Hiace passenger van',
    badge: 'Most Popular',
    title: 'Private Airport Transfer',
    desc: 'Direct door-to-door service in a private vehicle. Your driver tracks your flight and waits with a name board. Perfect for families, business travellers, and groups up to 11.',
    features: ['Door-to-door service', 'Flight tracking included', 'Meet & greet at arrivals', 'Child seats available', 'Free cancellation (24h)'],
    path: '/book-now',
    cta: 'Get Instant Price',
  },
  {
    icon: Ship,
    image: '/images/cruise-van-ship.jpg',
    imageAlt: 'Book A Ride van and luggage trailer at the Auckland cruise terminal',
    badge: 'Cruise Season Favourite',
    title: 'Cruise Ship Transfers',
    desc: 'Reliable transfers to and from Auckland cruise terminal at Princes Wharf. All cruise lines, all ship sizes — with luggage trailers for the big trips.',
    features: ['Princes Wharf terminal', 'All cruise lines welcome', 'Ship arrival tracking', 'Luggage assistance', 'Flexible scheduling'],
    path: '/cruise-transfers',
    cta: 'Explore Cruise Transfers',
  },
  {
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1584956861988-913b8c1c7270?auto=compress&cs=tinysrgb&w=1200&q=80',
    imageAlt: 'Hobbiton Movie Set in Matamata',
    badge: 'The Middle-earth Experience',
    title: 'Hobbiton Day Trip',
    desc: 'Return transfers from Auckland to the world-famous Hobbiton Movie Set in Matamata — on your schedule, not a bus timetable. A magical day for the whole family.',
    features: ['Return transfers included', 'Timed to your tour slot', 'Photo stops on request', 'Driver waits for you', 'One fixed price per vehicle'],
    path: '/hobbiton-transfers',
    cta: 'Explore Hobbiton Transfers',
  },
]

const AUDIENCES = [
  { icon: Globe, label: 'International Visitors', path: '/international-visitors' },
  { icon: GraduationCap, label: 'Students', path: '/student-transfers' },
  { icon: Briefcase, label: 'Business Travellers', path: '/corporate-transfers' },
  { icon: Stethoscope, label: 'Healthcare Professionals', path: '/medical-professionals' },
  { icon: Handshake, label: 'Travel Agents', path: '/travel-agents' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

export default function Services() {
  return (
    <div className="min-h-[calc(100vh-88px)] bg-white">
      <PageMeta title="Airport Transfer Services Auckland" description="Private airport shuttles, Hobbiton Movie Set tours, cruise terminal transfers and group transport across Auckland. Fixed prices, flight tracking, book online in 60 seconds." />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-6">
              Premium private transfers across Auckland. Get an instant online quote — no obligation.
            </p>
            <BookingReassurance />
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white rounded-3xl border-2 border-gray-100 hover:border-gold/40 hover:shadow-2xl transition-all duration-300 overflow-hidden grid md:grid-cols-[2fr,3fr]"
              >
                <div className="relative min-h-[260px]">
                  <img src={s.image} alt={s.imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-gold text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-gold" /> {s.badge}
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>

                  <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={s.path}
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gold/30 px-10 py-10 max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Not sure which service you need?</h3>
              <p className="text-gray-400 mb-6">Our booking form calculates your price instantly based on your route. Just enter your addresses and we'll do the rest.</p>
              <Link
                to="/book-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
              >
                Book Now — Get Instant Price <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 bg-gray-900">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Built for Every Traveller to New Zealand</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Whatever brings you here — study, business, a new job, or the trip of a lifetime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {AUDIENCES.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-gold/20 border border-white/15 hover:border-gold/50 text-white/85 hover:text-white px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <Icon className="w-5 h-5 text-gold" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
    </div>
  )
}
