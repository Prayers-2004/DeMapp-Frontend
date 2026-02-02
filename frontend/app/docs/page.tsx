"use client"

import Link from "next/link"
import { Edit, AlertCircle, Copy, ChevronRight } from "lucide-react"

// Table of contents for the right sidebar
const tableOfContents = [
  { title: "What is DeMapp?", href: "#what-is-demapp", level: 1 },
  { title: "Conceptual Overview", href: "#conceptual-overview", level: 1 },
  { title: "Deep Dive Into DeMapp Protocol", href: "#deep-dive", level: 1 },
  { title: "Intuition", href: "#intuition", level: 2 },
  { title: "Memory Layer", href: "#memory-layer", level: 2 },
  { title: "Parameters", href: "#parameters", level: 2 },
  { title: "Algorithm", href: "#algorithm", level: 2 },
  { title: "Context Resolution", href: "#context-resolution", level: 2 },
  { title: "Data Ownership", href: "#data-ownership", level: 2 },
  { title: "Finality", href: "#finality", level: 2 },
]

export default function DocsPage() {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">Introduction</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4">
          DeMapp Protocol
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Learn about the Decentralized Multi-Agent Persistent Protocol — the universal memory layer for AI.
        </p>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <span className="text-orange-400 font-medium">DeMapp</span> is the task of enabling AI agents across different platforms to share context, memories, and learned preferences. In the AI ecosystem, this means that all your conversations with ChatGPT, Claude, Cursor, Copilot, and custom agents can seamlessly access the same persistent context — owned entirely by you.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            This context sharing is achieved through a decentralized protocol, the <span className="text-white font-medium">DeMapp Protocol</span>, that ensures your data remains private, portable, and under your complete control while enabling unprecedented interoperability between AI systems.
          </p>

          {/* What is DeMapp Section */}
          <h2 id="what-is-demapp" className="text-2xl font-bold text-white mt-12 mb-6 scroll-mt-24">
            What is DeMapp?
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            DeMapp Protocol is a decentralized memory layer that is scalable, secure, and user-owned. It combines features of both traditional context management and Web3 storage mechanisms to achieve high throughput, instant context retrieval, and data sovereignty.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            For the technical whitepaper, see{" "}
            <Link href="/docs/whitepaper" className="text-orange-400 hover:text-orange-300 underline">
              here
            </Link>.
          </p>

          <h3 className="text-lg font-semibold text-white mb-4">Key Features Include:</h3>

          <ul className="space-y-3 mb-8">
            {[
              "Universal compatibility across all major AI platforms",
              "100% user-owned data with cryptographic guarantees",
              "Sub-second context retrieval from distributed storage",
              "End-to-end encryption with zero-knowledge proofs",
              "Seamless onboarding with Web2-friendly interfaces",
              "Open-source protocol with permissionless integration"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-blue-300 font-medium mb-1">Note</p>
                <p className="text-gray-400 text-sm">
                  DeMapp is currently in beta. While the core protocol is stable, some features may change as we gather feedback from early adopters.
                </p>
              </div>
            </div>
          </div>

          {/* Conceptual Overview */}
          <h2 id="conceptual-overview" className="text-2xl font-bold text-white mt-12 mb-6 scroll-mt-24">
            Conceptual Overview
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The DeMapp Protocol operates on three fundamental principles:
          </p>

          <div className="grid gap-4 mb-8">
            {[
              {
                title: "User Sovereignty",
                description: "All context and memory data is encrypted with keys only the user controls. No platform, including DeMapp infrastructure, can access your raw data."
              },
              {
                title: "Universal Interoperability",
                description: "A standardized context format that any AI agent can read and write to, enabling seamless transitions between different AI tools."
              },
              {
                title: "Decentralized Persistence",
                description: "Data is stored across a distributed network using IPFS and blockchain anchoring, ensuring availability and tamper-resistance."
              }
            ].map((principle, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <h4 className="text-white font-semibold mb-2">{principle.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <h2 id="deep-dive" className="text-2xl font-bold text-white mt-12 mb-6 scroll-mt-24">
            Deep Dive Into DeMapp Protocol
          </h2>

          <h3 id="intuition" className="text-xl font-semibold text-white mt-8 mb-4 scroll-mt-24">
            Intuition
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Consider how frustrating it is to re-explain your preferences, work context, or ongoing projects every time you switch between AI tools. DeMapp solves this by creating a persistent memory layer that follows you across all your AI interactions.
          </p>

          {/* Code Example */}
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-8">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">Example: Context Retrieval</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`import { DeMapp } from '@demapp/sdk';

// Initialize with user's wallet
const demapp = new DeMapp({
  wallet: userWallet,
  network: 'mainnet'
});

// Retrieve context for current conversation
const context = await demapp.getContext({
  scope: 'work',
  relevance: 0.8,
  maxTokens: 2000
});

// The AI agent now has access to relevant 
// context from all previous interactions
console.log(context.memories);
// => [{ topic: "React project", ...}, ...]`}
              </code>
            </pre>
          </div>

          <h3 id="memory-layer" className="text-xl font-semibold text-white mt-8 mb-4 scroll-mt-24">
            Memory Layer
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            The Memory Layer is the core component of DeMapp. It consists of:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-orange-400 font-mono text-sm mt-0.5">01</span>
              <div>
                <span className="text-white font-medium">Context Embeddings</span> — Vector representations of your conversations and preferences
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-orange-400 font-mono text-sm mt-0.5">02</span>
              <div>
                <span className="text-white font-medium">Semantic Index</span> — Fast retrieval system for finding relevant context
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-orange-400 font-mono text-sm mt-0.5">03</span>
              <div>
                <span className="text-white font-medium">Encryption Layer</span> — Client-side encryption ensuring data privacy
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-orange-400 font-mono text-sm mt-0.5">04</span>
              <div>
                <span className="text-white font-medium">Sync Protocol</span> — Real-time synchronization across devices and agents
              </div>
            </li>
          </ul>

          <h3 id="parameters" className="text-xl font-semibold text-white mt-8 mb-4 scroll-mt-24">
            Parameters
          </h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Parameter</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Default</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 font-mono text-orange-400">scope</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">"all"</td>
                  <td className="py-3 px-4 text-gray-400">Context scope (work, personal, project)</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 font-mono text-orange-400">relevance</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">0.7</td>
                  <td className="py-3 px-4 text-gray-400">Minimum similarity threshold (0-1)</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 font-mono text-orange-400">maxTokens</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">4000</td>
                  <td className="py-3 px-4 text-gray-400">Maximum context tokens to retrieve</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 font-mono text-orange-400">timeRange</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">"30d"</td>
                  <td className="py-3 px-4 text-gray-400">Time range for context retrieval</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 id="data-ownership" className="text-xl font-semibold text-white mt-8 mb-4 scroll-mt-24">
            Data Ownership
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Unlike traditional AI platforms where your conversation history is stored on company servers, DeMapp ensures true data ownership through:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Client-side encryption — data is encrypted before leaving your device",
              "Self-sovereign identity — your wallet is your identity, no accounts needed",
              "Portable data — export or delete your data at any time",
              "No vendor lock-in — switch between storage providers freely"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Warning Box */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-orange-300 font-medium mb-1">Important</p>
                <p className="text-gray-400 text-sm">
                  Your encryption keys are derived from your wallet. If you lose access to your wallet, you will lose access to your encrypted data. Always backup your wallet recovery phrase securely.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="/docs/quick-start"
                className="group block p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors"
              >
                <h4 className="text-white font-medium mb-1 group-hover:text-orange-400 transition-colors">
                  Quick Start Guide →
                </h4>
                <p className="text-sm text-gray-500">Get up and running in 5 minutes</p>
              </Link>
              <Link 
                href="/docs/protocol/architecture"
                className="group block p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors"
              >
                <h4 className="text-white font-medium mb-1 group-hover:text-orange-400 transition-colors">
                  Architecture Deep Dive →
                </h4>
                <p className="text-sm text-gray-500">Understand the technical details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Table of Contents */}
      <aside className="hidden xl:block w-64 flex-shrink-0 p-6 sticky top-[105px] h-[calc(100vh-105px)] overflow-y-auto">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gray-700" />
            On this page
          </h4>
          <nav className="space-y-1">
            {tableOfContents.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-sm py-1 transition-colors hover:text-white ${
                  item.level === 1 
                    ? "text-gray-400 font-medium" 
                    : "text-gray-500 pl-3 border-l border-gray-800"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Page Actions */}
        <div className="pt-6 border-t border-gray-800">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Page Actions</h4>
          <div className="space-y-2">
            <a 
              href="https://github.com/Prayers-2004/DeMapp-Frontend"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit on GitHub
            </a>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <AlertCircle className="w-4 h-4" />
              Report Issue
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <Copy className="w-4 h-4" />
              Copy Markdown
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
