"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Layers, 
  Code2, 
  Sparkles, 
  Terminal, 
  Database, 
  Cpu, 
  Server, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Activity, 
  ShieldCheck, 
  Workflow, 
  Binary, 
  Zap,
  Globe
} from "lucide-react"

type TabType = "system-design" | "dsa" | "ai-rag"

export function InteractiveNowWorkbench() {
  const [activeTab, setActiveTab] = useState<TabType>("system-design")
  const [selectedArchNode, setSelectedArchNode] = useState<string>("gateway")
  const [selectedDsaTopic, setSelectedDsaTopic] = useState<string>("dp")
  const [selectedRagStep, setSelectedRagStep] = useState<string>("retrieval")
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--rule-dark)",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      }}
    >
      {/* ── WORKBENCH TOP BAR ─────────────────────────────────────── */}
      <div
        style={{
          padding: "0.875rem 1.25rem",
          backgroundColor: "#FDFCFA",
          borderBottom: "1px solid var(--rule)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#E05D52", display: "inline-block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#E6B800", display: "inline-block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#4EA85C", display: "inline-block" }} />
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink)", marginLeft: "0.5rem" }}>
            Live Engineering Terminal & Radar
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "var(--olive)", fontWeight: 600 }}>
            <Activity size={12} className="animate-pulse" /> Active Focus
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            <Clock size={12} /> {currentTime || "Loading..."}
          </span>
        </div>
      </div>

      {/* ── WORKBENCH NAVIGATION TABS ─────────────────────────────── */}
      <div
        style={{
          display: "flex",
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--rule)",
          overflowX: "auto",
        }}
      >
        {[
          { id: "system-design", label: "01 · System Architecture Blueprint", icon: Layers },
          { id: "dsa", label: "02 · Algorithmic & DSA Arena", icon: Code2 },
          { id: "ai-rag", label: "03 · Applied AI & RAG Pipeline", icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              style={{
                flex: 1,
                minWidth: "220px",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                cursor: "pointer",
                backgroundColor: isActive ? "#FFFFFF" : "transparent",
                color: isActive ? "var(--ink)" : "var(--ink-muted)",
                border: "none",
                borderBottom: isActive ? "2px solid var(--olive)" : "2px solid transparent",
                borderRight: "1px solid var(--rule)",
                transition: "all 0.15s ease",
              }}
            >
              <Icon size={14} style={{ color: isActive ? "var(--olive)" : "inherit" }} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* ── WORKBENCH INTERACTIVE BODY ────────────────────────────── */}
      <div style={{ padding: "clamp(1.5rem, 3.5vw, 2.25rem)", backgroundColor: "#FFFFFF" }}>

        {/* ── TAB 1: SYSTEM DESIGN BLUEPRINT ──────────────────────── */}
        {activeTab === "system-design" && (
          <div>
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Interactive Architecture Inspector
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)", marginTop: "0.2rem" }}>
                  Scalable Distributed Microservice & Caching Blueprint
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  Click any node below to inspect real-world implementation rules, latency profiles, and failure modes.
                </p>
              </div>

              <div style={{ display: "inline-flex", gap: "0.5rem", fontSize: "0.6875rem", fontWeight: 600, color: "var(--olive)", padding: "4px 10px", backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                <span>Throughput: 15,000+ RPS Target</span>
                <span>·</span>
                <span>p99 Latency: &lt; 45ms</span>
              </div>
            </div>

            {/* Interactive Architecture Flow Diagram */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                { id: "client", label: "Client Ingress", sub: "Next.js / Edge", icon: Globe, latency: "10-30ms" },
                { id: "gateway", label: "API Gateway", sub: "Rate Limiter / Auth", icon: ShieldCheck, latency: "2-5ms" },
                { id: "cache", label: "Redis Cluster", sub: "Cache-Aside / TTL", icon: Zap, latency: "0.8-2ms" },
                { id: "service", label: "FastAPI / Spring", sub: "Stateless Workers", icon: Server, latency: "15-25ms" },
                { id: "database", label: "PostgreSQL Primary", sub: "B-Tree / ACID", icon: Database, latency: "5-12ms" },
                { id: "replicas", label: "Read Replicas", sub: "Async WAL Stream", icon: Layers, latency: "3-8ms" },
              ].map((node) => {
                const Icon = node.icon
                const isSelected = selectedArchNode === node.id
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedArchNode(node.id)}
                    style={{
                      padding: "0.875rem 0.75rem",
                      backgroundColor: isSelected ? "var(--ink)" : "var(--surface)",
                      color: isSelected ? "var(--paper)" : "var(--ink)",
                      border: isSelected ? "1px solid var(--ink)" : "1px solid var(--rule)",
                      borderRadius: "4px",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "96px",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <Icon size={16} style={{ color: isSelected ? "var(--olive)" : "var(--olive)" }} />
                      <span style={{ fontSize: "0.5625rem", opacity: 0.8, fontFamily: "monospace" }}>{node.latency}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, lineHeight: 1.2 }}>{node.label}</div>
                      <div style={{ fontSize: "0.625rem", opacity: 0.75, marginTop: "2px" }}>{node.sub}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Node Details Box */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule-dark)",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
              }}
            >
              {selectedArchNode === "client" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Client Edge & Ingress Layer</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>DNS Routing · Anycast CDN</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Optimized Next.js frontend with Edge caching for static bundles, dynamic route prefetching, and compressed Brotli payloads reducing initial render times.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>HTTP/3 (QUIC), Stale-While-Revalidate headers, Client connection pooling.</span>
                  </div>
                </div>
              )}

              {selectedArchNode === "gateway" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>API Gateway & Traffic Throttling</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>Token Bucket · JWT Validation</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Centralized entry point managing rate limiting via distributed Redis token buckets (e.g. 100 req/min per IP), CORS validation, TLS termination, and cryptographic JWT verification before delegating to downstream services.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>Circuit Breaking, Sliding Window Rate Limiting, Request ID tracing headers.</span>
                  </div>
                </div>
              )}

              {selectedArchNode === "cache" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Distributed Redis Caching</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>Sub-millisecond Reads · Eviction: LRU</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    In-memory data store caching heavy query results, user session contexts, and RAG vector search embeddings with proactive TTL invalidation on database mutations to eliminate cache stampedes.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>Cache-Aside, Write-Around, Redis Pub/Sub for live state propagation.</span>
                  </div>
                </div>
              )}

              {selectedArchNode === "service" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Stateless Microservice Workers</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>FastAPI Async / Spring Boot</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Horizontally scaled stateless application containers executing business workflows, asynchronous background tasks, database connection pooling with HikariCP, and streaming response generators.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>Async I/O event loops, graceful shutdown handling, structured JSON telemetry.</span>
                  </div>
                </div>
              )}

              {selectedArchNode === "database" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Primary Relational Database</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>PostgreSQL · ACID Transactions</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    The single source of truth handling transactional writes with strict ACID properties, optimized B-Tree and GIN indexes, pgvector extension for high-dimensional embeddings, and connection pooling.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>Write-Ahead Logging (WAL), Composite Indexing, Query EXPLAIN ANALYZE optimization.</span>
                  </div>
                </div>
              )}

              {selectedArchNode === "replicas" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>Read Replica Cluster</h4>
                    <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>Read Scale-Out · Streaming Replication</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Distributes read-heavy query load across multiple read-only database replicas fed by asynchronous WAL streaming from the primary, preventing report queries and search filters from locking primary tables.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Core Patterns:</span>
                    <span>Read-Write splitting at the ORM/driver level, replica lag monitoring.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB 2: ALGORITHMIC & DSA ARENA ───────────────────────── */}
        {activeTab === "dsa" && (
          <div>
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Daily Algorithmic Rigor
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)", marginTop: "0.2rem" }}>
                  Data Structures & Problem Solving Frameworks
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  Click a category below to explore real implementation strategies, time complexity targets, and key patterns.
                </p>
              </div>

              <a
                href="https://leetcode.com/uv3704"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "8px 14px",
                  backgroundColor: "var(--ink)",
                  color: "var(--paper)",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}
              >
                <Code2 size={13} /> LeetCode Profile ↗
              </a>
            </div>

            {/* DSA Category Buttons */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { id: "dp", label: "Dynamic Programming", badge: "O(N) / O(N*W)" },
                { id: "graphs", label: "Graphs & BFS/DFS", badge: "O(V + E)" },
                { id: "trees", label: "Trees & Tries", badge: "O(log N)" },
                { id: "sliding", label: "Sliding Window & Two Pointers", badge: "O(N) amortized" },
                { id: "intervals", label: "Intervals & Heaps", badge: "O(N log K)" },
              ].map((cat) => {
                const isSelected = selectedDsaTopic === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedDsaTopic(cat.id)}
                    style={{
                      padding: "8px 14px",
                      backgroundColor: isSelected ? "var(--olive)" : "var(--surface)",
                      color: isSelected ? "#FFFFFF" : "var(--ink)",
                      border: isSelected ? "1px solid var(--olive)" : "1px solid var(--rule)",
                      borderRadius: "3px",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>{cat.label}</span>
                    <span style={{ fontSize: "0.5625rem", opacity: 0.85, padding: "1px 4px", backgroundColor: isSelected ? "rgba(255,255,255,0.2)" : "#FFFFFF", borderRadius: "2px" }}>
                      {cat.badge}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* DSA Deep Dive Info Card */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule-dark)",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
              }}
            >
              {selectedDsaTopic === "dp" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Dynamic Programming & State Transitions
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Mastering state space reduction, overlapping subproblem memoization, and bottom-up iterative tabulation. Focus areas include Longest Common Subsequence, 0/1 Knapsack, Matrix Chain Multiplication, and State-Machine DP for buy/sell stock models.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.75rem" }}>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>1D / 2D Tabulation</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Space compression from O(N*M) to O(M) using rolling arrays.</span>
                    </div>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Decision Tree Pruning</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Memoized DFS with bitmasking for Traveling Salesman & permutation DP.</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDsaTopic === "graphs" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Graph Algorithms & Connectivity
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Implementing BFS for unweighted shortest paths, Dijkstra with PriorityQueue for weighted networks, Kahn&apos;s algorithm for Topological Sort in dependency graphs, and Union-Find with path compression.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.75rem" }}>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Dijkstra & A* Heuristics</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>O(E log V) shortest path with Min-Heap state tracking.</span>
                    </div>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Disjoint Set Union (DSU)</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Nearly O(1) inverse Ackermann complexity for cycle detection.</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDsaTopic === "trees" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Trees, Binary Search Trees & Prefix Tries
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Recursive and iterative tree traversals (Inorder, Preorder, Postorder, Level-order), Lowest Common Ancestor (LCA) queries, Binary Search on Answer spaces, and Trie prefix trees for autocomplete string matching.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.75rem" }}>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Binary Search on Answer</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>O(log(max-min) * N) for capacity & allocation constraints.</span>
                    </div>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Trie Architectures</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>O(L) string search with word frequency counting.</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDsaTopic === "sliding" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Sliding Window & Two Pointers
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Variable-length and fixed-size sliding window patterns for subarray substring optimizations, two-pointer convergence for sorted pairs, and frequency hash map state counters.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.75rem" }}>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Dynamic Expansion / Shrink</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>O(N) single-pass window tracking for longest valid substring.</span>
                    </div>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Two-Pointer Squeeze</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Trap rainwater & 3Sum zero-sum elimination in O(N log N + N²).</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDsaTopic === "intervals" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Interval Merging & Min/Max Heaps
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Sorting intervals by start time for overlap merges, meeting room allocation using Min-Heaps for active end times, and Top-K frequent elements streaming.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.75rem" }}>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Min-Heap Scheduling</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Tracking concurrent resource allocations in O(N log K).</span>
                    </div>
                    <div style={{ padding: "0.6rem", backgroundColor: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: "2px" }}>
                      <span style={{ fontWeight: 600, color: "var(--olive)", display: "block" }}>Interval Sweep-Line</span>
                      <span style={{ color: "var(--ink-muted)", fontSize: "0.6875rem" }}>Point event sorting for maximum overlapping interval detection.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB 3: APPLIED AI & RAG PIPELINE ─────────────────────── */}
        {activeTab === "ai-rag" && (
          <div>
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem" }}>
                  Bleeding-Edge Applied AI
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)", marginTop: "0.2rem" }}>
                  Multimodal RAG & Agentic Tool Execution Pipeline
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                  Click each stage of the retrieval-augmented generation pipeline to inspect production parameters and techniques.
                </p>
              </div>

              <Link
                href="/projects/betterbee"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "8px 14px",
                  backgroundColor: "var(--ink)",
                  color: "var(--paper)",
                  borderRadius: "2px",
                }}
              >
                <Sparkles size={13} /> BetterBee Case Study ↗
              </Link>
            </div>

            {/* Interactive RAG Pipeline Stepper */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.75rem",
              }}
            >
              {[
                { id: "chunking", stage: "01. Parsing", label: "Semantic Chunking", sub: "Recursive + Metadata" },
                { id: "embedding", stage: "02. Vectors", label: "Dense Embeddings", sub: "Ollama / Nomic-embed" },
                { id: "retrieval", stage: "03. Hybrid", label: "BM25 + pgvector", sub: "Reciprocal Rank Fusion" },
                { id: "rerank", stage: "04. Cross-Encoder", label: "Reranker Scoring", sub: "Top-K Context Pruning" },
                { id: "stream", stage: "05. Inference", label: "Token Streaming", sub: "FastAPI SSE / Citations" },
              ].map((step) => {
                const isSelected = selectedRagStep === step.id
                return (
                  <button
                    key={step.id}
                    onClick={() => setSelectedRagStep(step.id)}
                    style={{
                      padding: "0.875rem 0.75rem",
                      backgroundColor: isSelected ? "var(--ink)" : "var(--surface)",
                      color: isSelected ? "var(--paper)" : "var(--ink)",
                      border: isSelected ? "1px solid var(--ink)" : "1px solid var(--rule)",
                      borderRadius: "4px",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "96px",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: "0.5625rem", color: isSelected ? "var(--olive)" : "var(--olive)", fontWeight: 700 }}>
                      {step.stage}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, lineHeight: 1.2 }}>{step.label}</div>
                      <div style={{ fontSize: "0.625rem", opacity: 0.75, marginTop: "2px" }}>{step.sub}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected RAG Step Details */}
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--rule-dark)",
                borderRadius: "4px",
                padding: "1.25rem 1.5rem",
              }}
            >
              {selectedRagStep === "chunking" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Stage 01: Multimodal Document Parsing & Contextual Chunking
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Documents (PDF, DOCX, Markdown, OCR text) are split into semantic blocks (512 tokens with 64-token overlap) preserving paragraph integrity, table structures, and source page metadata tags.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Implementation:</span>
                    <span>RecursiveCharacterTextSplitter with section hierarchy tracking & OCR fallback.</span>
                  </div>
                </div>
              )}

              {selectedRagStep === "embedding" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Stage 02: Dense Vector Embeddings Generation
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Chunks are converted into 768-dimensional dense vector embeddings using local Ollama or HuggingFace models, indexed via HNSW (Hierarchical Navigable Small World) in PostgreSQL with pgvector.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Implementation:</span>
                    <span>Cosine distance indexing (`vector_cosine_ops`), batch generation in worker pools.</span>
                  </div>
                </div>
              )}

              {selectedRagStep === "retrieval" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Stage 03: Hybrid Retrieval (Dense Vector + BM25 Sparse Search)
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Combines semantic vector proximity with lexical keyword matching (BM25) using Reciprocal Rank Fusion (RRF), ensuring exact keyword matches (e.g. acronyms, error codes, names) are never lost by vector-only searches.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Implementation:</span>
                    <span>RRF formula: `score = 1 / (60 + rank_dense) + 1 / (60 + rank_sparse)`.</span>
                  </div>
                </div>
              )}

              {selectedRagStep === "rerank" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Stage 04: Cross-Encoder Context Reranking
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    Top 25 retrieved candidates are passed to a lightweight cross-encoder model to compute strict semantic relevance scores against the user query, pruning the context down to the top 5 highest-signal passages.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Implementation:</span>
                    <span>BGE-Reranker model, 40% reduction in context window token costs.</span>
                  </div>
                </div>
              )}

              {selectedRagStep === "stream" && (
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Stage 05: LLM Reasoning & Server-Sent Event (SSE) Streaming
                  </h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    The pruned context is injected into a strict system prompt instructing the model to cite exact document sources and page numbers, streaming tokens in real-time over FastAPI SSE to the Next.js client.
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--olive)" }}>Implementation:</span>
                    <span>Time-to-first-token &lt; 400ms, inline citation tags `[Doc1:Page4]`.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── WORKBENCH FOOTER BAR ──────────────────────────────────── */}
      <div
        style={{
          padding: "0.75rem 1.25rem",
          backgroundColor: "#FAF8F5",
          borderTop: "1px solid var(--rule)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.6875rem",
          color: "var(--ink-muted)",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
          <Terminal size={12} /> Yuvraj Singh Rathore · Live Engineering Environment
        </span>
        <Link
          href="/projects"
          style={{
            fontWeight: 600,
            color: "var(--ink)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          Explore All Production Systems <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  )
}
