"use client"

import Link from "next/link"
import { ChevronRight, Copy, Layers, Shield, Zap, Globe } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/docs/protocol/architecture" className="hover:text-gray-300">Protocol</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">Architecture</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-4">Architecture Overview</h1>
        <p className="text-xl text-gray-400 mb-8">
          A deep dive into the technical architecture of the DeMapp Protocol.
        </p>

        <div className="prose prose-invert max-w-none">
          {/* Overview */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            DeMapp's architecture is designed around four core pillars: <span className="text-orange-400">decentralization</span>, <span className="text-orange-400">privacy</span>, <span className="text-orange-400">performance</span>, and <span className="text-orange-400">interoperability</span>. Each component is built to work independently while contributing to a cohesive system.
          </p>

          {/* Architecture Diagram */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
            <h3 className="text-center text-white font-semibold mb-6">System Architecture</h3>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              {/* Top Layer */}
              <div className="col-span-3 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-4">
                <span className="text-orange-400 font-medium">AI Agents Layer</span>
                <div className="flex justify-center gap-4 mt-2 text-gray-400 text-xs">
                  <span>ChatGPT</span>
                  <span>Claude</span>
                  <span>Cursor</span>
                  <span>Custom</span>
                </div>
              </div>
              
              {/* Middle Layer */}
              <div className="col-span-3 grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <span className="text-blue-400 font-medium">SDK / API Gateway</span>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <span className="text-purple-400 font-medium">Context Engine</span>
                </div>
              </div>

              {/* Core Layer */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <span className="text-green-400 font-medium">Memory Layer</span>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <span className="text-yellow-400 font-medium">Encryption</span>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <span className="text-pink-400 font-medium">Identity</span>
              </div>

              {/* Storage Layer */}
              <div className="col-span-3 bg-gray-800 border border-gray-700 rounded-lg p-4 mt-4">
                <span className="text-gray-300 font-medium">Decentralized Storage</span>
                <div className="flex justify-center gap-4 mt-2 text-gray-500 text-xs">
                  <span>IPFS</span>
                  <span>Arweave</span>
                  <span>Ceramic</span>
                  <span>Filecoin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Components */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Core Components</h2>

          <div className="grid gap-6 mb-8">
            {[
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Memory Layer",
                color: "green",
                description: "The foundational component that stores and indexes all context data. Uses vector embeddings for semantic search and retrieval.",
                features: [
                  "Vector embeddings for semantic similarity",
                  "Hierarchical context organization",
                  "Time-weighted relevance scoring",
                  "Automatic summarization and compression"
                ]
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Encryption Layer",
                color: "yellow",
                description: "Handles all cryptographic operations ensuring data privacy and user sovereignty.",
                features: [
                  "AES-256-GCM for data encryption",
                  "ECDH key exchange for sharing",
                  "Zero-knowledge proofs for verification",
                  "Hardware wallet integration"
                ]
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Context Engine",
                color: "purple",
                description: "Intelligent middleware that processes queries and returns relevant context.",
                features: [
                  "Real-time context retrieval < 100ms",
                  "Multi-agent context merging",
                  "Conflict resolution algorithms",
                  "Priority-based context ranking"
                ]
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Identity System",
                color: "pink",
                description: "Decentralized identity management using Web3 wallets and DIDs.",
                features: [
                  "Wallet-based authentication",
                  "DID (Decentralized Identifier) support",
                  "Cross-chain identity resolution",
                  "Selective disclosure capabilities"
                ]
              }
            ].map((component, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${component.color}-500/10 text-${component.color}-400`}>
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{component.title}</h3>
                    <p className="text-gray-400 mb-4">{component.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {component.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Flow */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Data Flow</h2>
          
          <p className="text-gray-300 mb-6">
            Understanding how data flows through the DeMapp system is crucial for building effective integrations:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: "1",
                title: "Context Capture",
                description: "AI agents capture conversation context and user preferences during interactions."
              },
              {
                step: "2",
                title: "Local Encryption",
                description: "Data is encrypted client-side using keys derived from the user's wallet."
              },
              {
                step: "3",
                title: "Vector Embedding",
                description: "Encrypted content is processed to generate searchable vector embeddings."
              },
              {
                step: "4",
                title: "Distributed Storage",
                description: "Encrypted data is stored across IPFS nodes with CID anchoring on-chain."
              },
              {
                step: "5",
                title: "Context Retrieval",
                description: "Queries are matched against embeddings to find relevant encrypted contexts."
              },
              {
                step: "6",
                title: "Client Decryption",
                description: "Retrieved data is decrypted locally and provided to the requesting agent."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-lg border-l-2 border-orange-500">
                <span className="text-orange-400 font-mono font-bold">{item.step}</span>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Technical Specifications</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Specification</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Encryption", "AES-256-GCM", "Military-grade encryption"],
                  ["Key Derivation", "HKDF-SHA256", "From wallet signature"],
                  ["Embedding Model", "text-embedding-3-large", "1536 dimensions"],
                  ["Query Latency", "< 100ms p95", "Global CDN distribution"],
                  ["Storage", "IPFS + Filecoin", "Redundant persistence"],
                  ["Max Context Size", "2MB per item", "Configurable"],
                  ["API Rate Limit", "1000 req/min", "Per wallet address"],
                ].map(([spec, value, notes], i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 font-medium">{spec}</td>
                    <td className="py-3 px-4 font-mono text-orange-400">{value}</td>
                    <td className="py-3 px-4 text-gray-500">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Code Example */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Example Implementation</h2>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-8">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">architecture-example.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`// Full architecture flow example
import { DeMapp, MemoryLayer, ContextEngine } from '@demapp/sdk';

async function demonstrateArchitecture() {
  // 1. Initialize with custom configuration
  const demapp = new DeMapp({
    signer: wallet,
    config: {
      memoryLayer: {
        embeddingModel: 'text-embedding-3-large',
        maxContextSize: '2MB',
        compressionEnabled: true
      },
      storage: {
        primary: 'ipfs',
        backup: 'filecoin',
        pinningService: 'pinata'
      },
      encryption: {
        algorithm: 'aes-256-gcm',
        keyRotationDays: 30
      }
    }
  });

  // 2. Store context through the pipeline
  const memory = await demapp.pipeline({
    content: "User is building a DeFi application",
    operations: [
      'encrypt',      // Encrypt with user's key
      'embed',        // Generate vector embedding
      'compress',     // Compress for storage
      'store',        // Store to IPFS
      'anchor'        // Anchor CID on-chain
    ]
  });

  // 3. Query with context engine
  const results = await demapp.contextEngine.query({
    prompt: "Help with smart contract",
    filters: {
      scope: ['coding', 'defi'],
      timeRange: '90d',
      minRelevance: 0.75
    }
  });

  return results;
}`}
              </code>
            </pre>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-800">
            <Link href="/docs/core-concepts" className="group text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Previous</span>
              <div className="font-medium">← Core Concepts</div>
            </Link>
            <Link href="/docs/protocol/memory-layer" className="group text-gray-400 hover:text-white transition-colors text-right">
              <span className="text-sm">Next</span>
              <div className="font-medium">Memory Layer →</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-64 flex-shrink-0 p-6 sticky top-[105px] h-[calc(100vh-105px)]">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gray-700" />
            On this page
          </h4>
          <nav className="space-y-1">
            {[
              { title: "Core Components", href: "#core-components" },
              { title: "Memory Layer", href: "#memory-layer" },
              { title: "Encryption Layer", href: "#encryption" },
              { title: "Context Engine", href: "#context-engine" },
              { title: "Identity System", href: "#identity" },
              { title: "Data Flow", href: "#data-flow" },
              { title: "Technical Specs", href: "#specs" },
              { title: "Example", href: "#example" },
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
