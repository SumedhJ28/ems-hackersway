"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function EmployeeSidebar() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `block rounded px-3 py-2 ${
      pathname === path
        ? "bg-muted font-semibold"
        : "hover:bg-muted"
    }`

  const logout = () => {
    document.cookie = "role=; Max-Age=0; path=/"
    window.location.href = "/login"
  }

  return (
    <aside className="flex w-64 flex-col border-r p-4">
      
      {/* 🔹 TOP SECTION */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold">Employee Panel</h2>

        <button
          onClick={logout}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>

      {/* 🔹 NAVIGATION */}
      <nav className="space-y-2">
        <Link
          href="/employee/dashboard"
          className={linkClass("/employee/dashboard")}
        >
          Dashboard
        </Link>

        <Link
          href="/employee/attendance"
          className={linkClass("/employee/attendance")}
        >
          My Attendance
        </Link>

        <Link
          href="/employee/leaves"
          className={linkClass("/employee/leaves")}
        >
          Apply Leave
        </Link>

        <Link
          href="/employee/announcements"
          className={linkClass("/employee/announcements")}
        >
          Announcements
        </Link>
      </nav>
    </aside>
  )
}
