import AdminLayout from "@/components/layout/AdminLayout"
import CreateEmployeeForm from "@/components/dashboard/CreateEmployeeForm"

export default function CreateEmployeePage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold">Add New Employee</h2>
      <CreateEmployeeForm />
    </AdminLayout>
  )
}
