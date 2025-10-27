"use client"

import { Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface DashboardHeaderProps {
  onMenuClick?: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASHP%20logo_horiz%20color%20TM-cWNFW8zLMIFB6rdjhC8iviEWT2wkrn.png"
            alt="ASHP Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5 text-primary" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5 text-primary" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </div>
    </header>
  )
}
