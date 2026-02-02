"use client"

import Link from "next/link"
import { Copy, ChevronRight, Terminal, CheckCircle, ArrowRight } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-5xl px-6 lg:px-10 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">Quick Start</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-4">Quick Start</h1>
        <p className="text-xl text-gray-400 mb-8">
          Get DeMapp integrated with your AI workflow in under 5 minutes.
        </p>

        <div className="prose prose-invert max-w-none">
          {/* Prerequisites */}
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prerequisites</h2>
          <p className="text-gray-300 mb-4">Before you begin, make sure you have:</p>
          <ul className="space-y-2 mb-8">
            {[
              "Node.js 18+ installed",
              "A Web3 wallet (MetaMask, WalletConnect, or similar)",
              "An AI platform account (ChatGPT, Claude, etc.)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Step 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            <span className="text-orange-500 mr-2">01</span>
            Install the SDK
          </h2>
          <p className="text-gray-300 mb-4">
            Install the DeMapp SDK using your preferred package manager:
          </p>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Terminal</span>
              </div>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm">
                <span className="text-gray-500"># Using npm</span>{"\n"}
                <span className="text-green-400">npm</span> <span className="text-gray-300">install @demapp/sdk</span>{"\n\n"}
                <span className="text-gray-500"># Using pnpm</span>{"\n"}
                <span className="text-green-400">pnpm</span> <span className="text-gray-300">add @demapp/sdk</span>{"\n\n"}
                <span className="text-gray-500"># Using yarn</span>{"\n"}
                <span className="text-green-400">yarn</span> <span className="text-gray-300">add @demapp/sdk</span>
              </code>
            </pre>
          </div>

          {/* Step 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            <span className="text-orange-500 mr-2">02</span>
            Initialize DeMapp
          </h2>
          <p className="text-gray-300 mb-4">
            Create a new DeMapp instance and connect your wallet:
          </p>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">app.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`import { DeMapp } from '@demapp/sdk';
import { ethers } from 'ethers';

// Connect to user's wallet
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

// Initialize DeMapp
const demapp = new DeMapp({
  signer,
  network: 'mainnet', // or 'testnet' for development
  storage: 'ipfs',    // default distributed storage
});

// Authenticate and load existing context
await demapp.connect();
console.log('Connected:', demapp.address);`}
              </code>
            </pre>
          </div>

          {/* Step 3 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            <span className="text-orange-500 mr-2">03</span>
            Store Context
          </h2>
          <p className="text-gray-300 mb-4">
            Save conversation context to your decentralized memory:
          </p>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">store-context.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`// Store a memory/context item
const memory = await demapp.store({
  content: "User prefers TypeScript over JavaScript",
  scope: "coding",
  tags: ["preferences", "languages"],
  metadata: {
    source: "cursor",
    confidence: 0.95,
    timestamp: Date.now()
  }
});

console.log('Stored memory:', memory.id);
// => "mem_abc123xyz"`}
              </code>
            </pre>
          </div>

          {/* Step 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            <span className="text-orange-500 mr-2">04</span>
            Retrieve Context
          </h2>
          <p className="text-gray-300 mb-4">
            Query relevant context for your AI conversations:
          </p>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">retrieve-context.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`// Retrieve relevant context
const context = await demapp.query({
  prompt: "Help me write a React component",
  scope: "coding",
  maxResults: 10,
  relevanceThreshold: 0.7
});

// Use context with your AI
const systemPrompt = \`
You are a helpful assistant. Here's context about the user:
\${context.memories.map(m => m.content).join('\\n')}
\`;

// Now send to ChatGPT, Claude, etc.
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: "Help me write a React component" }
  ]
});`}
              </code>
            </pre>
          </div>

          {/* Success Banner */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
              <div>
                <h3 className="text-green-300 font-semibold mb-2">You're all set!</h3>
                <p className="text-gray-400">
                  Your AI agents can now share context through DeMapp. Every conversation, preference, and learned pattern is now owned by you and accessible across all your AI tools.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Next Steps</h2>
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {[
              {
                title: "Agent Integrations",
                description: "Connect ChatGPT, Claude, Cursor and more",
                href: "/docs/agents/chatgpt"
              },
              {
                title: "API Reference",
                description: "Complete SDK documentation",
                href: "/docs/api/sdk"
              },
              {
                title: "Storage Options",
                description: "Configure IPFS, Arweave, and more",
                href: "/docs/storage/ipfs"
              },
              {
                title: "Security Model",
                description: "Learn about encryption and privacy",
                href: "/docs/advanced/security"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group block p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors"
              >
                <h4 className="text-white font-medium mb-1 group-hover:text-orange-400 transition-colors flex items-center gap-2">
                  {item.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0 p-4 sticky top-[105px] h-[calc(100vh-105px)]">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-gray-700" />
            On this page
          </h4>
          <nav className="space-y-1">
            {[
              { title: "Prerequisites", href: "#prerequisites" },
              { title: "Install the SDK", href: "#install" },
              { title: "Initialize DeMapp", href: "#initialize" },
              { title: "Store Context", href: "#store" },
              { title: "Retrieve Context", href: "#retrieve" },
              { title: "Next Steps", href: "#next-steps" },
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
