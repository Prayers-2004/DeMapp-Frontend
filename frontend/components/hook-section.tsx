"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HookSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll('.stat-item'),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 pl-6 md:pl-28 pr-6 md:pr-12 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div ref={textRef} className="max-w-4xl text-center mx-auto">
        <p className="font-[var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-900">
          Intelligence already exists.
        </p>
        <p className="font-[var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-400 mt-2">
        Memory and coordination are{" "}
        <span
          className="underline decoration-red-500"
          style={{ textUnderlineOffset: "10px" }}
        >
          disabled
        </span>{" "}
        by default.
        </p>

        {/* Continuation text */}
        <p className="mt-8 font-mono text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Every time you switch AI tools, you start from scratch. Your context, preferences, and learned patterns — lost. 
          De-MAPP fixes this by creating a unified memory layer that follows you everywhere.
        </p>
      </div>

      {/* Problem/Solution Stats */}
      <div ref={statsRef} className="mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-item text-center p-6 rounded-xl bg-white/60 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <p className="font-[var(--font-bebas)] text-5xl text-red-500/80">5+</p>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">AI Tools Used Daily</p>
            <p className="font-mono text-[11px] text-gray-400 mt-3 leading-relaxed">
              The average developer switches between multiple AI assistants, each with isolated context.
            </p>
          </div>
          <div className="stat-item text-center p-6 rounded-xl bg-white/60 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <p className="font-[var(--font-bebas)] text-5xl text-amber-500/80">87%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">Context Lost</p>
            <p className="font-mono text-[11px] text-gray-400 mt-3 leading-relaxed">
              Most AI interactions are one-off. Valuable context disappears when sessions end.
            </p>
          </div>
          <div className="stat-item text-center p-6 rounded-xl bg-white/60 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <p className="font-[var(--font-bebas)] text-5xl text-accent">0%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-2">User Ownership</p>
            <p className="font-mono text-[11px] text-gray-400 mt-3 leading-relaxed">
              Your AI memory currently belongs to platforms. You can't export, share, or truly own it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
