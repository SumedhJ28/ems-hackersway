"use client"

import { useState } from "react"

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
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-[#CCD0CF]">
          Employee Details
        </h3>
        <p className="mt-1 text-sm text-[#9BA8AB]">
          Enter employee information and generate login credentials
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Name
          </label>
          <input
            className="w-full rounded-md bg-[#CCD0CF] px-3 py-2 text-sm text-[#06141B] focus:outline-none"
            placeholder="Employee Name"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Email
          </label>
          <input
            className="w-full rounded-md bg-[#CCD0CF] px-3 py-2 text-sm text-[#06141B] focus:outline-none"
            placeholder="employee@hackersway.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Department
          </label>
          <input
            className="w-full rounded-md bg-[#CCD0CF] px-3 py-2 text-sm text-[#06141B] focus:outline-none"
            placeholder="Tech / HR / QA"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Role
          </label>
          <input
            className="w-full rounded-md bg-[#CCD0CF] px-3 py-2 text-sm text-[#06141B] focus:outline-none"
            placeholder="Developer / Intern"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <label className="text-sm text-[#9BA8AB]">
          Generated Password
        </label>

        <div className="flex gap-2">
          <input
            value={password}
            readOnly
            className="flex-1 rounded-md bg-[#CCD0CF] px-3 py-2 text-sm text-[#06141B]"
          />

          <button
            type="button"
            onClick={() => setPassword(generatePassword())}
            className="rounded-md bg-[#253745] px-3 py-2 text-sm text-[#CCD0CF] hover:bg-[#4A5C6A] transition"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t border-[#253745]">
        <button
          onClick={() => onSuccess?.()}
          className="rounded-md bg-[#253745] px-4 py-2 text-sm text-[#9BA8AB] hover:bg-[#4A5C6A] transition"
        >
          Cancel
        </button>

        <button
          onClick={() => onSuccess?.()}
          className="rounded-md bg-[#4A5C6A] px-4 py-2 text-sm font-medium text-[#CCD0CF] hover:bg-[#253745] transition"
        >
          Create Employee
        </button>
      </div>
    </div>
  )
}
