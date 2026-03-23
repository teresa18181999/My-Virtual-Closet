"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/feed")
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center bg-background px-8">
      <Logo className="mb-16" />

      <div className="w-full max-w-xs">
        <h1 className="mb-6 font-serif text-lg font-bold italic text-foreground">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="email o telefono"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            aria-label="Email o teléfono"
          />
          <input
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            aria-label="Contraseña"
          />

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-full bg-secondary px-12 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {"¿No tienes cuenta? "}
          <Link href="/register" className="font-semibold text-foreground underline">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  )
}
