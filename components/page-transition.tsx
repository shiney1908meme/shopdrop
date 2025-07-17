"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Trigger transition on route change
    setIsTransitioning(true)

    // Reset transition state after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 250) // Slightly longer than CSS transition duration

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-transform duration-200 ease-out ${
        isTransitioning ? "transform translate-y-3 scale-[0.99]" : "transform translate-y-0 scale-100"
      }`}
    >
      {children}
    </div>
  )
}
