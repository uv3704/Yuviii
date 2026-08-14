import Link from "next/link"
import { ArrowRight, Radio, Cpu, Layers, Sparkles, Terminal, Activity } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { InteractiveNowWorkbench } from "@/components/now/InteractiveNowWorkbench"
import { LiveStatsCounter } from "@/components/stats/LiveStatsCounter"
import { meta } from "@/lib/data/meta"

export const metadata = {
  title: "Now — Live Engineering Radar — Yuvraj Singh Rathore",
  description: "Interactive real-time engineering workbench: System Design blueprints, DSA frameworks, and applied Multimodal AI pipelines.",
}

export default function NowPage() {
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
                <span className="text-label-olive">Live Status & Radar · 2026</span>
                <span className="text-label" style={{ color: "var(--ink-muted)", marginLeft: "0.5rem" }}>
                  · Active Engineering Radar
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="text-section-heading" style={{ maxWidth: "24ch", marginBottom: "0.875rem" }}>
                Engineering Workbench & Live Radar
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="prose-editorial" style={{ maxWidth: "66ch", color: "var(--ink-muted)", fontSize: "1.0625rem" }}>
                An interactive console showcasing what I am actively studying in distributed systems, practicing in algorithmic data structures, and deploying with cutting-edge multimodal AI.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── INTERACTIVE WORKBENCH CONSOLE ──────────────────────────── */}
        <section style={{ paddingBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}>
          <div className="container-editorial">
            <Reveal delay={2}>
              <InteractiveNowWorkbench />
            </Reveal>
          </div>
        </section>

        {/* ── LIVE LEETCODE & GITHUB STATS WIDGET ────────────────────── */}
        <section style={{ paddingBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <div className="container-editorial">
            <Reveal delay={3}>
              <LiveStatsCounter />
            </Reveal>
          </div>
        </section>

        {/* ── ACTIVE PRODUCTION WORKSPACES ───────────────────────────── */}
        <section
          style={{
            paddingBlock: "clamp(3.5rem, 7vw, 5.5rem)",
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
                  Active Workstations
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--ink)" }}>
                  Current Builds in Development
                </h2>
              </div>
              <span className="text-project-num" style={{ fontSize: "0.875rem" }}>
                03 Active Repos
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: "1.25rem",
                marginBottom: "3.5rem",
              }}
            >
              {/* Build 1: BetterBee */}
              <Reveal delay={0}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--rule-dark)",
                    borderRadius: "3px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)" }}>
                        BetterBee: Advanced RAG
                      </h3>
                      <span
                        style={{
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        Active Sprint
                      </span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                      Refining document parsing pipelines with table extraction, OCR fallback, and multi-turn conversational memory using pgvector and Ollama.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px dashed var(--rule)", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>Next.js · FastAPI · pgvector</span>
                    <Link
                      href="/projects/betterbee"
                      style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                    >
                      Case Study <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Build 2: Freelancer */}
              <Reveal delay={1}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--rule-dark)",
                    borderRadius: "3px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)" }}>
                        Freelancer Marketplace
                      </h3>
                      <span
                        style={{
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        Refining
                      </span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                      Implementing real-time WebSockets communication, calendar synchronization for mentor bookings, and secure Razorpay payment webhooks.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px dashed var(--rule)", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>Next.js · TypeScript · Razorpay</span>
                    <Link
                      href="/projects/freelancer"
                      style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                    >
                      Case Study <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Build 3: VisionX */}
              <Reveal delay={2}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--rule-dark)",
                    borderRadius: "3px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)" }}>
                        VisionX Defect Inspection
                      </h3>
                      <span
                        style={{
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        Benchmarking
                      </span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                      Benchmarking INT8 quantized computer vision CNN models on FastAPI to push inference latency under 20ms per inspection batch.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px dashed var(--rule)", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>TensorFlow · FastAPI · Docker</span>
                    <Link
                      href="/projects/visionx"
                      style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                    >
                      Case Study <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── AVAILABILITY CALLOUT ───────────────────────────────────── */}
            <div
              style={{
                border: "1px solid var(--rule-dark)",
                borderRadius: "4px",
                padding: "clamp(2rem, 5vw, 3rem)",
                backgroundColor: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.35rem" }}>
                  Availability & Opportunities
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.5rem" }}>
                  Looking for Full-Stack, Backend & AI Roles
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", maxWidth: "54ch", lineHeight: 1.6 }}>
                  Actively interviewing for full-time engineering positions and high-impact software roles where I can build scalable systems using Java, Next.js, FastAPI, and AI.
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    padding: "10px 20px",
                    backgroundColor: "var(--ink)",
                    color: "var(--paper)",
                  }}
                >
                  Get in Touch <ArrowRight size={13} />
                </Link>

                <Link
                  href="/projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    padding: "9px 18px",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule-dark)",
                    color: "var(--ink)",
                  }}
                >
                  View Work Archive
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
