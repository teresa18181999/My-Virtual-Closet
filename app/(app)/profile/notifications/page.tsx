"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Bell, ChevronRight } from "lucide-react"
import { notifications } from "@/lib/mock-data"

function NotificationItem({
  notification,
}: {
  notification: {
    id: string
    type: string
    avatar: string
    text: string
    postImage?: string
  }
}) {
  return (
    <div className="flex items-center gap-3 py-3">
      <Image
        src={notification.avatar}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <p className="flex-1 text-xs leading-relaxed text-foreground">{notification.text}</p>
      {notification.postImage && (
        <Image
          src={notification.postImage}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-sm object-cover"
        />
      )}
    </div>
  )
}

export default function NotificationsPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-4">
        <Bell className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Notificaciones</h1>
      </header>

      <div className="px-4 py-4">
        {/* Follow requests */}
        <button className="flex w-full items-center gap-3 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
              alt={notifications.followRequests.username}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-bold italic text-foreground">Solicitudes de seguimiento</p>
            <p className="text-xs text-muted-foreground">
              {notifications.followRequests.username} + {notifications.followRequests.count} más
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Today */}
        <h2 className="mt-4 mb-2 font-serif text-base italic text-foreground">Hoy</h2>
        {notifications.today.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}

        {/* Last 7 days */}
        <h2 className="mt-6 mb-2 font-serif text-base italic text-foreground">Ultimos 7 días</h2>
        {notifications.lastWeek.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}

        {/* Last 30 days */}
        <h2 className="mt-6 mb-2 font-serif text-base italic text-foreground">Ultimos 30 días</h2>
        <div className="py-6 text-center text-xs text-muted-foreground">
          No hay notificaciones antiguas
        </div>
      </div>
    </div>
  )
}
