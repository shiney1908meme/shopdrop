"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "header" | "hero" | "footer" | "social"
  darkMode?: boolean
  className?: string
  width?: number
  height?: number
  linkToHome?: boolean
  forceMode?: "light" | "dark"
  priority?: boolean
}

export function Logo({
  variant = "header",
  darkMode,
  className = "",
  width,
  height,
  linkToHome = false,
  forceMode,
  priority = false,
}: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className={`w-auto h-auto bg-gray-200 dark:bg-gray-700 rounded ${className}`} />
  }

  // Determine effective dark mode
  const effectiveDarkMode = forceMode ? forceMode === "dark" : darkMode || false

  // Logo selection logic
  const logoSrc = getLogoSrc(variant, effectiveDarkMode)

  const logoElement = (
    <div className={`header-logo ${variant === "header" ? "header-mobile-padding" : ""}`}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Shopdrop - Courier Matchmaking Made Simple"
        width={width || 200}
        height={height || 60}
        className={`${className} theme-transition`}
        priority={priority || variant === "header" || variant === "hero"}
        style={{
          height: "auto",
          background: "transparent",
        }}
        quality={100}
      />
    </div>
  )

  // Only wrap with Link if explicitly requested
  if (linkToHome) {
    return (
      <Link
        href="/"
        className="flex items-center justify-center transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#79CCC4]/30 rounded-lg p-1"
        aria-label="Go to Shopdrop homepage"
      >
        {logoElement}
      </Link>
    )
  }

  return logoElement
}

function getLogoSrc(variant: string, darkMode: boolean): string {
  if (darkMode) {
    return "/logos/shopdrop_logo_dark_mode_abstract.png"
  } else {
    return "/logos/shopdrop_logo_transparent.png"
  }
}
