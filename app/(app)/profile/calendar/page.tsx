"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { profilePosts } from "@/lib/mock-data"

const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 18)) // Marzo 2026
  const today = new Date(2026, 2, 18) // Today is March 18, 2026

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7

  const monthName = currentDate.toLocaleDateString("es-ES", { month: "long" })
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1)

  // Mock: some days have OOTD posts
  const ootdDays = [2, 5, 8, 10, 14, 16, 21, 23, 27]

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const isToday = (day: number) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-4 bg-background">
        <CalendarDays className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">OOTD Calendario</h1>
      </header>

      {/* Month navigation */}
      <div className="flex items-center justify-center gap-4 px-4 py-3 bg-background">
        <button onClick={goToPrevMonth} aria-label="Mes anterior" className="p-1">
          <ChevronLeft className="h-5 w-5 text-foreground" strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-foreground min-w-[140px] text-center">
          {capitalizedMonth} De {year}
        </span>
        <button onClick={goToNextMonth} aria-label="Mes siguiente" className="p-1">
          <ChevronRight className="h-5 w-5 text-foreground" strokeWidth={2} />
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 px-4 bg-background">
        {daysOfWeek.map((d) => (
          <div key={d} className="flex items-center justify-center py-2 text-xs font-medium text-muted-foreground">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid - clean design without photos */}
      <div className="grid grid-cols-7 gap-1 px-4 pb-4 bg-background">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="h-10" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const hasOotd = ootdDays.includes(day)
          const isTodayDay = isToday(day)
          
          return (
            <button
              key={day}
              className={`flex h-10 w-10 mx-auto items-center justify-center rounded-full text-xs font-medium transition-colors ${
                isTodayDay
                  ? "border-2 border-primary bg-background text-primary"
                  : hasOotd
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Recent OOTD section */}
      <div className="flex-1 px-4 py-4 pb-24 bg-background">
        <h2 className="mb-3 text-sm font-semibold text-foreground">OOTD Recientes</h2>
        <div className="grid grid-cols-3 gap-2">
          {profilePosts.slice(0, 3).map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={img}
                alt={`OOTD ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
