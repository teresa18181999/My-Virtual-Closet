import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { user, pass } = body

    // Aquí está la lógica que querías:
    if (user === "SA" && pass === "12") {
      console.log("✅ Login exitoso para el usuario SA")
      return NextResponse.json({ message: "OK" }, { status: 200 })
    } else {
      console.log("❌ Intento de login fallido")
      return NextResponse.json({ message: "No autorizado" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 })
  }
}