"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Moon,
  Sun,
  Package,
  Truck,
  Clock,
  Shield,
  Target,
  Zap,
  ChevronRight,
  CheckCircle,
  MessageSquare,
  Menu,
  X,
  Search,
  Phone,
  Users,
  TrendingUp,
  AlertCircle,
  DollarSign,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/logo"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { useTheme } from "@/hooks/use-theme"

export default function HomePage() {
  const { darkMode, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const valueProps = [
    {
      icon: Shield,
      title: "Keep control, gain clarity",
      description: "Maintain full oversight of your delivery process while gaining insights into performance and costs",
    },
    {
      icon: Zap,
      title: "No more guesswork",
      description: "Get transparent pricing, real-time tracking, and reliable delivery estimates from trusted partners",
    },
    {
      icon: Target,
      title: "Locally focused",
      description: "Connect with couriers who know your area and understand the needs of local businesses",
    },
  ]

  const comingSoonFeatures = [
    "Real-time delivery tracking",
    "Automated cost estimators",
    "Partner performance reviews",
    "Bulk booking management",
    "Analytics dashboard",
    "API integrations",
  ]

  const howItWorksSteps = [
    {
      icon: MessageSquare,
      title: "Tell us what you need",
      description: "Quick form, quick call—just tell us what, where, and how often. We keep it simple, no jargon.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      step: "01",
    },
    {
      icon: Truck,
      title: "We handpick your best couriers",
      description:
        "We shortlist trusted couriers based on speed, location, vehicle type, and price. Only what truly fits you.",
      image: "/images/courier-handoff.jpg",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "You choose, we make it happen",
      description: "Pick your favourite option and we'll connect you directly—or book it for you. Zero stress.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=center",
      step: "03",
    },
    {
      icon: Shield,
      title: "Always free & unbiased",
      description: "No fees for retailers. We're 100% independent, so you get honest matches—no hidden agenda.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      step: "04",
    },
  ]

  const comparisonData = [
    {
      category: "Finding Couriers",
      traditional: {
        method: "Google searches, cold calls, word of mouth",
        time: "Hours or days",
        effort: "High - multiple calls and emails",
        icon: Search,
        pain: "Endless searching with no guarantee of quality",
      },
      shopdrop: {
        method: "We search and filter trusted couriers for you",
        time: "24 hours",
        effort: "Minimal - we do the work",
        icon: MessageSquare,
        benefit: "Curated matches based on your exact needs",
      },
    },
    {
      category: "Pricing",
      traditional: {
        method: "Request quotes from multiple couriers",
        time: "Days to get responses",
        effort: "High - chasing quotes and comparing",
        icon: DollarSign,
        pain: "Hidden fees, inconsistent pricing, no transparency",
      },
      shopdrop: {
        method: "We obtain quotes based on your budget",
        time: "Immediate",
        effort: "None - clear pricing from day one",
        icon: TrendingUp,
        benefit: "No surprises, competitive rates, full transparency",
      },
    },
    {
      category: "Quality Assurance",
      traditional: {
        method: "Hope for the best, learn from mistakes",
        time: "Weeks to assess reliability",
        effort: "High - trial and error approach",
        icon: AlertCircle,
        pain: "Risk of poor service, damaged reputation",
      },
      shopdrop: {
        method: "Pre-vetted, trusted courier partners",
        time: "Instant confidence",
        effort: "None - we've done the vetting",
        icon: Shield,
        benefit: "Reliable service from day one, peace of mind",
      },
    },
    {
      category: "Ongoing Support",
      traditional: {
        method: "Direct relationship management",
        time: "Ongoing time investment",
        effort: "High - managing multiple relationships",
        icon: Phone,
        pain: "Complex relationships, no backup options",
      },
      shopdrop: {
        method: "We're on-hand until you complete your first delivery",
        time: "Always available",
        effort: "Minimal - we handle the relationships",
        icon: Users,
        benefit: "Ongoing support, alternative options ready",
      },
    },
  ]

  const faqs = [
    {
      question: "Is this service REALLY free for retailers?",
      answer: "Yep! You pay nothing. Couriers cover our fee if you book with them. No hidden costs, no catch.",
    },
    {
      question: "Which cities can I use this in?",
      answer: "We're live in London, Birmingham, Manchester, and Leeds — and growing. Not sure? Just ask!",
    },
    {
      question: "Can I book just one delivery?",
      answer:
        "Yes, we work with couriers who are happy to do just 1 delivery, although our service is best suited to find you a delivery partner for your ongoing delivery needs.",
    },
    {
      question: "How do you choose couriers?",
      answer: "We match you based on your job: location, speed, vehicle, eco options, and price. You pick your fave.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
            <div className="flex items-center space-x-3">
              <Logo
                variant="header"
                darkMode={darkMode}
                className="w-auto transition-all duration-300"
                linkToHome={true}
                priority={true}
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="nav-link-active text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-sm xl:text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-sm xl:text-base font-medium"
              >
                About
              </Link>
              <a
                href="#how-it-works"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-sm xl:text-base font-medium"
              >
                How It Works
              </a>
              <Link
                href="/faq"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-sm xl:text-base font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="nav-link-hover text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-sm xl:text-base font-medium"
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
            <a
              href="#how-it-works"
              className="text-gray-600 dark:text-gray-300 hover:text-[#79CCC4] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link
              href="/faq"
              className="text-gray-600 dark:text-gray-300 hover:text-[#79CCC4] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
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
      <section className="pt-20 sm:pt-24 lg:pt-28 min-h-screen relative overflow-hidden">
        {/* Split-screen hero background */}
        <div className="absolute inset-0 grid lg:grid-cols-2">
          {/* Left side - gradient background */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-[#79CCC4]/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

          {/* Right side - hero image with overlay */}
          <div className="relative hidden lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#79CCC4]/20 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Background shapes for mobile */}
        <div className="absolute inset-0 overflow-hidden lg:hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-[#79CCC4]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-20 sm:top-40 sm:-left-40 w-30 h-30 sm:w-60 sm:h-60 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive section-padding-lg relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left side */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-responsive-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79CCC4] to-[#5fb3ab]">
                    Courier Matchmaking
                  </span>{" "}
                  Made Simple
                </h1>
                <p className="text-responsive-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Get matched with the perfect courier—fast, free, and zero fuss. One-off or regular drops, we connect
                  you with local pros so you can skip the stress and get back to what matters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white btn-responsive-lg w-full sm:w-auto"
                  >
                    Get Matched
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive-lg border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent w-full sm:w-auto"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  How it Works
                </Button>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Same-day delivery starts from as little as £5.99 per delivery.
                </p>
              </div>
            </div>

            {/* Right side - Hero logo and Dashboard mockup */}
            <div className="relative mt-8 lg:mt-0">
              {/* Hero Logo as decorative element */}
              <div className="absolute -top-8 -right-8 opacity-10 pointer-events-none">
                <Logo variant="hero" darkMode={darkMode} className="w-32 h-32 lg:w-48 lg:h-48" />
              </div>

              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 max-w-lg mx-auto lg:max-w-none relative z-10">
                {/* Browser-style header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Find Local Couriers
                    </h3>
                    <Badge className="bg-[#79CCC4]/20 text-[#79CCC4] text-xs">Coming Soon</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#79CCC4]" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                          FastCourier
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">£5.99/delivery</span>
                    </div>

                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">QuickDrop</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">£9.99/delivery</span>
                    </div>

                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">LocalRush</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">£14.99/delivery</span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Compare trusted local couriers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 sm:h-20 fill-white dark:fill-gray-900">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="section-padding bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"
      >
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              100% free courier matching service for retailers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#79CCC4]/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-[#79CCC4]">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#79CCC4]/20 to-[#5fb3ab]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-[#79CCC4]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <div
                      className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${step.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#79CCC4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#79CCC4]/10 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#79CCC4]" />
              <span className="text-sm font-medium text-[#79CCC4]">
                100% free courier matching service for retailers
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white btn-responsive-lg w-full sm:w-auto hover-lift"
                >
                  Get Matched Today
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-responsive-lg border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent w-full sm:w-auto hover-lift"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Shopdrop vs Traditional Methods?
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stop wasting time on endless searches and unreliable couriers. See how we make it better.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {comparisonData.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Traditional Method */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.traditional.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Traditional Way: {item.category}
                          </h3>
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-3">
                            {item.traditional.pain}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Method:</span>
                          <span className="text-sm text-gray-900 dark:text-white text-right max-w-xs">
                            {item.traditional.method}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Time:</span>
                          <span className="text-sm text-gray-900 dark:text-white">{item.traditional.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Effort:</span>
                          <span className="text-sm text-gray-900 dark:text-white">{item.traditional.effort}</span>
                        </div>
                      </div>
                    </div>

                    {/* Shopdrop Method */}
                    <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#79CCC4]/5 to-[#5fb3ab]/5">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-[#79CCC4]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.shopdrop.icon className="w-6 h-6 text-[#79CCC4]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Shopdrop Way: {item.category}
                          </h3>
                          <p className="text-sm text-[#79CCC4] font-medium mb-3">{item.shopdrop.benefit}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Method:</span>
                          <span className="text-sm text-gray-900 dark:text-white text-right max-w-xs">
                            {item.shopdrop.method}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Time:</span>
                          <span className="text-sm text-[#79CCC4] font-medium">{item.shopdrop.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Effort:</span>
                          <span className="text-sm text-[#79CCC4] font-medium">{item.shopdrop.effort}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#79CCC4]/10 to-blue-600/10 dark:from-[#79CCC4]/20 dark:to-blue-600/20 max-w-4xl mx-auto">
              <CardContent className="p-8 sm:p-12">
                <h3 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to skip the hassle?
                </h3>
                <p className="text-responsive-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of local businesses who've ditched the traditional approach and found their perfect
                  courier matches with Shopdrop.
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
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="btn-responsive-lg border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section
        id="features"
        className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Shopdrop</h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300">
              Built for local businesses who value control and clarity
            </p>
          </div>

          <div className="grid-responsive-3">
            {valueProps.map((feature, index) => (
              <Card
                key={index}
                className="group hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <CardContent className="card-responsive">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#79CCC4] to-[#5fb3ab] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-responsive-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-responsive-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">Got Questions?</h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's what most retailers ask us before getting started.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#79CCC4]/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          {openFaq === index ? (
                            <div className="w-5 h-5 text-[#79CCC4] transition-transform duration-200">−</div>
                          ) : (
                            <div className="w-5 h-5 text-[#79CCC4] transition-transform duration-200">+</div>
                          )}
                        </div>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#79CCC4] text-[#79CCC4] hover:bg-[#79CCC4] hover:text-white bg-transparent"
                >
                  View All FAQs
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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
                  Chat with us on WhatsApp and we'll help you find the perfect courier match—no strings attached.
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

      {/* Coming Soon Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#79CCC4]/90 to-blue-600/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl font-bold text-white mb-4">Your delivery platform is coming.</h2>
            <p className="text-responsive-lg text-white/90">
              Real-time tracking, cost estimators, partner reviews, and more.
            </p>
          </div>

          <div className="container-narrow">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Coming Soon Features
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {comingSoonFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#79CCC4] rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full" />
                        </div>
                        <span className="text-responsive-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                        Platform Preview
                      </span>
                      <Badge className="bg-[#79CCC4]/20 text-[#79CCC4] text-xs">Beta</Badge>
                    </div>
                    <div className="h-24 sm:h-32 bg-gradient-to-r from-[#79CCC4]/20 to-blue-400/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-[#79CCC4]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-[#79CCC4] hover:bg-[#5fb3ab] text-white btn-responsive w-full sm:w-auto"
                  >
                    Get in touch
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="section-padding-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-responsive">
          <div className="text-center">
            <p className="text-responsive-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Trusted by local shops across the UK
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              {["Local Bakery Co.", "Fresh Flowers Ltd.", "City Pharmacy", "Boutique Fashion", "Artisan Foods"].map(
                (company, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 text-[#79CCC4]">★</div>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{company}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-900 text-white section-padding border-t border-gray-800">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="footer-logo-container">
                  <Logo variant="footer" className="h-8 sm:h-10 w-auto transition-all duration-300" forceMode="dark" />
                </div>
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
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Home
                  </Link>
                </li>
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
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    FAQ
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
                <li>
                  <Link
                    href="/partner"
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    Join as Partner
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

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="sm"
          className="w-12 h-12 rounded-full bg-[#79CCC4] hover:bg-[#5fb3ab] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          ↑
        </Button>
      </div>
    </div>
  )
}
