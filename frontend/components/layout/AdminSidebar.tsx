"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Users,
  LayoutDashboard,
  CalendarDays,
  Bell,
  LogOut,
} from "lucide-react"

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Employees", href: "/admin/employees", icon: Users },
  { name: "Attendance", href: "/admin/attendance", icon: CalendarDays },
  { name: "Leaves", href: "/admin/leaves", icon: CalendarDays },
  { name: "Announcements", href: "/admin/announcements", icon: Bell },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const logout = () => {
    document.cookie = "role=; Max-Age=0; path=/"
    window.location.href = "/login"
  }

  return (
    <aside className="flex h-screen w-64 flex-col bg-[#11212D] border-r border-[#253745]">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-[#253745]">
        <h1 className="text-xl font-semibold text-[#CCD0CF] tracking-tight">
          Hackersway
        </h1>
        <p className="text-xs text-[#9BA8AB]">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition
                ${
                  active
                    ? "bg-[#4A5C6A] text-[#CCD0CF]"
                    : "text-[#9BA8AB] hover:bg-[#253745] hover:text-[#CCD0CF]"
                }
              `}
            >
              <Icon
                className={`h-5 w-5 ${
                  active ? "text-[#CCD0CF]" : "text-[#9BA8AB]"
                }`}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-[#253745] p-4">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#9BA8AB] hover:bg-[#253745] hover:text-[#CCD0CF] transition"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}
