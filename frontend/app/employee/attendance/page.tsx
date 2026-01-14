"use client"

import { useState } from "react"
import AttendanceFilter from "@/components/employee/AttendanceFilter"
import AttendanceTable from "@/components/employee/AttendanceTable"
import AttendanceCalendar from "@/components/employee/AttendanceCalendar"

export default function EmployeeAttendancePage() {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">My Attendance</h2>

      <AttendanceFilter
        month={month}
        year={year}
        onMonthChange={setMonth}
        onYearChange={setYear}
      />

      {/* Table View */}
      <AttendanceTable />

      {/* Calendar View */}
      <AttendanceCalendar month={month} year={year} />
    </>
  )
}
