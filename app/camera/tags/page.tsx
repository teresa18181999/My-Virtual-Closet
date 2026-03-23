"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { tagCategories } from "@/lib/mock-data"

export default function TagsPage() {
  const router = useRouter()
  const [selectedTags, setSelectedTags] = useState<Record<string, string[]>>({
    "Tipo de prenda": ["Falda"],
    "Temporada": ["Verano"],
    "Colores": ["Azul"],
  })
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Tipo de prenda": true,
    "Temporada": true,
    "Ocasion": false,
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
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <button onClick={() => router.back()} aria-label="Cerrar">
          <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </button>
        <h1 className="font-serif text-2xl font-bold italic text-foreground">Etiquetas</h1>
      </header>

      <div className="flex-1 px-4 py-4">
        {Object.entries(tagCategories).map(([category, tags]) => (
          <div key={category} className="border-b border-border py-3">
            <button
              onClick={() => toggleSection(category)}
              className="flex w-full items-center justify-between"
            >
              <span className="text-sm font-bold text-foreground">{category}</span>
              {openSections[category] ? (
                <ChevronDown className="h-4 w-4 text-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-foreground" />
              )}
            </button>

            {openSections[category] && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const isSelected = selectedTags[category]?.includes(tag)
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(category, tag)}
                      className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-foreground text-foreground"
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

      {/* Save button */}
      <div className="flex justify-center px-4 pb-8">
        <button
          onClick={() => router.back()}
          className="rounded-full bg-secondary px-12 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  )
}
