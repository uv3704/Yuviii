"use client"

import React, { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { 
  Search, 
  Command, 
  ArrowRight, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Code2, 
  Briefcase, 
  User, 
  Radio, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react"
import { meta } from "@/lib/data/meta"

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: "Navigation" | "Projects" | "Quick Actions" | "Tech Stack"
  icon: React.ElementType
  action: () => void
  keywords?: string[]
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const router = useRouter()

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(meta.contact.email)
    setCopiedEmail(true)
    setTimeout(() => {
      setCopiedEmail(false)
      setIsOpen(false)
    }, 1500)
  }, [])

  const items: CommandItem[] = [
    // ── Navigation
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Overview, 3D Resume Sheet & Engineering Tenets",
      category: "Navigation",
      icon: User,
      action: () => { router.push("/"); setIsOpen(false) },
      keywords: ["main", "landing", "hero", "resume"],
    },
    {
      id: "nav-projects",
      title: "Work & Projects Catalog",
      subtitle: "5 Internships, 7 Production Systems & Education",
      category: "Navigation",
      icon: Briefcase,
      action: () => { router.push("/projects"); setIsOpen(false) },
      keywords: ["work", "experience", "internships", "systems", "case studies", "education"],
    },
    {
      id: "nav-about",
      title: "About Me",
      subtitle: "Engineering Monograph, Dossier & Journey Timeline",
      category: "Navigation",
      icon: User,
      action: () => { router.push("/about"); setIsOpen(false) },
      keywords: ["story", "bio", "background", "principles", "timeline"],
    },
    {
      id: "nav-now",
      title: "Now & Engineering Radar",
      subtitle: "Live Radar, System Design Blueprints, DSA & RAG Stepper",
      category: "Navigation",
      icon: Radio,
      action: () => { router.push("/now"); setIsOpen(false) },
      keywords: ["radar", "current", "system design", "dsa", "leetcode", "rag", "learning"],
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      subtitle: "Send a message, direct contacts & live guestbook",
      category: "Navigation",
      icon: Mail,
      action: () => { router.push("/contact"); setIsOpen(false) },
      keywords: ["hire", "email", "phone", "message", "guestbook", "chat"],
    },

    // ── Production Projects
    {
      id: "proj-betterbee",
      title: "BetterBee · Multimodal RAG Platform",
      subtitle: "FastAPI, PostgreSQL pgvector, Ollama Local LLMs",
      category: "Projects",
      icon: Cpu,
      action: () => { router.push("/projects/betterbee"); setIsOpen(false) },
      keywords: ["rag", "llm", "ai", "fastapi", "pgvector", "python", "ollama"],
    },
    {
      id: "proj-freelancer",
      title: "Freelancer · Microservices Marketplace",
      subtitle: "Next.js 14, Node.js, Express, MongoDB & Razorpay",
      category: "Projects",
      icon: Code2,
      action: () => { router.push("/projects/freelancer"); setIsOpen(false) },
      keywords: ["mern", "nextjs", "react", "marketplace", "jobs", "razorpay"],
    },
    {
      id: "proj-codestorm",
      title: "CodeStorm · Algorithmic Code Judge",
      subtitle: "Judge0 API, Monocle Editor, Isolated Execution Sandbox",
      category: "Projects",
      icon: Code2,
      action: () => { router.push("/projects/codestorm"); setIsOpen(false) },
      keywords: ["dsa", "judge0", "compiler", "leetcode", "algorithms", "sandbox"],
    },
    {
      id: "proj-visionx",
      title: "VisionX · Computer Vision Classifier",
      subtitle: "TensorFlow CNN, 97.5% Accuracy, INT8 Quantization",
      category: "Projects",
      icon: Cpu,
      action: () => { router.push("/projects/visionx"); setIsOpen(false) },
      keywords: ["ai", "cnn", "tensorflow", "computer vision", "quantization", "model"],
    },
    {
      id: "proj-devpulse",
      title: "DevPulse · Systems Health Monitor",
      subtitle: "FastAPI, Prometheus, Grafana & Docker Swarm",
      category: "Projects",
      icon: Layers,
      action: () => { router.push("/projects/devpulse"); setIsOpen(false) },
      keywords: ["docker", "prometheus", "grafana", "monitoring", "latency", "microservices"],
    },
    {
      id: "proj-academicrecords",
      title: "AcademicRecord Core · University Engine",
      subtitle: "Java Spring Boot, Hibernate, MySQL Enterprise",
      category: "Projects",
      icon: Layers,
      action: () => { router.push("/projects/academic-records"); setIsOpen(false) },
      keywords: ["java", "spring", "hibernate", "mysql", "backend", "enterprise"],
    },
    {
      id: "proj-docuforge",
      title: "DocuForge · Document Intelligence Pipeline",
      subtitle: "LangChain, ChromaDB, FastAPI Semantic Search",
      category: "Projects",
      icon: Cpu,
      action: () => { router.push("/projects/docuforge"); setIsOpen(false) },
      keywords: ["documents", "langchain", "chromadb", "semantic search", "pdf"],
    },

    // ── Quick Actions
    {
      id: "action-resume",
      title: "Download Resume (PDF)",
      subtitle: "Yuvraj Singh Rathore · Full-Stack & AI Engineer",
      category: "Quick Actions",
      icon: FileText,
      action: () => { window.open("/R7.pdf", "_blank"); setIsOpen(false) },
      keywords: ["resume", "cv", "pdf", "download", "credentials"],
    },
    {
      id: "action-copy-email",
      title: copiedEmail ? "Email Copied to Clipboard!" : `Copy Email (${meta.contact.email})`,
      subtitle: "One-click copy for immediate correspondence",
      category: "Quick Actions",
      icon: copiedEmail ? Check : Copy,
      action: handleCopyEmail,
      keywords: ["email", "copy", "uv3704@gmail.com", "contact"],
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      subtitle: "github.com/uv3704 · Verified production repositories",
      category: "Quick Actions",
      icon: Github,
      action: () => { window.open("https://github.com/uv3704", "_blank"); setIsOpen(false) },
      keywords: ["github", "repos", "source code", "open source"],
    },
    {
      id: "action-leetcode",
      title: "Open LeetCode Profile",
      subtitle: "leetcode.com/uv3704 · Data Structures & Algorithms",
      category: "Quick Actions",
      icon: Code2,
      action: () => { window.open("https://leetcode.com/uv3704", "_blank"); setIsOpen(false) },
      keywords: ["leetcode", "dsa", "algorithms", "problem solving"],
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/uv3704 · Professional Network",
      category: "Quick Actions",
      icon: Linkedin,
      action: () => { window.open("https://linkedin.com/in/uv3704", "_blank"); setIsOpen(false) },
      keywords: ["linkedin", "social", "network", "connect"],
    },
  ]

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Filter items based on query
  const filtered = items.filter((item) => {
    if (!query.trim()) return true
    const q = query.toLowerCase()
    const matchTitle = item.title.toLowerCase().includes(q)
    const matchSubtitle = item.subtitle?.toLowerCase().includes(q)
    const matchCategory = item.category.toLowerCase().includes(q)
    const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q))
    return matchTitle || matchSubtitle || matchCategory || matchKeywords
  })

  // Keyboard navigation within results
  const handleNavKeys = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action()
      }
    }
  }

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  return (
    <>
      {/* ── TRIGGER CHIP IN THE FLOATING CORNER ────────────────────── */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Command Palette (Cmd + K)"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 40,
          backgroundColor: "#FFFFFF",
          border: "1px solid var(--rule-dark)",
          borderRadius: "24px",
          padding: "8px 14px",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
      >
        <Search size={13} style={{ color: "var(--olive)" }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--ink)" }}>Search</span>
        <kbd
          style={{
            fontSize: "0.625rem",
            fontWeight: 700,
            padding: "2px 5px",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--rule)",
            borderRadius: "3px",
            color: "var(--ink-muted)",
            fontFamily: "monospace",
          }}
        >
          ⌘K
        </kbd>
      </button>

      {/* ── MODAL OVERLAY ──────────────────────────────────────────── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(23, 23, 23, 0.4)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "clamp(2rem, 10vh, 6rem) 1rem 1rem",
            animation: "fadeIn 0.15s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleNavKeys}
            style={{
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "#FFFFFF",
              border: "1px solid var(--rule-dark)",
              borderRadius: "8px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* ── SEARCH INPUT BAR ───────────────────────────────────── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                borderBottom: "1px solid var(--rule)",
                backgroundColor: "var(--surface)",
              }}
            >
              <Search size={18} style={{ color: "var(--olive)", flexShrink: 0 }} />
              <input
                type="text"
                autoFocus
                placeholder="Search projects, skills, pages, or actions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  fontSize: "0.9375rem",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--ink)",
                }}
              />
              <kbd
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  padding: "3px 6px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--rule)",
                  borderRadius: "3px",
                  color: "var(--ink-muted)",
                  cursor: "pointer",
                  fontFamily: "monospace",
                }}
              >
                ESC
              </kbd>
            </div>

            {/* ── RESULTS LIST ───────────────────────────────────────── */}
            <div style={{ maxHeight: "380px", overflowY: "auto", padding: "0.5rem" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center", color: "var(--ink-muted)", fontSize: "0.875rem" }}>
                  No results found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, index) => {
                  const Icon = item.icon
                  const isSelected = index === selectedIndex
                  return (
                    <div
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(index)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.65rem 0.85rem",
                        borderRadius: "4px",
                        backgroundColor: isSelected ? "var(--surface)" : "transparent",
                        cursor: "pointer",
                        transition: "background-color 0.1s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
                        <div
                          style={{
                            padding: "6px",
                            backgroundColor: isSelected ? "#FFFFFF" : "var(--surface)",
                            border: "1px solid var(--rule)",
                            borderRadius: "4px",
                            color: "var(--olive)",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={14} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: "0.84375rem", fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {item.title}
                          </div>
                          {item.subtitle && (
                            <div style={{ fontSize: "0.6875rem", color: "var(--ink-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0, marginLeft: "0.5rem" }}>
                        <span
                          style={{
                            fontSize: "0.5625rem",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            padding: "2px 5px",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid var(--rule)",
                            color: "var(--olive)",
                            borderRadius: "2px",
                          }}
                        >
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight size={12} style={{ color: "var(--ink)" }} />}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* ── FOOTER HINT BAR ────────────────────────────────────── */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.6rem 1rem",
                backgroundColor: "var(--surface)",
                borderTop: "1px solid var(--rule)",
                fontSize: "0.6875rem",
                color: "var(--ink-muted)",
              }}
            >
              <span>Navigate with <kbd style={{ padding: "1px 4px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>↑</kbd> <kbd style={{ padding: "1px 4px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>↓</kbd> · Select with <kbd style={{ padding: "1px 4px", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>↵</kbd></span>
              <span className="font-hand" style={{ fontSize: "0.9375rem", color: "var(--olive)" }}>
                Yuvraj Singh Rathore · Portfolio
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
