"use client"

import { ReactNode } from "react"

// Local lightweight Card components to avoid relying on '@/components/ui/card'
// Keeps the file self-contained for faster development and avoids missing-module errors.
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border bg-card text-card-foreground ${className}`}>{children}</div>
}

function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-row items-center justify-between px-4 py-3 border-b ${className}`}>{children}</div>
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-sm font-medium">{children}</h3>
}

function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

// Lightweight local Badge component to avoid missing import path
function Badge({
  children,
  variant = "secondary",
}: {
  children: ReactNode
  variant?: "destructive" | "secondary"
}) {
  const base = "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
  const variantClass =
    variant === "destructive" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
  return <span className={`${base} ${variantClass}`}>{children}</span>
}

const announcements = [
  {
    id: 1,
    title: "Office Closed on Republic Day",
    description:
      "Office will remain closed on 26th January due to public holiday.",
    priority: "High",
    startDate: "2026-01-26",
    endDate: "2026-01-26",
  },
  {
    id: 2,
    title: "New Attendance Policy",
    description:
      "Please check the updated attendance rules in the HR policy document.",
    priority: "Normal",
    startDate: "2026-01-10",
    endDate: "2026-02-10",
  },
]

export default function AnnouncementList() {
  return (
    <div className="grid gap-4">
      {announcements.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.title}</CardTitle>
            <Badge
              variant={item.priority === "High" ? "destructive" : "secondary"}
            >
              {item.priority}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              {item.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {item.startDate} → {item.endDate}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
