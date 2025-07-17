import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shopdrop - Courier Matchmaking Made Simple",
    template: "%s | Shopdrop",
  },
  description:
    "Fast, free courier matching for retailers. Same-day delivery from just £5.99. Connect with local pros for one-off or regular deliveries. 100% free courier matching service for retailers.",
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
  // ✅ Updated metadata text too for consistency
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://shopdrop.co.uk",
    siteName: "Shopdrop",
    title: "Shopdrop - Courier Matchmaking Made Simple",
    description: "Fast, free courier matching for retailers. Same-day delivery from just £5.99.",
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
    description: "Fast, free courier matching for retailers. Same-day delivery from just £5.99.",
    images: ["/twitter-image.png"],
    creator: "@shopdrop",
    site: "@shopdrop",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#79CCC4" },
    { media: "(prefers-color-scheme: dark)", color: "#79CCC4" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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

        {/* Tiny CSS for initial fade-in */}
        <style>{`
          body {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          body.ready {
            opacity: 1;
          }
        `}</style>

        {/* Business Schema Markup and theme detection stay unchanged */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Initial fade-in trigger
                window.addEventListener('DOMContentLoaded', function() {
                  document.body.classList.add('ready');
                });
                
                // Theme detection
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ PageTransition removed – now static */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
