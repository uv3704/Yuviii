import { NextResponse } from "next/server"
import { db } from "@/lib/db/storage"

export async function GET() {
  try {
    const entries = await db.getGuestbook()
    return NextResponse.json({ success: true, count: entries.length, entries })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to retrieve guestbook entries" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, role, message } = body

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Name and message are required." },
        { status: 400 }
      )
    }

    const newEntry = await db.addGuestbookEntry({
      name,
      role: role || "Visitor / Engineer",
      message,
    })

    return NextResponse.json({ success: true, entry: newEntry })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to add guestbook entry." }, { status: 500 })
  }
}
