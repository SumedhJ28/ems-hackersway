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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

/* ---------- Local UI ---------- */

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "muted"
}) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium
        ${
          variant === "default"
            ? "bg-[#4A5C6A] text-[#CCD0CF]"
            : "bg-[#253745] text-[#9BA8AB]"
        }
      `}
    >
      {children}
    </span>
  )
}

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-[#4A5C6A] px-3 py-1.5 text-sm font-medium text-[#CCD0CF] hover:bg-[#253745] transition"
    >
      {children}
    </button>
  )
}

/* ---------- Component ---------- */

export default function AdminEmployeeTable() {
  const [open, setOpen] = useState(false)

  const activeCount = employees.filter(
    (e) => e.status === "Active"
  ).length

  return (
    <Card className="bg-[#11212D] border border-[#253745]">
      {/* Header */}
      <CardHeader className="pb-4 border-b border-[#253745]">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg text-[#CCD0CF]">
              Employees
            </CardTitle>
            <p className="text-sm text-[#9BA8AB]">
              Manage your team members
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add Employee</Button>
            </DialogTrigger>

            <DialogContent className="bg-[#11212D] border border-[#253745]">
              <DialogHeader>
                <DialogTitle className="text-[#CCD0CF]">
                  Add New Employee
                </DialogTitle>
              </DialogHeader>

              <CreateEmployeeForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary */}
        <div className="mt-3 flex gap-6 text-sm text-[#9BA8AB]">
          <span>
            Active:{" "}
            <b className="text-[#CCD0CF]">
              {activeCount}
            </b>
          </span>
          <span>
            Total:{" "}
            <b className="text-[#CCD0CF]">
              {employees.length}
            </b>
          </span>
        </div>
      </CardHeader>

      {/* Table */}
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#253745]">
              <TableHead />
              <TableHead className="text-[#9BA8AB]">
                Name
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Email
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Department
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Role
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {employees.map((emp) => (
              <TableRow
                key={emp.id}
                className="border-b border-[#253745] hover:bg-[#253745]/60 transition"
              >
                {/* Avatar */}
                <TableCell>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#253745] text-xs font-semibold text-[#CCD0CF]">
                    {getInitials(emp.name)}
                  </div>
                </TableCell>

                <TableCell className="font-medium text-[#CCD0CF]">
                  {emp.name}
                </TableCell>

                <TableCell className="text-[#9BA8AB]">
                  {emp.email}
                </TableCell>

                <TableCell>
                  <Badge variant="muted">
                    {emp.department}
                  </Badge>
                </TableCell>

                <TableCell className="text-[#CCD0CF]">
                  {emp.role}
                </TableCell>

                <TableCell>
                  <Badge>
                    {emp.status}
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
