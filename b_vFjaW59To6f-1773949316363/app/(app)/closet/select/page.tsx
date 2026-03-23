"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronLeft } from "lucide-react"
import { closetItems } from "@/lib/mock-data"

export default function SelectGarmentPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  function toggleItem(id: string) {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <Link href="/lab" aria-label="Volver al laboratorio">
          <ChevronLeft className="h-6 w-6 text-foreground" strokeWidth={1.5} />
        </Link>
        <h1 className="font-serif text-xl font-bold italic text-primary">Seleccionar Prendas</h1>
        <Link 
          href="/lab" 
          aria-label="Confirmar selección"
          className={selectedItems.length > 0 ? "text-primary" : "text-muted-foreground"}
        >
          <Check className="h-6 w-6" strokeWidth={2} />
        </Link>
      </header>

      <div className="border-b border-border" />

      {/* Selection info */}
      <div className="px-4 py-3 text-center text-sm text-muted-foreground">
        {selectedItems.length === 0 
          ? "Selecciona las prendas para tu conjunto"
          : `${selectedItems.length} prenda${selectedItems.length > 1 ? "s" : ""} seleccionada${selectedItems.length > 1 ? "s" : ""}`
        }
      </div>

      {/* Garment grid */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <div className="grid grid-cols-3 gap-1">
          {closetItems.map((item) => {
            const isSelected = selectedItems.includes(item.id)
            return (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`relative aspect-square overflow-hidden ${
                  isSelected ? "ring-2 ring-primary ring-offset-1" : ""
                }`}
                aria-label={`${isSelected ? "Deseleccionar" : "Seleccionar"} ${item.name}`}
                aria-pressed={isSelected}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
