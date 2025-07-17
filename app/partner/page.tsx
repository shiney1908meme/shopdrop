"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X, ChevronRight, Users, Clock, Star, Shield, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { useTheme } from "@/hooks/use-theme"

export default function PartnerPage() {
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
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Contact
              </Link>
              <Link
                href="/partner"
                className="nav-link-active text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Join as Partner
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
            <Link
              href="/partner"
              className="text-[#79CCC4] transition-colors py-3 px-2 rounded-lg bg-[#79CCC4]/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join as Partner
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 section-padding bg-gradient-to-br from-white via-gray-50 to-[#79CCC4]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="mt-10 md:mt-0 text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
              Join as a Partner
            </h1>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with quality local businesses and grow your courier service with Shopdrop's trusted referral
              network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: Users,
                title: "Quality Referrals",
                description: "Get matched with local businesses that need reliable delivery partners",
              },
              {
                icon: Clock,
                title: "Flexible Work",
                description: "Choose to work with the retailers that suit your service",
              },
              {
                icon: Star,
                title: "Build Reputation",
                description: "Grow your business through positive reviews and repeat customers",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#79CCC4]/20 to-[#5fb3ab]/20 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-[#79CCC4]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Application Form */}
            <Card className="border-0 shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Apply to Join</h2>
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
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Courier Service"
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
                      placeholder="https://yourcourierservice.com"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="coverage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Coverage Area
                    </label>
                    <Input
                      id="coverage"
                      type="text"
                      placeholder="e.g., Central London, Birmingham City Centre"
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Tell us about your courier experience
                    </label>
                    <Textarea
                      id="experience"
                      rows={4}
                      placeholder="Years in business, types of deliveries, vehicle types, special services..."
                      className="border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#79CCC4] hover:bg-[#5fb3ab] text-white">
                    Submit Application
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Requirements & Process */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What We Look For</h3>
                  <ul className="space-y-3">
                    {[
                      "Reliable delivery service with proven track record",
                      "Professional communication and customer service",
                      "Appropriate insurance and licensing",
                      "Coverage in London, Birmingham, Manchester, or Leeds",
                      "Commitment to quality and timely deliveries",
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-[#79CCC4] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Apply", desc: "Submit your application with business details" },
                      { step: "2", title: "Review", desc: "We'll review your application within 48 hours" },
                      { step: "3", title: "Onboard", desc: "Quick setup call to get you started" },
                      { step: "4", title: "Match", desc: "Start receiving quality referrals" },
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-[#79CCC4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                        </div>
                      </div>
                    ))}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Still unsure?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Chat with us on WhatsApp and we'll answer any questions about becoming a Shopdrop partner.
                </p>
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
