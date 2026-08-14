import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "404 — Page Not Found",
  description: "The requested page could not be found.",
}

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "5.5rem", display: "flex", alignItems: "center" }}>
        <div className="container-editorial" style={{ paddingBlock: "clamp(4rem, 10vw, 8rem)" }}>
          <p className="text-label-olive" style={{ marginBottom: "1rem" }}>
            404
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Page not found.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--ink-muted)",
              maxWidth: "42ch",
              marginBottom: "2.5rem",
            }}
          >
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--ink)",
              borderBottom: "1px solid var(--ink)",
              paddingBottom: "2px",
            }}
          >
            ← Return home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
