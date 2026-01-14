import AdminLayout from "@/components/layout/AdminLayout"
import AdminEmployeeTable from "@/components/dashboard/AdminEmployeeTable"

export default function AdminEmployeesPage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold">Employees</h2>
      <AdminEmployeeTable />
    </AdminLayout>
  )
}
