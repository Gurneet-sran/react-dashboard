import type { TopBarProps } from './TopBar.types'
import './TopBar.css'

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="topbar">
      <button className="topbar__menu-button" onClick={onMenuClick}>
        <span className="topbar__menu-icon">☰</span>
      </button>
      <div className="topbar__brand">
        <h1 className="topbar__title">Dashboard</h1>
      </div>
      <div className="topbar__actions">
        <button className="topbar__action-button">
          <span className="topbar__notification-icon">🔔</span>
        </button>
        <button className="topbar__action-button">
          <span className="topbar__user-icon">👤</span>
        </button>
      </div>
    </header>
  )
} 