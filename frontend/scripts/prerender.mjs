// Post-build SEO snapshot generator.
//
// Vite outputs a single dist/index.html whose <head> carries the home-page
// meta for every route — invisible to crawlers that don't execute JS
// (Baidu, Naver, Bing partially, social link previews, AI crawlers).
// This script writes dist/<route>/index.html per marketing route with the
// correct title, description, canonical, Open Graph and hreflang tags.
// Vercel serves static files before applying the SPA rewrite, so each URL
// gets its own crawlable HTML while the React app still hydrates normally.
// It also generates dist/sitemap.xml from the same manifest.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTES } from '../src/data/routes.js'

const SITE_URL = 'https://bookaridenz.com'
const SITE_NAME = 'Book A Ride NZ'
const DEFAULT_TITLE = `${SITE_NAME} — Premium Airport Transfers & Shuttle Services`
const LANGS = ['en', 'zh', 'ja', 'ko', 'es', 'fr']

const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')
const template = readFileSync(path.join(distDir, 'index.html'), 'utf8')

const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function renderRoute({ path: routePath, title, desc }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const url = `${SITE_URL}${routePath === '/' ? '' : routePath}`

  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(fullTitle)}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escAttr(desc)}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escAttr(fullTitle)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escAttr(desc)}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escAttr(fullTitle)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escAttr(desc)}$2`)

  const hreflangs = [
    `    <link rel="alternate" hreflang="x-default" href="${url}" />`,
    ...LANGS.map((lng) =>
      `    <link rel="alternate" hreflang="${lng}" href="${lng === 'en' ? url : `${url}?lang=${lng}`}" />`),
  ].join('\n')
  html = html.replace('</head>', `${hreflangs}\n  </head>`)

  const outDir = routePath === '/' ? distDir : path.join(distDir, ...routePath.split('/').filter(Boolean))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), html)
}

function renderSitemap() {
  const today = new Date().toISOString().slice(0, 10)
  const urls = ROUTES.map(({ path: routePath, priority, changefreq }) => {
    const url = `${SITE_URL}${routePath === '/' ? '/' : routePath}`
    const alts = [
      ...LANGS.map((lng) =>
        `    <xhtml:link rel="alternate" hreflang="${lng}" href="${lng === 'en' ? url : `${url}?lang=${lng}`}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}"/>`,
    ].join('\n')
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority.toFixed(1)}</priority>\n${alts}\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
  writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
}

ROUTES.forEach(renderRoute)
renderSitemap()
console.log(`prerender: wrote ${ROUTES.length} route snapshots + sitemap.xml`)
