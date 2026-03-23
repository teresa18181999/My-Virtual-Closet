"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, UserPlus } from "lucide-react"
import { followRequests } from "@/lib/mock-data"

export default function FollowRequestsPage() {
  const router = useRouter()
  const [requests, setRequests] = useState(followRequests)

  const handleAccept = (id: string) => {
    setRequests(requests.filter(r => r.id !== id))
  }

  const handleReject = (id: string) => {
    setRequests(requests.filter(r => r.id !== id))
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-4">
        <button onClick={() => router.back()} aria-label="Volver">
          <ArrowLeft className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2">
          <UserPlus className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          <h1 className="font-serif text-xl font-bold italic text-primary">Solicitudes de seguimiento</h1>
        </div>
      </header>

      {/* Requests list */}
      <div className="px-4 py-2">
        {requests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <UserPlus className="h-12 w-12 mb-2" strokeWidth={1} />
            <p className="text-sm">No tienes solicitudes pendientes</p>
          </div>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="flex items-center gap-3 py-3">
              <Image
                src={request.avatar}
                alt={request.username}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <span className="flex-1 text-sm font-medium text-foreground">{request.username}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(request.id)}
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Aceptar
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Rechazar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
