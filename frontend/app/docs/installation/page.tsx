"use client"

import Link from "next/link"
import { ChevronRight, Download, CheckCircle, Terminal, Copy } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-5xl px-6 lg:px-10 py-10">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">Installation</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>
        <p className="text-xl text-gray-400 mb-8">
          Set up DeMapp in your development environment.
        </p>

        <div className="prose prose-invert max-w-none">
          {/* System Requirements */}
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">System Requirements</h2>
          
          <ul className="space-y-2 mb-8">
            {[
              "Node.js 18.0 or higher",
              "npm, pnpm, or yarn package manager",
              "A Web3 wallet (MetaMask, WalletConnect, etc.)",
              "Modern browser with WebCrypto API support"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* Installation Methods */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Installation Methods</h2>

          {/* NPM */}
          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Using npm</h3>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Terminal</span>
              </div>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">npm install @demapp/sdk</code>
            </pre>
          </div>

          {/* PNPM */}
          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Using pnpm</h3>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Terminal</span>
              </div>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">pnpm add @demapp/sdk</code>
            </pre>
          </div>

          {/* Yarn */}
          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Using yarn</h3>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Terminal</span>
              </div>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">yarn add @demapp/sdk</code>
            </pre>
          </div>

          {/* CDN */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">CDN Usage</h2>
          <p className="text-gray-300 mb-4">
            For quick prototyping, you can use the CDN version:
          </p>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">HTML</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`<script src="https://cdn.demapp.io/sdk/v1/demapp.min.js"></script>
<script>
  const demapp = new DeMapp.Client({ network: 'mainnet' });
</script>`}
              </code>
            </pre>
          </div>

          {/* Peer Dependencies */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Peer Dependencies</h2>
          <p className="text-gray-300 mb-4">
            The SDK requires the following peer dependencies:
          </p>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">Terminal</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`# Install peer dependencies
npm install ethers@^6.0.0`}
              </code>
            </pre>
          </div>

          {/* Verify Installation */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Verify Installation</h2>
          <p className="text-gray-300 mb-4">
            Create a simple test to verify everything is working:
          </p>
          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">test.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`import { DeMapp } from '@demapp/sdk';

// Check version
console.log('DeMapp SDK version:', DeMapp.version);
// => "1.0.0"

// Verify WebCrypto support
const isSupported = await DeMapp.checkSupport();
console.log('Environment supported:', isSupported);
// => true`}
              </code>
            </pre>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mt-8">
            <h3 className="text-orange-400 font-semibold mb-3">Next Steps</h3>
            <p className="text-gray-400 mb-4">
              Now that you have the SDK installed, head to the Quick Start guide to begin integrating DeMapp into your application.
            </p>
            <Link 
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
            >
              Go to Quick Start <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-800 mt-12">
            <Link href="/docs/quick-start" className="group text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Previous</span>
              <div className="font-medium">← Quick Start</div>
            </Link>
            <Link href="/docs/core-concepts" className="group text-gray-400 hover:text-white transition-colors text-right">
              <span className="text-sm">Next</span>
              <div className="font-medium">Core Concepts →</div>
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
              { title: "System Requirements", href: "#requirements" },
              { title: "Using npm", href: "#npm" },
              { title: "Using pnpm", href: "#pnpm" },
              { title: "Using yarn", href: "#yarn" },
              { title: "CDN Usage", href: "#cdn" },
              { title: "Peer Dependencies", href: "#peer" },
              { title: "Verify Installation", href: "#verify" },
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
