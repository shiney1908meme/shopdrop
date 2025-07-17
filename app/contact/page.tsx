"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X, Mail, Clock, ChevronRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { useTheme } from "@/hooks/use-theme"

export default function ContactPage() {
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
                className="text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
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
              className="text-[#79CCC4] transition-colors py-3 px-2 rounded-lg bg-[#79CCC4]/10"
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
      <section className="pt-32 sm:pt-24 lg:pt-28 section-padding bg-gradient-to-br from-white via-gray-50 to-[#79CCC4]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="mt-10 md:mt-0 text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79CCC4] to-[#5fb3ab]">Touch</span>
            </h1>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to find your perfect courier match? Drop us a line and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Smith"
                        className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Contact Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 20 1234 5678"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Business Name
                    </label>
                    <Input
                      id="business"
                      type="text"
                      placeholder="Your Business Name"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Business Website
                    </label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Tell us about your delivery needs
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="e.g., florist deliveries – how often, how many per week/day. We'll cover this in more detail during your free assessment meeting."
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#79CCC4] hover:bg-[#5fb3ab] text-white">
                    Send Message
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#79CCC4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        Get in touch and we'll respond within 24 hours
                      </p>
                      <a href="mailto:tesh@shopdrop.uk" className="text-[#79CCC4] hover:text-[#5fb3ab] font-medium">
                        tesh@shopdrop.uk
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-[#79CCC4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Quick chat for instant responses</p>
                      <a
                        href="https://wa.me/447368253875"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#79CCC4] hover:text-[#5fb3ab] font-medium"
                      >
                        07368 253875
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#79CCC4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Schedule a Meeting</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Book a free assessment call</p>
                      <a
                        href="https://calendar.app.google/2t5sBrFqEDu1owiVA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent"
                        >
                          Book Meeting
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#79CCC4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Connect on LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Follow us for industry updates and insights
                      </p>
                      <a
                        href="https://www.linkedin.com/company/shopdropuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent"
                        >
                          Follow Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#79CCC4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">We typically respond within</p>
                      <p className="text-gray-700 dark:text-gray-300">24 hours (often much faster!)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding-sm bg-gradient-to-br from-[#79CCC4]/5 to-[#5fb3ab]/5 dark:from-[#79CCC4]/10 dark:to-[#5fb3ab]/10">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Prefer a quick chat?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Message us on WhatsApp and we'll respond fast.</p>
                <a href="https://wa.me/447368253875" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white">
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
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
        </div>
      </footer>
    </div>
  )
}
