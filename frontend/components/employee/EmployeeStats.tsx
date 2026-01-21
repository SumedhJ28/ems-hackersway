"use client"

import {
  CalendarCheck,
  CalendarX,
  PlaneTakeoff,
  Clock,
} from "lucide-react"

const stats = [
  {
    title: "Present Days",
    value: 18,
    icon: CalendarCheck,
  },
  {
    title: "Absent Days",
    value: 2,
    icon: CalendarX,
  },
  {
    title: "Leaves Taken",
    value: 3,
    icon: PlaneTakeoff,
  },
  {
    title: "Late Entries",
    value: 1,
    icon: Clock,
  },
]

export default function EmployeeStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-[#253745] bg-[#11212D] p-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#9BA8AB]">
                {stat.title}
              </p>
              <Icon className="h-5 w-5 text-[#4A5C6A]" />
            </div>

            {/* Value */}
            <div className="mt-3 text-3xl font-semibold text-[#CCD0CF]">
              {stat.value}
            </div>

            {/* Footer */}
            <p className="mt-1 text-xs text-[#9BA8AB]">
              This month
            </p>
          </div>
        )
      })}
    </div>
  )
}
