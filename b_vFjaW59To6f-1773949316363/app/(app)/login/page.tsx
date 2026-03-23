"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    // 1. Enviamos los datos a nuestra "api"
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: email, pass: password }),
      })

      if (response.ok) {
        // Si la API dice que está bien, vamos al feed
        router.push("/feed")
      } else {
        // Si no, mostramos el error
        setError("Usuario o contraseña incorrectos")
      }
    } catch (err) {
      setError("Error de conexión")
    }
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center bg-background px-8">
      <Logo className="mb-16" />
      <div className="w-full max-w-xs">
        <h1 className="mb-6 font-serif text-lg font-bold italic text-foreground">Iniciar Sesión</h1>
        
        {error && <p className="mb-4 text-center text-xs text-red-500 font-bold">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground focus:outline-none"
          />
          <input
            type="password"
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground focus:outline-none"
          />
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-full bg-slate-800 px-12 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}