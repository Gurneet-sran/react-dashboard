import { Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { TopBar } from '@Layouts/TopBar'
import { Sidebar } from '@Layouts/Sidebar'
import './DashboardLayout.css'

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  return (
    <div className="dashboard">
      <TopBar />
      <div className="dashboard__content">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className="dashboard__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
} 