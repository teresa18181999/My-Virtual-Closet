"use client"

import { useState, useRef, useEffect } from "react"
import { Mic, Send, MessageSquare } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  items?: string[]
}

// Solo un mensaje de bienvenida inicial
const initialMessages: Message[] = [
  {
    id: "0",
    role: "assistant",
    content: "¡Hola! Soy tu asesor personal. ¿Para qué ocasión necesitas un outfit hoy? (Prueba diciendo: cita, fiesta o trabajo)",
  },
]

export default function AdvisorPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false) // Para que parezca que piensa
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend() {
    const text = input.trim();
    if (!text) return

    // 1. Añadimos el mensaje del usuario al chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    }
   
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // 2. Lógica de respuesta inteligente
    setTimeout(() => {
      const query = text.toLowerCase()
      let response = ""

      if (query.includes("cita")) {
        response = "Mirando tu armario, te recomiendo combinar el vestido negro corto con unos tacones altos negros y una cazadora de cuero. Es un look infalible."
      }
      else if (query.includes("fiesta")) {
        response = "¡Para una fiesta! Ponte el top brillante con tus jeans oscuros. Es cómodo y resaltarás mucho."
      }
      else if (query.includes("trabajo") || query.includes("oficina")) {
        response = "Para el trabajo, te sugiero la blusa blanca con el pantalón de pinzas. Un look profesional y elegante."
      }
      else {
        response = "Mmm, para esa ocasión te recomiendo algo cómodo como tus básicos favoritos. ¿Tienes alguna otra duda?"
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <header className="shrink-0 flex items-center gap-3 border-b border-border bg-background px-4 py-4">
        <MessageSquare className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h1 className="font-serif text-2xl font-bold italic text-primary">Asesor</h1>
      </header>

      {/* Área de Mensajes */}
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
          {isTyping && (
            <div className="text-xs text-muted-foreground animate-pulse ml-2">
              El asesor está analizando tu armario...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 bg-background px-4 pt-3 pb-4">
        <div className="flex items-center gap-2 rounded-full border border-primary bg-background px-4 py-2.5 shadow-sm">
          <button className="shrink-0 text-primary hover:opacity-70 transition-opacity">
            <Mic className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <input
            type="text"
            placeholder="Escriba su mensaje...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="shrink-0 text-primary hover:opacity-70 transition-opacity"
          >
            <Send className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}