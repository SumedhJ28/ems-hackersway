"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

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

export default function AttendanceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Day</TableHead>
          <TableHead>Check In</TableHead>
          <TableHead>Check Out</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {attendanceData.map((a) => (
          <TableRow key={a.date}>
            <TableCell>{a.date}</TableCell>
            <TableCell>{a.day}</TableCell>
            <TableCell>{a.checkIn}</TableCell>
            <TableCell>{a.checkOut}</TableCell>
            <TableCell>
              <Badge
                variant={
                  a.status === "Present"
                    ? "default"
                    : a.status === "Late"
                    ? "secondary"
                    : "destructive"
                }
              >
                {a.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
