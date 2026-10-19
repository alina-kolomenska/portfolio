import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/ThemeContext'
import { useHydrated } from '@/hooks/use-hydrated'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  // The prerendered HTML can't know the visitor's theme: the icon follows the .dark class,
  // and the label waits for hydration.
  const hydrated = useHydrated()

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={toggleTheme}
      aria-label={hydrated ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle theme'}
    >
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </Button>
  )
}
