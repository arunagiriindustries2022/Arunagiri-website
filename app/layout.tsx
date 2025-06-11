import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { GSAPProvider } from "@/components/gsap-provider"
import { Preloader } from "@/components/preloader"
import Script from "next/script"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Arunagiri Industries - Precision Manufacturing & CNC Solutions",
  description:
    "Leading manufacturer specializing in CNC machining, laser cutting, sheet metal fabrication, and precision components. Quality manufacturing solutions since 2022.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <head>
        <style>{`
          /* Hide Next.js debug button */
          button[data-testid="dev-only-toast-trigger"],
          button[aria-label="Next.js development mode"],
          [data-nextjs-codeframe],
          [data-nextjs-terminal] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}</style>
      </head>
      <body>
        <GSAPProvider>
          <Preloader />
          {children}
        </GSAPProvider>
        
        {/* Script to remove Next.js debug UI */}
        <Script id="remove-nextjs-debug">{`
          (function() {
            function removeNextJsUI() {
              const elements = document.querySelectorAll('[data-testid="dev-only-toast-trigger"], button[aria-label="Next.js development mode"], [data-nextjs-codeframe], [data-nextjs-terminal]');
              elements.forEach(el => el.remove());
            }
            
            // Run immediately
            removeNextJsUI();
            
            // Also run after DOM changes
            const observer = new MutationObserver(removeNextJsUI);
            observer.observe(document.body, { childList: true, subtree: true });
          })();
        `}</Script>
      </body>
    </html>
  )
}
