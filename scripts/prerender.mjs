import { readFile, rm, writeFile } from 'node:fs/promises'

// The SSR bundle keeps react-dom external, which picks its dev or prod build from NODE_ENV.
process.env.NODE_ENV ??= 'production'

const dist = new URL('../dist/', import.meta.url)
const ssr = new URL('../dist-ssr/', import.meta.url)
const { renderApp, structuredData, llmsTxt, robotsTxt, sitemapXml } = await import(new URL('entry-server.js', ssr).href)

const indexFile = new URL('index.html', dist)
const html = await readFile(indexFile, 'utf8')
const rootMarker = '<div id="root"></div>'
for (const marker of [rootMarker, '</head>']) {
  if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`)
}

// Replacer functions, so "$&" and similar sequences in the content are inserted literally.
const prerendered = html
  .replace(rootMarker, () => `<div id="root">${renderApp()}</div>`)
  .replace('</head>', () => `  <script type="application/ld+json">${structuredData()}</script>\n  </head>`)

await writeFile(indexFile, prerendered)
await writeFile(new URL('llms.txt', dist), llmsTxt())
await writeFile(new URL('robots.txt', dist), robotsTxt())
await writeFile(new URL('sitemap.xml', dist), sitemapXml())
await rm(ssr, { recursive: true, force: true })
