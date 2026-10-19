import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { TimelineEntry } from '@/components/ui/timeline-entry'

describe('TimelineEntry', () => {
  it('toggles the highlights and names the role for screen readers', async () => {
    const user = userEvent.setup()
    render(<TimelineEntry title="Engineer" subtitle="Acme" period="Jan 2024 – Present" highlights={['Shipped it.']} />)
    const button = screen.getByRole('button', { name: /Engineer, Acme/ })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('Shipped it.')).toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('has no toggle when there are no highlights', () => {
    render(<TimelineEntry title="Engineer" subtitle="Acme" period="Jan 2024 – Present" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
