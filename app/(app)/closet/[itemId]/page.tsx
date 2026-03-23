"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Shirt, Bookmark, Plus, X } from "lucide-react"
import { closetItems } from "@/lib/mock-data"

export default function ClosetItemDetailPage() {
  const params = useParams()
  const router = useRouter()
  const itemId = params.itemId as string
  
  const item = closetItems.find(i => i.id === itemId)
  const [isFavorite, setIsFavorite] = useState(item?.favorite ?? false)
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(item?.name ?? "")
  const [editDescription, setEditDescription] = useState(item?.description ?? "")
  const [editTags, setEditTags] = useState<string[]>(item?.tags ?? [])

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">Prenda no encontrada</p>
        <Link href="/closet" className="mt-4 text-primary underline">
          Volver al armario
        </Link>
      </div>
    )
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here would be logic to persist changes
  }

  const handleOpenTags = () => {
    router.push(`/closet-tags/${itemId}`)
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setEditTags(editTags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Header with title */}
      <header className="flex items-center gap-3 px-4 py-4 bg-background">
        <Shirt className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Armario</h1>
      </header>

      {/* Content area with pink background - NO category bar, static view */}
      <div className="flex-1 bg-secondary/50 px-4 py-4 pb-24">
        {/* Title and Edit button row */}
        <div className="flex items-start justify-between mb-4">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="flex-1 bg-transparent font-serif text-xl font-bold italic text-primary border-b-2 border-primary focus:outline-none mr-4"
            />
          ) : (
            <h2 className="font-serif text-xl font-bold italic text-primary">{editTitle}</h2>
          )}
          <button
            onClick={() => {
              if (isEditing) {
                handleSave()
              } else {
                setIsEditing(true)
              }
            }}
            className="shrink-0 rounded-full border border-primary px-4 py-1 text-xs font-medium text-foreground hover:bg-primary/10 transition-colors"
          >
            {isEditing ? "Guardar" : "Editar"}
          </button>
        </div>

        {/* Image with bookmark on the right */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative aspect-square w-3/5 max-w-[200px] border border-primary/70 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="60vw"
              loading="eager"
            />
          </div>
          
          {/* Bookmark button - to the right of image */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="mt-auto transition-opacity hover:opacity-75"
            aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            <Bookmark 
              className={`h-6 w-6 ${isFavorite ? "fill-foreground text-foreground" : "text-foreground"}`} 
              strokeWidth={1.5} 
            />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          {isEditing ? (
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground leading-relaxed border-b-2 border-primary/30 focus:border-primary focus:outline-none p-2"
              rows={3}
            />
          ) : (
            <p className="text-sm text-foreground leading-relaxed">{editDescription}</p>
          )}
        </div>

        {/* Tags - granate claro con texto burdeos */}
        <div className="flex flex-wrap items-center gap-2">
          {editTags.map((tag) => (
            <div key={tag} className="relative">
              <span
                className="rounded-full border border-primary/40 bg-secondary px-4 py-1.5 text-xs font-medium text-primary inline-block"
              >
                {tag}
              </span>
              {isEditing && (
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-background hover:bg-primary/90 transition-colors"
                  aria-label={`Quitar ${tag}`}
                >
                  <X size={10} strokeWidth={3} />
                </button>
              )}
            </div>
          ))}
          
          {/* Plus button - always visible, styled to match tags */}
          <button
            onClick={handleOpenTags}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-secondary text-primary hover:bg-accent transition-colors flex-shrink-0"
            aria-label="Editar etiquetas"
          >
            <Plus size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
