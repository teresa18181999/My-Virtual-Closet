"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Users } from "lucide-react"
import { otherUsersFollowers, otherUsers } from "@/lib/mock-data"

export default function UserFollowersPage() {
  const router = useRouter()
  const params = useParams()
  const username = params.username as string
  
  const user = otherUsers[username]
  const initialFollowers = otherUsersFollowers[username] || []
  const [followers, setFollowers] = useState(initialFollowers)

  const toggleFollow = (id: string) => {
    setFollowers(followers.map(f => 
      f.id === id ? { ...f, isFollowing: !f.isFollowing } : f
    ))
  }

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

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-4">
        <button onClick={() => router.back()} aria-label="Volver">
          <ArrowLeft className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          <h1 className="font-serif text-xl font-bold italic text-primary">Seguidores de {user.username}</h1>
        </div>
      </header>

      {/* Followers list */}
      <div className="px-4 py-2">
        {followers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Users className="h-12 w-12 mb-2" strokeWidth={1} />
            <p className="text-sm">{user.username} no tiene seguidores</p>
          </div>
        ) : (
          followers.map((follower) => (
            <div key={follower.id} className="flex items-center gap-3 py-3">
              <Link href={`/profile/${follower.username}`}>
                <Image
                  src={follower.avatar}
                  alt={follower.username}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
              </Link>
              <Link href={`/profile/${follower.username}`} className="flex-1">
                <span className="text-sm font-medium text-foreground">{follower.username}</span>
              </Link>
              <button
                onClick={() => toggleFollow(follower.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  follower.isFollowing
                    ? "border border-border bg-background text-foreground hover:bg-secondary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {follower.isFollowing ? "Siguiendo" : "Seguir"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
