"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type AttendanceStatus = "Present" | "Absent" | "Leave"

interface AttendanceRecord {
  id: number
  name: string
  date: string
  status: AttendanceStatus
}

const initialAttendance: AttendanceRecord[] = [
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

/* ---------- Local UI ---------- */

function FilterButton({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm transition
        ${
          active
            ? "bg-[#4A5C6A] text-[#CCD0CF]"
            : "bg-[#253745] text-[#9BA8AB] hover:bg-[#4A5C6A]"
        }
      `}
    >
      {children}
    </button>
  )
}

function StatusBadge({
  status,
}: {
  status: AttendanceStatus
}) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium
        ${
          status === "Present"
            ? "bg-[#4A5C6A] text-[#CCD0CF]"
            : status === "Leave"
            ? "bg-[#253745] text-[#CCD0CF]"
            : "bg-[#06141B] text-[#9BA8AB]"
        }
      `}
    >
      {status}
    </span>
  )
}

/* ---------- Component ---------- */

export default function AttendanceTable() {
  const [filter, setFilter] = useState<
    "All" | AttendanceStatus
  >("All")

  const filteredData =
    filter === "All"
      ? initialAttendance
      : initialAttendance.filter(
          (record) => record.status === filter
        )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="bg-[#11212D] border border-[#253745]">
        {/* Header */}
        <CardHeader className="pb-4 border-b border-[#253745]">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-[#CCD0CF]">
              Attendance Records
            </CardTitle>

            <div className="flex gap-2">
              {["All", "Present", "Absent", "Leave"].map(
                (status) => (
                  <FilterButton
                    key={status}
                    active={filter === status}
                    onClick={() =>
                      setFilter(status as any)
                    }
                  >
                    {status}
                  </FilterButton>
                )
              )}
            </div>
          </div>
        </CardHeader>

        {/* Table */}
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#253745]">
                <TableHead className="text-[#9BA8AB]">
                  Employee
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  Date
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredData.map((record, index) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  className="border-b border-[#253745] hover:bg-[#253745]/60 transition"
                >
                  <TableCell className="text-[#CCD0CF] font-medium">
                    {record.name}
                  </TableCell>
                  <TableCell className="text-[#9BA8AB]">
                    {record.date}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={record.status} />
                  </TableCell>
                </motion.tr>
              ))}

              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="py-6 text-center text-sm text-[#9BA8AB]"
                  >
                    No records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}
