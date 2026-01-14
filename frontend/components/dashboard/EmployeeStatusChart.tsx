"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function EmployeeStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="mb-1 flex justify-between text-sm">
            <span>Present</span>
            <span>70%</span>
          </div>
          <Progress value={70} />
        </div>

        <div>
          <div className="mb-1 flex justify-between text-sm">
            <span>Absent</span>
            <span>20%</span>
          </div>
          <Progress value={20} />
        </div>

        <div>
          <div className="mb-1 flex justify-between text-sm">
            <span>On Leave</span>
            <span>10%</span>
          </div>
          <Progress value={10} />
        </div>
      </CardContent>
    </Card>
  )
}
