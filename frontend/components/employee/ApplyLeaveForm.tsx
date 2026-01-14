"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function ApplyLeaveForm() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    type: "",
    reason: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Leave Applied:", form)
    alert("Leave applied successfully (mock)")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply Leave</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>From Date</Label>
            <Input type="date" name="from" onChange={handleChange} required />
          </div>

          <div>
            <Label>To Date</Label>
            <Input type="date" name="to" onChange={handleChange} required />
          </div>

          <div>
            <Label>Leave Type</Label>
            <select
              name="type"
              onChange={handleChange}
              className="w-full rounded border px-3 py-2"
              required
            >
              <option value="">Select</option>
              <option value="Sick">Sick Leave</option>
              <option value="Casual">Casual Leave</option>
              <option value="Paid">Paid Leave</option>
            </select>
          </div>

          <div>
            <Label>Reason</Label>
            <Input
              name="reason"
              placeholder="Enter reason"
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit">Submit Leave</Button>
        </form>
      </CardContent>
    </Card>
  )
}
