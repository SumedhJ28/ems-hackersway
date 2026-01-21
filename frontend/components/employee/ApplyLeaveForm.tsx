"use client"

import { useState } from "react"
import { CalendarDays, FileText } from "lucide-react"

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
    alert("Leave applied successfully (mock)")
  }

  return (
    <div className="rounded-xl border border-[#253745] bg-[#11212D]">
      {/* Header */}
      <div className="border-b border-[#253745] px-5 py-4">
        <h3 className="text-lg font-semibold text-[#CCD0CF]">
          Apply Leave
        </h3>
        <p className="text-sm text-[#9BA8AB]">
          Submit a leave request for approval
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-5 space-y-5">
        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[#9BA8AB]">
              From Date
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5C6A]" />
              <input
                type="date"
                name="from"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#253745] bg-[#0F172A] px-4 py-2 pl-9 text-sm text-[#CCD0CF] focus:outline-none focus:border-[#4A5C6A]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#9BA8AB]">
              To Date
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5C6A]" />
              <input
                type="date"
                name="to"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#253745] bg-[#0F172A] px-4 py-2 pl-9 text-sm text-[#CCD0CF] focus:outline-none focus:border-[#4A5C6A]"
              />
            </div>
          </div>
        </div>

        {/* Leave Type */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Leave Type
          </label>
          <select
            name="type"
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#253745] bg-[#0F172A] px-4 py-2 text-sm text-[#CCD0CF] focus:outline-none focus:border-[#4A5C6A]"
          >
            <option value="">Select leave type</option>
            <option value="Sick">Sick Leave</option>
            <option value="Casual">Casual Leave</option>
            <option value="Paid">Paid Leave</option>
          </select>
        </div>

        {/* Reason */}
        <div className="space-y-1.5">
          <label className="text-sm text-[#9BA8AB]">
            Reason
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-4 w-4 text-[#4A5C6A]" />
            <input
              name="reason"
              placeholder="Brief reason for leave"
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#253745] bg-[#0F172A] px-4 py-2 pl-9 text-sm text-[#CCD0CF] placeholder-[#9BA8AB] focus:outline-none focus:border-[#4A5C6A]"
            />
          </div>
        </div>

        {/* Action */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="rounded-lg bg-[#253745] px-6 py-2 text-sm font-medium text-[#CCD0CF] hover:bg-[#4A5C6A] transition"
          >
            Submit Leave
          </button>
        </div>
      </form>
    </div>
  )
}
