"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmployeeStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Present Days</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">18</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Absent Days</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">2</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Leaves Taken</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">3</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Late Entries</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">1</CardContent>
      </Card>
    </div>
  )
}
