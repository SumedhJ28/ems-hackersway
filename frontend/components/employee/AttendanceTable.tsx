"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { CalendarCheck, CalendarX, Clock } from "lucide-react"

const attendanceData = [
  {
    date: "2026-01-01",
    day: "Mon",
    checkIn: "09:30",
    checkOut: "18:10",
    status: "Present",
  },
  {
    date: "2026-01-02",
    day: "Tue",
    checkIn: "--",
    checkOut: "--",
    status: "Absent",
  },
  {
    date: "2026-01-03",
    day: "Wed",
    checkIn: "09:45",
    checkOut: "18:00",
    status: "Late",
  },
]

function StatusBadge({ status }: { status: string }) {
  const base =
    "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium"

  if (status === "Present") {
    return (
      <span className={`${base} bg-[#253745] text-[#CCD0CF]`}>
        <CalendarCheck className="h-3.5 w-3.5 text-[#4A5C6A]" />
        Present
      </span>
    )
  }

  if (status === "Late") {
    return (
      <span className={`${base} bg-[#253745] text-[#CCD0CF]`}>
        <Clock className="h-3.5 w-3.5 text-[#4A5C6A]" />
        Late
      </span>
    )
  }

  return (
    <span className={`${base} bg-[#253745] text-[#CCD0CF]`}>
      <CalendarX className="h-3.5 w-3.5 text-[#4A5C6A]" />
      Absent
    </span>
  )
}

export default function AttendanceTable() {
  return (
    <Card className="border border-[#253745] bg-[#11212D]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#253745] px-5 py-4">
        <div>
          <h3 className="text-lg font-semibold text-[#CCD0CF]">
            Attendance History
          </h3>
          <p className="text-sm text-[#9BA8AB]">
            January 2026
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="p-5">
        <Table>
          <TableHeader>
            <TableRow className="border-[#253745]">
              <TableHead className="text-[#9BA8AB]">
                Date
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Day
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Check In
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Check Out
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {attendanceData.map((a) => (
              <TableRow
                key={a.date}
                className="border-[#253745] hover:bg-[#253745]/30 transition"
              >
                <TableCell className="font-medium text-[#CCD0CF]">
                  {a.date}
                </TableCell>

                <TableCell className="text-[#9BA8AB]">
                  {a.day}
                </TableCell>

                <TableCell className="text-[#CCD0CF]">
                  {a.checkIn !== "--" ? (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#4A5C6A]" />
                      {a.checkIn}
                    </span>
                  ) : (
                    "--"
                  )}
                </TableCell>

                <TableCell className="text-[#CCD0CF]">
                  {a.checkOut !== "--" ? (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#4A5C6A]" />
                      {a.checkOut}
                    </span>
                  ) : (
                    "--"
                  )}
                </TableCell>

                <TableCell>
                  <StatusBadge status={a.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
