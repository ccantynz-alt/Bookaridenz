import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.bookaridenz.com'
const SITE_NAME = 'Book A Ride NZ'
const LANGS = ['en', 'zh', 'ja', 'ko', 'es', 'fr']

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page SEO: title, description, canonical, Open Graph and hreflang
 * alternates for every supported language.
 */
export default function PageMeta({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Premium Airport Transfers & Shuttle Services`
    const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`

    document.title = fullTitle
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:url', url)
    setLink('canonical', url)

    // hreflang alternates for international SEO
    setLink('alternate', url, 'x-default')
    LANGS.forEach((lng) => {
      setLink('alternate', lng === 'en' ? url : `${url}?lang=${lng}`, lng)
    })
  }, [title, description, pathname])

  return null
}
