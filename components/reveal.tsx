"use client"

import { useEffect, useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
  as?: keyof JSX.IntrinsicElements
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Respects prefers-reduced-motion (CSS handles this — the class
 * simply sets opacity/transform, which are no-ops when the
 * prefers-reduced-motion CSS rule overrides them).
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<Element>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ""

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  )
}
