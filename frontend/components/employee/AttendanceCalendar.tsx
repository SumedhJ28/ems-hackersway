"use client"

import { Card } from "@/components/ui/card"

type AttendanceStatus = "Present" | "Absent" | "Leave" | "Future"

const mockAttendance: Record<number, AttendanceStatus> = {
  1: "Present",
  2: "Present",
  3: "Absent",
  4: "Leave",
  5: "Present",
  6: "Present",
}

export default function AttendanceCalendar({
  month,
  year,
}: {
  month: number
  year: number
}) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const today = new Date()

  const getStyle = (status: AttendanceStatus, isToday: boolean) => {
    const base =
      "relative flex items-center justify-center rounded-lg p-2 text-sm font-medium transition"

    let bg = "bg-[#11212D]"
    let text = "text-[#9BA8AB]"

    if (status === "Present") {
      bg = "bg-[#253745]"
      text = "text-[#CCD0CF]"
    }

    if (status === "Leave") {
      bg = "bg-[#253745]/70"
      text = "text-[#CCD0CF]"
    }

    if (status === "Absent") {
      bg = "bg-[#11212D]"
      text = "text-[#9BA8AB]"
    }

    if (isToday) {
      bg = "bg-[#4A5C6A]"
      text = "text-[#CCD0CF]"
    }

    return `${base} ${bg} ${text}`
  }

  return (
    <Card className="border border-[#253745] bg-[#11212D]">
      {/* Header */}
      <div className="border-b border-[#253745] px-5 py-4">
        <h3 className="text-lg font-semibold text-[#CCD0CF]">
          Attendance Calendar
        </h3>
        <p className="text-sm text-[#9BA8AB]">
          Monthly overview
        </p>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Days Header */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-[#9BA8AB]">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="mt-3 grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dateObj = new Date(year, month, day)

            const status =
              mockAttendance[day] ??
              (dateObj > today ? "Future" : "Absent")

            const isToday =
              dateObj.toDateString() === today.toDateString()

            return (
              <div
                key={day}
                className={getStyle(status, isToday)}
              >
                {day}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#9BA8AB]">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-[#253745]" />
            Present
          </span>

          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-[#253745]/70" />
            Leave
          </span>

          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-[#11212D] border border-[#253745]" />
            Absent
          </span>

          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-[#4A5C6A]" />
            Today
          </span>
        </div>
      </div>
    </Card>
  )
}
