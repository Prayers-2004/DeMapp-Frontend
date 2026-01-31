"use client"

import { useCallback, useEffect, useRef } from "react"
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  MarkerType,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { Navbar } from "@/components/navbar"
import { AnimatedNoise } from "@/components/animated-noise"
import gsap from "gsap"

// Custom node styles
const nodeStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "4px",
  padding: "16px 24px",
  color: "hsl(var(--foreground))",
  fontSize: "12px",
  fontFamily: "var(--font-mono)",
  minWidth: "180px",
  textAlign: "center" as const,
}

const accentNodeStyle = {
  ...nodeStyle,
  border: "2px solid hsl(var(--accent))",
  background: "hsl(var(--accent) / 0.1)",
}

const initialNodes: Node[] = [
  // User Layer
  {
    id: "user",
    type: "default",
    position: { x: 400, y: 0 },
    data: { label: "👤 USER" },
    style: { ...accentNodeStyle, minWidth: "140px" },
  },
  
  // AI Agents Layer
  {
    id: "chatgpt",
    type: "default",
    position: { x: 100, y: 120 },
    data: { label: "🤖 ChatGPT" },
    style: nodeStyle,
  },
  {
    id: "claude",
    type: "default",
    position: { x: 300, y: 120 },
    data: { label: "🧠 Claude" },
    style: nodeStyle,
  },
  {
    id: "cursor",
    type: "default",
    position: { x: 500, y: 120 },
    data: { label: "💻 Cursor IDE" },
    style: nodeStyle,
  },
  {
    id: "custom-agent",
    type: "default",
    position: { x: 700, y: 120 },
    data: { label: "⚡ Custom Agent" },
    style: nodeStyle,
  },
  
  // MCP Interface Layer
  {
    id: "mcp",
    type: "default",
    position: { x: 400, y: 260 },
    data: { label: "🔌 MCP INTERFACE\nModel Context Protocol" },
    style: { ...accentNodeStyle, minWidth: "220px", whiteSpace: "pre-line" as const },
  },
  
  // De-MAPP Core
  {
    id: "demapp-core",
    type: "default",
    position: { x: 400, y: 400 },
    data: { label: "⬡ DE-MAPP CORE\nMemory Orchestration Layer" },
    style: { 
      ...accentNodeStyle, 
      minWidth: "260px", 
      whiteSpace: "pre-line" as const,
      border: "2px solid hsl(var(--accent))",
      boxShadow: "0 0 30px hsl(var(--accent) / 0.3)",
    },
  },
  
  // Core Components
  {
    id: "memory-layer",
    type: "default",
    position: { x: 100, y: 540 },
    data: { label: "💾 Memory Layer\nEncrypted Storage" },
    style: { ...nodeStyle, whiteSpace: "pre-line" as const },
  },
  {
    id: "identity-layer",
    type: "default",
    position: { x: 300, y: 540 },
    data: { label: "🔐 Identity Layer\nWallet Auth" },
    style: { ...nodeStyle, whiteSpace: "pre-line" as const },
  },
  {
    id: "index-layer",
    type: "default",
    position: { x: 500, y: 540 },
    data: { label: "📑 Index Layer\nSemantic Search" },
    style: { ...nodeStyle, whiteSpace: "pre-line" as const },
  },
  {
    id: "audit-layer",
    type: "default",
    position: { x: 700, y: 540 },
    data: { label: "📋 Audit Layer\nImmutable Logs" },
    style: { ...nodeStyle, whiteSpace: "pre-line" as const },
  },
  
  // Blockchain Layer
  {
    id: "blockchain",
    type: "default",
    position: { x: 400, y: 680 },
    data: { label: "⛓️ BLOCKCHAIN\nDecentralized Storage & Verification" },
    style: { 
      ...nodeStyle, 
      minWidth: "280px", 
      whiteSpace: "pre-line" as const,
      background: "hsl(var(--accent) / 0.05)",
      border: "1px solid hsl(var(--accent) / 0.3)",
    },
  },
]

