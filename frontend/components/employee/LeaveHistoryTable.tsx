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
import { CalendarDays } from "lucide-react"

const leaveHistory = [
  {
    id: 1,
    from: "2026-01-10",
    to: "2026-01-12",
    type: "Sick",
    status: "Approved",
  },
  {
    id: 2,
    from: "2026-01-20",
    to: "2026-01-21",
    type: "Casual",
    status: "Pending",
  },
]

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium
        ${
          status === "Approved"
            ? "bg-[#253745] text-[#CCD0CF]"
            : status === "Pending"
            ? "bg-[#253745]/60 text-[#CCD0CF]"
            : "bg-[#11212D] text-[#9BA8AB]"
        }
      `}
    >
      {status}
    </span>
  )
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#253745] px-2 py-0.5 text-xs text-[#9BA8AB]">
      {type}
    </span>
  )
}

export default function LeaveHistoryTable() {
  return (
    <Card className="mt-8 border border-[#253745] bg-[#11212D]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#253745] px-5 py-4">
        <div>
          <h3 className="text-lg font-semibold text-[#CCD0CF]">
            Leave History
          </h3>
          <p className="text-sm text-[#9BA8AB]">
            Your past leave requests
          </p>
        </div>

        <CalendarDays className="h-5 w-5 text-[#4A5C6A]" />
      </div>

      {/* Table */}
      <div className="p-5">
        <Table>
          <TableHeader>
            <TableRow className="border-[#253745]">
              <TableHead className="text-[#9BA8AB]">
                From
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                To
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Type
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {leaveHistory.map((leave) => (
              <TableRow
                key={leave.id}
                className="border-[#253745] hover:bg-[#253745]/30 transition"
              >
                <TableCell className="font-medium text-[#CCD0CF]">
                  {leave.from}
                </TableCell>

                <TableCell className="text-[#CCD0CF]">
                  {leave.to}
                </TableCell>

                <TableCell>
                  <TypeBadge type={leave.type} />
                </TableCell>

                <TableCell>
                  <StatusBadge status={leave.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
