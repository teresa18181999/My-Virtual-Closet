"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, FlaskConical, Aperture, Shirt } from "lucide-react"
import { closetItems } from "@/lib/mock-data"

// Icono de Vestido personalizado
function DressIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true"
    >
      <path d="M12 2C10.5 2 9.5 3 9.5 3L7 8L9 9L8 22H16L15 9L17 8L14.5 3C14.5 3 13.5 2 12 2Z" />
    </svg>
  )
}

// Configuración de las dos vistas según las maquetas
const VIEW_CONFIG = {
  // Vista inicial: Vestido (LABORATORIO.png) - 3 secciones
  dress: {
    sections: [
      { label: "Parte Superior", filter: ["Top", "Camiseta", "Jersey", "Sudadera", "Chaqueta", "Abrigo"] },
      { label: "Parte Inferior", filter: ["Pantalón", "Falda", "Vaquero"] },
      { label: "Calzado", filter: ["Zapatillas", "Botas", "Tacones"] },
    ],
    imageSize: "h-28 w-28", // Reducido para caber sin scroll
    gap: "gap-2",
  },
  // Vista alternativa: Camiseta (LABORATORIO vestido.png) - 2 secciones
  shirt: {
    sections: [
      { label: "Parte Superior", filter: ["Vestido"] },
      { label: "Calzado", filter: ["Zapatillas", "Botas", "Tacones"] },
    ],
    imageSize: "h-40 w-40", // Más grande para vestido
    gap: "gap-3",
  },
}

function OutfitCarousel({
  label,
  items,
  imageSize,
}: {
  label: string
  items: typeof closetItems
  imageSize: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const safeItems = items.length > 0 ? items : [{ id: "empty", name: "Sin prendas", image: "", tags: [] }]
  const current = safeItems[currentIndex]

  function prev() {
    setCurrentIndex((i) => (i === 0 ? safeItems.length - 1 : i - 1))
  }
  function next() {
    setCurrentIndex((i) => (i === safeItems.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xs font-bold text-foreground">{label}</p>
      <div className="flex items-center gap-2">
        <button onClick={prev} aria-label="Anterior" className="text-foreground">
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <div className={`relative overflow-hidden rounded-sm border-2 border-primary/30 bg-muted ${imageSize}`}>
          {current?.image ? (
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 208px, 208px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
              Sin prendas
            </div>
          )}
        </div>
        <button onClick={next} aria-label="Siguiente" className="text-foreground">
          <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}

export default function LabPage() {
  // Estado toggle: "dress" = vista inicial, "shirt" = vista alternativa
  const [viewMode, setViewMode] = useState<"dress" | "shirt">("dress")

  // Toggle entre las dos vistas
  function handleToggle() {
    setViewMode((prev) => (prev === "dress" ? "shirt" : "dress"))
  }

  const config = VIEW_CONFIG[viewMode]

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header - FlaskConical + Laboratorio - fondo blanco */}
      <header className="flex items-center justify-center gap-2 bg-background px-4 py-3">
        <FlaskConical className="h-5 w-5 text-primary" strokeWidth={1.5} />
        <h1 className="font-serif text-xl font-bold italic text-primary">Laboratorio</h1>
      </header>

      <div className="border-b border-border" />

      {/* Botón Toggle central - burdeos sólido con icono blanco */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleToggle}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90"
          aria-label={viewMode === "dress" ? "Cambiar a vista camiseta" : "Cambiar a vista vestido"}
        >
          {viewMode === "dress" ? (
            <DressIcon className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Shirt className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Secciones de prendas - sin scroll, layout fijo */}
      <div className={`flex flex-1 flex-col justify-center px-4 py-2 ${config.gap}`}>
        {config.sections.map((section) => {
          const items = closetItems.filter((item) =>
            item.tags.some((t) => section.filter.some((f) => t.toLowerCase().includes(f.toLowerCase())))
          )
          return (
            <OutfitCarousel
              key={section.label}
              label={section.label}
              items={items}
              imageSize={config.imageSize}
            />
          )
        })}
      </div>

      {/* Botón ¿Qué me pongo? - fondo blanco/rosa sutil, borde burdeos, tipografía serif igual que títulos */}
      <div className="relative z-10 flex shrink-0 justify-center bg-background px-4 pb-20">
        <Link
          href="/lab/advisor"
          className="flex items-center justify-center gap-3 rounded-full border border-primary bg-[#FDF8F8] px-8 py-3.5 transition-colors hover:bg-[#f5eeee]"
        >
          <Aperture className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span className="font-serif text-lg font-bold italic text-primary">{"¿Qué me pongo?"}</span>
        </Link>
      </div>
    </div>
  )
}
