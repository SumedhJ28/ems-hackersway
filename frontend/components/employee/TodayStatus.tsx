"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TodayStatus() {
  const today = new Date().toDateString()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today’s Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>Date: {today}</p>
        <p>
          Status:{" "}
          <span className="font-semibold text-green-600">
            Present
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
