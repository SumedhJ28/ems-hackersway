"use client"

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

  const getClass = (status: AttendanceStatus) => {
    if (status === "Present") return "bg-green-500 text-white"
    if (status === "Absent") return "bg-red-500 text-white"
    if (status === "Leave") return "bg-yellow-400 text-black"
    return "bg-muted text-muted-foreground"
  }

  return (
    <div className="mt-10">
      <h3 className="mb-4 text-xl font-semibold">
        Attendance Calendar
      </h3>

      {/* Days Header */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="mt-2 grid grid-cols-7 gap-2 text-center text-sm">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const status =
            mockAttendance[day] ??
            (new Date(year, month, day) > new Date()
              ? "Future"
              : "Absent")

          return (
            <div
              key={day}
              className={`rounded p-2 ${getClass(status)}`}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-4 text-sm">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-green-400" />
          Present
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-red-400" />
          Absent
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-yellow-400" />
          Leave
        </span>
      </div>
    </div>
  )
}
