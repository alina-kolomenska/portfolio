import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProjectCard } from '@/components/ui/project-card'
import type { Project } from '@/types/content'

const { track } = vi.hoisted(() => ({ track: vi.fn() }))
vi.mock('@/lib/analytics', () => ({ track }))

const project: Project = {
  title: 'Test Project',
  company: 'Acme',
  period: 'Jan 2024 – Feb 2025',
  description: ['What the product does.'],
  highlights: ['Built the main feature.'],
  tags: ['React'],
  links: ['https://example.com/'],
}

describe('ProjectCard', () => {
  it('keeps the details in the page while collapsed, for crawlers', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('button', { name: /Test Project/ })).toHaveAttribute('aria-expanded', 'false')
    const details = screen.getByText('Built the main feature.')
    expect(details.closest('[data-slot="collapsible-content"]')).toHaveAttribute('data-state', 'closed')
  })

  it('expands on click and reports which project was opened', async () => {
    const user = userEvent.setup()
    render(<ProjectCard project={project} />)
    const trigger = screen.getByRole('button', { name: /Test Project/ })
    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(track).toHaveBeenCalledWith('project_expanded', { project: 'Test Project' })
  })

  it('shows the company, period, and links outside the toggle button', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByText('Acme · Jan 2024 – Feb 2025')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'example.com' })
    expect(link).toHaveAttribute('href', 'https://example.com/')
    expect(screen.getByRole('button', { name: /Test Project/ })).not.toContainElement(link)
  })
})
