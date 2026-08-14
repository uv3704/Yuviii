"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { meta } from "@/lib/data/meta"

const navLinks = [
  { href: "/projects", label: "Work"    },
  { href: "/about",    label: "About"   },
  { href: "/now",      label: "Now"     },
  { href: "/contact",  label: "Contact" },
]

export function Navbar() {
  const pathname   = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`nav-root ${scrolled ? "scrolled" : ""} ${open ? "nav-mobile-open" : ""}`}
      role="banner"
    >
      <div className="container-editorial nav-inner">
        {/* Logo — handwriting font for signature quality */}
        <Link href="/" className="nav-logo" aria-label="Home">
          {meta.name}
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname.startsWith(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu — rendered within the header for styling */}
      {open && (
        <div className="nav-mobile-open">
          <nav aria-label="Mobile navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname.startsWith(link.href) ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
