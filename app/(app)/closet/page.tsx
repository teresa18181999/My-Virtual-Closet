"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shirt, Bookmark } from "lucide-react"
import { closetItems } from "@/lib/mock-data"

const categories = ["Todo", "Parte Superior", "Parte Inferior", "Calzado"]

// Map categories to item tags for filtering
const categoryMapping: Record<string, string[]> = {
  "Todo": [],
  "Parte Superior": ["Top", "Camiseta", "Jersey", "Sudadera", "Chaqueta", "Abrigo", "Camisa", "Blusa"],
  "Parte Inferior": ["Pantalón", "Vaquero", "Falda", "Short"],
  "Calzado": ["Zapatillas", "Botas", "Tacones", "Zapatos", "Sneakers"],
}

export default function ClosetPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showFavorites, setShowFavorites] = useState(false)

  const filteredItems = closetItems.filter((item) => {
    const matchesCategory = !activeCategory || activeCategory === "Todo"
      ? true
      : item.tags.some((tag) => 
          categoryMapping[activeCategory]?.some(cat => 
            tag.toLowerCase().includes(cat.toLowerCase())
          )
        )
    const matchesFavorite = showFavorites ? item.favorite : true
    return matchesCategory && matchesFavorite
  })

  return (
    <div className="flex flex-col min-h-full">
      {/* Header with title */}
      <header className="flex items-center gap-3 px-4 py-4 bg-background">
        <Shirt className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Armario</h1>
      </header>

      {/* Bookmark button + Category filters */}
      <div className="flex items-center gap-3 px-4 py-3 bg-background">
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          aria-label={showFavorites ? "Mostrar todos" : "Mostrar favoritos"}
          className="flex-shrink-0"
        >
          <Bookmark 
            className={`h-6 w-6 ${showFavorites ? "fill-foreground text-foreground" : "text-foreground"}`} 
            strokeWidth={1.5} 
          />
        </button>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "border-primary bg-secondary text-primary"
                  : "border-primary/60 bg-background text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content area with pink background */}
      <div className="flex-1 bg-secondary/50 px-4 py-4">
        {/* Items count - dynamic text with singular/plural grammar */}
        <p className="text-sm font-bold text-foreground mb-4">
          {filteredItems.length} {showFavorites 
            ? (filteredItems.length === 1 ? "favorito" : "favoritos") 
            : (filteredItems.length === 1 ? "prenda" : "prendas")}
        </p>

        {/* Items grid - 3 columns */}
        <div className="grid grid-cols-3 gap-2">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/closet/${item.id}`}
              className="relative aspect-square overflow-hidden border border-primary/70 hover:border-primary transition-colors"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
