import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, MapPin, Shield, Zap, Terminal } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { InteractiveContactForm } from "@/components/contact/InteractiveContactForm"
import { InteractiveGuestbook } from "@/components/guestbook/InteractiveGuestbook"
import { meta } from "@/lib/data/meta"

export const metadata = {
  title: "Contact & Inquiries — Yuvraj Singh Rathore",
  description: "Get in touch with Yuvraj Singh Rathore for Full-Stack, Backend, and AI engineering opportunities.",
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "5.5rem" }}>

        {/* ── HEADER ─────────────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(3rem, 6vw, 4.5rem)" }}>
          <div className="container-editorial">
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="status-dot" aria-hidden="true" />
                <span className="text-label-olive">Open for Opportunities · Full-Stack & AI</span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-section-heading" style={{ maxWidth: "24ch", marginBottom: "1rem" }}>
                Let&apos;s build scalable systems together.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="prose-editorial" style={{ maxWidth: "62ch", color: "var(--ink-muted)", fontSize: "1.0625rem" }}>
                Seeking Full-Stack, Backend, and AI/ML engineering roles. Reach out via email, phone, or the dispatch letterhead below to initiate conversations.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── INTERACTIVE CONTACT DOSSIER & FORM ─────────────────────── */}
        <section style={{ paddingBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <div className="container-editorial">
            <Reveal delay={2}>
              <InteractiveContactForm />
            </Reveal>
          </div>
        </section>

        {/* ── INTERACTIVE PEER GUESTBOOK & ENDORSEMENTS ──────────────── */}
        <section style={{ paddingBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
          <div className="container-editorial">
            <Reveal delay={3}>
              <InteractiveGuestbook />
            </Reveal>
          </div>
        </section>

        {/* ── RECRUITER QUICK-FACTS MATRIX ───────────────────────────── */}
        <section
          style={{
            paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
            backgroundColor: "var(--surface)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div className="container-editorial">
            <div
              style={{
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
                  Engineering Dossier
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.875rem)", color: "var(--ink)" }}>
                  Recruiter & Team Quick Facts
                </h2>
              </div>
              <span className="text-project-num" style={{ fontSize: "0.8125rem" }}>
                Summary Matrix
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {/* Fact 1 */}
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--rule-dark)", borderRadius: "3px", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--olive)", display: "block", marginBottom: "0.35rem" }}>
                  Target Roles
                </span>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>
                  Full-Stack, Backend & AI Engineer
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Java (Spring), Python (FastAPI), Next.js, RAG pipelines, Docker microservices.
                </p>
              </div>

              {/* Fact 2 */}
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--rule-dark)", borderRadius: "3px", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--olive)", display: "block", marginBottom: "0.35rem" }}>
                  Availability & Notice
                </span>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>
                  Immediate / Flexible
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Graduating B.Tech CSE (AI) in June 2026. Ready for full-time or intern-to-hire.
                </p>
              </div>

              {/* Fact 3 */}
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--rule-dark)", borderRadius: "3px", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--olive)", display: "block", marginBottom: "0.35rem" }}>
                  Work Authorization
                </span>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>
                  India (Global Remote)
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Open to remote roles worldwide and on-site relocation across India / International.
                </p>
              </div>

              {/* Fact 4 */}
              <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--rule-dark)", borderRadius: "3px", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--olive)", display: "block", marginBottom: "0.35rem" }}>
                  Code Repositories
                </span>
                <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>
                  Public & Verified
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)", lineHeight: 1.5 }}>
                  Full production codebases available on GitHub for immediate technical review.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
