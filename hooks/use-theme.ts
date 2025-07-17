"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme")
    let isDark = false

    if (savedTheme) {
      isDark = savedTheme === "dark"
    } else {
      // Use system preference
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    setDarkMode(isDark)

    // Apply theme to document immediately to prevent flash
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Add theme-switching class to prevent transition artifacts
    document.documentElement.classList.add("theme-switching")

    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    // Update localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")

    // Update document class immediately
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Remove theme-switching class after a brief delay to restore transitions
    setTimeout(() => {
      document.documentElement.classList.remove("theme-switching")
    }, 50)
  }

  return { darkMode, toggleTheme, mounted }
}
