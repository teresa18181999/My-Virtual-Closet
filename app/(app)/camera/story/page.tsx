"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, Zap, ChevronsRight } from "lucide-react"

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

// Sample captured image for demo
const capturedImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VER%20HISTORIA%20OOTD-Bqub96ME3lVVqfDdNlZLXNwEoRTpxK.png"

export default function StoryCameraPage() {
  const router = useRouter()
  const [captured, setCaptured] = useState(false)

  const handleCapture = () => {
    setCaptured(true)
  }

  const handleSubmit = () => {
    // Here would be the logic to upload to stories and save to calendar
    router.push("/feed")
  }

  // Confirmation screen after capture
  if (captured) {
    return (
      <div className="flex h-dvh w-full flex-col bg-black">
        <div className="relative flex-1">
          <Image
            src={capturedImage}
            alt="OOTD capturado"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Close button - Top Left */}
          <button 
            onClick={() => setCaptured(false)} 
            className="absolute left-4 top-4 z-50 p-2"
            aria-label="Volver a capturar"
          >
            <X className="h-7 w-7 text-white drop-shadow-lg" strokeWidth={2.5} />
          </button>

          {/* Submit button - Bottom Right */}
          <button
            onClick={handleSubmit}
            className="absolute bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Subir historia"
          >
            <ChevronsRight className="h-8 w-8 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    )
  }

  // Camera capture screen
  return (
    <div className="flex h-dvh w-full flex-col bg-black">
      {/* Camera preview area - full screen */}
      <div className="relative flex-1 bg-muted">
        {/* Close button */}
        <button 
          onClick={() => router.back()} 
          className="absolute left-4 top-4 z-50 p-2"
          aria-label="Cerrar"
        >
          <X className="h-7 w-7 text-foreground" strokeWidth={2.5} />
        </button>

        {/* Flash button */}
        <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
          <button aria-label="Flash" className="text-foreground">
            <Zap className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Camera preview placeholder */}
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <CameraApertureIcon className="h-16 w-16" />
            <span className="text-xs">Vista previa de la cámara</span>
          </div>
        </div>
      </div>

      {/* Camera shutter */}
      <div className="flex items-center justify-center bg-black py-6 flex-shrink-0">
        <button
          onClick={handleCapture}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white"
          aria-label="Capturar OOTD"
        >
          <CameraApertureIcon className="h-9 w-9 text-black" />
        </button>
      </div>
    </div>
  )
}
