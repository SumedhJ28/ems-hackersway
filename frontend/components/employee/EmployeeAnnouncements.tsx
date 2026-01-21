"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDays, Bell } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Office Closed on Friday",
    description:
      "Office will remain closed this Friday due to maintenance work.",
    date: "2026-01-20",
    priority: "Important",
  },
]

export default function EmployeeAnnouncements() {
  return (
    <div className="space-y-6">
      {announcements.map((item) => (
        <Card
          key={item.id}
          className="relative overflow-hidden border border-white/10 bg-[#0B1C26]"
        >
          {/* soft gradient overlay */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-black/20" />

          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-lg font-semibold text-white">
                  {item.title}
                </CardTitle>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Priority badge */}
              <span className="shrink-0 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">
                {item.priority}
              </span>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
