"use client"

import Link from "next/link"
import { ChevronRight, Copy, AlertCircle } from "lucide-react"

export default function RestAPIPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-5xl px-6 lg:px-10 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/docs/api/rest" className="hover:text-gray-300">APIs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">REST API</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-4">REST API Reference</h1>
        <p className="text-xl text-gray-400 mb-8">
          Complete reference for the DeMapp REST API endpoints.
        </p>

        <div className="prose prose-invert max-w-none">
          {/* Base URL */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-8">
            <span className="text-gray-500 text-sm">Base URL</span>
            <code className="block mt-1 text-orange-400 font-mono">https://api.demapp.io/v1</code>
          </div>

          {/* Authentication */}
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Authentication</h2>
          <p className="text-gray-300 mb-4">
            All API requests require authentication using a signed message from your Web3 wallet. Include the signature in the Authorization header:
          </p>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">Headers</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`Authorization: Bearer <wallet_signature>
X-Wallet-Address: 0x...
Content-Type: application/json`}
              </code>
            </pre>
          </div>

          {/* Endpoints */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Endpoints</h2>

          {/* POST /context */}
          <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded">POST</span>
              <code className="text-white font-mono">/context</code>
            </div>
            <div className="p-4">
              <p className="text-gray-400 mb-4">Store a new context/memory item.</p>
              
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Request Body</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-4">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "content": "string",        // Required: The context content
  "scope": "string",          // Optional: work, personal, coding
  "tags": ["string"],         // Optional: Array of tags
  "metadata": {               // Optional: Additional metadata
    "source": "string",
    "confidence": "number"
  }
}`}
                  </code>
                </pre>
              </div>

              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "id": "mem_abc123xyz",
  "content": "...",
  "createdAt": "2026-02-02T10:00:00Z",
  "ipfsCid": "Qm...",
  "status": "stored"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* GET /context */}
          <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-mono rounded">GET</span>
              <code className="text-white font-mono">/context</code>
            </div>
            <div className="p-4">
              <p className="text-gray-400 mb-4">Retrieve stored context items with optional filtering.</p>
              
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Query Parameters</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-2 px-3 text-gray-400">Parameter</th>
                      <th className="text-left py-2 px-3 text-gray-400">Type</th>
                      <th className="text-left py-2 px-3 text-gray-400">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-3 font-mono text-orange-400">scope</td>
                      <td className="py-2 px-3">string</td>
                      <td className="py-2 px-3 text-gray-500">Filter by scope</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-3 font-mono text-orange-400">tags</td>
                      <td className="py-2 px-3">string[]</td>
                      <td className="py-2 px-3 text-gray-500">Filter by tags (comma-separated)</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-3 font-mono text-orange-400">limit</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3 text-gray-500">Max results (default: 20, max: 100)</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-3 font-mono text-orange-400">offset</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3 text-gray-500">Pagination offset</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "items": [
    {
      "id": "mem_abc123xyz",
      "content": "...",
      "scope": "coding",
      "tags": ["typescript"],
      "createdAt": "2026-02-02T10:00:00Z"
    }
  ],
  "total": 42,
  "hasMore": true
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* POST /query */}
          <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded">POST</span>
              <code className="text-white font-mono">/query</code>
            </div>
            <div className="p-4">
              <p className="text-gray-400 mb-4">Semantic search for relevant context based on a natural language query.</p>
              
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Request Body</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-4">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "prompt": "string",         // Required: Natural language query
  "scope": "string",          // Optional: Filter by scope
  "maxResults": "number",     // Optional: Max results (default: 10)
  "relevanceThreshold": 0.7,  // Optional: Min similarity (0-1)
  "timeRange": "30d"          // Optional: Time range filter
}`}
                  </code>
                </pre>
              </div>

              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "memories": [
    {
      "id": "mem_abc123xyz",
      "content": "User prefers TypeScript",
      "relevance": 0.92,
      "scope": "coding"
    }
  ],
  "queryTime": 45,  // ms
  "totalMatches": 3
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* DELETE /context/:id */}
          <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
              <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-mono rounded">DELETE</span>
              <code className="text-white font-mono">/context/:id</code>
            </div>
            <div className="p-4">
              <p className="text-gray-400 mb-4">Delete a specific context item by ID.</p>
              
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response</h4>
              <div className="relative bg-gray-900 rounded-lg border border-gray-800">
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm text-gray-300">
{`{
  "success": true,
  "deletedId": "mem_abc123xyz"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Rate Limits */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Rate Limits</h2>
          
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-orange-300 font-medium mb-1">Rate Limiting</p>
                <p className="text-gray-400 text-sm">
                  API requests are limited to 1000 requests per minute per wallet address. Exceeding this limit will result in a 429 Too Many Requests response.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Tier</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Requests/min</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Storage</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4">Free</td>
                  <td className="py-3 px-4 font-mono text-orange-400">100</td>
                  <td className="py-3 px-4">100 MB</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4">Pro</td>
                  <td className="py-3 px-4 font-mono text-orange-400">1,000</td>
                  <td className="py-3 px-4">10 GB</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4">Enterprise</td>
                  <td className="py-3 px-4 font-mono text-orange-400">Unlimited</td>
                  <td className="py-3 px-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Error Codes */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Error Codes</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Code</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Message</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["400", "Bad Request", "Invalid request parameters"],
                  ["401", "Unauthorized", "Missing or invalid authentication"],
                  ["403", "Forbidden", "Access denied to resource"],
                  ["404", "Not Found", "Resource does not exist"],
                  ["429", "Too Many Requests", "Rate limit exceeded"],
                  ["500", "Internal Error", "Server error, please retry"],
                ].map(([code, message, description], i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 font-mono text-red-400">{code}</td>
                    <td className="py-3 px-4">{message}</td>
                    <td className="py-3 px-4 text-gray-500">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-800">
            <Link href="/docs/protocol/agent-integration" className="group text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Previous</span>
              <div className="font-medium">← Agent Integration</div>
            </Link>
            <Link href="/docs/api/websocket" className="group text-gray-400 hover:text-white transition-colors text-right">
              <span className="text-sm">Next</span>
              <div className="font-medium">WebSocket API →</div>
            </Link>
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
              { title: "Authentication", href: "#auth" },
              { title: "POST /context", href: "#post-context" },
              { title: "GET /context", href: "#get-context" },
              { title: "POST /query", href: "#post-query" },
              { title: "DELETE /context/:id", href: "#delete" },
              { title: "Rate Limits", href: "#rate-limits" },
              { title: "Error Codes", href: "#errors" },
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
