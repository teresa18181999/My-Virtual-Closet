"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Check } from "lucide-react"
import { closetItems } from "@/lib/mock-data"

function ShirtIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

export default function SelectGarmentPage() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  function toggleSelection(id: string) {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="mx-auto flex h-full max-w-sm flex-col">
      {/* Header */}
      <header className="flex items-center justify-center px-4 py-4">
        <h1 className="font-serif text-2xl font-bold italic text-primary">
          Laboratorio
        </h1>
      </header>

      <div className="border-b border-border" />

      {/* Shirt icon indicator */}
      <div className="flex flex-col items-center gap-1 pt-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <ShirtIcon className="h-6 w-6 text-accent-foreground" />
        </div>
        <p className="text-sm font-bold text-foreground">Parte Superior</p>
      </div>

      {/* Selection info */}
      <div className="px-4 py-3 text-center">
        <p className="text-sm text-muted-foreground">
          {selectedItems.length === 0
            ? "Selecciona las prendas para tu conjunto"
            : `${selectedItems.length} prenda${selectedItems.length > 1 ? "s" : ""} seleccionada${selectedItems.length > 1 ? "s" : ""}`}
        </p>
      </div>

      {/* Garment grid */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <div className="grid grid-cols-3 gap-1">
          {closetItems.map((item) => {
            const isSelected = selectedItems.includes(item.id)
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleSelection(item.id)}
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
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Confirm button */}
      {selectedItems.length > 0 && (
        <div className="px-4 pb-6 pt-2">
          <Link
            href="/lab"
            className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
          >
            Añadir al conjunto
          </Link>
        </div>
      )}
    </div>
  )
}
