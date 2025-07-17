"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X, Search, ChevronDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/logo"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { useTheme } from "@/hooks/use-theme"

export default function FAQPage() {
  const { darkMode, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const faqCategories = [
    {
      title: "Getting Started",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center",
      faqs: [
        {
          id: "getting-started-1",
          question: "How do I get started with Shopdrop?",
          answer:
            "Simply contact us with your delivery needs. We'll have a quick chat about what you're looking for, then match you with the best local couriers. No sign-ups, no contracts—just tell us what you need.",
        },
        {
          id: "getting-started-2",
          question: "Do I need to create an account?",
          answer:
            "Not right now! We're keeping things simple while we build our platform. Just get in touch and we'll handle everything personally. Our full platform with accounts is coming soon.",
        },
        {
          id: "getting-started-3",
          question: "How quickly can I get matched with a courier?",
          answer:
            "Usually within 24 hours. We'll shortlist the best options for your specific needs and get back to you with recommendations. For urgent deliveries, give us a call and we'll prioritize your request.",
        },
      ],
    },
    {
      title: "Pricing & Fees",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
      faqs: [
        {
          id: "pricing-1",
          question: "Is this service really free for retailers?",
          answer:
            "Yes, completely free! You pay nothing to use our matching service. Couriers cover our fee when you book with them, so there are no hidden costs or charges for retailers. Ever.",
        },
        {
          id: "pricing-2",
          question: "How do couriers pay you if I don't?",
          answer:
            "Couriers pay us a small commission only when you book a delivery with them. Think of it like a referral fee—they're happy to pay because we bring them quality business, and you get free matching.",
        },
        {
          id: "pricing-3",
          question: "Are there any hidden fees or contracts?",
          answer:
            "Our matching service is completely free. Your relationship is directly with the courier company, and you usually only pay for the deliveries you book. We will be on hand to ensure it's clear and transparent.",
        },
        {
          id: "pricing-4",
          question: "What about minimum delivery requirements?",
          answer:
            "There are no minimums from our side. Whether you need one delivery a month or fifty, we can help. Individual couriers may have their own minimums, but we'll make sure to match you with ones that fit your volume.",
        },
      ],
    },
    {
      title: "Couriers & Matching",
      image: "/images/couriers_matching.jpg",
      faqs: [
        {
          id: "matching-1",
          question: "How do you choose which couriers to recommend?",
          answer:
            "We've scoured the market of hundreds of courier companies. We match based on your specific needs: location, delivery speed, vehicle type, eco-friendly options, and price. We only recommend couriers we've vetted for reliability and service quality.",
        },
        {
          id: "matching-2",
          question: "Can I choose my own courier from your recommendations?",
          answer:
            "Based on your needs, we'll always try to give you 2-3 top options with all the details—pricing, timing, vehicle type, and reviews. You pick your favorite, and we'll connect you directly or handle the booking for you.",
        },
        {
          id: "matching-3",
          question: "What if I'm not happy with the courier options?",
          answer:
            "Just let us know what didn't work and we'll find different options. We want you to be completely happy with your match, so we'll keep looking until we find the right fit.",
        },
        {
          id: "matching-4",
          question: "Do you vet all your courier partners?",
          answer:
            "Yes, we carefully vet all courier partners for insurance, licensing, reliability, and service quality. We only work with couriers who meet our standards and have proven track records.",
        },
      ],
    },
    {
      title: "Coverage & Deliveries",
      image: "/images/coverage_deliveries.jpg",
      faqs: [
        {
          id: "coverage-1",
          question: "Which cities do you cover?",
          answer:
            "We're currently live in London, Birmingham, Manchester, and Leeds, with more cities coming soon. Not sure if we cover your area? Just ask—we're expanding rapidly and might already have partners near you.",
        },
        {
          id: "coverage-2",
          question: "Can I book just one delivery or do I need regular service?",
          answer:
            "Both! Whether you need a one-off delivery or regular weekly drops, we can help. No contracts or minimums—use us when you need us, how you need us.",
        },
        {
          id: "coverage-3",
          question: "What types of deliveries can you handle?",
          answer:
            "Most local deliveries: food, flowers, pharmacy items, retail goods, documents, and more. We'll match you with couriers who specialize in your type of goods and have the right vehicle and equipment.",
        },
        {
          id: "coverage-4",
          question: "Do you handle same-day deliveries?",
          answer:
            "Yes! Many of our courier partners offer same-day delivery services. We'll match you with couriers who can meet your timing requirements, whether that's same-day, next-day, or scheduled deliveries.",
        },
      ],
    },
  ]

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

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
                href="/faq"
                className="nav-link-active text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-[#79CCC4] transition-all duration-200 text-sm xl:text-base font-medium"
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
              href="/faq"
              className="text-[#79CCC4] transition-colors py-3 px-2 rounded-lg bg-[#79CCC4]/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
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
      <section className="pt-20 sm:pt-24 lg:pt-28 section-padding bg-gradient-to-br from-white via-gray-50 to-[#79CCC4]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="mt-10 md:mt-0 text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79CCC4] to-[#5fb3ab]">
                Questions
              </span>
            </h1>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Shopdrop's courier matching service
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-gray-300 dark:border-gray-600 focus:border-[#79CCC4] dark:focus:border-[#79CCC4] rounded-xl"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8 lg:space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="w-16 h-16 bg-cover bg-center rounded-xl shadow-md"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <h2 className="text-responsive-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                </div>

                <div className="grid gap-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <Card
                      key={faq.id}
                      className="border-0 shadow-md hover:shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#79CCC4]/20 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                            <div className="flex-shrink-0">
                              <ChevronDown
                                className={`w-5 h-5 text-[#79CCC4] transition-transform duration-200 ${
                                  openFaq === faq.id ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">No FAQs found matching "{searchQuery}"</p>
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white"
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#79CCC4]/10 to-blue-600/10 dark:from-[#79CCC4]/20 dark:to-blue-600/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Can't find what you're looking for? Get in touch and we'll help you out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white w-full sm:w-auto">
                      <Mail className="mr-2 w-4 h-4" />
                      Contact Us
                    </Button>
                  </Link>
                  <a href="https://wa.me/447368253875" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white w-full sm:w-auto bg-transparent"
                    >
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
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
