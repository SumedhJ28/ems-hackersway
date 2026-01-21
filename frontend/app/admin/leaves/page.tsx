import AdminLayout from "@/components/layout/AdminLayout"
import LeaveApprovalTable from "@/components/dashboard/LeaveApprovalTable"

export default function LeaveApprovalPage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold text-[#CCD0CF]">Leave Approvals</h2>
      <LeaveApprovalTable />
    </AdminLayout>
  )
}
