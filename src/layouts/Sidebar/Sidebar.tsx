import { Link } from '@tanstack/react-router'
import type { SidebarProps } from './Sidebar.types'
import { routes } from '@/routes/routes.config'
import { Icon } from '@Design/Icons'
import './Sidebar.css'

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRoutes = Object.values(routes).filter(route => route.showInSidebar)

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <nav className="sidebar__nav">
        {sidebarRoutes.map(route => (
          <Link
            key={route.path}
            to={route.path}
            className="sidebar__link"
            activeProps={{
              className: 'sidebar__link sidebar__link--active'
            }}
          >
            <span className="sidebar__link-icon">
              <Icon icon={route.icon} />
            </span>
            <span className="sidebar__link-text">{route.label}</span>
          </Link>
        ))}
      </nav>
      <button 
        className="sidebar__toggle" 
        onClick={onClose}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <Icon icon={isOpen ? 'CaretLeft' : 'CaretRight'} size={20} />
      </button>
    </aside>
  )
} 