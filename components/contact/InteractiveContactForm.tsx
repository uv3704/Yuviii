"use client"

import React, { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  Globe, 
  Clock,
  ArrowRight,
  ExternalLink,
  Code
} from "lucide-react"
import { meta } from "@/lib/data/meta"

export function InteractiveContactForm() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [inquiryType, setInquiryType] = useState("Full-Time Role")
  const [senderName, setSenderName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [senderCompany, setSenderCompany] = useState("")
  const [message, setMessage] = useState("")
  const [sentStatus, setSentStatus] = useState(false)

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2500)
    }
  }

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Asynchronously save to backend database
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          company: senderCompany,
          topic: inquiryType,
          message: message,
        }),
      })
    } catch (err) {
      console.error("Backend storage logging error:", err)
    }

    const subject = encodeURIComponent(`[${inquiryType}] Inquiring from Portfolio - ${senderName || "Recruiter"}`)
    const body = encodeURIComponent(
      `Hello Yuvraj,\n\n` +
      `My Name: ${senderName || "N/A"}\n` +
      `Email: ${senderEmail || "N/A"}\n` +
      `Company / Organization: ${senderCompany || "N/A"}\n` +
      `Topic: ${inquiryType}\n\n` +
      `Message:\n${message || "I would like to discuss an opportunity."}\n\n` +
      `Best regards,\n${senderName || "Sender"}`
    )
    
    // Open user's default email client
    window.location.href = `mailto:${meta.contact.email}?subject=${subject}&body=${body}`
    setSentStatus(true)
    setTimeout(() => setSentStatus(false), 6000)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        gap: "clamp(2rem, 5vw, 3.5rem)",
        alignItems: "start",
      }}
    >
      {/* ── LEFT COLUMN: DIRECT CHANNELS & CARDS ────────────────── */}
      <div>
        <div style={{ marginBottom: "2rem" }}>
          <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.3rem" }}>
            Direct Communications
          </span>
          <h2 className="font-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--ink)" }}>
            Let&apos;s start a conversation.
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.5rem", lineHeight: 1.6 }}>
            Whether you have a full-time role, a distributed architecture challenge, an AI product concept, or simply want to connect — reach out directly.
          </p>
        </div>

        {/* Interactive Channel Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          
          {/* Card 1: Email */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--rule-dark)",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ padding: "10px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "3px", color: "var(--olive)" }}>
                <Mail size={20} />
              </div>
              <div>
                <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                  Primary Email
                </span>
                <a
                  href={`mailto:${meta.contact.email}`}
                  style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", textDecoration: "underline" }}
                >
                  {meta.contact.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(meta.contact.email, "email")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.6875rem",
                fontWeight: 600,
                padding: "6px 12px",
                backgroundColor: copiedEmail ? "var(--olive)" : "#FFFFFF",
                color: copiedEmail ? "#FFFFFF" : "var(--ink)",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
              {copiedEmail ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--rule-dark)",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ padding: "10px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "3px", color: "var(--olive)" }}>
                <Phone size={20} />
              </div>
              <div>
                <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${meta.phone.replace(/\s+/g, "")}`}
                  style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", textDecoration: "none" }}
                >
                  {meta.phone}
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.4rem" }}>
              <a
                href={`https://wa.me/${meta.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  padding: "6px 10px",
                  backgroundColor: "#FFFFFF",
                  color: "var(--olive)",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}
              >
                WhatsApp ↗
              </a>
              <button
                onClick={() => copyToClipboard(meta.phone, "phone")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  padding: "6px 12px",
                  backgroundColor: copiedPhone ? "var(--olive)" : "#FFFFFF",
                  color: copiedPhone ? "#FFFFFF" : "var(--ink)",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                {copiedPhone ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Card 3: Location & Timezone */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--rule)",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div style={{ padding: "10px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "3px", color: "var(--olive)" }}>
              <MapPin size={20} />
            </div>
            <div>
              <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                Location & Availability
              </span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--ink)" }}>
                Mandsaur, Madhya Pradesh, India
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--olive)", display: "block", marginTop: "2px" }}>
                Open to Worldwide Remote & Relocation Roles
              </span>
            </div>
          </div>
        </div>

        {/* Engineering Profiles Grid */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--rule-dark)", borderRadius: "4px", padding: "1.25rem 1.5rem" }}>
          <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-muted)", display: "block", marginBottom: "0.75rem" }}>
            Verified Engineering Profiles
          </span>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "8px 14px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              GitHub / uv3704 ↗
            </a>
            <a
              href="https://linkedin.com/in/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "8px 14px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              LinkedIn / uv3704 ↗
            </a>
            <a
              href="https://leetcode.com/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "8px 14px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              LeetCode / uv3704 ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN: INTERACTIVE DISPATCH LETTERHEAD ────────── */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--rule-dark)",
          borderRadius: "6px",
          padding: "clamp(1.5rem, 3.5vw, 2.25rem)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        }}
      >
        {/* Letterhead Top Title */}
        <div style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--rule)", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
              Quick Dispatch Letterhead
            </span>
            <span style={{ fontSize: "0.6875rem", fontFamily: "monospace", color: "var(--ink-muted)" }}>
              To: {meta.contact.email}
            </span>
          </div>
          <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)", marginTop: "0.3rem" }}>
            Send a Direct Message
          </h3>
        </div>

        <form onSubmit={handleDispatch}>
          {/* Inquiry Type Pills */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", display: "block", marginBottom: "0.5rem" }}>
              Inquiring About:
            </label>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {[
                "Full-Time Role",
                "AI / RAG Pipeline",
                "Backend Architecture",
                "Collaboration",
                "General Inquiry"
              ].map((type) => {
                const isSelected = inquiryType === type
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      backgroundColor: isSelected ? "var(--ink)" : "var(--surface)",
                      color: isSelected ? "var(--paper)" : "var(--ink)",
                      border: isSelected ? "1px solid var(--ink)" : "1px solid var(--rule)",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Name & Email Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.35rem" }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  color: "var(--ink)",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.35rem" }}>
                Your Email *
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "0.875rem",
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  color: "var(--ink)",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Company */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.35rem" }}>
              Company / Team (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Labs / Startup Inc."
              value={senderCompany}
              onChange={(e) => setSenderCompany(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                color: "var(--ink)",
                outline: "none",
              }}
            />
          </div>

          {/* Message Area */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.35rem" }}>
              Message Body *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about the engineering role, project scope, or technical challenges..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                fontSize: "0.875rem",
                lineHeight: 1.5,
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                color: "var(--ink)",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 20px",
              backgroundColor: "var(--ink)",
              color: "var(--paper)",
              border: "none",
              borderRadius: "2px",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "opacity 0.15s",
            }}
          >
            <Send size={14} /> Prepare & Launch Mail Dispatch
          </button>

          {sentStatus && (
            <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--olive)", textAlign: "center", fontWeight: 600 }}>
              ✓ Mail client opened with pre-filled letterhead!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
