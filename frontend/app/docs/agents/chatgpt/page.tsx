"use client"

import Link from "next/link"
import { ChevronRight, Copy, CheckCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ChatGPTIntegrationPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-5xl px-6 lg:px-10 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/docs" className="hover:text-gray-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/docs/agents/chatgpt" className="hover:text-gray-300">Agents</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">ChatGPT Integration</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#10a37f] rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">ChatGPT Integration</h1>
            <p className="text-gray-400 mt-1">Connect OpenAI's ChatGPT with your DeMapp memory layer</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            Integrate DeMapp with ChatGPT to give it persistent memory of your preferences, projects, and conversation history. This guide covers both the API integration and the browser extension approach.
          </p>

          {/* Quick Setup */}
          <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Quick Setup (5 minutes)
            </h3>
            <ol className="space-y-2 text-gray-300">
              <li>1. Install the DeMapp browser extension</li>
              <li>2. Connect your Web3 wallet</li>
              <li>3. Navigate to chat.openai.com</li>
              <li>4. DeMapp automatically syncs context!</li>
            </ol>
            <a 
              href="#browser-extension" 
              className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300"
            >
              Jump to Browser Extension Guide <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Method 1: API Integration */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Method 1: API Integration</h2>
          
          <p className="text-gray-300 mb-4">
            For developers building custom applications, you can integrate DeMapp directly with the OpenAI API to inject persistent context into every conversation.
          </p>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Step 1: Install Dependencies</h3>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">Terminal</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`npm install @demapp/sdk openai ethers`}
              </code>
            </pre>
          </div>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Step 2: Create the Integration</h3>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">chatgpt-with-demapp.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`import { DeMapp } from '@demapp/sdk';
import OpenAI from 'openai';

// Initialize clients
const demapp = new DeMapp({ signer: wallet });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function chatWithMemory(userMessage: string) {
  // 1. Retrieve relevant context from DeMapp
  const context = await demapp.query({
    prompt: userMessage,
    maxResults: 5,
    relevanceThreshold: 0.7
  });

  // 2. Build system prompt with context
  const systemPrompt = \`You are a helpful assistant with memory.
  
Here's what you remember about this user:
\${context.memories.map(m => \`- \${m.content}\`).join('\\n')}

Use this context to personalize your responses.\`;

  // 3. Call ChatGPT with context
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ]
  });

  const assistantMessage = response.choices[0].message.content;

  // 4. Extract and store new learnings
  const learnings = await extractLearnings(userMessage, assistantMessage);
  for (const learning of learnings) {
    await demapp.store({
      content: learning,
      scope: 'chatgpt',
      metadata: { source: 'chatgpt', model: 'gpt-4' }
    });
  }

  return assistantMessage;
}

// Helper to extract learnable facts from conversation
async function extractLearnings(user: string, assistant: string) {
  const extraction = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [{
      role: 'system',
      content: \`Extract any facts about the user worth remembering.
      Return as JSON array of strings. Return [] if nothing notable.\`
    }, {
      role: 'user',
      content: \`User: \${user}\\nAssistant: \${assistant}\`
    }],
    response_format: { type: 'json_object' }
  });
  
  return JSON.parse(extraction.choices[0].message.content).facts || [];
}`}
              </code>
            </pre>
          </div>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">Step 3: Use in Your Application</h3>

          <div className="relative bg-gray-900 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
              <span className="text-sm text-gray-500">app.ts</span>
              <button className="p-1.5 text-gray-500 hover:text-gray-300 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`// First conversation
const response1 = await chatWithMemory(
  "I'm working on a DeFi project using Solidity"
);

// Later conversation - ChatGPT remembers!
const response2 = await chatWithMemory(
  "Can you help me with my project?"
);
// ChatGPT will know you're working on DeFi with Solidity`}
              </code>
            </pre>
          </div>

          {/* Method 2: Browser Extension */}
          <h2 id="browser-extension" className="text-2xl font-bold text-white mt-12 mb-6 scroll-mt-24">
            Method 2: Browser Extension
          </h2>

          <p className="text-gray-300 mb-6">
            The easiest way to add persistent memory to ChatGPT is through our browser extension. It works automatically with no code required.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <a 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400" fill="currentColor">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.952 6.848a12.014 12.014 0 0 0 9.229-9.006zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Chrome Extension</h4>
                <p className="text-sm text-gray-500">Download for Chrome</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
            </a>
            <a 
              href="https://addons.mozilla.org" 
              target="_blank"
              className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-orange-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-400" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.696 8.257c-.09.252-.216.504-.378.756a9.834 9.834 0 0 1-.72 1.008c-.198.252-.414.504-.63.756-.216.252-.396.504-.558.756-.126.198-.234.396-.324.594a1.386 1.386 0 0 0-.126.558c0 .252.072.468.216.648s.324.306.558.378c.378.108.774.162 1.188.162.342 0 .666-.036.972-.108a4.11 4.11 0 0 0 .828-.288c.252-.126.486-.27.702-.432.216-.162.414-.342.594-.54.09-.09.162-.09.216 0 .054.09.036.162-.054.216-.198.252-.432.468-.702.648-.27.18-.558.324-.864.432-.306.108-.612.18-.918.216-.306.036-.594.054-.864.054-.414 0-.81-.054-1.188-.162a2.46 2.46 0 0 1-.972-.504 2.296 2.296 0 0 1-.648-.864 2.744 2.744 0 0 1-.234-1.134c0-.324.054-.612.162-.864.108-.252.234-.486.378-.702a6.2 6.2 0 0 1 .504-.63c.18-.198.342-.396.486-.594.144-.198.27-.396.378-.594.108-.198.162-.414.162-.648 0-.234-.054-.45-.162-.648a1.56 1.56 0 0 0-.432-.504 2.1 2.1 0 0 0-.63-.324 2.356 2.356 0 0 0-.756-.126c-.468 0-.882.126-1.242.378-.36.252-.648.594-.864 1.026a.156.156 0 0 1-.216.054c-.09-.054-.108-.126-.054-.216.198-.414.45-.756.756-1.026.306-.27.648-.468 1.026-.594a3.726 3.726 0 0 1 1.188-.198c.342 0 .666.054.972.162.306.108.576.27.81.486.234.216.414.468.54.756.126.288.19.612.19.972 0 .288-.054.558-.162.81z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Firefox Add-on</h4>
                <p className="text-sm text-gray-500">Download for Firefox</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
            </a>
          </div>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">How It Works</h3>

          <div className="space-y-4 mb-8">
            {[
              {
                step: "1",
                title: "Automatic Context Injection",
                description: "The extension detects when you're on chat.openai.com and automatically retrieves relevant context from your DeMapp memory."
              },
              {
                step: "2",
                title: "Seamless Integration",
                description: "Context is injected into the system prompt without modifying your visible messages. ChatGPT sees your history, you see a clean interface."
              },
              {
                step: "3",
                title: "Learning on the Fly",
                description: "The extension analyzes your conversations and automatically stores notable preferences and facts to your memory layer."
              },
              {
                step: "4",
                title: "Privacy First",
                description: "All data is encrypted with your wallet keys. The extension never sends unencrypted data anywhere."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-900/30 rounded-lg border-l-2 border-green-500">
                <span className="text-green-400 font-mono font-bold">{item.step}</span>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Configuration */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Configuration Options</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Option</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Default</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["autoLearn", "true", "Automatically extract and store learnings"],
                  ["contextLimit", "2000", "Max tokens of context to inject"],
                  ["relevanceThreshold", "0.7", "Minimum similarity for context retrieval"],
                  ["scopes", '["chatgpt"]', "Which scopes to retrieve context from"],
                  ["syncInterval", "30s", "How often to sync with DeMapp network"],
                ].map(([option, defaultVal, desc], i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 font-mono text-orange-400">{option}</td>
                    <td className="py-3 px-4 font-mono text-gray-500">{defaultVal}</td>
                    <td className="py-3 px-4 text-gray-500">{desc}</td>
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
            <Link href="/docs/agents/claude" className="group text-gray-400 hover:text-white transition-colors text-right">
              <span className="text-sm">Next</span>
              <div className="font-medium">Claude Integration →</div>
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
              { title: "Quick Setup", href: "#quick-setup" },
              { title: "API Integration", href: "#api" },
              { title: "Browser Extension", href: "#browser-extension" },
              { title: "How It Works", href: "#how-it-works" },
              { title: "Configuration", href: "#configuration" },
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
