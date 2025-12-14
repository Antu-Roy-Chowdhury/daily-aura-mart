"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/#shop" },
    { label: "Track Your Order", href: "/track-order" },
    { label: "Reviews", href: "/#reviews" },
    // { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const handleClick = (href) => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/favaura.png" alt="Daily AuraMart" className="h-10 w-auto" />
            <span className="text-2xl font-bold hidden sm:inline">
  <span className="text-[#04b706]">Daily</span> <span className="text-[#ff7b23]">AuraMart</span>
</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="text-gray-700 hover:text-[#ff7b23] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/+8801518907652"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#04b706] text-white px-4 py-2 rounded-full hover:bg-[#039605] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="block py-2 text-gray-700 hover:text-[#ff7b23] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
