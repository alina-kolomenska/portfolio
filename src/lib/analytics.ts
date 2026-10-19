import type { PostHog, Properties } from 'posthog-js'

const key = import.meta.env.PROD ? import.meta.env.VITE_POSTHOG_KEY : undefined

export const analyticsEnabled = Boolean(key)

let client: PostHog | undefined
let failed = false
// Clicks can land before the SDK chunk finishes loading; replay them once it does.
const pending: [string, Properties | undefined][] = []

export function initAnalytics() {
  if (!key) return
  // Load after the page itself so analytics never competes with first paint.
  if (document.readyState === 'complete') loadPostHog(key)
  else window.addEventListener('load', () => loadPostHog(key), { once: true })
}

function loadPostHog(projectKey: string) {
  import('posthog-js')
    .then(({ default: posthog }) => {
      posthog.init(projectKey, {
        api_host: '/kr7',
        ui_host: 'https://eu.posthog.com',
        defaults: '2026-08-30',
        // Nothing is written to cookies or browser storage, so no consent banner is needed.
        persistence: 'memory',
        person_profiles: 'identified_only',
        disable_session_recording: true,
        respect_dnt: true,
      })
      client = posthog
      for (const [event, properties] of pending.splice(0)) client.capture(event, properties)
    })
    .catch(() => {
      failed = true
      pending.length = 0
    })
}

export function track(event: string, properties?: Properties) {
  if (!key || failed) return
  if (client) client.capture(event, properties)
  else pending.push([event, properties])
}
