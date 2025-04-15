import { type ReactNode } from 'react'
import { RouteComponent } from '@tanstack/react-router'
import { Home } from '@Pages/Home'
import { Table } from '@Pages/Table'
import { Settings } from '@Pages/Settings'
import { Profile } from '@Pages/Profile'
import { TableDemo } from '@Pages/TableDemo'
import type { IconName } from '@Design/Icons'

export interface RouteConfig {
  path: string
  component: RouteComponent<any>
  label: string
  icon?: IconName | ReactNode
  showInSidebar?: boolean
}

export const routes: Record<string, RouteConfig> = {
  home: {
    path: '/',
    component: Home,
    label: 'Dashboard',
    icon: 'House',
    showInSidebar: true,
  },
  table: {
    path: '/table',
    component: Table,
    label: 'People Directory',
    icon: 'Users',
    showInSidebar: true,
  },
  tableDemo: {
    path: '/table-demo',
    component: TableDemo,
    label: 'Table Demo',
    icon: 'Table',
    showInSidebar: true,
  },
  settings: {
    path: '/settings',
    component: Settings,
    label: 'Settings',
    icon: 'Gear',
    showInSidebar: true,
  },
  profile: {
    path: '/profile',
    component: Profile,
    label: 'Profile',
    icon: 'User',
    showInSidebar: true,
  },
} 