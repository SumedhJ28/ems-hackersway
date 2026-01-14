"use client"

import Link from "next/link"
import { Users, LayoutDashboard, CalendarDays, Bell } from "lucide-react"

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Employees", href: "/admin/employees", icon: Users },
  { name: "Attendance", href: "/admin/attendance", icon: CalendarDays },
  { name: "Announcements", href: "/admin/announcements", icon: Bell },
  { name: "Leaves", href: "/admin/leaves", icon: CalendarDays },
]

export default function AdminSidebar() {
  const logout = () => {
    document.cookie = "role=; Max-Age=0; path=/"
    window.location.href = "/login"
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background p-4">
      
      {/* 🔹 TOP HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Hackersway Admin</h1>

        <button
          onClick={logout}
          className="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>

      {/* 🔹 NAVIGATION */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>

    </aside>
  )
}
