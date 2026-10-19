import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { Root } from './Root.tsx'
import { initAnalytics } from './lib/analytics.ts'

const container = document.getElementById('root')!

// Production builds ship prerendered HTML to hydrate; the dev server starts from an empty root.
if (container.hasChildNodes()) hydrateRoot(container, <Root />)
else createRoot(container).render(<Root />)

initAnalytics()
