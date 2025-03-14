import { Home } from '@Pages/Home'
import { Table } from '@Pages/Table'
import { Settings } from '@Pages/Settings'
import { Profile } from '@Pages/Profile'

export interface RouteConfig {
  path: string
  component: React.ComponentType
  label: string
  icon?: string
  showInSidebar?: boolean
}

export const routes: Record<string, RouteConfig> = {
  home: {
    path: '/',
    component: Home,
    label: 'Dashboard',
    icon: '📊',
    showInSidebar: true,
  },
  table: {
    path: '/table',
    component: Table,
    label: 'People Directory',
    icon: '👥',
    showInSidebar: true,
  },
  settings: {
    path: '/settings',
    component: Settings,
    label: 'Settings',
    icon: '⚙️',
    showInSidebar: true,
  },
  profile: {
    path: '/profile',
    component: Profile,
    label: 'Profile',
    icon: '👤',
    showInSidebar: true,
  },
} 