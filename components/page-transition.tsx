"use client"

import type React from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  // No transitions - content appears immediately
  return <div>{children}</div>
}
