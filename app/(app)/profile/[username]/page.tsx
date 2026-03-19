"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { User, Grid3X3 } from "lucide-react"
import { otherUsers, currentUser } from "@/lib/mock-data"

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string

  if (username === currentUser.username) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground text-sm">Este es tu perfil.</p>
        <Link href="/profile" className="mt-4 text-primary underline text-sm">
          Ver mi perfil
        </Link>
      </div>
    )
  }

  const user = otherUsers[username]

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">Usuario no encontrado</p>
        <Link href="/feed" className="mt-4 text-primary underline">
          Volver al feed
        </Link>
      </div>
    )
  }

  return <UserProfileContent user={user} />
}

function UserProfileContent({ user }: { user: typeof otherUsers[keyof typeof otherUsers] }) {
  const [isFollowing, setIsFollowing] = useState(user.following)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-4">
        <User className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Perfil</h1>
      </header>

      {/* Profile info */}
      <div className="border-t border-border px-4 pt-6 pb-4">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/30">
            <Image
              src={user.avatar}
              alt={user.username}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-foreground">{user.username}</span>
        </div>

        {/* Follow button - centered and prominent */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`rounded-full px-8 py-2 text-sm font-medium transition-colors ${
              isFollowing
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isFollowing ? "Siguiendo" : "Seguir"}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/50 px-3 py-4">
            <span className="text-lg font-bold text-foreground">{user.posts}</span>
            <span className="text-xs font-medium text-foreground">Publicaciones</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/50 px-3 py-4">
            <span className="text-lg font-bold text-foreground">{user.followers}</span>
            <span className="text-xs font-medium text-foreground">Seguidores</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          className="flex flex-1 items-center justify-center py-3 border-b-2 border-primary text-foreground"
          aria-label="Publicaciones"
        >
          <Grid3X3 className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {user.postImages.map((img, i) => (
          <Link key={i} href={`/posts/${i}`} className="relative aspect-square">
            <Image
              src={img}
              alt={`Publicación ${i + 1}`}
              fill
              priority={i < 3}
              className="object-cover"
              sizes="33vw"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
