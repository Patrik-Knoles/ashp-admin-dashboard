"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Greenview Apartments",
    location: "Downtown District",
    units: 156,
    occupancy: 96,
    riskTier: "Low",
    lastUpdate: "2 hours ago",
    trend: 2.3,
  },
  {
    id: 2,
    name: "Riverside Housing Complex",
    location: "North Zone",
    units: 203,
    occupancy: 91,
    riskTier: "Medium",
    lastUpdate: "1 hour ago",
    trend: -1.2,
  },
  {
    id: 3,
    name: "Hillside Residences",
    location: "West District",
    units: 178,
    occupancy: 94,
    riskTier: "Low",
    lastUpdate: "30 min ago",
    trend: 3.1,
  },
]

const getRiskColor = (tier: string) => {
  switch (tier) {
    case "Low":
      return "bg-green-100 text-green-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "High":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function PropertyOverview() {
  return (
    <Card className="border-border">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-lg font-serif">Property Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {properties.map((property) => (
            <div key={property.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{property.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </div>
                </div>
                <Badge className={getRiskColor(property.riskTier)}>{property.riskTier}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">Units</p>
                  <p className="text-lg font-bold text-foreground">{property.units}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Occupancy</p>
                  <p className="text-lg font-bold text-foreground">{property.occupancy}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trend</p>
                  <p className={`text-lg font-bold ${property.trend > 0 ? "text-green-600" : "text-red-600"}`}>
                    {property.trend > 0 ? "+" : ""}
                    {property.trend}%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Updated {property.lastUpdate}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary border-primary hover:bg-primary/10 bg-transparent"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
