import { NextResponse } from "next/server"
import { db } from "@/lib/db/storage"

export async function GET() {
  try {
    const reactions = await db.getReactions()
    return NextResponse.json({ success: true, reactions })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to retrieve reactions" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug } = body

    if (!slug) {
      return NextResponse.json({ success: false, error: "Project slug is required" }, { status: 400 })
    }

    const count = await db.incrementReaction(slug)
    return NextResponse.json({ success: true, slug, count })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to increment reaction" }, { status: 500 })
  }
}
