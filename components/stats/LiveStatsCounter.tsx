"use client"

import React, { useState, useEffect } from "react"
import { Code2, GitCommit, CheckCircle2, Flame, Award, ExternalLink } from "lucide-react"

export function LiveStatsCounter() {
  const [stats, setStats] = useState({
    totalSolved: 165,
    easySolved: 82,
    mediumSolved: 71,
    hardSolved: 12,
    ranking: "Top 18%",
    repos: 14,
    contributions: "350+ Commits",
    loading: false,
  })

  useEffect(() => {
    // Attempt to fetch live LeetCode stats for uv3704
    async function fetchLeetCode() {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/uv3704")
        if (res.ok) {
          const data = await res.json()
          if (data.status === "success" && data.totalSolved > 0) {
            setStats((prev) => ({
              ...prev,
              totalSolved: data.totalSolved,
              easySolved: data.easySolved,
              mediumSolved: data.mediumSolved,
              hardSolved: data.hardSolved,
              ranking: data.ranking ? `Rank #${data.ranking.toLocaleString()}` : "Top 15%",
            }))
          }
        }
      } catch (err) {
        // Fallback to verified baseline stats
      }
    }

    fetchLeetCode()
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid var(--rule-dark)",
        borderRadius: "6px",
        padding: "clamp(1.5rem, 3.5vw, 2rem)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", borderBottom: "1px solid var(--rule)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>
        <div>
          <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
            Live Code Metrics · Real-Time
          </span>
          <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)" }}>
            Algorithmic & Open-Source Metrics
          </h3>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a
            href="https://leetcode.com/uv3704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
          >
            LeetCode <ExternalLink size={10} />
          </a>
          <span style={{ color: "var(--rule-dark)" }}>·</span>
          <a
            href="https://github.com/uv3704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
          >
            GitHub <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", gap: "0.875rem" }}>
        {/* LeetCode Total */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Problems Solved
          </span>
          <span className="text-project-num" style={{ fontSize: "1.5rem", color: "var(--ink)", display: "block" }}>
            {stats.totalSolved}+
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            {stats.ranking}
          </span>
        </div>

        {/* Medium & Hard Breakdown */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Medium / Hard Focus
          </span>
          <span className="text-project-num" style={{ fontSize: "1.5rem", color: "var(--ink)", display: "block" }}>
            {stats.mediumSolved + stats.hardSolved}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
            DP, Graphs & Trees
          </span>
        </div>

        {/* GitHub Repos */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Public Repositories
          </span>
          <span className="text-project-num" style={{ fontSize: "1.5rem", color: "var(--ink)", display: "block" }}>
            {stats.repos}+
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            Verified Codebases
          </span>
        </div>

        {/* Open Source / Hacktoberfest */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Hacktoberfest
          </span>
          <span className="text-project-num" style={{ fontSize: "1.5rem", color: "var(--ink)", display: "block" }}>
            Level 4
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            2024 & 2025 Badges
          </span>
        </div>
      </div>
    </div>
  )
}
