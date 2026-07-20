import { Outlet, useLocation, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  // Pages with full-bleed hero sections that extend behind the transparent header
  const isHeroPage = location.pathname === '/'
  // No sticky CTA where the user is already booking
  const showStickyCta = !location.pathname.startsWith('/book-now') && !location.pathname.startsWith('/admin')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 ${isHeroPage ? '' : 'pt-[76px]'}`}>
        <Outlet />
      </main>
      <Footer />

      {/* Sticky mobile booking bar — always one tap from a live price */}
      {showStickyCta && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gray-900/95 backdrop-blur-md border-t border-gold/30 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
          <Link
            to="/book-now"
            className="flex items-center justify-center gap-2 h-12 bg-gold hover:bg-gold-500 text-white font-bold text-base rounded-xl transition-all"
          >
            Get Instant Price — Book in 60s
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  )
}
