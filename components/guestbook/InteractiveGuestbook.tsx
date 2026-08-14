"use client"

import React, { useState, useEffect } from "react"
import { MessageSquare, Send, Check, User, Clock, Heart, Award, Sparkles } from "lucide-react"

interface GuestbookEntry {
  id: string
  name: string
  role?: string
  message: string
  createdAt: string
}

export function InteractiveGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [authorName, setAuthorName] = useState("")
  const [authorRole, setAuthorRole] = useState("")
  const [noteMessage, setNoteMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook")
      const data = await res.json()
      if (data.success && data.entries) {
        setEntries(data.entries)
      }
    } catch (err) {
      console.error("Error fetching guestbook:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName || !noteMessage) return

    setSubmitting(true)
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: authorName,
          role: authorRole || "Visitor",
          message: noteMessage,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setAuthorName("")
        setAuthorRole("")
        setNoteMessage("")
        setSubmitted(true)
        fetchEntries()
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch (err) {
      console.error("Error posting to guestbook:", err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid var(--rule-dark)",
        borderRadius: "6px",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
      }}
    >
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid var(--rule)", paddingBottom: "1rem", marginBottom: "1.75rem" }}>
        <div>
          <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
            Peer Endorsements & Guestbook
          </span>
          <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ink)" }}>
            Leave a Note or Endorsement
          </h3>
        </div>
        <span className="text-project-num" style={{ fontSize: "0.8125rem" }}>
          {entries.length} Signatures
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "2rem", alignItems: "start" }}>
        
        {/* ── FORM ─────────────────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--rule)",
            borderRadius: "4px",
            padding: "1.25rem 1.5rem",
          }}
        >
          <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", display: "block", marginBottom: "0.75rem" }}>
            Sign the Guestbook
          </span>

          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="text"
              required
              placeholder="Your Name *"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                fontSize: "0.8125rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                color: "var(--ink)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <input
              type="text"
              placeholder="Role / Title (e.g. Senior Engineer, Recruiter)"
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                fontSize: "0.8125rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                color: "var(--ink)",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <textarea
              required
              rows={3}
              placeholder="Write a quick note, feedback, or recommendation..."
              value={noteMessage}
              onChange={(e) => setNoteMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                fontSize: "0.8125rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                color: "var(--ink)",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "var(--ink)",
              color: "var(--paper)",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Posting..." : <><Send size={12} /> Post Signature</>}
          </button>

          {submitted && (
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--olive)", textAlign: "center", fontWeight: 600 }}>
              ✓ Thank you! Your signature is posted live.
            </p>
          )}
        </form>

        {/* ── LIVE ENTRIES LIST ────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", maxHeight: "360px", overflowY: "auto" }}>
          {loading ? (
            <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>Loading guestbook signatures...</p>
          ) : entries.length === 0 ? (
            <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>Be the first to sign the guestbook!</p>
          ) : (
            entries.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--rule)",
                  borderRadius: "3px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem" }}>
                  <div>
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)" }}>{item.name}</span>
                    {item.role && (
                      <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 500 }}>
                        &nbsp;·&nbsp;{item.role}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: "0.625rem", color: "var(--ink-muted)" }}>
                    {new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.55 }}>
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
