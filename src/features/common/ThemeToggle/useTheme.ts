import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    return (document.documentElement.dataset.theme as Theme) || 'system'
  })

  useEffect(() => {
    function updateTheme(newTheme: Theme) {
      if (newTheme === 'system') {
        delete document.documentElement.dataset.theme
      } else {
        document.documentElement.dataset.theme = newTheme
      }
    }

    updateTheme(theme)
  }, [theme])

  return {
    theme,
    setTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSystem: theme === 'system',
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark')
  } as const
} 