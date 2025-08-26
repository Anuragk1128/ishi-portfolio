"use client"

import { useCallback, useEffect, useRef, useState } from "react"

// Linearly interpolate from a to b by t in [0,1]
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function ThemeRotator() {
  const rafRef = useRef<number | null>(null)
  const [animating, setAnimating] = useState(false)

  // Ensure initial hue reflects state on mount
  useEffect(() => {
    const root = document.documentElement
    // Start at red
    root.style.setProperty("--theme-hue", "0")
  }, [])

  const animateHue = useCallback((from: number, to: number, duration = 2000, onComplete?: () => void, keepOverlay = false) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const root = document.documentElement
    const overlay = document.querySelector<HTMLDivElement>(".theme-gradient-overlay")

    const start = performance.now()
    setAnimating(true)
    overlay?.classList.add("active")

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 0.5 - Math.cos(Math.PI * t) / 2 // cosine ease-in-out
      const hue = lerp(from, to, eased)
      root.style.setProperty("--theme-hue", String(hue))
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setAnimating(false)
        if (!keepOverlay) {
          // small delay to let last paint settle
          requestAnimationFrame(() => overlay?.classList.remove("active"))
        }
        onComplete?.()
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  // Auto-run continuous loop: red -> blue -> red -> ...
  useEffect(() => {
    const startLoop = () => {
      const cycle = (from: number, to: number) => {
        animateHue(from, to, 3000, () => cycle(to, from), /*keepOverlay*/ true)
      }
      cycle(0, 240)
    }
    const id = requestAnimationFrame(startLoop)

    return () => {
      cancelAnimationFrame(id)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      // Remove overlay active on unmount
      const overlay = document.querySelector<HTMLDivElement>(".theme-gradient-overlay")
      overlay?.classList.remove("active")
    }
  }, [animateHue])

  // Cleanup any pending RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // No UI; this component only animates the hue on mount
  return null
}
