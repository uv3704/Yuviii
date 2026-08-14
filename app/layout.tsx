import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Yuvraj Singh Rathore — Full-Stack & AI Engineer",
    template: "%s — Yuvraj Singh Rathore",
  },
  description:
    "Full-Stack Developer and AI Engineer specializing in Java, Python, FastAPI, Next.js, and practical AI/RAG architectures. Based in India.",
  authors: [{ name: "Yuvraj Singh Rathore", url: "https://github.com/uv3704" }],
  creator: "Yuvraj Singh Rathore",
  keywords: [
    "Yuvraj Singh Rathore",
    "Full-Stack Developer",
    "AI Engineer",
    "Java Developer",
    "Next.js",
    "FastAPI",
    "Multimodal RAG",
    "MERN Stack",
    "Software Engineer Portfolio",
  ],
  metadataBase: new URL("https://yuvraj.dev"),
  openGraph: {
    title: "Yuvraj Singh Rathore — Full-Stack & AI Engineer",
    description: "Full-Stack Developer and AI Engineer building scalable web platforms, backend APIs, and RAG architectures.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png",  media: "(prefers-color-scheme: dark)"  },
      { url: "/icon.svg",             type: "image/svg+xml"                  },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Load fonts via standard link tag — works in all environments */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital,wght@0,400;1,400&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
