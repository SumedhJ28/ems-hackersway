"use client"

import { useState } from "react"

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
    <div className="rounded-xl border border-[#253745] bg-[#11212D] p-5">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#CCD0CF]">
          Attendance
        </h3>
        <p className="text-sm text-[#9BA8AB]">
          Mark your daily check-in and check-out
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleCheckIn}
          disabled={!!checkInTime}
          className={`rounded-md px-4 py-2 text-sm font-medium transition
            ${
              checkInTime
                ? "cursor-not-allowed bg-[#253745] text-[#9BA8AB]"
                : "bg-[#4A5C6A] text-[#CCD0CF] hover:bg-[#253745]"
            }
          `}
        >
          Check In
        </button>

        <button
          onClick={handleCheckOut}
          disabled={!checkInTime || !!checkOutTime}
          className={`rounded-md px-4 py-2 text-sm font-medium transition
            ${
              !checkInTime || checkOutTime
                ? "cursor-not-allowed bg-[#253745] text-[#9BA8AB]"
                : "bg-[#06141B] text-[#CCD0CF] hover:bg-[#253745]"
            }
          `}
        >
          Check Out
        </button>
      </div>

      {/* Status */}
      <div className="mt-4 space-y-1 text-sm">
        <p className="text-[#9BA8AB]">
          Check-in:{" "}
          <span className="font-medium text-[#CCD0CF]">
            {checkInTime ?? "--:--"}
          </span>
        </p>

        <p className="text-[#9BA8AB]">
          Check-out:{" "}
          <span className="font-medium text-[#CCD0CF]">
            {checkOutTime ?? "--:--"}
          </span>
        </p>
      </div>
    </div>
  )
}
