"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { useTheme } from "@/hooks/use-theme"

export default function LogoTestPage() {
  const { darkMode, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900" />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-b from-white via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700/60 z-50 shadow-sm">
        <div className="container-responsive">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            <div className="flex items-center space-x-2">
              <Logo
                variant="header"
                darkMode={darkMode}
                className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300"
                linkToHome={true}
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Contact
              </Link>
              <Link href="/partner">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs xl:text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-600 hover:bg-[#79CCC4] hover:text-white hover:border-[#79CCC4] transition-all duration-200"
                >
                  Join as Partner
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </nav>

            <div className="flex items-center space-x-2 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16 sm:pt-20 lg:pt-24 lg:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-[#79CCC4] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-[#79CCC4] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#79CCC4] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
              <Link href="/partner" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mb-3 bg-transparent">
                  Join as Partner
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20 sm:pt-24 lg:pt-28 section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Logo Test Page</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Test all logo variants and theme adaptations</p>
          </div>

          <div className="grid gap-8">
            {/* Header Logo */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Header Logo</h2>
                <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Logo variant="header" darkMode={darkMode} className="h-12 w-auto" />
                </div>
              </CardContent>
            </Card>

            {/* Hero Logo */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hero Logo</h2>
                <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Logo variant="hero" darkMode={darkMode} className="h-24 w-auto" />
                </div>
              </CardContent>
            </Card>

            {/* Footer Logo */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Footer Logo</h2>
                <div className="flex items-center justify-center p-8 bg-gray-900 rounded-lg">
                  <Logo variant="footer" className="h-12 w-auto" forceMode="dark" />
                </div>
              </CardContent>
            </Card>

            {/* Theme Toggle Test */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Theme Toggle Test</h2>
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Current theme: <span className="font-medium text-[#79CCC4]">{darkMode ? "Dark" : "Light"}</span>
                  </p>
                  <Button onClick={toggleTheme} className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white">
                    Toggle Theme
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
