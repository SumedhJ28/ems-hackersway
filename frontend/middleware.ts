import { NextResponse } from "next/server"

export function middleware(request: any) {
  const role = request.cookies.get("role")?.value
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (pathname.startsWith("/employee") && role !== "employee") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/employee/:path*"],
}
