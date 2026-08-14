import { Pool } from "pg"

const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  "postgresql://postgres:03072004Yuvraj??@db.nqgvihmwxlwpkiddzikm.supabase.co:5432/postgres"

let pool: Pool | null = null

export function getPostgresPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    })
  }
  return pool
}

let isInitialized = false

export async function ensureTablesExist() {
  if (isInitialized) return
  try {
    const p = getPostgresPool()
    
    // Create messages table
    await p.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        topic TEXT DEFAULT 'General Inquiry',
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `)

    // Create guestbook table
    await p.query(`
      CREATE TABLE IF NOT EXISTS guestbook (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        role TEXT DEFAULT 'Visitor / Engineer',
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `)

    // Create reactions table
    await p.query(`
      CREATE TABLE IF NOT EXISTS reactions (
        slug TEXT PRIMARY KEY,
        count INTEGER DEFAULT 1 NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `)

    // Seed default guestbook entries if empty
    const { rowCount: gbCount } = await p.query(`SELECT 1 FROM guestbook LIMIT 1;`)
    if (gbCount === 0) {
      await p.query(`
        INSERT INTO guestbook (name, role, message) VALUES
        ('Dev Lead & Mentor', 'Senior Engineering Lead', 'Strong foundational problem-solving and excellent command over Java, FastAPI, and RAG architectures.'),
        ('Collaborator', 'Full-Stack Developer', 'Clean architecture, rapid delivery, and deep knowledge of distributed backend systems.');
      `)
    }

    // Seed reactions if empty
    const { rowCount: rxCount } = await p.query(`SELECT 1 FROM reactions LIMIT 1;`)
    if (rxCount === 0) {
      await p.query(`
        INSERT INTO reactions (slug, count) VALUES
        ('betterbee', 48),
        ('freelancer', 36),
        ('codestorm', 42),
        ('visionx', 29),
        ('academic-records', 31),
        ('devpulse', 27),
        ('docuforge', 24)
        ON CONFLICT (slug) DO NOTHING;
      `)
    }

    isInitialized = true
  } catch (err) {
    console.error("Auto table migration error (will fallback gracefully):", err)
  }
}
