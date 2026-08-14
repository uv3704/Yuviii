import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { meta } from "@/lib/data/meta"
import { InteractiveResumeSheet } from "@/components/art/InteractiveResumeSheet"
import { EditorialStatement } from "@/components/art/EditorialStatement"

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* ── HERO & 3D INTERACTIVE RESUME ────────────────────────────── */}
        <section
          aria-label="Introduction and Interactive Resume"
          style={{
            paddingTop: "clamp(6rem, 11vw, 8.5rem)",
            paddingBottom: "clamp(4rem, 8vw, 6.5rem)",
          }}
        >
          <div className="container-editorial">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                gap: "clamp(2.5rem, 5vw, 4.5rem)",
                alignItems: "start",
              }}
            >
              {/* Left: Handwritten Hero & Personal Narrative */}
              <div style={{ position: "sticky", top: "5.5rem" }}>
                {/* Status Indicator */}
                <Reveal>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span className="status-dot" aria-hidden="true" />
                    <span className="text-label-olive">{meta.status.label}</span>
                    <span
                      className="text-label"
                      style={{ marginLeft: "1rem", color: "var(--ink-muted)" }}
                    >
                      · {meta.location}
                    </span>
                  </div>
                </Reveal>

                {/* Handwritten Greeting — Caveat */}
                <Reveal delay={1}>
                  <h1
                    className="font-hand text-hero"
                    style={{ color: "var(--ink)", marginBottom: "0.5rem" }}
                  >
                    I&apos;m Yuvraj.
                  </h1>
                </Reveal>

                {/* Editorial Headline */}
                <Reveal delay={2}>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.35rem, 2.5vw, 1.875rem)",
                      color: "var(--ink)",
                      lineHeight: 1.3,
                      marginBottom: "1.75rem",
                      maxWidth: "34ch",
                    }}
                  >
                    {meta.headline}
                  </p>
                </Reveal>

                {/* Bio */}
                <Reveal delay={3}>
                  <p
                    className="prose-editorial"
                    style={{ marginBottom: "2.25rem", maxWidth: "46ch" }}
                  >
                    {meta.bio}
                  </p>
                </Reveal>

                {/* Quick Portals */}
                <Reveal delay={3}>
                  <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
                    <Link
                      href="/projects"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        padding: "8px 16px",
                        backgroundColor: "var(--ink)",
                        color: "var(--paper)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      View Projects <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>

                    <Link
                      href="/about"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--ink-muted)",
                        borderBottom: "1px solid var(--rule-dark)",
                        paddingBottom: "2px",
                        transition: "color 0.15s",
                      }}
                    >
                      About & Bio
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right: 3D Interactive Perspective Resume Sheet */}
              <Reveal delay={1}>
                <div style={{ width: "100%" }}>
                  <InteractiveResumeSheet />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── ENGINEERING PRINCIPLES & ARCHITECTURE ─────────────────── */}
        <section
          aria-label="Engineering Principles"
          style={{ paddingBottom: "clamp(5rem, 10vw, 8rem)" }}
        >
          <div className="container-editorial">
            <EditorialStatement />
          </div>
        </section>

        {/* ── ENHANCED CONTACT DOSSIER ───────────────────────────────── */}
        <section
          aria-label="Direct Contact and Hiring"
          style={{
            paddingBlock: "clamp(4.5rem, 9vw, 7.5rem)",
            borderTop: "1px solid var(--rule)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="container-editorial">
            <Reveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "clamp(2.5rem, 5vw, 4.5rem)",
                  alignItems: "start",
                }}
              >
                {/* Left Side: Professional Pitch */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span className="status-dot" aria-hidden="true" />
                    <span className="text-label-olive">Open for Opportunities</span>
                  </div>

                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Let&apos;s build scalable, production-grade systems together.
                  </h2>

                  <p
                    className="prose-editorial"
                    style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "46ch" }}
                  >
                    Seeking Full-Stack, Backend, or AI/ML roles where I can leverage expertise in Java, Next.js, FastAPI, RAG pipelines, and database optimization to create high-impact software.
                  </p>

                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                    <a
                      href={`mailto:${meta.contact.email}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        padding: "10px 20px",
                        backgroundColor: "var(--ink)",
                        color: "var(--paper)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <Mail size={14} /> Send Email Direct
                    </a>

                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "var(--olive)",
                        padding: "9px 16px",
                        border: "1px solid var(--rule-dark)",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      Full Contact Form <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Structured Contact Matrix */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--rule-dark)",
                    borderRadius: "4px",
                    padding: "clamp(1.5rem, 3.5vw, 2.25rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                    Direct Communication Channels
                  </span>

                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingBottom: "1rem", borderBottom: "1px solid var(--rule)" }}>
                    <div style={{ padding: "8px", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "2px", color: "var(--olive)" }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                        Email
                      </span>
                      <a href={`mailto:${meta.contact.email}`} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", textDecoration: "underline" }}>
                        {meta.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingBottom: "1rem", borderBottom: "1px solid var(--rule)" }}>
                    <div style={{ padding: "8px", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "2px", color: "var(--olive)" }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                        Phone / WhatsApp
                      </span>
                      <a href={`tel:${meta.phone.replace(/\s+/g, "")}`} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--ink)", textDecoration: "none" }}>
                        {meta.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingBottom: "1rem", borderBottom: "1px solid var(--rule)" }}>
                    <div style={{ padding: "8px", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "2px", color: "var(--olive)" }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                        Location
                      </span>
                      <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)" }}>
                        Mandsaur, Madhya Pradesh, India (Open to Remote & Relocation)
                      </span>
                    </div>
                  </div>

                  {/* Social Profiles Grid */}
                  <div style={{ paddingTop: "0.25rem" }}>
                    <span style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.5rem" }}>
                      Engineering Profiles
                    </span>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <a
                        href="https://linkedin.com/in/uv3704"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "6px 12px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Linkedin size={12} /> LinkedIn ↗
                      </a>

                      <a
                        href="https://github.com/uv3704"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "6px 12px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Github size={12} /> GitHub ↗
                      </a>

                      <a
                        href="https://leetcode.com/uv3704"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "6px 12px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <Code size={12} /> LeetCode ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
