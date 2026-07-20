import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Globe, LayoutGrid, Search } from 'lucide-react'
import { useState } from 'react'
import { COUNTRIES } from '../CountryLanding'

const CORE_PAGES = [
  { path: '/', title: 'Homepage', desc: 'Hero, fleet, services, reviews, dual shuttle positioning', group: 'Core' },
  { path: '/book-now', title: 'Booking System', desc: 'Live pricing calculator — shared bookaride.co.nz engine', group: 'Core' },
  { path: '/services', title: 'Services', desc: 'Image cards for every service + audiences strip', group: 'Core' },
  { path: '/hobbiton-transfers', title: 'Hobbiton Transfers', desc: 'Private-vs-coach comparison, journey timeline, FAQ', group: 'Core' },
  { path: '/cruise-transfers', title: 'Cruise Transfers', desc: 'Terminal pickups, real dockside fleet photo', group: 'Core' },
  { path: '/about', title: 'About', desc: 'Story, stats, values, live Google reviews', group: 'Core' },
  { path: '/contact', title: 'Contact', desc: 'Book-online-first contact page', group: 'Core' },
]

const AUDIENCE_PAGES = [
  { path: '/international-visitors', title: 'International Visitors', desc: 'Six languages, flight tracking, fixed NZD prices', group: 'Audiences' },
  { path: '/student-transfers', title: 'Students', desc: 'Parents book from overseas, campus drop-offs', group: 'Audiences' },
  { path: '/corporate-transfers', title: 'Business Travellers', desc: 'On-time guarantee, expense-ready receipts', group: 'Audiences' },
  { path: '/medical-professionals', title: 'Healthcare Professionals', desc: '24/7 shifts, hospital drop-offs, relocations', group: 'Audiences' },
  { path: '/travel-agents', title: 'Travel Agents', desc: 'Partnership pitch, itinerary-ready confirmations', group: 'Audiences' },
]

const COUNTRY_PAGES = Object.entries(COUNTRIES).map(([slug, c]) => ({
  path: `/from/${slug}`,
  title: `${c.flag} From ${c.name}`,
  desc: c.seoTitle,
  group: 'Countries',
}))

const ALL_PAGES = [...CORE_PAGES, ...AUDIENCE_PAGES, ...COUNTRY_PAGES]
const GROUPS = ['Core', 'Audiences', 'Countries']

export default function AdminPages() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const q = query.toLowerCase()
  const visible = ALL_PAGES.filter(
    (p) => !q || p.title.toLowerCase().includes(q) || p.path.includes(q) || p.desc.toLowerCase().includes(q)
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-gray-900/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="w-5 h-5 text-gold" />
              <h1 className="font-bold text-lg">Marketing Pages</h1>
              <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                {ALL_PAGES.length} live pages
              </span>
            </div>
          </div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter pages…"
              className="w-64 h-10 bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold/60"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {GROUPS.map((group) => {
          const pages = visible.filter((p) => p.group === group)
          if (!pages.length) return null
          return (
            <section key={group} className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gold/80 mb-5 flex items-center gap-2">
                {group === 'Countries' && <Globe className="w-4 h-4" />}
                {group}
                <span className="text-white/30 font-medium normal-case tracking-normal">· {pages.length}</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((p) => (
                  <div
                    key={p.path}
                    className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-gold/50 rounded-2xl p-5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-white leading-snug">{p.title}</h3>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Link
                          to={p.path}
                          className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-black border border-white/10 transition-colors"
                          title="Open in this tab"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                        </Link>
                        <a
                          href={p.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-gold hover:text-black border border-white/10 transition-colors"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{p.desc}</p>
                    <code className="text-xs text-gold/70">{p.path}</code>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
