"use client"

import EmployeeSidebar from "./EmployeeSidebar"

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <EmployeeSidebar />
      <main className="flex-1 p-6 bg-background">
        {children}
      </main>
    </div>
  )
}