const initialEdges: Edge[] = [
  // User to Agents
  { id: "e-user-chatgpt", source: "user", target: "chatgpt", animated: true, style: { stroke: "hsl(var(--accent) / 0.5)" } },
  { id: "e-user-claude", source: "user", target: "claude", animated: true, style: { stroke: "hsl(var(--accent) / 0.5)" } },
  { id: "e-user-cursor", source: "user", target: "cursor", animated: true, style: { stroke: "hsl(var(--accent) / 0.5)" } },
  { id: "e-user-custom", source: "user", target: "custom-agent", animated: true, style: { stroke: "hsl(var(--accent) / 0.5)" } },
  
  // Agents to MCP
  { id: "e-chatgpt-mcp", source: "chatgpt", target: "mcp", style: { stroke: "hsl(var(--muted-foreground) / 0.3)" }, markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--muted-foreground) / 0.5)" } },
  { id: "e-claude-mcp", source: "claude", target: "mcp", style: { stroke: "hsl(var(--muted-foreground) / 0.3)" }, markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--muted-foreground) / 0.5)" } },
  { id: "e-cursor-mcp", source: "cursor", target: "mcp", style: { stroke: "hsl(var(--muted-foreground) / 0.3)" }, markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--muted-foreground) / 0.5)" } },
  { id: "e-custom-mcp", source: "custom-agent", target: "mcp", style: { stroke: "hsl(var(--muted-foreground) / 0.3)" }, markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--muted-foreground) / 0.5)" } },
  
  // MCP to Core
  { id: "e-mcp-core", source: "mcp", target: "demapp-core", animated: true, style: { stroke: "hsl(var(--accent))", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--accent))" } },
  
  // Core to Components
  { id: "e-core-memory", source: "demapp-core", target: "memory-layer", style: { stroke: "hsl(var(--accent) / 0.4)" } },
  { id: "e-core-identity", source: "demapp-core", target: "identity-layer", style: { stroke: "hsl(var(--accent) / 0.4)" } },
  { id: "e-core-index", source: "demapp-core", target: "index-layer", style: { stroke: "hsl(var(--accent) / 0.4)" } },
  { id: "e-core-audit", source: "demapp-core", target: "audit-layer", style: { stroke: "hsl(var(--accent) / 0.4)" } },
  
  // Components to Blockchain
  { id: "e-memory-blockchain", source: "memory-layer", target: "blockchain", style: { stroke: "hsl(var(--muted-foreground) / 0.2)" } },
  { id: "e-identity-blockchain", source: "identity-layer", target: "blockchain", style: { stroke: "hsl(var(--muted-foreground) / 0.2)" } },
  { id: "e-index-blockchain", source: "index-layer", target: "blockchain", style: { stroke: "hsl(var(--muted-foreground) / 0.2)" } },
  { id: "e-audit-blockchain", source: "audit-layer", target: "blockchain", style: { stroke: "hsl(var(--muted-foreground) / 0.2)" } },
]

export default function HowItWorksPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <AnimatedNoise opacity={0.03} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-28 pb-8 px-6 md:px-12">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Architecture Overview
            </span>
            <h1 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
              HOW <span className="text-accent">DE-MAPP</span> WORKS
            </h1>
            <p className="mt-6 font-mono text-sm text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Explore the architecture that powers decentralized AI memory. 
              Drag to pan, scroll to zoom, and interact with the diagram.
            </p>
          </div>
        </section>

        {/* React Flow Diagram */}
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <div 
              className="border border-border/50 rounded-lg overflow-hidden"
              style={{ height: "70vh", minHeight: "600px" }}
            >
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
              >
                <Background 
                  color="hsl(var(--accent) / 0.1)" 
                  gap={20} 
                  size={1}
                />
                <Controls className="react-flow-controls" />
                <MiniMap 
                  nodeColor="hsl(var(--accent) / 0.5)"
                  maskColor="hsl(var(--background) / 0.8)"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
              </ReactFlow>
            </div>
            
            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border-2 border-accent bg-accent/10" />
                <span className="font-mono text-xs text-muted-foreground">Core Components</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border border-border bg-card" />
                <span className="font-mono text-xs text-muted-foreground">Protocol Layers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-accent" />
                <span className="font-mono text-xs text-muted-foreground">Data Flow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-accent/50 relative">
                  <div className="absolute inset-0 bg-accent/50 animate-pulse" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">Active Connection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="px-6 md:px-12 pb-24 border-t border-border/30 pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="font-[var(--font-bebas)] text-xl mb-2">Universal Memory</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Your AI context persists across ChatGPT, Claude, Cursor, and any MCP-compatible agent.
                </p>
              </div>
              <div className="p-6 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="font-[var(--font-bebas)] text-xl mb-2">User Owned</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Wallet-based authentication ensures only you control access to your memory data.
                </p>
              </div>
              <div className="p-6 border border-border/50 hover:border-accent/50 transition-colors">
                <div className="text-3xl mb-4">⛓️</div>
                <h3 className="font-[var(--font-bebas)] text-xl mb-2">Decentralized</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  Built on blockchain for immutable, verifiable, and censorship-resistant storage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 border-t border-border/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              © 2026 De-MAPP. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              Memory owned by users. Intelligence shared by all.
            </p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .react-flow__controls button {
          background: hsl(var(--card)) !important;
          border: 1px solid hsl(var(--border)) !important;
          color: hsl(var(--foreground)) !important;
        }
        .react-flow__controls button:hover {
          background: hsl(var(--accent) / 0.1) !important;
        }
        .react-flow__controls button svg {
          fill: hsl(var(--foreground)) !important;
        }
        .react-flow__minimap {
          background: hsl(var(--card)) !important;
          border: 1px solid hsl(var(--border)) !important;
        }
      `}</style>
    </main>
  )
}
