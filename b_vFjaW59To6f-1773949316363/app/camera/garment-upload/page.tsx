"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Plus } from "lucide-react"

export default function GarmentUploadPage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState(["Falda", "Casual"])
  const [seasonTags, setSeasonTags] = useState(["Vaquero", "Verano"])
  const [colorTags, setColorTags] = useState(["Azul"])

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-4">
        <button 
          type="button"
          onClick={() => window.history.back()} 
          className="p-1 cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <h1 className="font-serif text-xl font-bold italic text-primary">Nueva prenda</h1>
      </header>

      <div className="flex-1 px-4 py-6">
        {/* Image + Name */}
        <div className="flex items-start gap-4">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-sm border-2 border-primary/30 bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=200&h=200&fit=crop"
              alt="Prenda capturada"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <input
              type="text"
              placeholder="Nombre de la prenda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full border-2 border-primary/30 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              aria-label="Nombre de la prenda"
            />
            <div>
              <p className="mb-2 text-xs font-bold text-foreground">Etiquetas</p>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/camera/tags"
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary/50"
                  aria-label="Añadir etiqueta"
                >
                  <Plus className="h-4 w-4 text-foreground" strokeWidth={2} />
                </Link>
                {tags.map((tag, i) => (
                  <span key={i} className="rounded-full border-2 border-primary/50 px-3 py-1 text-xs text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Season + color tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {seasonTags.map((tag, i) => (
            <span key={`s-${i}`} className="rounded-full border-2 border-primary/50 px-3 py-1 text-xs text-foreground">
              {tag}
            </span>
          ))}
          {colorTags.map((tag, i) => (
            <span key={`c-${i}`} className="rounded-full border-2 border-primary/50 px-3 py-1 text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <textarea
            placeholder="Añade una descripcion... (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-40 w-full resize-none rounded-xl border-2 border-primary/50 bg-transparent p-4 text-sm italic text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            aria-label="Descripción de la prenda"
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-center px-4 pb-8">
        <Link
          href="/closet"
          className="rounded-full bg-secondary px-12 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
        >
          Subir prenda
        </Link>
      </div>
    </div>
  )
}
