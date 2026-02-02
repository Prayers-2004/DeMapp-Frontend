"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Sun, 
  Moon,
  Menu,
  X,
  ExternalLink
} from "lucide-react"

// Sidebar navigation structure
const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Core Concepts", href: "/docs/core-concepts" },
    ]
  },
  {
    title: "Protocol",
    items: [
      { title: "Architecture Overview", href: "/docs/protocol/architecture" },
      { title: "Memory Layer", href: "/docs/protocol/memory-layer" },
      { title: "Context Sharing", href: "/docs/protocol/context-sharing" },
      { title: "Agent Integration", href: "/docs/protocol/agent-integration" },
    ]
  },
  {
    title: "APIs",
    collapsible: true,
    items: [
      { title: "REST API", href: "/docs/api/rest" },
      { title: "WebSocket API", href: "/docs/api/websocket" },
      { title: "SDK Reference", href: "/docs/api/sdk" },
      { title: "Authentication", href: "/docs/api/authentication" },
    ]
  },
  {
    title: "Agents",
    items: [
      { title: "ChatGPT Integration", href: "/docs/agents/chatgpt" },
      { title: "Claude Integration", href: "/docs/agents/claude" },
      { title: "Cursor Integration", href: "/docs/agents/cursor" },
      { title: "Custom Agents", href: "/docs/agents/custom" },
    ]
  },
  {
    title: "Storage",
    items: [
      { title: "Data Ownership", href: "/docs/storage/ownership" },
      { title: "Encryption", href: "/docs/storage/encryption" },
      { title: "IPFS Integration", href: "/docs/storage/ipfs" },
      { title: "Backup & Recovery", href: "/docs/storage/backup" },
    ]
  },
  {
    title: "Advanced",
    items: [
      { title: "Security Model", href: "/docs/advanced/security" },
      { title: "Performance", href: "/docs/advanced/performance" },
      { title: "Scalability", href: "/docs/advanced/scalability" },
      { title: "Governance", href: "/docs/advanced/governance" },
    ]
  },
]

const topNav = [
  { title: "Academy", href: "/docs/academy" },
  { title: "Blog", href: "/blog" },
  { title: "Community", href: "/community" },
  { title: "Documentation", href: "/docs", active: true },
  { title: "Explorer", href: "/explorer" },
  { title: "GitHub", href: "https://github.com/Prayers-2004/DeMapp-Frontend", external: true },
]

const secondaryNav = [
  { 
    title: "Protocol", 
    href: "/docs/protocol/architecture",
    dropdown: [
      { title: "Architecture", href: "/docs/protocol/architecture" },
      { title: "Memory Layer", href: "/docs/protocol/memory-layer" },
      { title: "Context Sharing", href: "/docs/protocol/context-sharing" },
    ]
  },
  { 
    title: "Agents", 
    href: "/docs/agents/chatgpt",
    dropdown: [
      { title: "ChatGPT", href: "/docs/agents/chatgpt" },
      { title: "Claude", href: "/docs/agents/claude" },
      { title: "Cursor", href: "/docs/agents/cursor" },
    ]
  },
  { 
    title: "APIs", 
    href: "/docs/api/rest",
    dropdown: [
      { title: "REST API", href: "/docs/api/rest" },
      { title: "WebSocket", href: "/docs/api/websocket" },
      { title: "SDK", href: "/docs/api/sdk" },
    ]
  },
  { 
    title: "Tools", 
    href: "/docs/tools",
    dropdown: [
      { title: "CLI", href: "/docs/tools/cli" },
      { title: "Dashboard", href: "/docs/tools/dashboard" },
      { title: "Extensions", href: "/docs/tools/extensions" },
    ]
  },
]

interface SidebarSectionProps {
  section: typeof sidebarNav[0]
  pathname: string
}

function SidebarSection({ section, pathname }: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(true)
  const hasActiveItem = section.items.some(item => pathname === item.href)

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-2 group"
      >
        <span className={cn(
          "text-sm font-semibold uppercase tracking-wider",
          hasActiveItem ? "text-white" : "text-gray-400"
        )}>
          {section.title}
        </span>
        {section.collapsible && (
          <ChevronDown className={cn(
            "w-4 h-4 text-gray-500 transition-transform",
            !isOpen && "-rotate-90"
          )} />
        )}
      </button>
      {isOpen && (
        <ul className="space-y-1 border-l border-gray-800 ml-1">
          {section.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block pl-4 py-1.5 text-sm transition-colors border-l -ml-px",
                  pathname === item.href
                    ? "text-orange-400 border-orange-500 bg-orange-500/5"
                    : "text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-600"
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0d0d0d]/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 lg:px-6 h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-lg text-white">DeMapp Docs</span>
            </Link>

            {/* Desktop Top Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {topNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className={cn(
                    "px-3 py-2 text-sm rounded-lg transition-colors flex items-center gap-1",
                    item.active 
                      ? "bg-gray-800 text-white" 
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  )}
                >
                  {item.title}
                  {item.external && <ExternalLink className="w-3 h-3" />}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400 hover:border-gray-600 transition-colors min-w-[200px]">
              <Search className="w-4 h-4" />
              <span>Search</span>
              <kbd className="ml-auto text-xs bg-gray-700 px-1.5 py-0.5 rounded">Ctrl K</kbd>
            </button>

            {/* Theme toggle */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Sun className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden lg:flex items-center gap-1 px-6 py-2 border-t border-gray-800/50">
          {secondaryNav.map((item) => (
            <div 
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors">
                {item.title}
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === item.title && item.dropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-1 z-50">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.href}
                      href={dropItem.href}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      {dropItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className={cn(
          "fixed lg:sticky top-[105px] left-0 z-40 w-64 h-[calc(100vh-105px)] overflow-y-auto border-r border-gray-800 bg-[#0d0d0d] p-4 transition-transform lg:translate-x-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <nav>
            {sidebarNav.map((section) => (
              <SidebarSection 
                key={section.title} 
                section={section} 
                pathname={pathname} 
              />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
