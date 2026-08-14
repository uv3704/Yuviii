import Link from "next/link"
import { ArrowRight, ExternalLink, Briefcase, FolderGit2, MapPin, Github, CheckCircle2, GraduationCap, Award } from "lucide-react"
import { Navbar }  from "@/components/navbar"
import { Footer }  from "@/components/footer"
import { Reveal }  from "@/components/reveal"
import { projects } from "@/lib/data/projects"
import { experience } from "@/lib/data/experience"

export const metadata = {
  title: "Work & Experience — Yuvraj Singh Rathore",
  description: "Industry internships, commercial experience, production systems, and academic background of Yuvraj Singh Rathore.",
}

export default function ProjectsPage() {
  const internships = experience.filter((e) => e.type === "work")
  const education = experience.filter((e) => e.type === "education")

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "5.5rem" }}>

        {/* ── HEADER ─────────────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(3rem, 7vw, 5.5rem)" }}>
          <div className="container-editorial">
            <Reveal>
              <p className="text-label-olive" style={{ marginBottom: "0.75rem" }}>
                Complete Career & Project Catalog
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-section-heading" style={{ maxWidth: "26ch" }}>
                Work & Experience
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="prose-editorial" style={{ marginTop: "1rem", maxWidth: "62ch" }}>
                A unified catalog of verified industry internships, production software systems, MERN full-stack applications, and academic foundations.
              </p>
            </Reveal>

            {/* Quick Navigation Anchors */}
            <Reveal delay={3}>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
                <a
                  href="#industry-internships"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "8px 16px",
                    backgroundColor: "var(--ink)",
                    color: "var(--paper)",
                    textDecoration: "none",
                  }}
                >
                  <Briefcase size={13} /> Industry Internships ({internships.length})
                </a>
                <a
                  href="#production-projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "8px 16px",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule-dark)",
                    color: "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  <FolderGit2 size={13} style={{ color: "var(--olive)" }} /> Production Projects ({projects.length})
                </a>
                <a
                  href="#academic-credentials"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "8px 16px",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule-dark)",
                    color: "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  <GraduationCap size={13} style={{ color: "var(--olive)" }} /> Education & Academics
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SECTION 1: INDUSTRY INTERNSHIPS & ROLES ───────────────── */}
        <section
          id="industry-internships"
          style={{
            paddingBottom: "clamp(4rem, 8vw, 6.5rem)",
          }}
        >
          <div className="container-editorial">
            <div
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
                  Section 01
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--ink)" }}>
                  Industry Internships & Commercial Experience
                </h2>
              </div>
              <span className="text-project-num" style={{ fontSize: "0.875rem" }}>
                05 Roles
              </span>
            </div>

            {/* Structured Internship Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                gap: "clamp(1.25rem, 3vw, 2rem)",
              }}
            >
              {internships.map((item, index) => (
                <Reveal key={index} delay={index < 4 ? (index as 0 | 1 | 2 | 3) : 0}>
                  <div
                    style={{
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--rule-dark)",
                      borderRadius: "4px",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div>
                      {/* Header with Role, Org & Period */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                        <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--ink)" }}>
                          {item.role}
                        </h3>
                        <span className="text-project-num" style={{ fontSize: "0.6875rem" }}>
                          {item.period}
                        </span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--olive)", fontWeight: 600, marginBottom: "0.75rem" }}>
                        <span>{item.org}</span>
                        {item.location && (
                          <>
                            <span>·</span>
                            <span style={{ color: "var(--ink-muted)", fontWeight: 400, display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                              <MapPin size={10} /> {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--ink)", marginBottom: "0.75rem" }}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1rem" }}>
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "0.75rem",
                              lineHeight: 1.5,
                              color: "var(--ink-muted)",
                              display: "flex",
                              gap: "0.4rem",
                            }}
                          >
                            <span style={{ color: "var(--olive)", flexShrink: 0 }}>•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Tags & GitHub Link */}
                    <div
                      style={{
                        borderTop: "1px dashed var(--rule)",
                        paddingTop: "0.65rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {item.skills && (
                        <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                          {item.skills.map((s) => (
                            <span
                              key={s}
                              style={{
                                fontSize: "0.5625rem",
                                fontWeight: 500,
                                padding: "1px 5px",
                                backgroundColor: "#FFFFFF",
                                border: "1px solid var(--rule)",
                                color: "var(--ink)",
                                borderRadius: "2px",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                        {item.certificateUrl && (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.25rem",
                              fontSize: "0.6875rem",
                              fontWeight: 600,
                              color: "var(--ink)",
                              backgroundColor: "#FFFFFF",
                              border: "1px solid var(--rule)",
                              padding: "2px 7px",
                              borderRadius: "2px",
                              textDecoration: "none",
                            }}
                          >
                            <Award size={11} style={{ color: "var(--olive)" }} /> Certificate ↗
                          </a>
                        )}

                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.25rem",
                              fontSize: "0.6875rem",
                              fontWeight: 600,
                              color: "var(--olive)",
                              textDecoration: "underline",
                            }}
                          >
                            <Github size={11} /> Project Code ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: PRODUCTION PROJECTS & SYSTEMS ───────────────── */}
        <section
          id="production-projects"
          style={{
            paddingBlock: "clamp(4rem, 8vw, 6.5rem)",
            backgroundColor: "var(--surface)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div className="container-editorial">
            <div
              style={{
                marginBottom: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
                  Section 02
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--ink)" }}>
                  Production Systems & Case Studies
                </h2>
              </div>
              <span className="text-project-num" style={{ fontSize: "0.875rem" }}>
                {projects.length} Architectures
              </span>
            </div>

            {/* Clean, Uncongested Project Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: "clamp(1.5rem, 3.5vw, 2.5rem)",
              }}
            >
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={index < 4 ? (index as 0 | 1 | 2 | 3) : 0}>
                  <article
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid var(--rule-dark)",
                      borderRadius: "4px",
                      padding: "clamp(1.25rem, 3vw, 1.75rem)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      transition: "border-color 0.2s ease",
                    }}
                  >
                    <div>
                      {/* Top Meta Line */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span className="text-project-num" style={{ fontSize: "0.8125rem" }}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontSize: "0.625rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            padding: "2px 7px",
                            backgroundColor: "var(--surface)",
                            border: "1px solid var(--rule-dark)",
                            color: "var(--olive)",
                            borderRadius: "2px",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: "1.375rem",
                          lineHeight: 1.25,
                          letterSpacing: "-0.01em",
                          color: "var(--ink)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.name}
                      </h3>

                      {/* Short Description */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          color: "var(--ink-muted)",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {project.shortDescription}
                      </p>

                      {/* Technology Chips */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "0.625rem",
                              fontWeight: 500,
                              padding: "2px 6px",
                              backgroundColor: "var(--surface)",
                              border: "1px solid var(--rule)",
                              color: "var(--ink)",
                              borderRadius: "2px",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div
                      style={{
                        borderTop: "1px dashed var(--rule)",
                        paddingTop: "0.875rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "var(--ink)",
                            textDecoration: "underline",
                          }}
                        >
                          <Github size={12} /> GitHub ↗
                        </a>
                      ) : (
                        <span />
                      )}

                      <Link
                        href={`/projects/${project.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--olive)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Case Study <ArrowRight size={12} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: ACADEMIC CREDENTIALS & EDUCATION (3 DISTINCT CARDS) ── */}
        <section
          id="academic-credentials"
          style={{
            paddingBlock: "clamp(4rem, 8vw, 6.5rem)",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <div className="container-editorial">
            <div
              style={{
                marginBottom: "2.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span className="text-label-olive" style={{ fontSize: "0.6875rem", display: "block", marginBottom: "0.2rem" }}>
                  Section 03
                </span>
                <h2 className="font-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--ink)" }}>
                  Education & Academic Credentials
                </h2>
              </div>
              <span className="text-project-num" style={{ fontSize: "0.875rem" }}>
                03 Milestones
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                gap: "1.5rem",
              }}
            >
              {/* Box 1: B.Tech CSE (AI) */}
              <Reveal delay={0}>
                <div
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule-dark)",
                    borderRadius: "4px",
                    padding: "1.5rem 1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span className="text-project-num" style={{ fontSize: "0.75rem" }}>01 · Degree</span>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid var(--rule-dark)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        CGPA: 7.95
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "0.35rem" }}>
                      B.Tech in Computer Science & Engineering (AI)
                    </h3>

                    <div style={{ fontSize: "0.75rem", color: "var(--olive)", fontWeight: 600, marginBottom: "0.75rem" }}>
                      Mandsaur Institute of Technology · Mandsaur, MP
                    </div>

                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--ink)", marginBottom: "1rem" }}>
                      Core computer science curriculum with specialization in Artificial Intelligence and Machine Learning.
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px dashed var(--rule)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.6875rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <span>Aug 2022 — Jun 2026</span>
                    <span className="text-label-olive" style={{ fontSize: "0.625rem" }}>Undergraduate</span>
                  </div>
                </div>
              </Reveal>

              {/* Box 2: Senior Secondary (Class XII) */}
              <Reveal delay={1}>
                <div
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule)",
                    borderRadius: "4px",
                    padding: "1.5rem 1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span className="text-project-num" style={{ fontSize: "0.75rem" }}>02 · Senior Secondary</span>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        73.6%
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "0.35rem" }}>
                      Class XII · Senior Secondary
                    </h3>

                    <div style={{ fontSize: "0.75rem", color: "var(--olive)", fontWeight: 600, marginBottom: "0.75rem" }}>
                      Delhi Public School · Mandsaur, MP
                    </div>

                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--ink-muted)", marginBottom: "1rem" }}>
                      Higher secondary education with core focus in Mathematics, Physics, Chemistry, and Computer Science foundations.
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px dashed var(--rule)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.6875rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <span>Jul 2021 — May 2022</span>
                  </div>
                </div>
              </Reveal>

              {/* Box 3: Secondary (Class X) */}
              <Reveal delay={2}>
                <div
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--rule)",
                    borderRadius: "4px",
                    padding: "1.5rem 1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span className="text-project-num" style={{ fontSize: "0.75rem" }}>03 · Secondary</span>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid var(--rule)",
                          color: "var(--olive)",
                          borderRadius: "2px",
                        }}
                      >
                        77.0%
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "0.35rem" }}>
                      Class X · Secondary Education
                    </h3>

                    <div style={{ fontSize: "0.75rem", color: "var(--olive)", fontWeight: 600, marginBottom: "0.75rem" }}>
                      Delhi Public School · Mandsaur, MP
                    </div>

                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.6, color: "var(--ink-muted)", marginBottom: "1rem" }}>
                      Secondary education establishing core foundations in Mathematics, Science, and Analytical Problem Solving.
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px dashed var(--rule)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.6875rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <span>Jul 2019 — May 2020</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ─────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)", backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
          <div className="container-editorial">
            <Reveal>
              <div
                style={{
                  border: "1px solid var(--rule-dark)",
                  padding: "clamp(2rem, 5vw, 3.5rem)",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  borderRadius: "2px",
                }}
              >
                <div>
                  <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.35rem" }}>
                    Have a technical challenge or role in mind?
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)" }}>
                    Available for Full-Stack, Backend, and AI/ML engineering positions.
                  </p>
                </div>

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
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
