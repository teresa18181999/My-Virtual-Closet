"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Settings, Grid3X3, Bookmark, CalendarDays, Bell, Users } from "lucide-react"
import { currentUser, profilePosts, savedPosts } from "@/lib/mock-data"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"grid" | "saved">("grid")

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <User className="h-7 w-7 text-foreground" strokeWidth={1.5} />
          <h1 className="font-serif text-2xl font-bold italic text-primary">Perfil</h1>
        </div>
        <Link href="/profile/settings" aria-label="Configuración">
          <Settings className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </Link>
      </header>

      {/* Profile info */}
      <div className="border-t border-border px-4 pt-6 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/30">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt={currentUser.username}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-foreground">{currentUser.username}</span>
        </div>

        {/* Stats - Botones rosa suave con iconos */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          <Link 
            href="/profile" 
            className="flex flex-col items-center gap-1.5 rounded-xl bg-accent px-2 py-3 transition-colors hover:bg-secondary"
          >
            <Grid3X3 className="h-6 w-6 text-accent-foreground" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-accent-foreground">Publicaciones</span>
          </Link>
          <Link 
            href="/profile/calendar" 
            className="flex flex-col items-center gap-1.5 rounded-xl bg-accent px-2 py-3 transition-colors hover:bg-secondary"
          >
            <CalendarDays className="h-6 w-6 text-accent-foreground" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-accent-foreground">OOTD</span>
          </Link>
          <Link 
            href="/profile" 
            className="flex flex-col items-center gap-1.5 rounded-xl bg-accent px-2 py-3 transition-colors hover:bg-secondary"
          >
            <Users className="h-6 w-6 text-accent-foreground" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-accent-foreground">Seguidores</span>
          </Link>
          <Link 
            href="/profile/notifications" 
            className="flex flex-col items-center gap-1.5 rounded-xl bg-accent px-2 py-3 transition-colors hover:bg-secondary"
          >
            <Bell className="h-6 w-6 text-accent-foreground" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-accent-foreground">Alertas</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("grid")}
          className={`flex flex-1 items-center justify-center py-3 ${
            activeTab === "grid"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground"
          }`}
          aria-label="Publicaciones"
        >
          <Grid3X3 className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={`flex flex-1 items-center justify-center py-3 ${
            activeTab === "saved"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground"
          }`}
          aria-label="Guardados"
        >
          <Bookmark className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Photo grid - Publications or Saved */}
      <div className="grid grid-cols-3 gap-0.5">
        {activeTab === "grid" ? (
          profilePosts.map((img, i) => (
            <Link key={i} href={`/posts/${i}`} className="relative aspect-square">
              <Image
                src={img}
                alt={`Publicación ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </Link>
          ))
        ) : (
          savedPosts.length > 0 ? (
            savedPosts.map((img, i) => (
              <Link key={i} href={`/posts/saved-${i}`} className="relative aspect-square">
                <Image
                  src={img}
                  alt={`Guardado ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </Link>
            ))
          ) : (
            <div className="col-span-3 flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Bookmark className="h-12 w-12 mb-2" strokeWidth={1} />
              <p className="text-sm">No tienes publicaciones guardadas</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
