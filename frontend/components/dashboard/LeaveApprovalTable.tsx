"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const leaveRequests = [
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

export default function LeaveApprovalTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee</TableHead>
          <TableHead>Leave Type</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {leaveRequests.map((leave) => (
          <TableRow key={leave.id}>
            <TableCell>{leave.name}</TableCell>
            <TableCell>{leave.type}</TableCell>
            <TableCell>{leave.from}</TableCell>
            <TableCell>{leave.to}</TableCell>
            <TableCell>
              <Badge
                variant={
                  leave.status === "Approved"
                    ? "default"
                    : leave.status === "Pending"
                    ? "secondary"
                    : "destructive"
                }
              >
                {leave.status}
              </Badge>
            </TableCell>
            <TableCell className="space-x-2">
              <Button size="sm">Approve</Button>
              <Button size="sm" variant="destructive">
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
