import { notFound }       from "next/navigation"
import Link               from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Navbar }         from "@/components/navbar"
import { Footer }         from "@/components/footer"
import { Reveal }         from "@/components/reveal"
import { getProject, getAllSlugs } from "@/lib/data/projects"

/* ── Static generation ─────────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project  = getProject(slug)
  if (!project) return {}
  return {
    title:       `${project.name} — Yuvraj Singh Rathore`,
    description: project.shortDescription,
  }
}

/* ── Page ─────────────────────────────────────── */
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project  = getProject(slug)
  if (!project) notFound()

  /* Status label */
  const statusMap: Record<string, string> = {
    "live":        "Live",
    "in-progress": "In progress",
    "archived":    "Archived",
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: "5.5rem" }}>

        {/* ── Back link ─────────────────────── */}
        <div
          className="container-editorial"
          style={{ paddingTop: "2rem", paddingBottom: "0" }}
        >
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.8125rem",
              color: "var(--ink-muted)",
              transition: "color 0.15s",
            }}
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            All projects
          </Link>
        </div>

        {/* ── Hero ───────────────────────────── */}
        <section style={{ paddingBlock: "clamp(2.5rem, 7vw, 5rem)" }}>
          <div className="container-editorial">

            {/* Metadata row */}
            <Reveal>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span className="text-label-olive">{project.category}</span>
                <span className="text-project-num">{project.year}</span>
                <span className="text-project-num">
                  {statusMap[project.status] ?? project.status}
                </span>
              </div>
            </Reveal>

            {/* Name */}
            <Reveal delay={1}>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                {project.name}
              </h1>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={2}>
              <p
                className="font-serif-italic"
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  color: "var(--ink-muted)",
                  lineHeight: 1.45,
                  maxWidth: "46ch",
                  marginBottom: "2rem",
                }}
              >
                {project.tagline}
              </p>
            </Reveal>

            {/* Links */}
            {(project.github || project.live) && (
              <Reveal delay={3}>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        borderBottom: "1px solid var(--rule)",
                        paddingBottom: "2px",
                      }}
                    >
                      <Github size={14} strokeWidth={1.5} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--olive)",
                      }}
                    >
                      <ExternalLink size={14} strokeWidth={1.5} />
                      Live
                    </a>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── Hero image ─────────────────────── */}
        <div className="container-editorial" style={{ marginBottom: "clamp(3rem, 8vw, 6rem)" }}>
          <div
            className="project-img-wrap"
            style={{ aspectRatio: "16 / 9", width: "100%" }}
          >
            {project.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                className="img-placeholder"
                style={{ width: "100%", height: "100%" }}
                aria-label={`${project.name} — image placeholder`}
              />
            )}
          </div>
        </div>

        {/* ── Content sections ───────────────── */}
        <div className="container-editorial">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr clamp(240px, 28%, 320px)",
              gap: "clamp(3rem, 7vw, 6rem)",
              alignItems: "start",
            }}
          >
            {/* Main column */}
            <div>

              {/* Overview */}
              {project.overview && (
                <Section title="Overview" delay={1}>
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.overview}
                  </p>
                </Section>
              )}

              {/* Motivation */}
              {project.motivation && (
                <Section title="Motivation">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.motivation}
                  </p>
                </Section>
              )}

              {/* Problem */}
              {project.problem && (
                <Section title="Problem">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.problem}
                  </p>
                </Section>
              )}

              {/* Solution */}
              {project.solution && (
                <Section title="Solution">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.solution}
                  </p>
                </Section>
              )}

              {/* My role */}
              {project.role && (
                <Section title="My role">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.role}
                  </p>
                </Section>
              )}

              {/* Key features */}
              {project.features && project.features.length > 0 && (
                <Section title="Key features">
                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {project.features.map((f) => (
                      <div key={f.title}>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "var(--ink)",
                            marginBottom: "0.375rem",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {f.title}
                        </p>
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            lineHeight: 1.65,
                            color: "var(--ink-muted)",
                          }}
                        >
                          {f.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Architecture */}
              {project.architecture && (
                <Section title="Architecture">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.architecture}
                  </p>
                </Section>
              )}

              {/* Engineering decisions */}
              {project.decisions && (
                <Section title="Engineering decisions">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.decisions}
                  </p>
                </Section>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <Section title="Challenges">
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {project.challenges.map((c, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          fontSize: "0.9375rem",
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            width: "1px",
                            background: "var(--rule-dark)",
                            marginTop: "0.3rem",
                            alignSelf: "stretch",
                          }}
                          aria-hidden="true"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <Section title="Learnings">
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {project.learnings.map((l, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.65,
                          color: "var(--ink-muted)",
                          paddingLeft: "1rem",
                          borderLeft: "1px solid var(--rule-dark)",
                        }}
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Results */}
              {project.results && (
                <Section title="Results">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.results}
                  </p>
                </Section>
              )}

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <Section title="Screenshots">
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {project.screenshots.map((s, i) => (
                      <figure key={i}>
                        <div
                          className="project-img-wrap"
                          style={{ aspectRatio: "16 / 9" }}
                        >
                          <img
                            src={s.src}
                            alt={s.alt}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                        {s.caption && (
                          <figcaption
                            className="text-label"
                            style={{ marginTop: "0.5rem", color: "var(--ink-muted)" }}
                          >
                            {s.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </Section>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <Section title="Gallery">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    {project.gallery.map((g, i) => (
                      <div
                        key={i}
                        className="project-img-wrap"
                        style={{ aspectRatio: "4 / 3" }}
                      >
                        <img
                          src={g.src}
                          alt={g.alt}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Demo video */}
              {project.demoVideoUrl && (
                <Section title="Demo">
                  <div style={{ aspectRatio: "16 / 9", background: "var(--surface)" }}>
                    <iframe
                      src={project.demoVideoUrl}
                      title={`${project.name} demo`}
                      allow="autoplay; fullscreen"
                      style={{ width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </Section>
              )}

              {/* Additional notes */}
              {project.notes && (
                <Section title="Notes">
                  <p className="prose-editorial" style={{ maxWidth: "none" }}>
                    {project.notes}
                  </p>
                </Section>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "6rem" }}>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "1.5rem",
                }}
              >
                <p className="text-label" style={{ marginBottom: "1rem" }}>
                  Technologies
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink)",
                        lineHeight: 1.5,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div
                  style={{
                    borderTop: "1px solid var(--rule)",
                    paddingTop: "1.5rem",
                    marginTop: "1.5rem",
                  }}
                >
                  <p className="text-label" style={{ marginBottom: "1rem" }}>
                    Links
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        color: "var(--ink)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        color: "var(--ink)",
                      }}
                    >
                      Live site ↗
                    </a>
                  )}
                </div>
              )}
            </aside>
          </div>

          <div style={{ paddingBottom: "clamp(5rem, 12vw, 9rem)" }} />
        </div>

      </main>
      <Footer />
    </div>
  )
}

/* ── Reusable section block ─────────────────── */
function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3
}) {
  return (
    <Reveal delay={delay}>
      <section style={{ marginBottom: "clamp(2.5rem, 6vw, 4rem)" }}>
        <div
          style={{
            borderTop: "1px solid var(--rule)",
            paddingTop: "1.5rem",
            marginBottom: "1.25rem",
          }}
        >
          <h2 className="text-label">{title}</h2>
        </div>
        {children}
      </section>
    </Reveal>
  )
}
