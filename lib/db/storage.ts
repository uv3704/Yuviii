import { getPostgresPool, ensureTablesExist } from "./postgres"

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

// In-memory fallback defaults
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
    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(
        `SELECT id, name, email, company, topic, message, created_at FROM messages ORDER BY created_at DESC;`
      )
      if (result.rows) {
        return result.rows.map((r) => ({
          id: String(r.id),
          name: r.name,
          email: r.email,
          company: r.company || "",
          topic: r.topic || "General Inquiry",
          message: r.message,
          createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
        }))
      }
    } catch (err) {
      console.error("PostgreSQL getMessages error:", err)
    }
    return inMemoryMessages
  },

  addMessage: async (msg: Omit<ContactMessage, "id" | "createdAt">): Promise<ContactMessage> => {
    const newMsg: ContactMessage = {
      ...msg,
      id: "msg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
    }

    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(
        `INSERT INTO messages (name, email, company, topic, message)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, name, email, company, topic, message, created_at;`,
        [msg.name, msg.email, msg.company || null, msg.topic || "General Inquiry", msg.message]
      )

      if (result.rows && result.rows[0]) {
        const row = result.rows[0]
        return {
          id: String(row.id),
          name: row.name,
          email: row.email,
          company: row.company || "",
          topic: row.topic,
          message: row.message,
          createdAt: new Date(row.created_at).toISOString(),
        }
      }
    } catch (err) {
      console.error("PostgreSQL addMessage error:", err)
    }

    inMemoryMessages.unshift(newMsg)
    return newMsg
  },

  // ── Guestbook Signatures ───────────────────────────────────────────
  getGuestbook: async (): Promise<GuestbookEntry[]> => {
    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(
        `SELECT id, name, role, message, created_at FROM guestbook ORDER BY created_at DESC;`
      )
      if (result.rows && result.rows.length > 0) {
        return result.rows.map((r) => ({
          id: String(r.id),
          name: r.name,
          role: r.role || "Visitor",
          message: r.message,
          createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
        }))
      }
    } catch (err) {
      console.error("PostgreSQL getGuestbook error:", err)
    }
    return inMemoryGuestbook
  },

  addGuestbookEntry: async (entry: Omit<GuestbookEntry, "id" | "createdAt">): Promise<GuestbookEntry> => {
    const newEntry: GuestbookEntry = {
      ...entry,
      id: "gb_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
    }

    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(
        `INSERT INTO guestbook (name, role, message)
         VALUES ($1, $2, $3)
         RETURNING id, name, role, message, created_at;`,
        [entry.name, entry.role || "Visitor / Engineer", entry.message]
      )

      if (result.rows && result.rows[0]) {
        const row = result.rows[0]
        return {
          id: String(row.id),
          name: row.name,
          role: row.role || "",
          message: row.message,
          createdAt: new Date(row.created_at).toISOString(),
        }
      }
    } catch (err) {
      console.error("PostgreSQL addGuestbookEntry error:", err)
    }

    inMemoryGuestbook.unshift(newEntry)
    return newEntry
  },

  // ── Project Reactions / Star Counters ──────────────────────────────
  getReactions: async (): Promise<ReactionStats> => {
    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(`SELECT slug, count FROM reactions;`)

      if (result.rows && result.rows.length > 0) {
        const stats: ReactionStats = { ...inMemoryReactions }
        result.rows.forEach((r) => {
          stats[r.slug] = Number(r.count)
        })
        return stats
      }
    } catch (err) {
      console.error("PostgreSQL getReactions error:", err)
    }
    return inMemoryReactions
  },

  incrementReaction: async (slug: string): Promise<number> => {
    try {
      await ensureTablesExist()
      const pool = getPostgresPool()
      const result = await pool.query(
        `INSERT INTO reactions (slug, count, updated_at)
         VALUES ($1, 1, NOW())
         ON CONFLICT (slug)
         DO UPDATE SET count = reactions.count + 1, updated_at = NOW()
         RETURNING count;`,
        [slug]
      )

      if (result.rows && result.rows[0]) {
        return Number(result.rows[0].count)
      }
    } catch (err) {
      console.error("PostgreSQL incrementReaction error:", err)
    }

    inMemoryReactions[slug] = (inMemoryReactions[slug] || 0) + 1
    return inMemoryReactions[slug]
  },
}
