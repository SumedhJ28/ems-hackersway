"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmployeeCheckIn() {
  const [checkInTime, setCheckInTime] = useState<string | null>(null)
  const [checkOutTime, setCheckOutTime] = useState<string | null>(null)

  const handleCheckIn = () => {
    setCheckInTime(new Date().toLocaleTimeString())
  }

  const handleCheckOut = () => {
    setCheckOutTime(new Date().toLocaleTimeString())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button onClick={handleCheckIn} disabled={!!checkInTime}>
            Check In
          </Button>

          <Button
            variant="destructive"
            onClick={handleCheckOut}
            disabled={!checkInTime || !!checkOutTime}
          >
            Check Out
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Check-in: {checkInTime ?? "--:--"}</p>
          <p>Check-out: {checkOutTime ?? "--:--"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
