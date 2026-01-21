"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email === "admin@hackersway.com") {
      document.cookie = "role=admin; path=/"
      router.push("/admin/dashboard")
    } else {
      document.cookie = "role=employee; path=/"
      router.push("/employee/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#06141B] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#11212D] shadow-2xl border border-[#253745]">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-2xl font-semibold text-[#CCD0CF]">
            Hackersway
          </h1>
          <p className="mt-1 text-sm text-[#9BA8AB]">
            Employee Management System
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#253745]" />

        {/* Form */}
        <div className="px-6 py-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#9BA8AB]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@hackersway.com"
              className="mt-1 w-full rounded-lg bg-[#CCD0CF] px-4 py-2 text-sm text-[#06141B] placeholder-[#4A5C6A] focus:outline-none focus:ring-2 focus:ring-[#4A5C6A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#9BA8AB]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg bg-[#CCD0CF] px-4 py-2 text-sm text-[#06141B] placeholder-[#4A5C6A] focus:outline-none focus:ring-2 focus:ring-[#4A5C6A]"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-[#4A5C6A] py-2.5 text-sm font-semibold text-[#CCD0CF] hover:bg-[#253745] transition"
          >
            Sign in
          </button>

          {/* Helper */}
          <div className="text-center text-xs text-[#9BA8AB]">
            Admin: <b>admin@hackersway.com</b><br />
            Employee: any other email
          </div>
        </div>
      </div>
    </div>
  )
}
