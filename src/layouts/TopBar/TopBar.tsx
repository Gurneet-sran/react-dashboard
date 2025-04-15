import type { TopBarProps } from './TopBar.types'
import { Icon } from '@Design/Icons'
import { ThemeToggle } from '@Features/common/ThemeToggle'
import './TopBar.css'

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <h1 className="topbar__title">Dashboard</h1>
      </div>
      <div className="topbar__actions">
        <ThemeToggle />
        <button className="topbar__action-button">
          <span className="topbar__notification-icon">
            <Icon icon="Bell" size={20} />
          </span>
        </button>
        <button className="topbar__action-button">
          <span className="topbar__user-icon">
            <Icon icon="User" size={20} />
          </span>
        </button>
      </div>
    </header>
  )
} 