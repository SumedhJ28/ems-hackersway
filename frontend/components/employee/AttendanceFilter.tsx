"use client"

type Props = {
  month: number
  year: number
  onMonthChange: (m: number) => void
  onYearChange: (y: number) => void
}

export default function AttendanceFilter({
  month,
  year,
  onMonthChange,
  onYearChange,
}: Props) {
  return (
    <div className="mb-4 flex gap-4">
      <select
        className="rounded border px-3 py-2"
        value={month}
        onChange={(e) => onMonthChange(Number(e.target.value))}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <option key={i} value={i}>
            {new Date(0, i).toLocaleString("default", { month: "long" })}
          </option>
        ))}
      </select>

      <select
        className="rounded border px-3 py-2"
        value={year}
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        {[2024, 2025, 2026].map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  )
}
