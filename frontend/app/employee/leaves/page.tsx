import ApplyLeaveForm from "@/components/employee/ApplyLeaveForm"
import LeaveHistoryTable from "@/components/employee/LeaveHistoryTable"

export default function EmployeeLeavesPage() {
  return (
    <>
      <h2 className="mb-6 text-3xl font-bold text-[#CCD0CF]">Apply Leave</h2>

      <ApplyLeaveForm />

      <LeaveHistoryTable />
    </>
  )
}
