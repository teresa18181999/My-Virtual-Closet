"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { X } from "lucide-react"
import { profilePosts } from "@/lib/mock-data"

export default function PostUploadPage() {
  const router = useRouter()
  const [caption, setCaption] = useState("")
  const [selectedImage, setSelectedImage] = useState(profilePosts[0])
  const [mode, setMode] = useState<"gallery" | "caption">("gallery")

  if (mode === "caption") {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-background">
        {/* Header */}
        <header className="flex items-center gap-3 border-b border-border px-4 py-3">
          <button onClick={() => setMode("gallery")} aria-label="Volver">
            <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-xl font-bold italic text-foreground">Nueva publicación</h1>
        </header>

        <div className="flex flex-1 flex-col items-center px-4 py-6">
          {/* Selected image preview */}
          <div className="relative mx-auto mb-8 aspect-[3/4] w-48 overflow-hidden rounded-sm">
            <Image
              src={selectedImage}
              alt="Imagen seleccionada"
              fill
              className="object-cover"
            />
          </div>

          {/* Caption */}
          <textarea
            placeholder="Añade pie de foto..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="h-32 w-full resize-none rounded-xl border-2 border-primary/30 bg-transparent p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            aria-label="Pie de foto"
          />
        </div>

        {/* Publish button */}
        <div className="flex justify-center px-4 pb-8">
          <button
            onClick={() => router.push("/feed")}
            className="rounded-full bg-secondary px-12 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
          >
            Publicar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <button onClick={() => router.back()} aria-label="Cerrar">
          <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <h1 className="font-serif text-xl font-bold italic text-foreground">Nueva publicación</h1>
      </header>

      {/* Selected image */}
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src={selectedImage}
          alt="Imagen seleccionada"
          fill
          className="object-cover"
        />
      </div>

      {/* Gallery label */}
      <div className="px-4 py-3">
        <p className="text-sm font-bold text-foreground">{"Recientes >"}</p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-3 gap-0.5 px-0.5">
        {/* Camera tile */}
        <button
          className="relative flex aspect-square items-center justify-center bg-muted"
          aria-label="Tomar foto"
        >
          <CameraIcon className="h-12 w-12 text-foreground" />
        </button>
        {profilePosts.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedImage(img)
              setMode("caption")
            }}
            className={`relative aspect-square overflow-hidden ${selectedImage === img ? "ring-2 ring-primary" : ""}`}
          >
            <Image
              src={img}
              alt={`Foto ${i + 1}`}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}
