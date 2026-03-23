"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Settings, ChevronRight } from "lucide-react"

const settingsSections = [
  {
    title: "Tu Cuenta",
    items: [
      { label: "Editar perfil, contraseñas, datos personales", href: "#" },
    ],
  },
  {
    title: "Quien puede ver tu contenido",
    items: [
      { label: "Privacidad de la cuenta", href: "#" },
      { label: "Cuentas bloqueadas", href: "#" },
    ],
  },
  {
    title: "Lo que tu puedes ver",
    items: [
      { label: "Cuentas silenciadas", href: "#" },
      { label: "Preferencias de contenido", href: "#" },
    ],
  },
  {
    title: "Más informacion y ayuda",
    items: [
      { label: "Ayuda", href: "#" },
      { label: "Centro de privacidad", href: "#" },
      { label: "Estado de la cuenta", href: "#" },
    ],
  },
  {
    title: "Inicia sesión",
    items: [
      { label: "Añadir cuenta", href: "#" },
      { label: "Cerrar sesión", href: "/login" },
      { label: "Borrar cuenta", href: "#", destructive: true },
    ],
  },
]

export default function SettingsPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-3 border-b border-border px-4 py-4">
        <Settings className="h-7 w-7 text-foreground" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-foreground">Configuración</h1>
      </header>

      <div className="px-4 py-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="mb-4">
            <h2 className="mb-2 text-sm font-bold text-foreground">{section.title}</h2>
            {section.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-3"
              >
                <span
                  className={`text-sm ${
                    "destructive" in item && item.destructive
                      ? "text-destructive"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
