import { Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { TopBar } from '@Layouts/TopBar'
import { Sidebar } from '@Layouts/Sidebar'
import './DashboardLayout.css'

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="dashboard">
      <TopBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="dashboard__content">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="dashboard__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
} 