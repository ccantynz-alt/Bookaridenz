import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Plane, Globe, CreditCard, Users, Luggage, Clock, Check } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import GoogleReviews from '../GoogleReviews'

export const COUNTRIES = {
  australia: {
    flag: '🇦🇺', name: 'Australia',
    title1: 'Flying From Australia', title2: 'to New Zealand?',
    subtitle: "It's a short hop across the Tasman — make the Auckland end just as easy. Your private transfer is booked before you finish your coffee.",
    seoTitle: 'Australia to New Zealand — Auckland Airport Transfers',
    seoDesc: 'Flying from Sydney, Melbourne or Brisbane to Auckland? Pre-book your private airport transfer online in 60 seconds. AUD-friendly payment, fixed prices, flight tracking, door-to-door across Auckland.',
    points: ['Pay securely online — AUD cards welcome', 'Flight-tracked pickup for trans-Tasman arrivals', 'Perfect for family holidays & ski trips — up to 11 seats', 'Hobbiton day trips — the thing you crossed the ditch for'],
  },
  china: {
    flag: '🇨🇳', name: 'China',
    title1: '从中国飞往新西兰?', title2: 'Flying From China?',
    subtitle: '用中文在线预订您的奥克兰机场专车接送 — 固定价格，航班追踪，全程门到门。Book your Auckland transfer in Chinese before you fly.',
    seoTitle: 'China to New Zealand — 奥克兰机场接送 Auckland Airport Transfers',
    seoDesc: '从中国直飞奥克兰？提前在线预订私人机场接送，全中文界面，60秒完成。固定价格、航班追踪、门到门服务。Private Auckland airport transfers for travellers from China — book online in Chinese.',
    points: ['网站与预订全程中文支持 — full Chinese booking experience', 'UnionPay-network & CNY-friendly card payment via Stripe', 'Flight tracking for long-haul arrivals — driver waits if delayed', 'Group & family vans up to 11 passengers with all your luggage'],
  },
  japan: {
    flag: '🇯🇵', name: 'Japan',
    title1: '日本からニュージーランドへ?', title2: 'Flying From Japan?',
    subtitle: '日本語でオークランド空港送迎を事前予約。固定料金、フライト追跡、ドア・ツー・ドア。Book your Auckland transfer in Japanese before departure.',
    seoTitle: 'Japan to New Zealand — オークランド空港送迎 Auckland Transfers',
    seoDesc: '日本からオークランドへ？日本語で私営空港送迎を60秒でオンライン予約。固定料金、フライト追跡、ドア・ツー・ドアサービス。Private Auckland airport transfers for travellers from Japan.',
    points: ['サイトも予約も日本語対応 — full Japanese booking experience', 'JPY-friendly secure card payment via Stripe', 'On-time culture meets on-time service — flight-tracked pickups', 'Hobbiton Movie Set day trips — direct from your hotel'],
  },
  'south-korea': {
    flag: '🇰🇷', name: 'South Korea',
    title1: '한국에서 뉴질랜드로?', title2: 'Flying From Korea?',
    subtitle: '한국어로 오클랜드 공항 픽업을 미리 예약하세요. 고정 요금, 항공편 추적, 도어 투 도어. Book your Auckland transfer in Korean before you fly.',
    seoTitle: 'Korea to New Zealand — 오클랜드 공항 픽업 Auckland Transfers',
    seoDesc: '한국에서 오클랜드로? 한국어로 60초 만에 프라이빗 공항 픽업 예약. 고정 요금, 항공편 추적, 도어 투 도어 서비스. Private Auckland airport transfers for travellers from South Korea.',
    points: ['한국어 예약 지원 — full Korean booking experience', 'Secure international card payment via Stripe', 'Flight-tracked pickup — no waiting after a long-haul flight', 'Popular with working-holiday makers & study-abroad students'],
  },
  singapore: {
    flag: '🇸🇬', name: 'Singapore',
    title1: 'Flying From Singapore', title2: 'to New Zealand?',
    subtitle: 'Direct flights land in Auckland daily — have a private transfer waiting at arrivals, booked online before you leave Changi.',
    seoTitle: 'Singapore to New Zealand — Auckland Airport Transfers',
    seoDesc: 'Flying Singapore to Auckland? Pre-book a private airport transfer online in 60 seconds. Fixed prices, flight tracking, meet & greet, door-to-door across Auckland — plus Hobbiton and cruise connections.',
    points: ['Book in 60 seconds from Singapore — instant confirmation', 'Fixed NZD prices — no surprises on arrival', 'Meet & greet at Auckland arrivals with flight tracking', 'Family & group vans up to 11 with all the shopping'],
  },
  usa: {
    flag: '🇺🇸', name: 'United States',
    title1: 'Flying From the USA', title2: 'to New Zealand?',
    subtitle: "After 13 hours over the Pacific, the last thing you want is a taxi line. Your private driver is waiting at Auckland arrivals — booked from home in 60 seconds.",
    seoTitle: 'USA to New Zealand — Auckland Airport Transfers',
    seoDesc: 'Flying from Los Angeles, San Francisco, Dallas, Houston, Chicago or New York to Auckland? Pre-book a private airport transfer online. USD-friendly payment, fixed prices, flight tracking, meet & greet.',
    points: ['USD cards welcome — pay securely online before you fly', 'Flight-tracked pickup after your long-haul — driver waits if delayed', 'Middle-earth made easy — private Hobbiton Movie Set day trips', 'Cruise connections — ship to airport to hotel, seamlessly'],
  },
  uk: {
    flag: '🇬🇧', name: 'United Kingdom',
    title1: 'Flying From the UK', title2: 'to New Zealand?',
    subtitle: "It's the longest trip you'll ever take — end it the easy way. A private driver at Auckland arrivals, booked from the UK in 60 seconds.",
    seoTitle: 'UK to New Zealand — Auckland Airport Transfers',
    seoDesc: 'Flying from London or Manchester to Auckland? Pre-book your private airport transfer online. GBP-friendly payment, fixed prices, flight tracking, meet & greet, door-to-door across Auckland.',
    points: ['GBP cards welcome — locked-in price, no exchange-rate lottery', 'Meet & greet after the world\'s longest journey — driver tracks your flight', 'Visiting family, touring, or emigrating — vans fit your whole life', 'Hobbiton, cruises & airport runs — one trusted operator'],
  },
  germany: {
    flag: '🇩🇪', name: 'Germany',
    title1: 'Flying From Germany', title2: 'to New Zealand?',
    subtitle: 'New Zealand is the adventure of a lifetime — start it with German-grade punctuality. Your private transfer, confirmed before you leave home.',
    seoTitle: 'Germany to New Zealand — Auckland Airport Transfers',
    seoDesc: 'Flying from Frankfurt or Munich to Auckland? Pre-book a private airport transfer online in 60 seconds. EUR-friendly payment, fixed prices, flight tracking, door-to-door — for backpackers, campers and families.',
    points: ['EUR cards welcome — fixed price locked at booking', 'Punctual, flight-tracked pickups — every time', 'Backpacker & camper friendly — oversized luggage no problem', 'Simple English booking with instant email confirmation'],
  },
  france: {
    flag: '🇫🇷', name: 'France',
    title1: 'Vous arrivez de France', title2: 'en Nouvelle-Zélande?',
    subtitle: 'Réservez votre transfert privé depuis l\'aéroport d\'Auckland en français, avant même de décoller. Prix fixe, suivi de vol, porte à porte.',
    seoTitle: 'France to New Zealand — Transferts Aéroport Auckland',
    seoDesc: 'Vol de Paris vers Auckland ? Réservez votre transfert aéroport privé en ligne en 60 secondes, en français. Paiement EUR, prix fixes, suivi de vol, service porte à porte — plus Hobbiton et croisières.',
    points: ['Site et réservation en français — full French booking experience', 'EUR cards welcome — paiement sécurisé Stripe', 'Suivi de vol inclus — votre chauffeur vous attend', 'Excursions à Hobbiton et transferts croisière porte à porte'],
  },
}

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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.18),transparent_55%)]" />
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
