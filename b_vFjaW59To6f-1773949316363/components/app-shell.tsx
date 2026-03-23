"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { BottomNav } from "./bottom-nav"

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideBottomNav = 
    pathname.startsWith("/camera") || 
    pathname.startsWith("/stories")
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      {/* Mobile container - phone simulation */}
      <div className="relative mx-auto h-screen max-h-[900px] w-full max-w-sm overflow-hidden bg-background shadow-2xl">
        <div className="flex h-full flex-col">
          <main className={`flex-1 overflow-y-auto ${hideBottomNav ? "" : "pb-20"}`}>
            {children}
          </main>
          {!hideBottomNav && <BottomNav />}
        </div>
      </div>
    </div>
  )
}
