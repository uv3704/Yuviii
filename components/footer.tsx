import Link from "next/link"
import { meta } from "@/lib/data/meta"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule)",
        paddingBlock: "2.5rem",
        marginTop: "auto",
      }}
      role="contentinfo"
    >
      <div
        className="container-editorial"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          className="font-hand"
          style={{ fontSize: "1rem", color: "var(--ink-muted)" }}
        >
          {meta.name}
        </span>

        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
            }}
          >
            <li>
              <Link
                href={meta.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ transition: "color 0.15s" }}
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={meta.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ transition: "color 0.15s" }}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={meta.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label"
                style={{ transition: "color 0.15s" }}
              >
                LeetCode
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${meta.contact.email}`}
                className="text-label"
                style={{ transition: "color 0.15s" }}
              >
                Email
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-label" style={{ color: "var(--ink-muted)" }}>
          © {year}
        </p>
      </div>
    </footer>
  )
}
