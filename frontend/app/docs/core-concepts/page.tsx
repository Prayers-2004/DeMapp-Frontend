"use client"

import Link from "next/link"
import { ChevronRight, Lightbulb, Database, Key, Share2, Layers } from "lucide-react"

export default function CoreConceptsPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-5xl px-6 lg:px-10 py-10">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">Core Concepts</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-4">Core Concepts</h1>
        <p className="text-xl text-gray-400 mb-8">
          Understand the fundamental concepts behind DeMapp Protocol.
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Before diving into implementation, it's important to understand the core concepts that make DeMapp work. This page covers the foundational ideas that power the decentralized memory layer.
          </p>

          {/* Concept 1: Memory */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-500/10">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Memories</h2>
                <p className="text-gray-400 mb-4">
                  A <span className="text-white font-medium">Memory</span> is the atomic unit of context in DeMapp. It represents a piece of information about you, your preferences, or your work that AI agents can use to provide better assistance.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <code className="text-gray-300">
{`// Example memory object
{
  id: "mem_abc123",
  content: "User prefers TypeScript over JavaScript",
  scope: "coding",
  tags: ["preferences", "languages"],
  embedding: [...], // Vector representation
  createdAt: "2026-02-02T10:00:00Z"
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Concept 2: Scopes */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Layers className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Scopes</h2>
                <p className="text-gray-400 mb-4">
                  <span className="text-white font-medium">Scopes</span> help organize your memories into logical categories. This allows for targeted context retrieval — when you're coding, you get coding-related context; when you're writing, you get writing-related context.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { scope: "work", desc: "Professional projects and tasks" },
                    { scope: "personal", desc: "Personal preferences and info" },
                    { scope: "coding", desc: "Development-related context" },
                    { scope: "writing", desc: "Writing style and preferences" },
                  ].map((s) => (
                    <div key={s.scope} className="bg-gray-900 rounded-lg p-3">
                      <span className="text-orange-400 font-mono text-sm">{s.scope}</span>
                      <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Concept 3: Context */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Context Retrieval</h2>
                <p className="text-gray-400 mb-4">
                  <span className="text-white font-medium">Context Retrieval</span> is the process of finding relevant memories based on a query. DeMapp uses semantic search powered by vector embeddings to find the most relevant context for any conversation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-300">Query: "Help me with my React project"</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm pl-6">
                    <span className="text-gray-500">→</span>
                    <span className="text-gray-400">Retrieves: coding preferences, React experience, project history</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Concept 4: Encryption */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <Key className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Encryption & Ownership</h2>
                <p className="text-gray-400 mb-4">
                  All memories are encrypted client-side using keys derived from your Web3 wallet. This means:
                </p>
                <ul className="space-y-2">
                  {[
                    "Only you can decrypt your memories",
                    "No server (including DeMapp) can read your data",
                    "Your wallet IS your identity — no accounts needed",
                    "Data is portable — export anytime"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Concept 5: Sharing */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-pink-500/10">
                <Share2 className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Context Sharing</h2>
                <p className="text-gray-400 mb-4">
                  DeMapp enables seamless context sharing between different AI platforms:
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-gray-400">ChatGPT</span>
                    <span className="text-gray-600">↔</span>
                    <span className="text-orange-400 font-medium">DeMapp</span>
                    <span className="text-gray-600">↔</span>
                    <span className="text-gray-400">Claude</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Cursor</span>
                    <span className="text-gray-600">↔</span>
                    <span className="text-orange-400 font-medium">DeMapp</span>
                    <span className="text-gray-600">↔</span>
                    <span className="text-gray-400">Custom</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-3">
                  Learn something in ChatGPT? It's instantly available in Claude, Cursor, and any other connected agent.
                </p>
              </div>
            </div>
          </div>

          {/* Key Terms */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Glossary</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Term</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Definition</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Memory", "A single unit of stored context (preference, fact, or learned information)"],
                  ["Scope", "Category for organizing memories (work, personal, coding, etc.)"],
                  ["Embedding", "Vector representation of text for semantic search"],
                  ["Context", "Collection of relevant memories retrieved for a query"],
                  ["Agent", "Any AI system that can read/write to DeMapp (ChatGPT, Claude, etc.)"],
                  ["Wallet", "Web3 wallet used for authentication and encryption key derivation"],
                  ["CID", "Content Identifier — unique hash for content stored on IPFS"],
                ].map(([term, def], i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 font-mono text-orange-400">{term}</td>
                    <td className="py-3 px-4 text-gray-400">{def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-800">
            <Link href="/docs/installation" className="group text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Previous</span>
              <div className="font-medium">← Installation</div>
            </Link>
            <Link href="/docs/protocol/architecture" className="group text-gray-400 hover:text-white transition-colors text-right">
              <span className="text-sm">Next</span>
              <div className="font-medium">Architecture →</div>
            </Link>
          </div>
        </div>
      </div>

      <aside className="hidden lg:block w-56 flex-shrink-0 p-4 sticky top-[105px] h-[calc(100vh-105px)]">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gray-700" />
            On this page
          </h4>
          <nav className="space-y-1">
            {[
              { title: "Memories", href: "#memories" },
              { title: "Scopes", href: "#scopes" },
              { title: "Context Retrieval", href: "#context" },
              { title: "Encryption & Ownership", href: "#encryption" },
              { title: "Context Sharing", href: "#sharing" },
              { title: "Glossary", href: "#glossary" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm py-1 text-gray-400 hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}
