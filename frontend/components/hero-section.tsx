"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { MorphingTextSmall } from "@/components/morphing-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const morphingPhrases = [
  "Own Your Memory",
  "Connect All Agents",
  "Never Lose Context",
  "Build Intelligence",
]

const contextPhrases = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Copilot",
  "Custom Agents",
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      <AnimatedNoise opacity={0.015} />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-orange-50/30 rounded-full blur-3xl animate-float" />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 -rotate-90 origin-left block whitespace-nowrap">
          MEMORY LAYER
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full max-w-4xl">
        <div className="w-full">
          {/* Small morphing tagline - Light gray */}
          <div className="mb-4">
            <span className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-gray-400">
              <MorphingTextSmall texts={morphingPhrases} interval={2500} />
            </span>
          </div>

          <div className="relative">
            <SplitFlapText text="DEMAPP" speed={80} />
          </div>

          <h2 className="font-[var(--font-bebas)] text-gray-800 text-[clamp(1.25rem,4vw,2.5rem)] mt-3 tracking-wide">
            Decentralized Multi Agent Persistent Protocol
          </h2>

          {/* Continuation text */}
          <p className="mt-4 font-mono text-base md:text-lg text-gray-700 leading-relaxed">
            The universal memory layer for AI — enabling seamless context sharing across <MorphingTextSmall texts={contextPhrases} interval={2000} className="text-orange-500 font-semibold" /> and every agent you use.
          </p>

          <p className="mt-3 font-mono text-sm md:text-base text-gray-500 leading-relaxed">
            Your conversations, preferences, and learned context — finally owned by you, not scattered across platforms.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-4 font-mono text-sm uppercase tracking-widest text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 rounded-xl"
            >
              <ScrambleTextOnHover text="Get Started" as="span" duration={0.6} />
              <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1" />
            </a>
            <a
              href="#signals"
              className="group inline-flex items-center gap-2 border-2 border-gray-200 bg-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 rounded-xl"
            >
              <ScrambleTextOnHover text="Learn More" as="span" duration={0.6} />
            </a>
          </div>

          {/* Key benefits pills */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-gray-700">100% User Owned</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              <span className="font-mono text-xs text-gray-600">ထ Agent Compatible</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              <span className="font-mono text-xs text-gray-600">Web3 Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
