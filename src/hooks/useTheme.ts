import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    return (document.documentElement.dataset.theme as Theme) || 'system'
  })

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' ? getSystemTheme() : 'light'
  )

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    // Set initial system theme
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    // Listen for system theme changes
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Update document theme
  useEffect(() => {
    const newTheme = theme === 'system' ? systemTheme : theme
    
    if (theme === 'system') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = theme
    }

    // Always set the actual theme class for proper styling
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }, [theme, systemTheme])

  const currentTheme = theme === 'system' ? systemTheme : theme

  return {
    theme,
    setTheme,
    systemTheme,
    currentTheme,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
    isSystem: theme === 'system',
    toggleTheme: () => setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  } as const
} 