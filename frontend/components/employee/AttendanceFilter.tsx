"use client"

import { ChevronDown, Calendar } from "lucide-react"

type Props = {
  month: number
  year: number
  onMonthChange: (m: number) => void
  onYearChange: (y: number) => void
}

export default function AttendanceFilter({
  month,
  year,
  onMonthChange,
  onYearChange,
}: Props) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      {/* Month */}
      <div className="relative">
        <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5C6A]" />

        <select
          value={month}
          onChange={(e) => onMonthChange(Number(e.target.value))}
          className="appearance-none rounded-lg border border-[#253745] bg-[#0F172A] py-2 pl-9 pr-9 text-sm text-[#CCD0CF]
                     focus:outline-none focus:border-[#4A5C6A]"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5C6A]" />
      </div>

      {/* Year */}
      <div className="relative">
        <select
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="appearance-none rounded-lg border border-[#253745] bg-[#0F172A] px-4 py-2 pr-9 text-sm text-[#CCD0CF]
                     focus:outline-none focus:border-[#4A5C6A]"
        >
          {[2024, 2025, 2026].map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5C6A]" />
      </div>

      {/* Hint */}
      <span className="text-sm text-[#9BA8AB]">
        Filter attendance by month & year
      </span>
    </div>
  )
}
