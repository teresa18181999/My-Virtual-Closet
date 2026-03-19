"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FlaskConical, UserRound } from "lucide-react"
import { currentUser } from "@/lib/mock-data"

function ShirtIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

function CameraApertureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  )
}

const navItems = [
  { href: "/feed", label: "Inicio", type: "icon" as const, icon: Home },
  { href: "/closet", label: "Armario", type: "icon" as const, icon: ShirtIcon },
  { href: "/camera", label: "Cámara", type: "center" as const },
  { href: "/lab", label: "Laboratorio", type: "icon" as const, icon: FlaskConical },
  { href: "/profile", label: "Perfil", type: "icon" as const, icon: UserRound },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-50 bg-background" role="navigation" aria-label="Navegación principal">
      {/* Línea gris de separación global - #E5E5E5 */}
      <div className="h-px w-full bg-border" />
      <div className="flex w-full items-center justify-around py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

          if (item.type === "center") {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
                  <CameraApertureIcon className="h-7 w-7 text-background" />
                </div>
              </Link>
            )
          }

          const Icon = item.icon!
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-1 py-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 1.5} />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
