import { StrictMode } from 'react'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

export function Root() {
  return (
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}
