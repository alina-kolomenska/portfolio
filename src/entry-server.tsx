import { renderToString } from 'react-dom/server'
import { Root } from './Root.tsx'

export { llmsTxt, robotsTxt, sitemapXml, structuredData } from './lib/seo.ts'

export function renderApp() {
  return renderToString(<Root />)
}
