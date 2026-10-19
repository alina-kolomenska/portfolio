import { hydrateRoot } from 'react-dom/client'
import { act, screen } from '@testing-library/react'
import { describe, expect, it, onTestFinished, vi } from 'vitest'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { renderApp } from '@/entry-server'
import { Root } from '@/Root'

describe('prerendering', () => {
  it.each([
    { saved: 'light', label: 'Switch to dark mode' },
    { saved: 'dark', label: 'Switch to light mode' },
  ])('hydrates without mismatches for a visitor who saved the $saved theme', async ({ saved, label }) => {
    const container = document.createElement('div')
    container.innerHTML = renderApp()
    document.body.append(container)
    onTestFinished(() => container.remove())
    expect(screen.getByRole('button', { name: 'Toggle theme' })).toBeInTheDocument()

    // The real prerender runs in Node, where the visitor's saved theme doesn't exist yet.
    localStorage.setItem('portfolio-theme', saved)
    const consoleError = vi.spyOn(console, 'error')
    const errors: unknown[] = []
    let root: ReturnType<typeof hydrateRoot> | undefined
    await act(async () => {
      root = hydrateRoot(container, <Root />, { onRecoverableError: (error) => errors.push(error) })
    })
    onTestFinished(() => act(() => root?.unmount()))

    expect(errors).toEqual([])
    expect(consoleError).not.toHaveBeenCalled()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(`${profile.name}, ${profile.role}`)
    expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
  })

  it('includes every collapsed job and project detail in the HTML', () => {
    const page = document.createElement('div')
    page.innerHTML = renderApp()
    const details = [
      ...experience.flatMap((job) => job.highlights ?? []),
      ...projects.flatMap((project) => [...project.description, ...(project.highlights ?? [])]),
    ]

    for (const detail of details) expect(page.textContent).toContain(detail)
  })
})
