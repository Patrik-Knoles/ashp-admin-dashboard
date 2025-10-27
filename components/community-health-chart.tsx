"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "Jan", hydration: 78, mobility: 82, activity: 75 },
  { month: "Feb", hydration: 81, mobility: 85, activity: 78 },
  { month: "Mar", hydration: 84, mobility: 88, activity: 82 },
  { month: "Apr", hydration: 87, mobility: 90, activity: 85 },
  { month: "May", hydration: 89, mobility: 92, activity: 88 },
  { month: "Jun", hydration: 91, mobility: 94, activity: 90 },
]

export function CommunityHealthChart() {
  return (
    <Card className="border-border">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-lg font-serif">Community Health Index Trend</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: `1px solid var(--border)`,
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="hydration"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)", r: 4 }}
              name="Hydration %"
            />
            <Line
              type="monotone"
              dataKey="mobility"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-2)", r: 4 }}
              name="Mobility Score"
            />
            <Line
              type="monotone"
              dataKey="activity"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-3)", r: 4 }}
              name="Activity Trend"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
