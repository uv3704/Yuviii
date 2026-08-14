"use client"

import React, { useState, useEffect } from "react"
import { Code2, GitCommit, CheckCircle2, Flame, Award, ExternalLink, Activity } from "lucide-react"

export function LiveStatsCounter() {
  const [stats, setStats] = useState({
    totalSolved: 343,
    easySolved: 88,
    mediumSolved: 206,
    hardSolved: 49,
    ranking: "Rank #400,817",
    repos: 44,
    loading: false,
  })

  useEffect(() => {
    async function fetchLiveStats() {
      try {
        const res = await fetch("/api/stats")
        if (res.ok) {
          const data = await res.json()
          if (data.success) {
            setStats({
              totalSolved: data.leetcode.totalSolved,
              easySolved: data.leetcode.easySolved,
              mediumSolved: data.leetcode.mediumSolved,
              hardSolved: data.leetcode.hardSolved,
              ranking: data.leetcode.ranking ? `Rank #${data.leetcode.ranking.toLocaleString()}` : "Top Tier",
              repos: data.github.publicRepos || 44,
              loading: false,
            })
          }
        }
      } catch (err) {
        console.error("Live stats fetch failed:", err)
      }
    }

    fetchLiveStats()
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "var(--olive)", display: "inline-block" }} />
          <div>
            <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.1rem" }}>
              Verified Live Sync · Real-Time APIs
            </span>
            <h3 className="font-serif" style={{ fontSize: "1.375rem", color: "var(--ink)" }}>
              Algorithmic & Open-Source Metrics
            </h3>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.6rem" }}>
          <a
            href="https://leetcode.com/uv3704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
          >
            LeetCode Profile <ExternalLink size={10} />
          </a>
          <span style={{ color: "var(--rule-dark)" }}>·</span>
          <a
            href="https://github.com/uv3704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--olive)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}
          >
            GitHub Profile <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "0.875rem" }}>
        {/* LeetCode Total */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Total Problems Solved
          </span>
          <span className="text-project-num" style={{ fontSize: "1.625rem", color: "var(--ink)", display: "block" }}>
            {stats.totalSolved}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            {stats.ranking}
          </span>
        </div>

        {/* Medium Breakdown */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Medium Difficulty
          </span>
          <span className="text-project-num" style={{ fontSize: "1.625rem", color: "var(--ink)", display: "block" }}>
            {stats.mediumSolved}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
            DP, Graphs & Trees
          </span>
        </div>

        {/* Hard Breakdown */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Hard Difficulty
          </span>
          <span className="text-project-num" style={{ fontSize: "1.625rem", color: "var(--ink)", display: "block" }}>
            {stats.hardSolved}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            Advanced Algorithmic
          </span>
        </div>

        {/* GitHub Repos */}
        <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "3px", padding: "0.875rem 1rem" }}>
          <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-muted)", display: "block", marginBottom: "0.25rem" }}>
            Public Repositories
          </span>
          <span className="text-project-num" style={{ fontSize: "1.625rem", color: "var(--ink)", display: "block" }}>
            {stats.repos}
          </span>
          <span style={{ fontSize: "0.6875rem", color: "var(--olive)", fontWeight: 600 }}>
            github.com/uv3704
          </span>
        </div>
      </div>
    </div>
  )
}
