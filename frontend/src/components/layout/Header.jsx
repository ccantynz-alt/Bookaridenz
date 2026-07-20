import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn'
import LanguageSelector from '../LanguageSelector'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const NAV_LINKS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.hobbiton'), path: '/hobbiton-transfers' },
    { label: t('nav.cruise'), path: '/cruise-transfers' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pages that have dark hero backgrounds get transparent header
  const isHeroPage = location.pathname === '/'
  const isTransparent = isHeroPage && !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      )}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src="/logo.png"
              alt="Book A Ride NZ"
              className={cn(
                'h-12 w-auto transform group-hover:scale-105 transition-all duration-300',
                isTransparent
                  ? 'brightness-[1.8] contrast-[1.3] saturate-[1.2] drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]'
                  : ''
              )}
              style={isTransparent ? { filter: 'brightness(1.8) contrast(1.3) saturate(1.2) drop-shadow(0 2px 8px rgba(212,175,55,0.4))' } : undefined}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
                  location.pathname === link.path
                    ? isTransparent
                      ? 'text-gold'
                      : 'text-gold'
                    : isTransparent
                      ? 'text-white/90 hover:text-gold'
                      : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-200',
                    location.pathname === link.path ? 'w-3/4' : 'w-0'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSelector light={isTransparent} />
            <Link
              to="/book-now"
              className="bg-gold hover:bg-gold-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t('nav.bookRide')}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-all duration-200',
              isTransparent
                ? 'text-white bg-white/10 hover:bg-white/20'
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 border-t border-gray-200 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                  location.pathname === link.path
                    ? 'text-gold bg-gold/5'
                    : 'text-gray-700 hover:text-gold hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-2 py-1">
              <LanguageSelector />
            </div>
            <Link
              to="/book-now"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-gold hover:bg-gold-500 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200 mt-2"
            >
              {t('nav.bookRide')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
