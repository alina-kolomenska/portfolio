import { describe, expect, it, onTestFinished, vi } from 'vitest'

const posthog = vi.hoisted(() => ({ init: vi.fn(), capture: vi.fn() }))
vi.mock('posthog-js', () => ({ default: posthog }))

// The module reads its env once at import, so each test imports a fresh copy.
async function loadAnalytics({ production, key }: { production: boolean; key: string }) {
  vi.resetModules()
  vi.stubEnv('PROD', production)
  vi.stubEnv('VITE_POSTHOG_KEY', key)
  return import('@/lib/analytics')
}

describe('analytics', () => {
  it('stays off outside production builds', async () => {
    const analytics = await loadAnalytics({ production: false, key: 'phc_test' })
    analytics.initAnalytics()
    analytics.track('cv_downloaded')
    await vi.dynamicImportSettled()

    expect(analytics.analyticsEnabled).toBe(false)
    expect(posthog.init).not.toHaveBeenCalled()
  })

  it('stays off without a project key', async () => {
    const analytics = await loadAnalytics({ production: true, key: '' })
    analytics.initAnalytics()
    await vi.dynamicImportSettled()

    expect(analytics.analyticsEnabled).toBe(false)
    expect(posthog.init).not.toHaveBeenCalled()
  })

  it('waits for the page load event before loading PostHog', async () => {
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading')
    const analytics = await loadAnalytics({ production: true, key: 'phc_test' })
    analytics.initAnalytics()
    await vi.dynamicImportSettled()
    expect(posthog.init).not.toHaveBeenCalled()

    window.dispatchEvent(new Event('load'))
    await vi.waitFor(() => expect(posthog.init).toHaveBeenCalledOnce())
  })

  it('loads PostHog with the privacy settings and replays events tracked before it loaded', async () => {
    const analytics = await loadAnalytics({ production: true, key: 'phc_test' })
    analytics.track('cv_downloaded')
    analytics.initAnalytics()
    await vi.waitFor(() => expect(posthog.init).toHaveBeenCalled())

    expect(posthog.init).toHaveBeenCalledWith(
      'phc_test',
      expect.objectContaining({
        api_host: '/kr7',
        persistence: 'memory',
        disable_session_recording: true,
        disable_surveys: true,
        respect_dnt: true,
      }),
    )
    expect(posthog.capture).toHaveBeenCalledWith('cv_downloaded', undefined)

    analytics.track('project_expanded', { project: 'Test Project' })
    expect(posthog.capture).toHaveBeenLastCalledWith('project_expanded', { project: 'Test Project' })
  })

  it('swallows a blocked SDK chunk without an unhandled rejection', async () => {
    vi.doMock('posthog-js', () => {
      throw new Error('blocked')
    })
    onTestFinished(() => {
      vi.doMock('posthog-js', () => ({ default: posthog }))
    })
    const analytics = await loadAnalytics({ production: true, key: 'phc_test' })
    analytics.initAnalytics()
    await vi.dynamicImportSettled()

    expect(() => analytics.track('cv_downloaded')).not.toThrow()
  })
})
