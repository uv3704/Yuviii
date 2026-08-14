import { NextResponse } from "next/server"
import { db } from "@/lib/db/storage"

export async function GET() {
  try {
    const messages = await db.getMessages()
    return NextResponse.json({ success: true, count: messages.length, messages })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to retrieve messages" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, topic, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const saved = await db.addMessage({
      name,
      email,
      company: company || "",
      topic: topic || "General Inquiry",
      message,
    })

    return NextResponse.json({ success: true, message: "Message received and stored securely in Supabase.", data: saved })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process message." }, { status: 500 })
  }
}
