"use client"

import AdminSidebar from "./AdminSidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#06141B]">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64">
        <AdminSidebar />
      </div>

      {/* Scrollable Content */}
      <main className="ml-64 flex-1 overflow-y-auto p-6 bg-[#06141B]">
        {children}
      </main>
    </div>
  )
}
