"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { X } from "lucide-react"
import { stories } from "@/lib/mock-data"

export default function StoryViewerPage() {
  const params = useParams()
  const router = useRouter()
  const username = params.username as string

  const story = stories.find(s => s.username === username)

  if (!story) {
    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center bg-background">
        <p className="text-muted-foreground">Historia no encontrada</p>
        <Link href="/feed" className="mt-4 text-primary underline">
          Volver al feed
        </Link>
      </div>
    )
  }

  return (
    <div className="flex h-dvh w-full flex-col bg-black">
      {/* Story image - full screen vertical */}
      <div className="relative flex-1">
        <Image
          src={story.storyImage}
          alt={`Historia de ${story.username}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Progress bar - highest z-index */}
        <div className="absolute top-0 left-0 right-0 z-[100] px-2 pt-2">
          <div className="h-[2px] w-full rounded-full bg-white/30">
            <div className="h-full w-full animate-[progress_5s_linear] rounded-full bg-white" />
          </div>
        </div>

        {/* User info - Top Left */}
        <button 
          onClick={() => router.push(`/profile/${story.username}`)}
          className="absolute top-6 left-4 z-[90] flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
            <Image
              src={story.avatar}
              alt={story.username}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-white drop-shadow-md">{story.username}</span>
        </button>

        {/* Close button - Top Right */}
        <button 
          onClick={() => router.push("/feed")} 
          className="absolute top-6 right-4 z-[90] p-2 text-white drop-shadow-md hover:opacity-70 transition-opacity"
          aria-label="Cerrar historia"
        >
          <X size={28} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
