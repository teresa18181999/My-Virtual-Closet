"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Heart, Bookmark } from "lucide-react"
import { feedPosts } from "@/lib/mock-data"

export default function PostViewerPage() {
  const params = useParams()
  const postId = params.postId as string
  
  const post = feedPosts.find(p => p.id === postId)
  const [liked, setLiked] = useState(post?.liked ?? false)
  const [saved, setSaved] = useState(post?.saved ?? false)

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">Publicación no encontrada</p>
        <Link href="/feed" className="mt-4 text-primary underline">
          Volver al feed
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      {/* Header */}
      <header className="flex items-center justify-start px-4 py-4 border-b border-border">
        <h1 className="font-serif text-2xl font-bold italic text-primary">Publicaciones</h1>
      </header>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 py-4 overflow-y-auto">
        {/* User info */}
        <Link href={`/profile/${post.username}`} className="flex items-center gap-3 mb-4">
          <Image
            src={post.avatar}
            alt={post.username}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-foreground">{post.username}</span>
        </Link>

        {/* Post image */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={`Publicación de ${post.username}`}
            fill
            className="object-cover"
            sizes="80vw"
            priority
          />
        </div>

        {/* Likes and save */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-2"
            aria-label={liked ? "Quitar me gusta" : "Me gusta"}
          >
            <Heart
              className={`h-7 w-7 ${liked ? "fill-primary text-primary" : "text-foreground"}`}
              strokeWidth={1.5}
            />
            <span className="text-base font-medium text-foreground">
              {liked ? post.likes + 1 : post.likes}
            </span>
          </button>
          <button
            onClick={() => setSaved(!saved)}
            aria-label={saved ? "Quitar guardado" : "Guardar"}
          >
            <Bookmark
              className={`h-7 w-7 ${saved ? "fill-foreground text-foreground" : "text-foreground"}`}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
