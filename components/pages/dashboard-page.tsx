"use client"

import { KPICards } from "@/components/kpi-cards"
import { DashboardLayout } from "@/components/dashboard-layout"
import { PropertyOverview } from "@/components/property-overview"
import { AlertFeed } from "@/components/alert-feed"
import { GrantCompliance } from "@/components/grant-compliance"
import { CommunityHealthChart } from "@/components/community-health-chart"

export function DashboardPage() {
  return (
    <main className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to ASHP Admin Dashboard</p>
      </div>
      <KPICards />
      <DashboardLayout>
        <div className="space-y-6">
          <PropertyOverview />
          <CommunityHealthChart />
        </div>
        <div className="space-y-6">
          <AlertFeed />
          <GrantCompliance />
        </div>
      </DashboardLayout>
    </main>
  )
}
