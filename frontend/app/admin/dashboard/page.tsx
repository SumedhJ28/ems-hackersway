import EmployeeStatusChart from "@/components/dashboard/EmployeeStatusChart"
import EmployeeTable from "@/components/dashboard/EmployeeTable"
import AdminLayout from "@/components/layout/AdminLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { title: "Total Employees", value: 4 },
  { title: "Active Today", value: 3 },
  { title: "Absent / Not Logged In", value: 2 },
  { title: "On Leave Today", value: 1 },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <h2 className="mb-6 text-3xl font-bold">Admin Dashboard</h2>

      {/* 👇 Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 👇 Chart section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmployeeStatusChart />
      </div>
      <div className="mt-10">
  <EmployeeTable />
</div>

    </AdminLayout>
  )
}
