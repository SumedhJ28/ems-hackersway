"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import CreateEmployeeForm from "./CreateEmployeeForm"

const employees = [
  {
    id: 1,
    name: "Rani Manwar",
    email: "rani@hackersway.com",
    department: "Tech",
    role: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Baliraje",
    email: "baliraje@hackersway.com",
    department: "Tech",
    role: "Developer",
    status: "Active",
  },
]

export default function AdminEmployeeTable() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Employees</h3>

        {/* ✅ MODAL TRIGGER */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Employee</Button>
          </DialogTrigger>

          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
            </DialogHeader>

            <CreateEmployeeForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.department}</TableCell>
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
