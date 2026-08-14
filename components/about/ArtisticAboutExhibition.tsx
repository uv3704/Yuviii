"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Compass, 
  Sparkles, 
  Layers, 
  Code2, 
  Terminal, 
  Award, 
  ArrowRight, 
  ExternalLink,
  BookOpen,
  User,
  CheckCircle2,
  Calendar,
  MapPin,
  Cpu,
  Zap,
  ShieldCheck,
  Database,
  Filter,
  Check
} from "lucide-react"
import { meta } from "@/lib/data/meta"
import { about } from "@/lib/data/about"

type SectionPlate = "journal" | "mindset" | "skills" | "honors"

export function ArtisticAboutExhibition() {
  const [activePlate, setActivePlate] = useState<SectionPlate>("journal")
  const [skillCategory, setSkillCategory] = useState<string>("all")

  const timelineMilestones = [
    {
      year: "2022 — 2023",
      title: "Foundations & Algorithmic Discovery",
      org: "Mandsaur Institute of Technology",
      role: "B.Tech CSE (AI) Student",
      desc: "Immersed in Java, object-oriented programming, data structures, and competitive problem-solving. Built early web apps and database schemas.",
      badge: "Foundation",
    },
    {
      year: "Oct 2024 — Jan 2025",
      title: "Computer Vision & Model Compression",
      org: "Infosys SpringBoard",
      role: "AI/ML Intern",
      desc: "Trained custom TensorFlow CNN classifiers on 5,000+ images achieving 97.5% accuracy. Compressed model size by 35% using quantization and pruning.",
      badge: "AI/ML Impact",
    },
    {
      year: "Feb 2025 — Jul 2025",
      title: "Full-Stack Web & Cloud Internships",
      org: "Edunet Foundation · CODTECH IT · Cognifyz",
      role: "Full-Stack & Cloud Intern",
      desc: "Engineered responsive full-stack applications with React, Next.js, Node.js, Express, and MongoDB. Built authentication flows and REST APIs.",
      badge: "MERN & Web",
    },
    {
      year: "Jul 2025 — Sep 2025",
      title: "Java Backend & Database Optimization",
      org: "ThrivesUp Consultancy Services",
      role: "Java Backend Intern",
      desc: "Developed 12+ RESTful endpoints in Java with JDBC and Spring patterns. Optimized database queries to cut latency from 500ms down to 80ms.",
      badge: "System Performance",
    },
    {
      year: "2026 — Present",
      title: "Multimodal RAG & Production Platforms",
      org: "Independent & Open Source",
      role: "Full-Stack & AI Engineer",
      desc: "Architecting BetterBee (Multimodal RAG with pgvector & Ollama), Freelancer marketplace, and scalable microservices. Preparing for full-time engineering roles.",
      badge: "Production Systems",
    },
  ]

  const engineeringMindsets = [
    {
      num: "01",
      title: "Low Latency & High Throughput",
      subtitle: "Database & Backend Speed",
      icon: Zap,
      desc: "Software should respond instantly. I structure SQL queries with optimal indexing, pool database connections, and use Redis caching so responses land in under 80ms.",
      metric: "500ms → 80ms Response",
      metricLabel: "Query Optimization",
    },
    {
      num: "02",
      title: "Accurate, Documented AI",
      subtitle: "Production RAG & Vectors",
      icon: Cpu,
      desc: "Instead of ungrounded LLM outputs, I build hybrid retrieval pipelines combining BM25 keyword matching with pgvector embeddings for verifiable citations.",
      metric: "pgvector + BM25",
      metricLabel: "Hybrid Retrieval",
    },
    {
      num: "03",
      title: "Type Safety & Reliability",
      subtitle: "Robust Full-Stack Hygiene",
      icon: ShieldCheck,
      desc: "End-to-end typing in TypeScript and Java catches bugs at compile-time. Combined with Docker containers and clean error boundaries, code stays dependable.",
      metric: "100% Type-Safe",
      metricLabel: "Java & TypeScript",
    },
    {
      num: "04",
      title: "Editorial Restraint in UI",
      subtitle: "Clean User Experience",
      icon: Sparkles,
      desc: "Good design is clear, intuitive, and quiet. I prioritize legible typography, thoughtful spacing, and responsive layouts that make complex tools feel effortless.",
      metric: "Sub-second FCP",
      metricLabel: "Fast Loading",
    },
  ]

  const allSkillsList = [
    { name: "Java", category: "languages", level: "Primary Language" },
    { name: "Python", category: "languages", level: "Primary Language" },
    { name: "JavaScript / TypeScript", category: "languages", level: "Primary Language" },
    { name: "SQL", category: "languages", level: "Core Data Language" },
    
    { name: "React.js", category: "frontend", level: "UI Library" },
    { name: "Next.js (App Router)", category: "frontend", level: "Full-Stack Framework" },
    { name: "Tailwind CSS", category: "frontend", level: "Styling System" },
    { name: "HTML5 / Modern CSS", category: "frontend", level: "Core Web" },

    { name: "Node.js & Express.js", category: "backend", level: "JavaScript Backend" },
    { name: "FastAPI", category: "backend", level: "Python Async API" },
    { name: "Spring Patterns & JDBC", category: "backend", level: "Java Backend" },
    { name: "Hibernate ORM", category: "backend", level: "Java Persistence" },
    { name: "RESTful API Design", category: "backend", level: "Architecture" },
    { name: "WebSockets", category: "backend", level: "Real-Time Comms" },

    { name: "Multimodal RAG Pipelines", category: "ai", level: "Applied LLM" },
    { name: "LangChain & LangGraph", category: "ai", level: "Agentic Frameworks" },
    { name: "TensorFlow & CNNs", category: "ai", level: "Deep Learning" },
    { name: "Ollama Local LLMs", category: "ai", level: "Model Deployment" },
    { name: "Model Quantization (INT8)", category: "ai", level: "Edge Optimization" },

    { name: "PostgreSQL & pgvector", category: "databases", level: "Relational & Vector" },
    { name: "MySQL", category: "databases", level: "Relational Data" },
    { name: "MongoDB", category: "databases", level: "Document Store" },
    { name: "ChromaDB", category: "databases", level: "Vector Store" },
    { name: "Redis", category: "databases", level: "In-Memory Caching" },

    { name: "Docker & Containerization", category: "devops", level: "Microservices" },
    { name: "Git & GitHub", category: "devops", level: "Version Control" },
    { name: "Postman", category: "devops", level: "API Testing" },
    { name: "Linux & Bash", category: "devops", level: "Environment" },
  ]

  const filteredSkills = skillCategory === "all" 
    ? allSkillsList 
    : allSkillsList.filter(s => s.category === skillCategory)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 7vw, 5rem)" }}>

      {/* ── ARTISTIC CURATED MASTHEAD & PROFILE BADGE ──────────────── */}
      <div
        style={{
          borderBottom: "1px solid var(--rule-dark)",
          paddingBottom: "clamp(2rem, 5vw, 3.5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(2rem, 5vw, 3.5rem)",
          alignItems: "center",
        }}
      >
        <div>
          {/* Masthead Chip & Hand Note */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "3px 8px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule-dark)",
                color: "var(--olive)",
                borderRadius: "2px",
              }}
            >
              Developer Profile · 2026
            </span>
            <span className="font-hand" style={{ fontSize: "1.1875rem", color: "var(--olive)" }}>
              Precision in logic, simplicity in form
            </span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              marginBottom: "1rem",
            }}
          >
            Engineering with purpose and clarity.
          </h1>

          <p className="prose-editorial" style={{ fontSize: "1.0625rem", color: "var(--ink)", maxWidth: "50ch" }}>
            I am Yuvraj Singh Rathore, a Full-Stack and AI/ML engineer from India. I focus on building scalable web platforms, sub-80ms backend APIs, and production RAG architectures.
          </p>
        </div>

        {/* Tactile Identity Dossier Card */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--rule-dark)",
            borderRadius: "6px",
            padding: "clamp(1.5rem, 3.5vw, 2rem)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.03)",
            position: "relative",
          }}
        >
          {/* Top Card Badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--rule)", paddingBottom: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--olive)", display: "inline-block" }} />
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)" }}>
                Verified Dossier
              </span>
            </div>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)", fontFamily: "monospace" }}>
              ID: UV-3704
            </span>
          </div>

          {/* Quick Metrics Grid inside Card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginBottom: "1.25rem" }}>
            <div style={{ padding: "0.6rem 0.75rem", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                Education
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>
                B.Tech CSE (AI) · 7.95
              </span>
            </div>

            <div style={{ padding: "0.6rem 0.75rem", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                Experience
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>
                05 Industry Roles
              </span>
            </div>

            <div style={{ padding: "0.6rem 0.75rem", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                Primary Stack
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>
                Java, Next.js, FastAPI
              </span>
            </div>

            <div style={{ padding: "0.6rem 0.75rem", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px" }}>
              <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block" }}>
                Location
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--ink)" }}>
                India (Global Remote)
              </span>
            </div>
          </div>

          {/* Card Signature Line */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed var(--rule)", paddingTop: "0.75rem" }}>
            <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>Open to Full-Time Engineering Roles</span>
            <span className="font-hand" style={{ fontSize: "1.125rem", color: "var(--olive)", transform: "rotate(-2deg)", display: "inline-block" }}>
              Yuvraj S. Rathore
            </span>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE EXHIBITION NAVIGATOR ────────────────────────── */}
      <div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            borderBottom: "1px solid var(--rule)",
            paddingBottom: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { id: "journal", label: "01 · Engineering Journey Timeline", icon: Calendar },
            { id: "mindset", label: "02 · How I Build & Optimize", icon: Compass },
            { id: "skills", label: "03 · Technical Stack & Skills", icon: Layers },
            { id: "honors", label: "04 · Certifications & Honors", icon: Award },
          ].map((plate) => {
            const Icon = plate.icon
            const isSelected = activePlate === plate.id
            return (
              <button
                key={plate.id}
                onClick={() => setActivePlate(plate.id as SectionPlate)}
                style={{
                  padding: "10px 18px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  backgroundColor: isSelected ? "var(--ink)" : "var(--surface)",
                  color: isSelected ? "var(--paper)" : "var(--ink)",
                  border: isSelected ? "1px solid var(--ink)" : "1px solid var(--rule)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon size={14} style={{ color: isSelected ? "var(--olive)" : "var(--olive)" }} />
                {plate.label}
              </button>
            )
          })}
        </div>

        {/* ── PLATE DISPLAY CONTAINER ──────────────────────────────── */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--rule-dark)",
            borderRadius: "6px",
            padding: "clamp(1.5rem, 4vw, 2.75rem)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
          }}
        >
          {/* ── PLATE 1: INTERACTIVE TIMELINE JOURNAL ── */}
          {activePlate === "journal" && (
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Chronological Progression
                </span>
                <h2 className="font-serif" style={{ fontSize: "1.75rem", color: "var(--ink)", marginTop: "0.25rem" }}>
                  The Developer Trajectory
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  How foundational problem-solving evolved into commercial backend engineering and production AI systems.
                </p>
              </div>

              {/* Visual Vertical Step Timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {timelineMilestones.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px 1fr",
                      gap: "1.5rem",
                      paddingBottom: "1.5rem",
                      borderBottom: idx < timelineMilestones.length - 1 ? "1px dashed var(--rule)" : "none",
                      alignItems: "start",
                    }}
                  >
                    {/* Left: Year & Badge */}
                    <div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)", display: "block" }}>
                        {item.year}
                      </span>
                      <span
                        style={{
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          padding: "2px 6px",
                          backgroundColor: "var(--surface)",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                          display: "inline-block",
                          marginTop: "0.35rem",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Right: Milestone Details */}
                    <div>
                      <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>
                        {item.title}
                      </h3>
                      <div style={{ fontSize: "0.75rem", color: "var(--olive)", fontWeight: 600, marginBottom: "0.5rem" }}>
                        {item.org} · {item.role}
                      </div>
                      <p style={{ fontSize: "0.84375rem", color: "var(--ink)", lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PLATE 2: ENGINEERING MINDSET & PRINCIPLES ── */}
          {activePlate === "mindset" && (
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Engineering Principles
                </span>
                <h2 className="font-serif" style={{ fontSize: "1.75rem", color: "var(--ink)", marginTop: "0.25rem" }}>
                  How I Approach Software Design & Performance
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  Core engineering benchmarks that guide my development across backends, databases, and AI models.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.5rem" }}>
                {engineeringMindsets.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.num}
                      style={{
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--rule-dark)",
                        borderRadius: "4px",
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                          <span className="text-project-num" style={{ fontSize: "0.875rem" }}>{item.num}</span>
                          <Icon size={16} style={{ color: "var(--olive)" }} />
                        </div>

                        <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.2rem" }}>
                          {item.title}
                        </h3>

                        <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
                          {item.subtitle}
                        </span>

                        <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                          {item.desc}
                        </p>
                      </div>

                      <div style={{ borderTop: "1px dashed var(--rule)", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>{item.metricLabel}:</span>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--olive)" }}>{item.metric}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── PLATE 3: FILTERABLE SKILL MATRIX ── */}
          {activePlate === "skills" && (
            <div>
              <div style={{ marginBottom: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                    Filterable Skill Taxonomy
                  </span>
                  <h2 className="font-serif" style={{ fontSize: "1.75rem", color: "var(--ink)", marginTop: "0.25rem" }}>
                    Verified Technical Stack
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                    Click a category filter to inspect specific languages, frameworks, vector stores, and deployment tools.
                  </p>
                </div>

                {/* Filter Pills */}
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {[
                    { id: "all", label: "All Technologies" },
                    { id: "languages", label: "Languages" },
                    { id: "frontend", label: "Frontend" },
                    { id: "backend", label: "Backend" },
                    { id: "ai", label: "AI / ML" },
                    { id: "databases", label: "Databases" },
                    { id: "devops", label: "Tools" },
                  ].map((filter) => {
                    const isSelected = skillCategory === filter.id
                    return (
                      <button
                        key={filter.id}
                        onClick={() => setSkillCategory(filter.id)}
                        style={{
                          padding: "5px 10px",
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          backgroundColor: isSelected ? "var(--olive)" : "var(--surface)",
                          color: isSelected ? "#FFFFFF" : "var(--ink)",
                          border: isSelected ? "1px solid var(--olive)" : "1px solid var(--rule)",
                          borderRadius: "2px",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {filter.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 210px), 1fr))",
                  gap: "0.75rem",
                }}
              >
                {filteredSkills.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "0.75rem 1rem",
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--rule)",
                      borderRadius: "3px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "68px",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)" }}>
                      {s.name}
                    </span>
                    <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 500 }}>
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PLATE 4: HONORS & CERTIFICATIONS ── */}
          {activePlate === "honors" && (
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Verified Track Record
                </span>
                <h2 className="font-serif" style={{ fontSize: "1.75rem", color: "var(--ink)", marginTop: "0.25rem" }}>
                  Honors, Certifications & Recognition
                </h2>
                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  Commercial credentials, competitive programming ranks, and hackathon leadership.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
                {[
                  { title: "Ranked #42 Globally, DevFest.AI 2024", type: "Global Competition", issuer: "DevFest.AI" },
                  { title: "Organized National Level Hackathon (100+ Teams)", type: "Leadership & Event", issuer: "MIT" },
                  { title: "NPTEL: Programming in Java Certification", type: "Official Certificate", issuer: "NPTEL / IIT" },
                  { title: "Infosys SpringBoard: AI/ML Internship Certificate", type: "Industry Certificate", issuer: "Infosys" },
                  { title: "ThrivesUp Consultancy: Java Backend Certificate", type: "Industry Certificate", issuer: "ThrivesUp" },
                  { title: "Cognifyz: Full-Stack Internship Certificate", type: "Industry Certificate", issuer: "Cognifyz" },
                  { title: "Google Cloud: Introduction to AI & ML", type: "Cloud Certificate", issuer: "Google Cloud" },
                  { title: "Hacktoberfest: Level 4 in 2024 & 2025", type: "Open Source Badge", issuer: "DigitalOcean / GitHub" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "1rem 1.25rem",
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--rule-dark)",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.875rem",
                    }}
                  >
                    <div style={{ padding: "6px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px", color: "var(--olive)", marginTop: "2px" }}>
                      <Award size={16} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.35 }}>
                        {item.title}
                      </h3>
                      <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.6875rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                        <span style={{ color: "var(--olive)", fontWeight: 600 }}>{item.type}</span>
                        <span>·</span>
                        <span>{item.issuer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── ARTISTIC BOTTOM CALL TO ACTION ─────────────────────────── */}
      <div
        style={{
          border: "1px solid var(--rule-dark)",
          borderRadius: "4px",
          padding: "clamp(2rem, 5vw, 3rem)",
          backgroundColor: "var(--surface)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.3rem" }}>
            Production Works
          </span>
          <h2 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.35rem" }}>
            Ready to explore verified code and production systems?
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)" }}>
            5 Verified Internships · 7 Production Systems · Public GitHub Repositories.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              padding: "10px 20px",
              backgroundColor: "var(--ink)",
              color: "var(--paper)",
              borderRadius: "2px",
            }}
          >
            View Work & Projects <ArrowRight size={13} />
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              padding: "9px 18px",
              backgroundColor: "#FFFFFF",
              border: "1px solid var(--rule-dark)",
              color: "var(--ink)",
              borderRadius: "2px",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
