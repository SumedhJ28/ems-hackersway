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

const employees = [
  {
    id: 1,
    name: "Rani Manwar",
    email: "Rani@hackersway.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Baliraje ",
    email: "baliraje@hackersway.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Vishal",
    email: "vishal@hackersway.com",
    role: "Autometion Tester",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sumedh Jadhav",
    email: "sumedh@hackersway.com",
    role: "Developer",
    status: "Active",
  }
]

export default function EmployeeTable() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Employees</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>
                <Badge
                  variant={emp.status === "Active" ? "default" : "secondary"}
                >
                  {emp.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
