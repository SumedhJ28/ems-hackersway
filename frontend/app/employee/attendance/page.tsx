"use client"

import { useState } from "react"
import AttendanceFilter from "@/components/employee/AttendanceFilter"
import AttendanceTable from "@/components/employee/AttendanceTable"
import AttendanceCalendar from "@/components/employee/AttendanceCalendar"

export default function EmployeeAttendancePage() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#CCD0CF]">
          My Attendance
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          View your attendance history and monthly overview
        </p>
      </div>

      {/* Filter */}
      <AttendanceFilter
        month={month}
        year={year}
        onMonthChange={setMonth}
        onYearChange={setYear}
      />

      {/* Table Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Attendance History
        </h3>
        <AttendanceTable />
      </section>

      {/* Calendar Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Attendance Calendar
        </h3>
        <AttendanceCalendar month={month} year={year} />
      </section>
    </div>
  )
}
