"use client"
import {
  Home,
  AlertCircle,
  FileText,
  Users,
  Heart,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onNavigate: (page: string) => void
  currentPage: string
  onToggle?: () => void
}

export function Sidebar({ isOpen, onNavigate, currentPage, onToggle }: SidebarProps) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      id: "properties",
      label: "Properties",
      icon: FileText,
    },
    {
      id: "alerts",
      label: "Alerts",
      icon: AlertCircle,
    },
    {
      id: "compliance",
      label: "Compliance, Health & Safety",
      icon: FileText,
    },
    {
      id: "residents",
      label: "Residents",
      icon: Users,
    },
    {
      id: "health",
      label: "Health/Wellness",
      icon: Heart,
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <>
      <aside
        className={cn(
          " fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-20",
          "flex flex-col overflow-hidden z-40",
        )}
      >
        {/* Menu items */}
        <nav className="flex-1 p-2 space-y-1 overflow-hidden mt-20">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full flex items-center justify-center md:justify-start px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/20",
                )}
                title={!isOpen ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && <span className="ml-3">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border flex flex-col items-center gap-3">
          {isOpen && <p className="text-xs text-sidebar-foreground/60">ASHP Admin v1.0</p>}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="w-full flex justify-center"
            title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </Button>
        </div>
      </aside>
    </>
  )
}
