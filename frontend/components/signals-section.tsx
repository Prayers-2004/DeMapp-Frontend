"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  {
    title: "Trajectory Memory",
    note: "Store execution paths and success recipes. Agents learn how tasks succeeded, not just what happened.",
  },
  {
    title: "Policy\nDistiller",
    note: "Background analyzer that extracts rules from failures. Agents self-improve over time automatically.",
  },
  {
    title: "Cognitive Locking",
    note: "Causal versioning and real-time invalidation. Agents never reason on stale context.",
  },
  {
    title: "Predictive Pre-fetch",
    note: "Proactive context workers that pre-warm memory clusters before you ask.",
  },
]

const signalsRow2 = [
  {
    title: "Immutable Ledger",
    note: "Cryptographically signed, agent-attributed memory mutations. Full audit trail for governance.",
  },
  {
    title: "Wallet\nIdentity",
    note: "EVM/DID-based authentication. One identity across all AI agents and devices.",
  },
  {
    title: "Multi-Agent Governance",
    note: "Staged commits with quorum-based memory promotion. No conflicts.",
  },
]

export function SignalsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return

    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent/20",
          "transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Section header with description */}
      <div ref={headerRef} className="mb-16 pr-6 md:pr-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Protocol Features</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight text-gray-900">HOW WE ENABLE</h2>
            <p className="mt-4 font-mono text-sm text-gray-500 max-w-xl leading-relaxed">
              De-MAPP introduces seven core capabilities that transform how AI agents store, share, and learn from memory — making intelligence truly persistent and user-owned.
            </p>
          </div>
          <div className="hidden md:block max-w-xs text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Powered By</p>
            <p className="font-mono text-xs text-gray-600 mt-2">IPFS • Lit Protocol • EVM</p>
          </div>
        </div>
      </div>

      {/* Grid container - Row 1 */}
      <div
        ref={(el) => {
          scrollRef.current = el
          cardsRef.current = el
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pr-6 md:pr-12"
      >
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} />
        ))}
      </div>

      {/* Grid container - Row 2 (Centered with same card widths as row 1) */}
      <div className="pr-6 md:pr-12 mt-6">
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center gap-6">
          {signalsRow2.map((signal, index) => (
            <div key={index + 4} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
              <SignalCard signal={signal} index={index + 4} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SignalCard({
  signal,
  index,
}: {
  signal: { title: string; note: string }
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative w-full h-full",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      {/* Card with clean white design */}
      <div className="relative h-full bg-white border border-gray-100 rounded-xl p-8 min-h-[280px] flex flex-col shadow-sm hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Issue number - editorial style */}
        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">
            No. {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-bebas)] text-4xl tracking-tight mb-4 text-gray-900 group-hover:text-accent transition-colors duration-300 whitespace-pre-line">
          {signal.title}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

        {/* Description */}
        <p className="font-mono text-xs text-gray-500 leading-relaxed flex-grow">{signal.note}</p>

        {/* Decorative corner */}
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300" />
      </div>
    </article>
  )
}
