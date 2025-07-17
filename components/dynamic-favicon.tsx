"use client"

import { useEffect } from "react"

interface DynamicFaviconProps {
  darkMode: boolean
}

export function DynamicFavicon({ darkMode }: DynamicFaviconProps) {
  useEffect(() => {
    // Debounce favicon updates to prevent rapid switching artifacts
    const timeoutId = setTimeout(() => {
      try {
        // Use the appropriate logo for favicon based on theme
        const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
        const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement

        const faviconSrc = darkMode
          ? "/logos/shopdrop_logo_dark_mode_abstract.png"
          : "/logos/shopdrop_logo_transparent.png"

        if (favicon) {
          favicon.href = faviconSrc
        }

        if (appleTouchIcon) {
          appleTouchIcon.href = faviconSrc
        }

        // Update any other favicon sizes
        const faviconSizes = document.querySelectorAll('link[rel="icon"][sizes]')
        faviconSizes.forEach((link) => {
          const linkElement = link as HTMLLinkElement
          linkElement.href = faviconSrc
        })
      } catch (error) {
        console.warn("Failed to update favicon:", error)
      }
    }, 100) // Small delay to prevent rapid switching

    return () => clearTimeout(timeoutId)
  }, [darkMode])

  return null
}
