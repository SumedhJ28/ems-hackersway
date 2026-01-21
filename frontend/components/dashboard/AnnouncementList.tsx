"use client"

import { ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* -------------------- Helpers -------------------- */

const TODAY = new Date()

function isExpired(endDate: string) {
  return new Date(endDate) < TODAY
}

function isNew(startDate: string) {
  const diffInDays =
    (TODAY.getTime() - new Date(startDate).getTime()) /
    (1000 * 60 * 60 * 24)
  return diffInDays <= 3
}

/* -------------------- Local UI Components -------------------- */

function Card({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-[#253745] bg-[#11212D] shadow-sm">
      {children}
    </div>
  )
}

function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#253745]">
      {children}
    </div>
  )
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-[#CCD0CF]">
      {children}
    </h3>
  )
}

function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 text-[#9BA8AB] text-sm">
      {children}
    </div>
  )
}

function Badge({
  children,
  variant = "secondary",
}: {
  children: ReactNode
  variant?: "destructive" | "secondary" | "new"
}) {
  const styles = {
    destructive: "bg-[#4A5C6A] text-[#CCD0CF]",
    secondary: "bg-[#253745] text-[#9BA8AB]",
    new: "bg-[#06141B] text-[#CCD0CF]",
  }

  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}

function Button({
  children,
  onClick,
  variant = "primary",
}: {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md text-sm font-medium transition
        ${
          variant === "primary"
            ? "bg-[#4A5C6A] text-[#CCD0CF] hover:bg-[#253745]"
            : "bg-[#253745] text-[#9BA8AB] hover:bg-[#4A5C6A]"
        }
      `}
    >
      {children}
    </button>
  )
}

/* -------------------- Component -------------------- */

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Office Closed on Republic Day",
      description: "Office will remain closed on 26th January.",
      priority: "High",
      startDate: "2026-01-25",
      endDate: "2026-01-26",
    },
  ])

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Normal",
    endDate: "",
  })

  const addAnnouncement = () => {
    setAnnouncements([
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        priority: form.priority,
        startDate: new Date().toISOString().slice(0, 10),
        endDate: form.endDate,
      },
      ...announcements,
    ])
    setOpen(false)
    setForm({ title: "", description: "", priority: "Normal", endDate: "" })
  }

  const visibleAnnouncements = announcements.filter(
    (item) => !isExpired(item.endDate)
  )

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#CCD0CF]">
          Announcements
        </h2>
        <Button onClick={() => setOpen(true)}>
          + Add Announcement
        </Button>
      </div>

      {/* List */}
      <motion.div layout className="grid gap-4">
        {visibleAnnouncements.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{item.title}</CardTitle>
                  {isNew(item.startDate) && (
                    <Badge variant="new">NEW</Badge>
                  )}
                </div>
                <Badge
                  variant={
                    item.priority === "High"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {item.priority}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="mb-1">
                  {item.description}
                </p>
                <p className="text-xs text-[#9BA8AB]">
                  {item.startDate} → {item.endDate}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-96 rounded-xl bg-[#11212D] border border-[#253745] p-4 space-y-3"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <h3 className="font-semibold text-[#CCD0CF]">
                Add Announcement
              </h3>

              <input
                className="w-full rounded bg-[#CCD0CF] px-3 py-1.5 text-sm text-[#06141B] focus:outline-none"
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <textarea
                className="w-full rounded bg-[#CCD0CF] px-3 py-1.5 text-sm text-[#06141B] focus:outline-none"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <select
                className="w-full rounded bg-[#CCD0CF] px-3 py-1.5 text-sm text-[#06141B]"
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value })
                }
              >
                <option>Normal</option>
                <option>High</option>
              </select>

              <input
                type="date"
                className="w-full rounded bg-[#CCD0CF] px-3 py-1.5 text-sm text-[#06141B]"
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
              />

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={addAnnouncement}>
                  Add
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
