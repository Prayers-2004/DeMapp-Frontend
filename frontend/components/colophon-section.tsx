"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Grid columns fade up with stagger
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Footer fade in
      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-gray-100 bg-white"
    >
      {/* Section header with mission statement */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Connect</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight text-gray-900">GET INVOLVED</h2>
        <p className="mt-6 font-mono text-sm text-gray-500 max-w-xl leading-relaxed">
          De-MAPP is built in the open. Join our community of developers, researchers, and AI enthusiasts who are shaping the future of persistent intelligence.
        </p>
      </div>

      {/* Multi-column layout */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
        {/* Community */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Community</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://discord.gg/demapp" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">Discord</a>
            </li>
            <li>
              <a href="https://twitter.com/demapp" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">Twitter/X</a>
            </li>
            <li>
              <a href="https://github.com/demapp" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://docs.demapp.io" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">Documentation</a>
            </li>
            <li>
              <a href="#" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">Whitepaper</a>
            </li>
            <li>
              <a href="#" className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200">API Reference</a>
            </li>
          </ul>
        </div>

        {/* Stack */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Built With</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-gray-700">IPFS / Arweave</li>
            <li className="font-mono text-xs text-gray-700">Lit Protocol</li>
            <li className="font-mono text-xs text-gray-700">EVM Chains</li>
          </ul>
        </div>

        {/* Protocol */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Protocol</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-gray-700">MCP Compatible</li>
            <li className="font-mono text-xs text-gray-700">Open Source</li>
            <li className="font-mono text-xs text-gray-700">Decentralized</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hello@demapp.io"
                className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200"
              >
                hello@demapp.io
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mono text-xs text-gray-700 hover:text-accent transition-colors duration-200"
              >
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Status */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Status</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-gray-700">v0.1 Alpha</li>
            <li className="font-mono text-xs text-gray-700">2025 — Present</li>
            <li className="font-mono text-xs text-accent">Active Development</li>
          </ul>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl text-gray-900">Stay Updated</h4>
            <p className="font-mono text-xs text-gray-500 mt-2">Get notified about protocol updates and community events.</p>
          </div>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="px-4 py-3 bg-white border border-gray-200 rounded-lg font-mono text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors w-64"
              suppressHydrationWarning
            />
            <button 
              className="px-6 py-3 bg-gray-900 text-white font-mono text-xs uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-colors"
              suppressHydrationWarning
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
          © 2025 De-MAPP Protocol. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-gray-400">Memory owned by users. Intelligence shared by all.</p>
      </div>
    </section>
  )
}
