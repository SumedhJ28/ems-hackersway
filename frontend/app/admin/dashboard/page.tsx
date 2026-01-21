import EmployeeTable from "@/components/dashboard/EmployeeTable"
import AdminLayout from "@/components/layout/AdminLayout"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stats = [
  { title: "Total Employees", value: 4 },
  { title: "Active Today", value: 3 },
  { title: "Absent / Not Logged In", value: 2 },
  { title: "On Leave Today", value: 1 },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#CCD0CF]">
          Admin Dashboard
        </h2>
        <p className="mt-1 text-sm text-[#CCD0CF]">
          Overview of employee activity and system status
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="bg-[#11212D] border border-[#253745]"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#9BA8AB]">
                {stat.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-semibold text-[#CCD0CF]">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     {/* Insights & Summary */}
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
  
  {/* Employee Status Overview */}
  <Card className="bg-[#11212D] border border-[#253745]">
    <CardHeader>
      <CardTitle className="text-lg text-[#CCD0CF]">
        Employee Status Overview
      </CardTitle>
      <p className="text-sm text-[#9BA8AB]">
        Today’s workforce distribution
      </p>
    </CardHeader>

    <CardContent className="space-y-4">
      {[
        { label: "Present", value: 70 },
        { label: "Absent", value: 20 },
        { label: "On Leave", value: 10 },
      ].map((item) => (
        <div key={item.label}>
          <div className="mb-1 flex justify-between text-sm text-[#9BA8AB]">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#253745]">
            <div
              className="h-2 rounded-full bg-[#4A5C6A]"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </CardContent>
  </Card>

  {/* Today Summary */}
  <Card className="bg-[#11212D] border border-[#253745]">
    <CardHeader>
      <CardTitle className="text-lg text-[#CCD0CF]">
        Today Summary
      </CardTitle>
      <p className="text-sm text-[#9BA8AB]">
        Key highlights for administrators
      </p>
    </CardHeader>

    <CardContent className="space-y-4 text-sm">
      <div className="flex justify-between">
        <span className="text-[#9BA8AB]">
          Attendance Recorded
        </span>
        <span className="font-medium text-[#CCD0CF]">
          75%
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-[#9BA8AB]">
          Leave Requests Today
        </span>
        <span className="font-medium text-[#CCD0CF]">
          1
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-[#9BA8AB]">
          Pending Approvals
        </span>
        <span className="font-medium text-[#CCD0CF]">
          2
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-[#9BA8AB]">
          Inactive Employees
        </span>
        <span className="font-medium text-[#CCD0CF]">
          1
        </span>
      </div>
    </CardContent>
  </Card>

</div>


      {/* Employee Table */}
      <div className="mt-10">
        <EmployeeTable />
      </div>
    </AdminLayout>
  )
}
