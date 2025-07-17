"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X, ChevronRight, Shield, Users, Target, Heart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { useTheme } from "@/hooks/use-theme"

export default function AboutPage() {
  const { darkMode, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900" />
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <DynamicFavicon darkMode={darkMode} />

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
                className="text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
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
              className="text-[#79CCC4] transition-colors py-3 px-2 rounded-lg bg-[#79CCC4]/10"
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

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 min-h-screen relative overflow-hidden">
        <div className="container-responsive section-padding-lg">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="mt-10 md:mt-0 text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79CCC4] to-[#5fb3ab]">
                Shopdrop
              </span>
            </h1>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w3xl mx-auto leading-relaxed">
              We're on a mission to help local businesses thrive by connecting them with the perfect courier
              partners—fast, free, and without the fuss.
            </p>
          </div>
          {/* Free Service Highlight */}
          <section className="section-padding-sm bg-gradient-to-br from-[#79CCC4]/10 to-[#5fb3ab]/10 dark:from-[#79CCC4]/20 dark:to-[#5fb3ab]/20">
            <div className="container-responsive">
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-l-4 border-l-[#79CCC4]">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <h2 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-4">
                      100% free courier matching service for retailers
                    </h2>
                    <p className="text-responsive-lg text-gray-600 dark:text-gray-300">
                      No fees, no contracts, no hidden costs—just quality courier connections when you need them.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white">Why We Started Shopdrop</h2>
                <p className="text-responsive-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Local businesses are the heart of our communities, but finding reliable delivery partners shouldn't be
                  a headache. We saw too many great shops struggling with logistics while amazing couriers couldn't find
                  consistent work.
                </p>
                <p className="text-responsive-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  So we built Shopdrop—a simple, free service that matches retailers with trusted local couriers based
                  on exactly what they need. No contracts, no complexity, just better connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Our Impact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#79CCC4]/10 rounded-lg">
                      <div className="text-2xl font-bold text-[#79CCC4]">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Matches Made</div>
                    </div>
                    <div className="text-center p-4 bg-[#79CCC4]/10 rounded-lg">
                      <div className="text-2xl font-bold text-[#79CCC4]">4</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Cities Covered</div>
                    </div>
                    <div className="text-center p-4 bg-[#79CCC4]/10 rounded-lg">
                      <div className="text-2xl font-bold text-[#79CCC4]">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Free for Retailers</div>
                    </div>
                    <div className="text-center p-4 bg-[#79CCC4]/10 rounded-lg">
                      <div className="text-2xl font-bold text-[#79CCC4]">24hr</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Avg Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Always Free",
                description: "Retailers never pay. We're funded by courier partners who value quality referrals.",
              },
              {
                icon: Users,
                title: "Local First",
                description: "We prioritize local couriers who understand your community and customers.",
              },
              {
                icon: Target,
                title: "Perfect Matches",
                description: "We don't just find any courier—we find the right courier for your specific needs.",
              },
              {
                icon: Heart,
                title: "Human Touch",
                description: "Real people, real conversations. No bots, no algorithms—just genuine service.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#79CCC4]/20 to-[#5fb3ab]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-[#79CCC4]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to find your perfect courier match?
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of local businesses who've simplified their delivery process with Shopdrop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white btn-responsive-lg w-full sm:w-auto"
                >
                  Get Matched Today
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/partner">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive-lg border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent w-full sm:w-auto"
                >
                  Join as Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900 text-white section-padding border-t border-gray-800">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Logo variant="footer" className="h-10 sm:h-12 w-auto transition-all duration-300" forceMode="dark" />
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
                Shopdrop helps local shops stay local — and still deliver fast.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Join as Partner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base text-white">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">© 2025 Shopdrop. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/shopdropuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-3 rounded-full transition-all duration-200"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:tesh@shopdrop.uk"
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-3 rounded-full transition-all duration-200"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
