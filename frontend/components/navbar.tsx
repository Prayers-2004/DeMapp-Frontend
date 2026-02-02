"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://docs.demapp.io", label: "Docs", external: true },
  { href: "https://github.com/demapp", label: "GitHub", external: true },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      {/* Rounded Navbar Container */}
      <nav
        className={cn(
          "w-full max-w-5xl rounded-full transition-all duration-500",
          "bg-white/80 backdrop-blur-xl",
          "shadow-lg shadow-black/5",
          "border border-gray-200/50",
          isScrolled && "shadow-xl shadow-black/10 bg-white/90"
        )}
      >
        <div className="flex items-center justify-between h-16 px-3 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0 pl-2"
          >
            <div className="w-8 h-8 relative flex items-center justify-center">
              <img
                src="/demapp_logo.png"
                alt="De-MAPP Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-wide text-gray-900 group-hover:text-accent transition-colors duration-200">
              DeMapp
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label, external }) => 
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200 rounded-full"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-5 py-2.5 text-[15px] font-medium transition-all duration-200 rounded-full",
                    pathname === href
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                  )}
                >
                  {label}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 pr-1">
            {/* Twitter/X Link */}
            <a
              href="https://x.com/DeMapp_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-full transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-sm font-medium"></span>
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700 p-2.5 hover:bg-gray-100 rounded-full transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>

            {/* CTA Button */}
            <a
              href="https://docs.demapp.io"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[14px] font-semibold",
                "bg-gray-900 text-white hover:bg-gray-800",
                "rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
              )}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
