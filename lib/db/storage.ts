import { supabase, isSupabaseConfigured } from "./supabase"

export interface ContactMessage {
  id: string
  name: string
  email: string
  company?: string
  topic: string
  message: string
  createdAt: string
}

export interface GuestbookEntry {
  id: string
  name: string
  role?: string
  message: string
  createdAt: string
}

export interface ReactionStats {
  [key: string]: number
}

// In-memory fallback cache (used when Supabase env vars are not set during initial build)
let inMemoryMessages: ContactMessage[] = []
let inMemoryGuestbook: GuestbookEntry[] = [
  {
    id: "entry_sample_1",
    name: "Dev Lead & Mentor",
    role: "Senior Engineering Lead",
    message: "Strong foundational problem-solving and excellent command over Java, FastAPI, and RAG architectures.",
    createdAt: "2026-03-01T10:00:00.000Z",
  },
  {
    id: "entry_sample_2",
    name: "Collaborator",
    role: "Full-Stack Developer",
    message: "Clean architecture, rapid delivery, and deep knowledge of distributed backend systems.",
    createdAt: "2026-03-05T14:30:00.000Z",
  },
]
let inMemoryReactions: ReactionStats = {
  betterbee: 48,
  freelancer: 36,
  codestorm: 42,
  visionx: 29,
  academicrecords: 31,
  devpulse: 27,
  docuforge: 24,
}

export const db = {
  // ── Contact Messages ───────────────────────────────────────────────
  getMessages: async (): Promise<ContactMessage[]> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .order("created_at", { ascending: false })

        if (!error && data) {
          return data.map((row) => ({
            id: String(row.id),
            name: row.name,
            email: row.email,
            company: row.company || "",
            topic: row.topic || "General Inquiry",
            message: row.message,
            createdAt: row.created_at || new Date().toISOString(),
          }))
        }
      } catch (err) {
        console.error("Supabase getMessages error:", err)
      }
    }
    return inMemoryMessages
  },

  addMessage: async (msg: Omit<ContactMessage, "id" | "createdAt">): Promise<ContactMessage> => {
    const newMsg: ContactMessage = {
      ...msg,
      id: "msg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from("messages")
          .insert([
            {
              name: msg.name,
              email: msg.email,
              company: msg.company || null,
              topic: msg.topic || "General Inquiry",
              message: msg.message,
            },
          ])
          .select()
          .single()

        if (!error && data) {
          return {
            id: String(data.id),
            name: data.name,
            email: data.email,
            company: data.company || "",
            topic: data.topic,
            message: data.message,
            createdAt: data.created_at,
          }
        }
      } catch (err) {
        console.error("Supabase addMessage error:", err)
      }
    }

    inMemoryMessages.unshift(newMsg)
    return newMsg
  },

  // ── Guestbook Signatures ───────────────────────────────────────────
  getGuestbook: async (): Promise<GuestbookEntry[]> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from("guestbook")
          .select("*")
          .order("created_at", { ascending: false })

        if (!error && data && data.length > 0) {
          return data.map((row) => ({
            id: String(row.id),
            name: row.name,
            role: row.role || "Visitor",
            message: row.message,
            createdAt: row.created_at || new Date().toISOString(),
          }))
        }
      } catch (err) {
        console.error("Supabase getGuestbook error:", err)
      }
    }
    return inMemoryGuestbook
  },

  addGuestbookEntry: async (entry: Omit<GuestbookEntry, "id" | "createdAt">): Promise<GuestbookEntry> => {
    const newEntry: GuestbookEntry = {
      ...entry,
      id: "gb_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from("guestbook")
          .insert([
            {
              name: entry.name,
              role: entry.role || "Visitor",
              message: entry.message,
            },
          ])
          .select()
          .single()

        if (!error && data) {
          return {
            id: String(data.id),
            name: data.name,
            role: data.role || "",
            message: data.message,
            createdAt: data.created_at,
          }
        }
      } catch (err) {
        console.error("Supabase addGuestbookEntry error:", err)
      }
    }

    inMemoryGuestbook.unshift(newEntry)
    return newEntry
  },

  // ── Project Reactions / Star Counters ──────────────────────────────
  getReactions: async (): Promise<ReactionStats> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.from("reactions").select("*")

        if (!error && data && data.length > 0) {
          const stats: ReactionStats = { ...inMemoryReactions }
          data.forEach((row) => {
            stats[row.slug] = row.count
          })
          return stats
        }
      } catch (err) {
        console.error("Supabase getReactions error:", err)
      }
    }
    return inMemoryReactions
  },

  incrementReaction: async (slug: string): Promise<number> => {
    if (isSupabaseConfigured && supabase) {
      try {
        // Fetch current count
        const { data: existing } = await supabase
          .from("reactions")
          .select("count")
          .eq("slug", slug)
          .single()

        const newCount = (existing?.count || 0) + 1

        const { error } = await supabase
          .from("reactions")
          .upsert({ slug, count: newCount, updated_at: new Date().toISOString() })

        if (!error) {
          return newCount
        }
      } catch (err) {
        console.error("Supabase incrementReaction error:", err)
      }
    }

    inMemoryReactions[slug] = (inMemoryReactions[slug] || 0) + 1
    return inMemoryReactions[slug]
  },
}
