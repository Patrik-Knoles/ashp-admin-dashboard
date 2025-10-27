"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Heart, Activity, Droplets } from "lucide-react"

export function HealthWellnessPage() {
  const healthData = [
    { month: "Jan", hydration: 75, mobility: 82, activity: 68 },
    { month: "Feb", hydration: 78, mobility: 85, activity: 72 },
    { month: "Mar", hydration: 82, mobility: 88, activity: 75 },
    { month: "Apr", hydration: 80, mobility: 86, activity: 78 },
    { month: "May", hydration: 85, mobility: 90, activity: 82 },
    { month: "Jun", hydration: 88, mobility: 92, activity: 85 },
  ]

  const wellnessMetrics = [
    {
      title: "Average Hydration Level",
      value: "88%",
      icon: Droplets,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Mobility Score",
      value: "92%",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Activity Level",
      value: "85%",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <main className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Health & Wellness</h1>
        <p className="text-muted-foreground">Health metrics and wellness tracking for residents</p>
      </div>

      {/* Wellness metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wellnessMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <div className={`${metric.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Trends chart */}
      <Card>
        <CardHeader>
          <CardTitle>Health Trends (6 Months)</CardTitle>
          <CardDescription>Wellness metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hydration" stroke="#3b82f6" name="Hydration" />
              <Line type="monotone" dataKey="mobility" stroke="#10b981" name="Mobility" />
              <Line type="monotone" dataKey="activity" stroke="#ef4444" name="Activity" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Wellness programs */}
      <Card>
        <CardHeader>
          <CardTitle>Active Wellness Programs</CardTitle>
          <CardDescription>Community health initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Morning Yoga Classes", participants: 24, frequency: "3x/week" },
              { name: "Nutrition Workshops", participants: 18, frequency: "Monthly" },
              { name: "Walking Groups", participants: 32, frequency: "Daily" },
              { name: "Mental Health Support", participants: 15, frequency: "Weekly" },
            ].map((program, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{program.name}</p>
                  <p className="text-sm text-muted-foreground">{program.frequency}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{program.participants}</p>
                  <p className="text-xs text-muted-foreground">participants</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
