"use client"

import { DeMappLogo, DeMappLogoInline, DeMappLogoStatic } from "@/components/demapp-logo"
import { Navbar } from "@/components/navbar"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Brand Assets
            </span>
            <h1 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight text-gray-900">
              DeMAPP LOGO SHOWCASE
            </h1>
            <p className="mt-4 font-mono text-sm text-gray-500">
              Morphing split-flap animation with orange accent color
            </p>
          </div>

          {/* Large Logo */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Large Size
            </h2>
            <div className="bg-gray-50 rounded-2xl p-12 flex items-center justify-center">
              <DeMappLogo size="lg" />
            </div>
          </section>

          {/* Medium Logo */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Medium Size (Default)
            </h2>
            <div className="bg-gray-50 rounded-2xl p-10 flex items-center justify-center">
              <DeMappLogo size="md" />
            </div>
          </section>

          {/* Small Logo */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Small Size
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
              <DeMappLogo size="sm" />
            </div>
          </section>

          {/* Static Versions */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Static Versions (No Animation)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                <DeMappLogoStatic size="lg" />
              </div>
              <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                <DeMappLogoStatic size="md" />
              </div>
              <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                <DeMappLogoStatic size="sm" />
              </div>
            </div>
          </section>

          {/* Inline Usage */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Inline Usage
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="font-mono text-sm text-gray-600 leading-relaxed text-center">
                Welcome to <DeMappLogoInline className="text-base" /> — the decentralized memory 
                orchestration protocol for AI agents. With <DeMappLogoInline className="text-base" />, 
                your AI memory is truly yours.
              </p>
            </div>
          </section>

          {/* Dark Background */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              On Dark Background
            </h2>
            <div className="bg-gray-900 rounded-2xl p-12 flex flex-col items-center justify-center gap-8">
              <DeMappLogo size="lg" />
              <p className="font-mono text-xs text-gray-400 text-center max-w-md">
                The orange glow effect becomes more prominent on dark backgrounds,
                creating a striking visual impact.
              </p>
            </div>
          </section>

          {/* Usage Code */}
          <section>
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8 text-center">
              Usage
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="font-mono text-sm text-gray-300">
{`import { DeMappLogo, DeMappLogoInline, DeMappLogoStatic } from "@/components/demapp-logo"

// Animated logo with size options
<DeMappLogo size="sm" />  // Small
<DeMappLogo size="md" />  // Medium (default)
<DeMappLogo size="lg" />  // Large

// Static version (no animation)
<DeMappLogoStatic size="md" />

// Inline version for text
<p>Welcome to <DeMappLogoInline /> protocol</p>`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
