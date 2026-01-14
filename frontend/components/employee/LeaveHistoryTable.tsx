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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function LeaveHistoryTable() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Leave History</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {leaveHistory.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.from}</TableCell>
                <TableCell>{leave.to}</TableCell>
                <TableCell>{leave.type}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
