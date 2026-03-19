"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { X } from "lucide-react"
import { exploreImages } from "@/lib/mock-data"

export default function AddCaptionPage() {
  const searchParams = useSearchParams()
  const imageUrl = searchParams.get("image") || exploreImages[0]
  const [caption, setCaption] = useState("")

  return (
    <div className="flex h-full w-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <Link 
          href="/camera"
          className="p-1"
          aria-label="Volver"
        >
          <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </Link>
        <h1 className="font-serif text-xl font-bold italic text-primary">
          Nueva publicación
        </h1>
        <div className="w-8" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 py-6 gap-6 overflow-y-auto">
        {/* Selected image preview */}
        <div className="relative w-40 h-40 mx-auto rounded-sm overflow-hidden shrink-0">
          <Image
            src={imageUrl}
            alt="Imagen seleccionada"
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Caption input */}
        <div className="flex-1">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Añade pie de foto..."
            className="w-full h-32 p-4 border-2 border-primary/30 rounded-xl resize-none focus:outline-none focus:border-primary text-sm"
          />
        </div>
      </div>

      {/* Publish button */}
      <div className="px-4 py-6 shrink-0">
        <Link
          href="/feed"
          className="block w-48 mx-auto py-3 text-center rounded-full bg-primary/20 text-primary font-medium text-sm hover:bg-primary/30 transition-colors"
        >
          Publicar
        </Link>
      </div>
    </div>
  )
}
