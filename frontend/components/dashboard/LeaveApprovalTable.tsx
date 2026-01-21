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

type LeaveStatus = "Pending" | "Approved" | "Rejected"

interface LeaveRequest {
  id: number
  name: string
  type: string
  from: string
  to: string
  status: LeaveStatus
}

const initialData: LeaveRequest[] = [
  {
    id: 1,
    name: "Rani Manwar",
    type: "Sick Leave",
    from: "2026-01-10",
    to: "2026-01-12",
    status: "Pending",
  },
  {
    id: 2,
    name: "Baliraje",
    type: "Casual Leave",
    from: "2026-01-15",
    to: "2026-01-16",
    status: "Approved",
  },
]

/* ---------- Local UI ---------- */

function StatusBadge({ status }: { status: LeaveStatus }) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium
        ${
          status === "Approved"
            ? "bg-[#4A5C6A] text-[#CCD0CF]"
            : status === "Rejected"
            ? "bg-[#06141B] text-[#9BA8AB]"
            : "bg-[#253745] text-[#CCD0CF]"
        }
      `}
    >
      {status}
    </span>
  )
}

function ActionButton({
  children,
  disabled,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  variant?: "primary" | "danger"
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md px-3 py-1.5 text-sm transition
        ${
          disabled
            ? "cursor-not-allowed bg-[#253745] text-[#9BA8AB]"
            : variant === "primary"
            ? "bg-[#4A5C6A] text-[#CCD0CF] hover:bg-[#253745]"
            : "bg-[#06141B] text-[#CCD0CF] hover:bg-[#253745]"
        }
      `}
    >
      {children}
    </button>
  )
}

/* ---------- Component ---------- */

export default function LeaveApprovalTable() {
  const [leaveRequests, setLeaveRequests] =
    useState<LeaveRequest[]>(initialData)

  const updateStatus = (id: number, status: LeaveStatus) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status } : leave
      )
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="bg-[#11212D] border border-[#253745]">
        {/* Header */}
        <CardHeader className="pb-4 border-b border-[#253745]">
          <CardTitle className="text-lg text-[#CCD0CF]">
            Leave Requests
          </CardTitle>
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
                  Leave Type
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  From
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  To
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  Status
                </TableHead>
                <TableHead className="text-[#9BA8AB]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {leaveRequests.map((leave, index) => (
                <motion.tr
                  key={leave.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}
                  className="border-b border-[#253745] hover:bg-[#253745]/60 transition"
                >
                  <TableCell className="text-[#CCD0CF] font-medium">
                    {leave.name}
                  </TableCell>
                  <TableCell className="text-[#CCD0CF]">
                    {leave.type}
                  </TableCell>
                  <TableCell className="text-[#9BA8AB]">
                    {leave.from}
                  </TableCell>
                  <TableCell className="text-[#9BA8AB]">
                    {leave.to}
                  </TableCell>

                  <TableCell>
                    <StatusBadge status={leave.status} />
                  </TableCell>

                  <TableCell className="flex gap-2">
                    <ActionButton
                      disabled={leave.status !== "Pending"}
                      onClick={() =>
                        updateStatus(leave.id, "Approved")
                      }
                    >
                      Approve
                    </ActionButton>

                    <ActionButton
                      variant="danger"
                      disabled={leave.status !== "Pending"}
                      onClick={() =>
                        updateStatus(leave.id, "Rejected")
                      }
                    >
                      Reject
                    </ActionButton>
                  </TableCell>
                </motion.tr>
              ))}

              {leaveRequests.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="py-6 text-center text-sm text-[#9BA8AB]"
                  >
                    No leave requests
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
