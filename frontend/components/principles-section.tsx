"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "USER OWNED ", highlight: false },
        { text: "MEMORY", highlight: true },
      ],
      description: "Your data belongs to you, not platforms. Wallet-based identity with zero vendor lock-in.",
      extendedContext: "Export, migrate, or delete your memory at any time. True data sovereignty through cryptographic ownership.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "CROSS-AGENT", highlight: true },
        { text: " CONTINUITY", highlight: false },
      ],
      description: "All AI agents read and write to the same vault. Seamless context across ChatGPT, Claude, and IDEs.",
      extendedContext: "One conversation, infinite agents. Your AI assistants finally share a common understanding of you.",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "AGENTS THAT ", highlight: false },
        { text: "LEARN", highlight: true },
      ],
      description: "Trajectory memory stores how tasks succeeded. Policy distillation enables self-improvement over time.",
      extendedContext: "Agents don't just remember what happened — they learn how you solved problems and apply those patterns.",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "VERIFIABLE ", highlight: false },
        { text: "TRUST", highlight: true },
      ],
      description: "On-chain audit trails for every memory mutation. Cryptographic provenance you can prove.",
      extendedContext: "Every memory change is signed and timestamped. Build trust through transparency, not blind faith.",
      align: "right",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
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

      // Each principle slides in from its aligned side
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Section header with intro text */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Principles</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight text-gray-900">CORE BELIEFS</h2>
        <p className="mt-6 font-mono text-sm text-gray-500 max-w-2xl leading-relaxed">
          These four principles guide every decision we make at De-MAPP. They represent our commitment to building AI infrastructure that respects users and enables true intelligence portability.
        </p>
      </div>

      {/* Staggered principles */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${
              principle.align === "right" ? "items-end text-right" : "items-start text-left"
            }`}
          >
            {/* Annotation label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">
              {principle.number} / {principle.titleParts[0].text.split(" ")[0]}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none text-gray-900">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-md font-mono text-sm text-gray-500 leading-relaxed">
              {principle.description}
            </p>

            {/* Extended context */}
            <p className="mt-3 max-w-md font-mono text-xs text-gray-400 leading-relaxed">
              {principle.extendedContext}
            </p>

            {/* Decorative line */}
            <div className={`mt-8 h-[1px] bg-gray-200 w-24 md:w-48 ${principle.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-32 text-center">
        <p className="font-mono text-sm text-gray-500 mb-6">
          Ready to own your AI memory?
        </p>
        <a
          href="https://docs.demapp.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-mono text-sm uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Read the Docs
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
