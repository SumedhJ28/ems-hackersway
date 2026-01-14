"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const announcements = [
  {
    id: 1,
    title: "Office Closed on Friday",
    description:
      "Office will remain closed this Friday due to maintenance work.",
    date: "2026-01-20",
  },
]

export default function EmployeeAnnouncements() {
  return (
    <div className="space-y-4">
      {announcements.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {item.date}
            </p>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
