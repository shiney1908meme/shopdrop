import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shopdrop - Courier Matchmaking Made Simple",
    template: "%s | Shopdrop",
  },
  description:
    "Fast, free courier matching for retailers. Same-day delivery from just £6.00. Connect with local pros for one-off or regular deliveries. 100% free matching service for retailers.",
  keywords: [
    "courier",
    "delivery",
    "local business",
    "matchmaking",
    "logistics",
    "UK delivery",
    "same day delivery",
    "courier service",
    "local courier",
    "delivery partner",
    "retail delivery",
    "business delivery",
    "courier matching",
    "delivery solutions",
    "London courier",
    "Birmingham courier",
    "Manchester courier",
    "Leeds courier",
  ],
  authors: [{ name: "Shopdrop", url: "https://shopdrop.co.uk" }],
  creator: "Shopdrop",
  publisher: "Shopdrop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shopdrop.co.uk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://shopdrop.co.uk",
    siteName: "Shopdrop",
    title: "Shopdrop - Courier Matchmaking Made Simple",
    description: "Fast, free courier matching for retailers. Same-day delivery from just £6.00.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopdrop - Courier Matchmaking Made Simple",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopdrop - Courier Matchmaking Made Simple",
    description: "Fast, free courier matching for retailers. Same-day delivery from just £6.00.",
    images: ["/twitter-image.png"],
    creator: "@shopdrop",
    site: "@shopdrop",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "business",
  classification: "Business Services",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#79CCC4" },
    { media: "(prefers-color-scheme: dark)", color: "#79CCC4" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shopdrop",
  },
  applicationName: "Shopdrop",
  generator: "Next.js",
  abstract: "Courier matchmaking service connecting local businesses with trusted delivery partners across the UK.",
  archives: ["https://shopdrop.co.uk"],
  assets: ["https://shopdrop.co.uk"],
  bookmarks: ["https://shopdrop.co.uk"],
  other: {
    "msapplication-TileColor": "#79CCC4",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-tap-highlight": "no",
    "theme-color": "#79CCC4",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//calendar.app.google" />
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />

        {/* Business schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shopdrop",
              url: "https://shopdrop.co.uk",
              logo: "https://shopdrop.co.uk/og-image.png",
              description:
                "Courier matchmaking service connecting local businesses with trusted delivery partners across the UK.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7368-253875",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
              },
              sameAs: ["https://www.linkedin.com/company/shopdropuk/"],
              serviceArea: {
                "@type": "Place",
                name: "United Kingdom",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "London",
                },
                {
                  "@type": "City",
                  name: "Birmingham",
                },
                {
                  "@type": "City",
                  name: "Manchester",
                },
                {
                  "@type": "City",
                  name: "Leeds",
                },
              ],
            }),
          }}
        />

        {/* Theme detection script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
