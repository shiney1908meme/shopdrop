"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScrollToTopProps {
  darkMode?: boolean
}

export function ScrollToTop({ darkMode }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility)

    // Clean up
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Button
        onClick={scrollToTop}
        size="sm"
        className="w-12 h-12 rounded-full bg-[#79CCC4] hover:bg-[#5fb3ab] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </Button>
    </div>
  )
}
