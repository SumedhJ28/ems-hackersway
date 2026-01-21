"use client"

export default function TodayStatus() {
  const today = new Date().toDateString()

  return (
    <div className="rounded-xl border border-[#253745] bg-[#11212D] p-5">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#CCD0CF]">
          Today's Status
        </h3>
        <p className="text-sm text-[#9BA8AB]">
          Daily attendance overview
        </p>
      </div>

      {/* Content */}
      <div className="space-y-2 text-sm">
        <p className="text-[#9BA8AB]">
          Date:{" "}
          <span className="text-[#CCD0CF] font-medium">
            {today}
          </span>
        </p>

        <p className="text-[#9BA8AB]">
          Status:{" "}
          <span className="inline-block rounded-md bg-[#4A5C6A] px-2 py-0.5 text-xs font-medium text-[#CCD0CF]">
            Present
          </span>
        </p>
      </div>
    </div>
  )
}
