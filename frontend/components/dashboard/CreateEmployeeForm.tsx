"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function generatePassword() {
  return Math.random().toString(36).slice(-8)
}

export default function CreateEmployeeForm({
  onSuccess,
}: {
  onSuccess?: () => void
}) {
  const [password, setPassword] = useState("")

  return (
    <div className="space-y-4">
      <div>
        <Label>Name</Label>
        <Input placeholder="Employee Name" />
      </div>

      <div>
        <Label>Email</Label>
        <Input placeholder="employee@hackersway.com" />
      </div>

      <div>
        <Label>Department</Label>
        <Input placeholder="Tech / HR / QA" />
      </div>

      <div>
        <Label>Role</Label>
        <Input placeholder="Developer / Intern" />
      </div>

      <div>
        <Label>Generated Password</Label>
        <Input value={password} readOnly />
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => setPassword(generatePassword())}
        >
          Generate Password
        </Button>

        <Button
          onClick={() => {
            // UI-only success
            onSuccess?.()
          }}
        >
          Create Employee
        </Button>
      </div>
    </div>
  )
}
