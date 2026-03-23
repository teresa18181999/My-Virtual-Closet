"use client"

import { ReactNode } from "react"

export function CameraLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-background">
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
