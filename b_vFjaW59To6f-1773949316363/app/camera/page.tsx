"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Zap, ArrowRight } from "lucide-react"
import { exploreImages } from "@/lib/mock-data"

function CameraApertureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  )
}

const categories = ["Parte Superior", "Parte Inferior", "Vestido", "Calzado"]

export default function CameraPage() {
  const [mode, setMode] = useState<"garment" | "post">("garment")
  const [selectedImage, setSelectedImage] = useState(exploreImages[0])

  return (
    <div className="flex h-full w-full flex-col bg-background">
      {/* Mode tabs - Top navigation */}
      <div className="flex border-b border-border shrink-0">
        <button
          onClick={() => setMode("garment")}
          className={`flex-1 py-3 text-center text-sm font-semibold transition-colors ${
            mode === "garment"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground"
          }`}
        >
          Prenda
        </button>
        <button
          onClick={() => setMode("post")}
          className={`flex-1 py-3 text-center text-sm font-semibold transition-colors ${
            mode === "post"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground"
          }`}
        >
          Publicación
        </button>
      </div>

      {mode === "garment" ? (
        /* Garment mode - Full screen camera */
        <div className="relative flex-1 flex flex-col overflow-hidden">
          {/* Close button - floating top right */}
          <button 
            type="button"
            onClick={() => window.history.back()} 
            className="absolute top-4 right-4 z-50 p-2 cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </button>

          {/* Instruction text - on white background */}
          <div className="bg-background py-6 px-4 shrink-0">
            <p className="text-center font-serif text-sm font-bold italic text-foreground">
              Coloque su prenda dentro del recuadro
            </p>
          </div>

          {/* Full screen camera preview */}
          <div className="relative flex-1 w-full min-h-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop"
              alt="Vista de cámara"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />

            {/* Guide frame overlay */}
            <div className="absolute inset-4 border-2 border-foreground/50 z-10 pointer-events-none" />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-background shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 rounded-full border-2 border-primary/50 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-foreground"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Camera controls */}
          <div className="flex items-center justify-center gap-12 py-6 bg-background shrink-0">
            <button type="button" aria-label="Flash" className="text-foreground">
              <Zap className="h-6 w-6" strokeWidth={2} fill="currentColor" />
            </button>
            <Link
              href="/camera/garment-upload"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground"
              aria-label="Capturar prenda"
            >
              <CameraApertureIcon className="h-10 w-10 text-background" />
            </Link>
          </div>
        </div>
      ) : (
        /* Publication mode - gallery picker */
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {/* Header with title and navigation */}
          <div className="flex items-center justify-between px-4 py-3 bg-background shrink-0">
            <button 
              type="button"
              onClick={() => window.history.back()} 
              className="p-1 cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </button>
            <h1 className="font-serif text-xl font-bold italic text-primary">
              Nueva publicación
            </h1>
            <Link
              href={`/camera/add-caption?image=${encodeURIComponent(selectedImage)}`}
              className="p-1"
              aria-label="Siguiente"
            >
              <ArrowRight className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Selected image preview */}
          <div className="relative aspect-square w-full shrink-0 bg-muted">
            <Image
              src={selectedImage}
              alt="Imagen seleccionada"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Gallery section */}
          <div className="flex flex-1 flex-col overflow-hidden bg-background">
            <div className="flex items-center px-4 py-2 shrink-0">
              <span className="text-sm font-medium text-foreground">{"Recientes >"}</span>
            </div>

            {/* Gallery grid - only photos, no camera */}
            <div className="grid grid-cols-4 gap-0.5 flex-1 overflow-y-auto">
              {exploreImages.slice(0, 12).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square ${selectedImage === img ? "ring-2 ring-inset ring-primary" : ""}`}
                >
                  <Image
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
