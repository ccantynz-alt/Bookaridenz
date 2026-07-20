import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import api from '../lib/api'

/**
 * Live Google reviews via the shared booking platform API.
 * Renders nothing until real reviews load — no fake social proof.
 */
export default function GoogleReviews({ dark = false }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let mounted = true
    api.get('/google-reviews')
      .then((res) => { if (mounted && res.data?.reviews?.length) setData(res.data) })
      .catch(() => {})
    return () => { mounted = false }
  }, [])

  if (!data) return null

  const rating = Number(data.rating || 5).toFixed(1)
  const reviews = data.reviews.slice(0, 6)

  return (
    <section className={`py-24 ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className={`text-5xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{rating}</span>
            <div className="text-left">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
              </div>
              <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}>Google Reviews</p>
            </div>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
            Rated by Real Travellers
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${dark ? 'text-white/60' : 'text-gray-600'}`}>
            Live from Google — what our passengers say after the ride.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.45 }}
              className={`rounded-2xl p-7 border-2 ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gold/15'} `}
            >
              <Quote className="w-7 h-7 text-gold/40 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(Math.round(r.rating || 5))].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className={`leading-relaxed mb-4 text-[15px] ${dark ? 'text-white/80' : 'text-gray-600'}`}>
                {(r.text || '').length > 220 ? `${r.text.slice(0, 220)}…` : r.text}
              </p>
              <p className={`font-semibold text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>{r.author_name || r.author || 'Verified customer'}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
