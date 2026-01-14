import EmployeeCheckIn from "@/components/employee/EmployeeCheckIn"
import TodayStatus from "@/components/employee/TodayStatus"
import EmployeeStats from "@/components/employee/EmployeeStats"

export default function EmployeeDashboardPage() {
  return (
    <>
      <h2 className="mb-6 text-3xl font-bold">My Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <EmployeeCheckIn />
        <TodayStatus />
      </div>

      <EmployeeStats />
    </>
  )
}
