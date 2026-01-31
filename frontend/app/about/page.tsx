"use client"

import { useRef, useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "Priyank Panchal",
    role: "Co-Founder & CEO",
    description: "Visionary leader driving the future of decentralized AI memory infrastructure.",
    image: "/Priyank.jpg",
    twitter: "https://twitter.com/priyankpanchal",
  },
  {
    name: "Anarv Vasavada",
    role: "Co-Founder & CTO",
    description: "Technical architect building the protocol layer for cross-agent memory orchestration.",
    image: "/anarv.png",
    twitter: "https://twitter.com/anarvvasavada",
  },
  {
    name: "Prayers Khristi",
    role: "Co-Founder & COO",
    description: "Operations strategist scaling De-MAPP's vision to global adoption.",
    image: "/Prayers.jpg",
    twitter: "https://twitter.com/prayerskhristi",
  },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      )

      // Team cards animation
      const cards = teamRef.current?.querySelectorAll(".team-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 80%",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <div className="grid-bg fixed inset-0 opacity-40" aria-hidden="true" />
      <AnimatedNoise opacity={0.015} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-20 bg-linear-to-br from-white via-gray-50/50 to-white">
          <div ref={heroRef} className="text-center px-6 max-w-4xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              About De-MAPP
            </span>
            <h1 className="mt-4 font-(--font-bebas) text-4xl md:text-6xl tracking-tight text-gray-900">
              BUILDING THE FUTURE
            </h1>
            <h1 className="font-(--font-bebas) text-4xl md:text-6xl tracking-tight text-gray-900">
              OF <span className="text-accent">AI MEMORY</span>
            </h1>
            <p className="mt-8 font-mono text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              We're on a mission to give users true ownership of their AI interactions. 
              De-MAPP is the decentralized memory orchestration layer that enables persistent, 
              cross-agent intelligence — owned by you, not platforms.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-6 md:px-12 bg-linear-to-b from-white via-gray-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
              {/* Left - Text Content */}
              <div className="md:w-[45%]">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Our Vision
                </span>
                <h2 className="mt-4 font-(--font-bebas) text-4xl md:text-5xl tracking-tight text-gray-900">
                  MEMORY SHOULD BE <span className="text-accent">YOURS</span>
                </h2>
                <p className="mt-6 font-mono text-sm text-gray-500 leading-relaxed">
                  In today's AI landscape, your conversations, preferences, and learned context 
                  are scattered across platforms — owned by corporations, not you. De-MAPP changes this.
                </p>
                <p className="mt-4 font-mono text-sm text-gray-500 leading-relaxed">
                  We believe in a future where your AI memory follows you everywhere — 
                  from ChatGPT to Claude to your IDE — seamlessly, securely, and under your control.
                </p>
              </div>
              
              {/* Right - Decorative Element */}
              <div className="md:w-[45%] flex justify-end">
                <div className="relative w-full max-w-87.5 aspect-square">
                  {/* Corner frames */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent/50" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-accent/30" />
                  
                  {/* Main rotated diamond */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/60 rotate-45" />
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-(--font-bebas) text-8xl text-accent">∞</div>
                      <p className="mt-4 font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                        Persistent Memory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-24 px-6 md:px-12 border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                The People Behind De-MAPP
              </span>
              <h2 className="mt-4 font-(--font-bebas) text-5xl md:text-7xl tracking-tight text-gray-900">
                MEET OUR TEAM
              </h2>
            </div>

            {/* Team Cards */}
            <div ref={teamRef} className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="team-card group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Container */}
                  <div className="relative bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 hover:border-accent/30 shadow-sm hover:shadow-xl">
                    {/* Image Container with Tech Effect */}
                    <div className="relative aspect-square overflow-hidden">
                      {/* Glitch/Scan Lines Effect */}
                      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-scan" />
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 h-px bg-accent/10"
                            style={{ top: `${i * 5}%` }}
                          />
                        ))}
                      </div>

                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-all duration-300 z-30" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent transition-all duration-300 z-30" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/0 group-hover:border-accent transition-all duration-300 z-30" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/0 group-hover:border-accent transition-all duration-300 z-30" />

                      {/* Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Hex Grid Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff6b35' stroke-width='0.5'/%3E%3C/svg%3E")`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                    </div>

                    {/* Info Section */}
                    <div className="p-6 relative">
                      {/* Animated line */}
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                      
                      <h3 className="font-(--font-bebas) text-2xl tracking-tight text-gray-900 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mt-1">
                        {member.role}
                      </p>
                      <p className="font-mono text-xs text-gray-500 leading-relaxed mt-4">
                        {member.description}
                      </p>

                      {/* Twitter Link */}
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 font-mono text-xs text-gray-400 hover:text-accent transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span>@{member.twitter.split('/').pop()}</span>
                      </a>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-px bg-accent/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
              © 2026 De-MAPP. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-gray-400">
              Memory owned by users. Intelligence shared by all.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </main>
  )
}
