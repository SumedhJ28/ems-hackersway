import EmployeeCheckIn from "@/components/employee/EmployeeCheckIn"
import TodayStatus from "@/components/employee/TodayStatus"
import EmployeeStats from "@/components/employee/EmployeeStats"

export default function EmployeeDashboardPage() {
  return (
    <>
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#CCD0CF]">
          My Dashboard
        </h2>
        <p className="mt-1 text-sm text-[#9BA8AB]">
          Overview of today’s attendance and monthly summary
        </p>
      </div>

      {/* ROW 1 — ACTION + STATUS (PRIMARY FOCUS) */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Attendance takes more space */}
        <div className="lg:col-span-2">
          <EmployeeCheckIn />
        </div>

        {/* Compact status card */}
        <TodayStatus />
      </div>

      {/* ROW 2 — STATS (SECONDARY INFO) */}
      <div className="mt-10">
        <EmployeeStats />
      </div>
    </>
  )
}
