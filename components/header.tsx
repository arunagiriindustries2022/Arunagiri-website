"use client"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md border-b border-beige shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Image
                src="/images/agi-logo.png"
                alt="Arunagiri Industries Logo"
                width={120}
                height={50}
                priority
                className="transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Us" },
              { href: "#services", label: "Services" },
              { href: "#machinery", label: "Machinery" },
              { href: "#gym-products", label: "Gym Products" },
              { href: "#products", label: "Products" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative transition-colors text-sm font-medium tracking-wide group ${
                  scrolled ? "text-brown" : "text-cream drop-shadow-md"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-tan" : "bg-cream/70"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a href="#contact">
              <button className={`${
                scrolled ? "btn-elegant" : "border border-cream/70 bg-transparent hover:bg-brown/80 text-cream"
              } px-6 py-2 rounded-md transition-all duration-300 hover:shadow-md font-medium text-sm`}>
                Contact
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-md ${
                scrolled ? "text-brown hover:bg-beige/30" : "text-cream hover:bg-brown/20"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream/95 backdrop-blur-md border border-beige mt-2 rounded-md shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#machinery", label: "Machinery" },
                { href: "#gym-products", label: "Gym Products" },
                { href: "#products", label: "Products" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-brown hover:text-tan border-b border-beige/30 last:border-0 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
