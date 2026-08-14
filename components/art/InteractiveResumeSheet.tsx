"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Briefcase,
  Code2,
  GraduationCap,
  Award,
  ExternalLink,
  RotateCcw,
  Mail,
  MapPin,
  Phone,
  FolderGit2,
  CheckCircle2,
  Trophy,
  Github,
  Linkedin,
  Code,
  Globe,
} from "lucide-react"
import { experience } from "@/lib/data/experience"
import { meta } from "@/lib/data/meta"
import { projects } from "@/lib/data/projects"

type ActiveTab = "experience" | "projects" | "skills" | "academics" | "achievements"

export function InteractiveResumeSheet() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("experience")
  const [rotX, setRotX] = useState(-3)
  const [rotY, setRotY] = useState(5)
  const [isDragging, setIsDragging] = useState(false)
  const [autoFloat, setAutoFloat] = useState(true)

  const cardRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef<{ x: number; y: number; startRotX: number; startRotY: number }>({
    x: 0,
    y: 0,
    startRotX: 0,
    startRotY: 0,
  })

  // Gentle ambient float when idle
  useEffect(() => {
    if (!autoFloat || isDragging) return
    let frameId: number
    let startTime = Date.now()

    const loop = () => {
      const elapsed = (Date.now() - startTime) / 1000
      setRotX(-3 + Math.sin(elapsed * 0.7) * 2.2)
      setRotY(5 + Math.cos(elapsed * 0.6) * 2.8)
      frameId = requestAnimationFrame(loop)
    }

    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [autoFloat, isDragging])

  // Drag rotation handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return
    setIsDragging(true)
    setAutoFloat(false)
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startRotX: rotX,
      startRotY: rotY,
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStartRef.current.x
    const deltaY = e.clientY - dragStartRef.current.y

    const newRotY = Math.max(-45, Math.min(45, dragStartRef.current.startRotY + deltaX * 0.3))
    const newRotX = Math.max(-35, Math.min(35, dragStartRef.current.startRotX - deltaY * 0.3))

    setRotX(newRotX)
    setRotY(newRotY)
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const resetRotation = () => {
    setRotX(-3)
    setRotY(5)
    setAutoFloat(true)
  }

  const shadowX = -rotY * 0.7
  const shadowY = Math.max(8, rotX * 0.7 + 16)

  const tabList = [
    { id: "experience" as ActiveTab, label: "Experience", icon: Briefcase },
    { id: "projects" as ActiveTab, label: "Projects", icon: FolderGit2 },
    { id: "skills" as ActiveTab, label: "Skills", icon: Code2 },
    { id: "academics" as ActiveTab, label: "Education", icon: GraduationCap },
    { id: "achievements" as ActiveTab, label: "Certifications & Honors", icon: Trophy },
  ]

  return (
    <div
      style={{
        perspective: "1400px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Interactive Dossier Folio */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "#FDFCFA",
          border: "1px solid var(--rule-dark)",
          borderRadius: "4px",
          boxShadow: `${shadowX}px ${shadowY}px 32px -6px rgba(23, 23, 23, 0.14), 0 2px 4px rgba(23, 23, 23, 0.05)`,
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: isDragging ? "none" : "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          cursor: isDragging ? "grabbing" : "default",
          overflow: "hidden",
        }}
      >
        {/* Top Control Bar */}
        <div
          style={{
            padding: "0.55rem 1rem",
            backgroundColor: "#F8F7F4",
            borderBottom: "1px solid var(--rule)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.6875rem",
            color: "var(--ink-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--olive)",
                display: "inline-block",
              }}
            />
            <span style={{ fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink)" }}>
              Curriculum Vitae
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "var(--olive)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Full Catalog <ExternalLink size={11} />
            </Link>

            <button
              onClick={resetRotation}
              title="Reset Angle"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                color: "var(--ink-muted)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RotateCcw size={12} />
            </button>
          </div>
        </div>

        {/* Exact Resume Header with Clickable Contact & Profile Links */}
        <div
          style={{
            padding: "1.25rem 1.5rem 0.9rem 1.5rem",
            borderBottom: "1px solid var(--rule)",
            backgroundColor: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <h2
            className="font-serif"
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "0.25rem",
            }}
          >
            {meta.name}
          </h2>

          {/* Contact Line with Clickable Phone, Email, Location */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              alignItems: "center",
              fontSize: "0.75rem",
              color: "var(--ink-muted)",
              marginBottom: "0.35rem",
            }}
          >
            <a
              href={`tel:${meta.phone.replace(/\s+/g, "")}`}
              style={{ color: "inherit", textDecoration: "none" }}
              title="Call Yuvraj"
            >
              {meta.phone}
            </a>
            <span>|</span>
            <a
              href={`mailto:${meta.contact.email}`}
              style={{ color: "inherit", textDecoration: "none" }}
              title="Email Yuvraj"
            >
              {meta.contact.email}
            </a>
            <span>|</span>
            <span>{meta.location}</span>
          </div>

          {/* Profile Links Row: LinkedIn | LeetCode | GitHub */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            <a
              href="https://linkedin.com/in/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--olive)", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://leetcode.com/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--olive)", textDecoration: "underline" }}
            >
              LeetCode
            </a>
            <span>|</span>
            <a
              href="https://github.com/uv3704"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--olive)", textDecoration: "underline" }}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            padding: "0.6rem 1.5rem 0 1.5rem",
            backgroundColor: "#FBF9F5",
            borderBottom: "1px solid var(--rule)",
            overflowX: "auto",
          }}
        >
          {tabList.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  paddingBottom: "0.5rem",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  color: isActive ? "var(--ink)" : "var(--ink-muted)",
                  borderBottom: isActive ? "2px solid var(--olive)" : "2px solid transparent",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon size={11} style={{ color: isActive ? "var(--olive)" : "inherit" }} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Body Content */}
        <div
          style={{
            padding: "1.15rem 1.5rem",
            minHeight: "260px",
            maxHeight: "340px",
            overflowY: "auto",
            backgroundColor: "#FFFFFF",
            fontSize: "0.8125rem",
            lineHeight: 1.55,
          }}
        >
          {/* ── TAB 1: EXPERIENCE ── */}
          {activeTab === "experience" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* Infosys SpringBoard */}
              <div style={{ borderLeft: "2px solid var(--olive)", paddingLeft: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--ink)" }}>Infosys SpringBoard</span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                      &nbsp;|&nbsp;{" "}
                      <a
                        href="https://github.com/uv3704/Classifcation_Infosys_Internship_Oct2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--olive)", textDecoration: "underline", fontWeight: 600 }}
                      >
                        GitHub ↗
                      </a>
                    </span>
                  </div>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>
                    Nov 2024 – Jan 2025
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "0.75rem", color: "var(--olive)", marginBottom: "0.3rem" }}>
                  <span>AI/ML Intern</span>
                  <span>Remote</span>
                </div>
                <ul style={{ listStyle: "none", fontSize: "0.71875rem", color: "var(--ink-muted)", lineHeight: 1.45, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Built CNN model using TensorFlow achieving 97.5% accuracy on 10-class classification (5000+ images); applied data augmentation techniques
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Reduced model size by 35% using quantization and pruning; tested 5+ optimizers (Adam, SGD, RMSprop) for deployment efficiency
                  </li>
                </ul>
              </div>

              {/* ThrivesUp */}
              <div style={{ borderLeft: "2px solid var(--olive)", paddingLeft: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--ink)" }}>ThrivesUp Consultancy Services Pvt Ltd</span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                      &nbsp;|&nbsp;{" "}
                      <a
                        href="https://github.com/uv3704/ThrivesUpJavaProject"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--olive)", textDecoration: "underline", fontWeight: 600 }}
                      >
                        GitHub ↗
                      </a>
                    </span>
                  </div>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>
                    Jul 2025 – Sep 2025
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "0.75rem", color: "var(--olive)", marginBottom: "0.3rem" }}>
                  <span>Java Backend Intern</span>
                  <span>Indore</span>
                </div>
                <ul style={{ listStyle: "none", fontSize: "0.71875rem", color: "var(--ink-muted)", lineHeight: 1.45, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Developed 12+ RESTful API endpoints using Java, Spring patterns, JDBC, and MySQL for Academic Record Management
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Optimized database queries reducing response time from 500ms to 80ms; implemented transaction handling and error logging for 1000+ records
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ── TAB 2: PROJECTS (WITH EXACT GITHUB & CASE STUDY LINKS) ── */}
          {activeTab === "projects" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {/* BetterBee */}
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "0.8rem 0.9rem",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--ink)" }}>BetterBee : Multimodal RAG Platform</span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                      &nbsp;|&nbsp;{" "}
                      <a
                        href="https://github.com/uv3704/BetterBee"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--olive)", textDecoration: "underline", fontWeight: 600 }}
                      >
                        GitHub ↗
                      </a>{" "}
                      &nbsp;|&nbsp; <i>Next.js, FastAPI, LangChain</i>
                    </span>
                  </div>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>Mar 2026 – Ongoing</span>
                </div>

                <ul style={{ listStyle: "none", fontSize: "0.71875rem", color: "var(--ink-muted)", lineHeight: 1.45, display: "flex", flexDirection: "column", gap: "0.2rem", margin: "0.35rem 0" }}>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Built a production-ready Multimodal RAG platform supporting PDFs, images, DOCX, and code files.
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Implemented semantic search using Ollama embeddings, pgvector, hybrid retrieval, and reranking.
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Developed secure APIs, conversational memory, source citations, Dockerized deployment and streaming responses.
                  </li>
                </ul>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.35rem" }}>
                  <Link
                    href="/projects/betterbee"
                    style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
                  >
                    View Project Page <ExternalLink size={10} />
                  </Link>
                </div>
              </div>

              {/* Freelancer */}
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "0.8rem 0.9rem",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                  <div>
                    <span style={{ fontWeight: 700, color: "var(--ink)" }}>Freelancer: Job Marketplace</span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                      &nbsp;|&nbsp;{" "}
                      <a
                        href="https://github.com/uv3704/Freelancer"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--olive)", textDecoration: "underline", fontWeight: 600 }}
                      >
                        GitHub ↗
                      </a>{" "}
                      &nbsp;|&nbsp; <i>Next.js, TypeScript, Tailwind</i>
                    </span>
                  </div>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>Nov 2025 – Feb 2026</span>
                </div>

                <ul style={{ listStyle: "none", fontSize: "0.71875rem", color: "var(--ink-muted)", lineHeight: 1.45, display: "flex", flexDirection: "column", gap: "0.2rem", margin: "0.35rem 0" }}>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Full-stack job marketplace with role-based dashboards (freelancer/client/admin), job filtering, and real-time application updates
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Implemented mentor booking with calendar scheduling, star rating system (1-5), and Razorpay payment processing
                  </li>
                  <li style={{ display: "flex", gap: "0.4rem" }}>
                    <span style={{ color: "var(--olive)" }}>•</span> Integrated Clerk OAuth authentication; optimized bundle size from 350KB to 120KB achieving 92+ Lighthouse score
                  </li>
                </ul>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.35rem" }}>
                  <Link
                    href="/projects/freelancer"
                    style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
                  >
                    View Project Page <ExternalLink size={10} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 3: SKILLS ── */}
          {activeTab === "skills" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                fontSize: "0.71875rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  Languages
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>Java, Python, JavaScript</p>
              </div>

              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  AI / ML
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>LLMs, RAG, LangChain, LangGraph</p>
              </div>

              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  Frontend
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>Next.js, React, Tailwind CSS</p>
              </div>

              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  Databases
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>MySQL, MongoDB, ChromaDB</p>
              </div>

              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  Backend
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>FastAPI, Node.js, JDBC</p>
              </div>

              <div>
                <span className="text-label-olive" style={{ fontSize: "0.625rem", display: "block", marginBottom: "0.25rem" }}>
                  Tools
                </span>
                <p style={{ color: "var(--ink)", lineHeight: 1.4 }}>Git, Postman, Docker</p>
              </div>
            </div>
          )}

          {/* ── TAB 4: EDUCATION ── */}
          {activeTab === "academics" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.75rem" }}>
              <div style={{ backgroundColor: "var(--surface)", padding: "0.75rem", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, color: "var(--ink)" }}>Mandsaur Institute of Technology</span>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>Mandsaur, MP</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "0.71875rem", color: "var(--olive)", marginTop: "0.15rem" }}>
                  <span>B.Tech CSE (AI) | CGPA: 7.95</span>
                  <span>Aug 2022 – Jun 2026</span>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--surface)", padding: "0.75rem", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, color: "var(--ink)" }}>Delhi Public School</span>
                  <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>Mandsaur, MP</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "0.71875rem", color: "var(--ink-muted)", marginTop: "0.15rem" }}>
                  <span>Class XII | 73.6%</span>
                  <span>Jul 2021 – May 2022</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "0.71875rem", color: "var(--ink-muted)", marginTop: "0.15rem" }}>
                  <span>Class X | 77%</span>
                  <span>Jul 2019 – May 2020</span>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 5: CERTIFICATIONS & ACHIEVEMENTS ── */}
          {activeTab === "achievements" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[
                { title: "NPTEL: Programming in Java", tag: "Certification" },
                { title: "Ranked #42 Globally, DevFest.AI 2024", tag: "Global Rank" },
                { title: "Infosys SpringBoard: AI/ML Internship", tag: "Internship" },
                { title: "Organized multiple national-level hackathons", tag: "Leadership" },
                { title: "Google Cloud: Introduction to AI & ML", tag: "Google Cloud" },
                { title: "Hacktoberfest: Level 4 in 2024 & 2025", tag: "Open Source" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "0.5rem 0.65rem",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule)",
                    borderRadius: "2px",
                    fontSize: "0.71875rem",
                    color: "var(--ink)",
                    minHeight: "56px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.35rem" }}>
                    <CheckCircle2 size={12} style={{ color: "var(--olive)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontWeight: 500, lineHeight: 1.35 }}>{item.title}</span>
                  </div>

                  <span
                    style={{
                      fontSize: "0.5625rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--olive)",
                      alignSelf: "flex-start",
                      marginTop: "0.25rem",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div
          style={{
            padding: "0.5rem 1.25rem",
            borderTop: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.625rem",
            color: "var(--ink-muted)",
            backgroundColor: "#FAF8F5",
          }}
        >
          <span>Mandsaur, MP, India</span>
          <Link
            href="/projects"
            style={{
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            Full Career & Projects →
          </Link>
        </div>
      </div>
    </div>
  )
}
