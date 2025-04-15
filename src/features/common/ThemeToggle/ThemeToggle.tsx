import { Icon } from '@Design/Icons'
import { useTheme } from '@Hooks/useTheme'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { currentTheme, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <Icon icon={currentTheme === 'dark' ? 'Sun' : 'Moon'} size={20} />
    </button>
  )
} 