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
    id: 1,
    name: "Rani Manwar",
    date: "2026-01-14",
    status: "Present",
  },
  {
    id: 2,
    name: "Baliraje",
    date: "2026-01-14",
    status: "Absent",
  },
  {
    id: 3,
    name: "Vishal",
    date: "2026-01-14",
    status: "Leave",
  },
   {
    id: 4,
    name: "Sumedh Jadhav",
    date: "2026-01-14",
    status: "Present",
  },
]

export default function AttendanceTable() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Attendance Records</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {attendanceData.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.name}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    record.status === "Present"
                      ? "default"
                      : record.status === "Leave"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {record.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
