"use client"

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

const employees = [
  {
    id: 1,
    name: "Rani Manwar",
    email: "rani@hackersway.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Baliraje",
    email: "baliraje@hackersway.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Vishal",
    email: "vishal@hackersway.com",
    role: "Automation Tester",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sumedh Jadhav",
    email: "sumedh@hackersway.com",
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
  active = true,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium
        ${
          active
            ? "bg-[#4A5C6A] text-[#CCD0CF]"
            : "bg-[#253745] text-[#9BA8AB]"
        }
      `}
    >
      {children}
    </span>
  )
}

/* ---------- Component ---------- */

export default function EmployeeTable() {
  const activeCount = employees.filter(
    (e) => e.status === "Active"
  ).length
  const inactiveCount = employees.length - activeCount

  return (
    <Card className="bg-[#11212D] border border-[#253745]">
      {/* Header */}
      <CardHeader className="pb-4 border-b border-[#253745]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-[#CCD0CF]">
            Employees
          </CardTitle>
          <span className="text-sm text-[#9BA8AB]">
            {employees.length} total
          </span>
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
            Inactive:{" "}
            <b className="text-[#CCD0CF]">
              {inactiveCount}
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
                Role
              </TableHead>
              <TableHead className="text-[#9BA8AB]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {employees.map((emp, index) => (
              <motion.tr
                key={emp.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.04,
                }}
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

                <TableCell className="text-[#CCD0CF]">
                  {emp.role}
                </TableCell>

                <TableCell>
                  <Badge active={emp.status === "Active"}>
                    {emp.status}
                  </Badge>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
