"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Bookmark, Plus, Search } from "lucide-react"
import { feedPosts, stories, currentUser } from "@/lib/mock-data"

function StoryBubble({ username, avatar, hasNew, isCurrentUser = false }: { username: string; avatar: string; hasNew: boolean; isCurrentUser?: boolean }) {
  const content = (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <div className={`rounded-full p-0.5 ${hasNew ? "bg-gradient-to-br from-primary to-accent" : "bg-border"}`}>
          <div className="rounded-full border-2 border-background">
            <Image
              src={avatar}
              alt={username}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
        </div>
        {isCurrentUser && (
          <Link 
            href="/camera/story" 
            className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="Subir historia"
          >
            <Plus className="h-3 w-3" strokeWidth={3} />
          </Link>
        )}
      </div>
    </div>
  )

  if (isCurrentUser) {
    return content
  }

  return (
    <Link href={`/stories/${username}`}>
      {content}
    </Link>
  )
}

function PostCard({
  post,
  onToggleLike,
  onToggleSave,
}: {
  post: typeof feedPosts[0]
  onToggleLike: () => void
  onToggleSave: () => void
}) {
  return (
    <article className="flex flex-col">
      <Link href={`/profile/${post.username}`} className="flex items-center gap-3 px-4 py-3">
        <Image
          src={post.avatar}
          alt={post.username}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-foreground">{post.username}</span>
      </Link>

      <div className="relative aspect-[3/4] w-full">
        <Image
          src={post.image}
          alt={`Publicación de ${post.username}`}
          fill
          className="object-cover"
          sizes="(max-width: 512px) 100vw, 512px"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onToggleLike}
          className="flex items-center gap-1.5"
          aria-label={post.liked ? "Quitar me gusta" : "Me gusta"}
        >
          <Heart
            className={`h-6 w-6 ${post.liked ? "fill-primary text-primary" : "text-foreground"}`}
            strokeWidth={1.5}
          />
          <span className="text-sm font-medium text-foreground">{post.likes.toString()}</span>
        </button>
        <button
          onClick={onToggleSave}
          aria-label={post.saved ? "Quitar guardado" : "Guardar"}
        >
          <Bookmark
            className={`h-6 w-6 ${post.saved ? "fill-foreground text-foreground" : "text-foreground"}`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </article>
  )
}

export default function FeedPage() {
  const [posts, setPosts] = useState(feedPosts)

  function toggleLike(id: string) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    )
  }

  function toggleSave(id: string) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
    )
  }

  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-background">
        <h1 className="font-serif text-xl font-bold italic text-primary">MyVirtualCloset</h1>
        <Link href="/search" aria-label="Buscar">
          <Search className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </Link>
      </header>

      {/* Stories - pegadas debajo del título */}
      <div className="flex gap-4 overflow-x-auto px-4 py-2 bg-background scrollbar-hide">
        {/* Current user story bubble with + button */}
        <StoryBubble
          username={currentUser.username}
          avatar={currentUser.avatar}
          hasNew={false}
          isCurrentUser={true}
        />
        {/* Other users' stories */}
        {stories.filter(s => s.username !== currentUser.username).map((story) => (
          <StoryBubble key={story.id} {...story} />
        ))}
      </div>

      {/* Separator */}
      <div className="h-px bg-border" />

      {/* Posts - con padding inferior para BottomNav */}
      <div className="flex flex-col flex-1 pb-20 bg-background">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onToggleLike={() => toggleLike(post.id)}
            onToggleSave={() => toggleSave(post.id)}
          />
        ))}
      </div>
    </div>
  )
}
