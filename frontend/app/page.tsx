import { HeroSection } from "@/components/hero-section"
import { HookSection } from "@/components/hook-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <HookSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <ColophonSection />
      </div>
    </main>
  )
}
