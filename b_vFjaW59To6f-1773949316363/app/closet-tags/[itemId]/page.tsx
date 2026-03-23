"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { tagCategories } from "@/lib/mock-data"

export default function ClosetItemTagsPage() {
  const params = useParams()
  const itemId = params.itemId as string

  const [selectedTags, setSelectedTags] = useState<Record<string, string[]>>({
    "Tipo de prenda": ["Vaquero"],
    "Temporada": ["Verano"],
    "Colores": ["Azul"],
    "Ocasion": ["Casual"],
  })

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Tipo de prenda": true,
    "Temporada": true,
    "Ocasion": true,
    "Estilo": false,
    "Colores": true,
  })

  function toggleSection(section: string) {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  function toggleTag(category: string, tag: string) {
    setSelectedTags((prev) => {
      const current = prev[category] || []
      if (current.includes(tag)) {
        return { ...prev, [category]: current.filter((t) => t !== tag) }
      }
      return { ...prev, [category]: [...current, tag] }
    })
  }

  return (
    <div className="mx-auto flex h-dvh max-w-lg flex-col bg-background">
      {/* Header */}
      <header className="relative z-[100] flex items-center gap-3 border-b border-border bg-background px-4 py-4">
        <button 
          type="button"
          onClick={() => window.history.back()} 
          className="relative z-[100] p-2 -ml-2 cursor-pointer touch-manipulation active:opacity-70"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <h1 className="font-serif text-2xl font-bold italic text-primary">Etiquetas</h1>
      </header>

      {/* Tag categories */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {Object.entries(tagCategories).map(([category, tags]) => (
          <div key={category} className="border-b border-border py-4">
            <button
              type="button"
              onClick={() => toggleSection(category)}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <span className="text-sm font-bold text-foreground">{category}</span>
              {openSections[category] ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {openSections[category] && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const isSelected = selectedTags[category]?.includes(tag)
                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => toggleTag(category, tag)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                        isSelected
                          ? "border-primary/40 bg-secondary text-primary"
                          : "border-primary/30 bg-background text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action buttons - fixed at bottom with high z-index */}
      <div className="relative z-[100] flex justify-center gap-4 border-t border-border bg-background px-4 py-6">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-full border-2 border-foreground px-8 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground/10 transition-colors cursor-pointer active:opacity-70"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer active:opacity-70"
        >
          Guardar
        </button>
      </div>
    </div>
  )
}
