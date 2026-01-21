import AdminLayout from "@/components/layout/AdminLayout"
import AttendanceTable from "@/components/dashboard/AttendanceTable"

export default function AttendancePage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold text-[#CCD0CF]">Attendance</h2>
      <AttendanceTable />
    </AdminLayout>
  )
}
