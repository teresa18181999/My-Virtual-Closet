"use client"

import { useState, useRef, useEffect } from "react"
import { Mic, Send, MessageSquare } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Necesito ayuda con un outfit",
  },
  {
    id: "2",
    role: "assistant",
    content: "Mirando tu armario, te recomiendo combinar el top negro con el pantalón oscuro. Es una combinación clásica y elegante que funciona perfectamente para una cena. Puedes complementarlo con los tacones que tienes guardados.",
  },
]

export default function AdvisorPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend() {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Esa es una gran elección. Basándome en tu estilo y las prendas de tu armario, te sugiero también añadir la chaqueta marrón para darle un toque más casual pero sofisticado.",
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header FIJO arriba - fondo blanco */}
      <header className="shrink-0 flex items-center gap-3 border-b border-border bg-background px-4 py-4">
        <MessageSquare className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Asesor</h1>
      </header>

      {/* Messages area - fondo blanco puro */}
      <div className="flex-1 overflow-y-auto bg-background px-4 py-4">
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-5 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-[1.5rem] bg-primary text-white"
                    : "rounded-[1.5rem] bg-[#F5E6E6] text-primary"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input FIJO abajo - fondo blanco */}
      <div className="shrink-0 bg-background px-4 pt-3 pb-4">
        <div className="flex items-center gap-2 rounded-full border border-primary bg-background px-4 py-2.5">
          <button aria-label="Mensaje de voz" className="shrink-0 text-primary">
            <Mic className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <input
            type="text"
            placeholder="Escriba su mensaje...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Mensaje al asesor"
          />
          <button
            onClick={handleSend}
            aria-label="Enviar mensaje"
            className="shrink-0 text-primary"
          >
            <Send className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
