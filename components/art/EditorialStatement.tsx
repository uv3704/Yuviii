import React from "react"
import Link from "next/link"
import { ArrowRight, Terminal, Cpu, Database, ShieldCheck, Zap } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function EditorialStatement() {
  const principles = [
    {
      num: "01",
      title: "Systems Latency & Throughput",
      icon: Zap,
      subtitle: "Database & Backend Optimization",
      text: "Architecture is measured in milliseconds. Prioritizing JDBC connection pooling, indexed query execution plans, and asynchronous FastAPI worker pipelines to compress backend roundtrips from 500ms down to sub-80ms for enterprise loads.",
    },
    {
      num: "02",
      title: "Deterministic AI & Production RAG",
      icon: Cpu,
      subtitle: "Beyond Toy LLM Wrappers",
      text: "Moving beyond basic prompt engineering into resilient retrieval pipelines. Engineering hybrid BM25 + dense vector embeddings (pgvector/ChromaDB), contextual semantic chunking, cross-encoder reranking, and low-latency token streaming.",
    },
    {
      num: "03",
      title: "Edge Efficiency & Quantization",
      icon: Database,
      subtitle: "Computer Vision & Deep Learning",
      text: "Building neural networks for compute-constrained production environments. Training custom CNN architectures with TensorFlow (97.5% accuracy), applying INT8 quantization and structured pruning to compress payload sizes by 35% with zero inference degradation.",
    },
    {
      num: "04",
      title: "Type Safety & Resilient Delivery",
      icon: ShieldCheck,
      subtitle: "Full-Stack Hygiene & Containers",
      text: "Strict end-to-end typing across TypeScript and Java. Designing decoupled microservices with Docker containerization, strict error boundaries, transactional ACID guarantees, and automated CI/CD deployment pipelines.",
    },
  ]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3.5rem, 8vw, 5.5rem)" }}>
      {/* Editorial Spread / Engineering Principles */}
      <section aria-label="Software Engineering Principles">
        <Reveal>
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "clamp(2rem, 4vw, 3rem)",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div>
              <h2 className="text-section-heading">Engineering Principles & Architecture</h2>
              <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: "0.25rem" }}>
                Core philosophies guiding how I design, optimize, and scale software systems.
              </p>
            </div>
            <span className="text-label-olive">Systems · AI/ML · Full-Stack</span>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.5rem, 3.5vw, 2.5rem)",
          }}
        >
          {principles.map((p, idx) => {
            const Icon = p.icon
            return (
              <Reveal key={p.num} delay={idx < 4 ? (idx as 0 | 1 | 2 | 3) : 0}>
                <div
                  style={{
                    borderLeft: "2px solid var(--olive)",
                    paddingLeft: "1.25rem",
                    backgroundColor: "var(--surface)",
                    padding: "1.25rem 1.25rem 1.25rem 1.25rem",
                    border: "1px solid var(--rule)",
                    borderRadius: "2px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span className="text-project-num">{p.num}</span>
                    <Icon size={16} style={{ color: "var(--olive)" }} strokeWidth={1.5} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--ink)",
                      marginBottom: "0.2rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </h3>

                  <span
                    className="text-label-olive"
                    style={{
                      fontSize: "0.625rem",
                      marginBottom: "0.75rem",
                      display: "block",
                    }}
                  >
                    {p.subtitle}
                  </span>

                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.6,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Direct Portal to Selected Software Projects */}
      <Reveal>
        <section
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--rule)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.25rem",
            borderRadius: "2px",
          }}
        >
          <span className="text-label-olive">Production Systems · Architecture Showcase</span>
          <h3
            className="font-serif"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.15,
              color: "var(--ink)",
              maxWidth: "32ch",
            }}
          >
            Explore the deployed platforms, benchmarks, and codebase architectures.
          </h3>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              color: "var(--ink-muted)",
              maxWidth: "52ch",
            }}
          >
            From hybrid-search multimodal RAG platforms (BetterBee) to production job marketplaces (Freelancer) and computer vision classifiers.
          </p>
          <Link
            href="/projects"
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
              transition: "transform 0.15s ease, opacity 0.15s ease",
            }}
          >
            Explore Projects Catalog <ArrowRight size={14} />
          </Link>
        </section>
      </Reveal>
    </div>
  )
}
