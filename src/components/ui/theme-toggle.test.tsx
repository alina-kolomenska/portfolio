import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { ThemeProvider } from '@/context/ThemeContext'

describe('ThemeToggle', () => {
  it('switches between light and dark and remembers the choice', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )
    const button = screen.getByRole('button', { name: 'Switch to dark mode' })

    await user.click(button)
    expect(document.documentElement).toHaveClass('dark')
    expect(button).toHaveAccessibleName('Switch to light mode')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')

    await user.click(button)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('starts from the saved theme', () => {
    localStorage.setItem('portfolio-theme', 'dark')
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()
  })
})
