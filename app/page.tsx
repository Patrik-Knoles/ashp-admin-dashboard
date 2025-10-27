"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar-nav"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { PropertiesPage } from "@/components/pages/properties-page"
import { AlertsPage } from "@/components/pages/alerts-page"
import { CompliancePage } from "@/components/pages/compliance-page"
import { ResidentsPage } from "@/components/pages/residents-page"
import { HealthWellnessPage } from "@/components/pages/health-wellness-page"
import { MessagesPage } from "@/components/pages/messages-page"
import { SettingsPage } from "@/components/pages/settings-page"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderPage = () => {
    switch (currentPage) {
      case "properties":
        return <PropertiesPage />
      case "alerts":
        return <AlertsPage />
      case "compliance":
        return <CompliancePage />
      case "residents":
        return <ResidentsPage />
      case "health":
        return <HealthWellnessPage />
      case "messages":
        return <MessagesPage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onNavigate={(page) => {
            setCurrentPage(page)
          }}
          currentPage={currentPage}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        {/* Main content area with margin to account for fixed sidebar */}
        <main className={cn("flex-1 overflow-auto transition-all duration-300", sidebarOpen ? "ml-64" : "ml-20")}>
          {renderPage()}
        </main>
      </div>
    </div>
  )
}
