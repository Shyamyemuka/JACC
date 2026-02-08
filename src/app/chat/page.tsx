"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import JaccHeader from "@/components/jacc-header";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { useEffect } from "react";
import { CollegeDataProvider } from "@/context/college-data-context";

/**
 * JACC - Jedi Academy Command Center
 * Main chat interface for interacting with the academy's systems
 */
export default function Home() {
  // Load MCP server configurations
  const mcpServers = useMcpServers();

  // Ensure dark mode is enabled
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <CollegeDataProvider>
      <TamboProvider
        apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
        components={components}
        tools={tools}
        tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
        mcpServers={mcpServers}
      >
        {/* Animated Shader Background - Extended coverage for consistent flow */}
        <div className="fixed inset-0 z-0" style={{ height: '150vh', top: '-20vh' }}>
          <AnimatedShaderBackground />
        </div>

        <div className="h-screen flex flex-col relative z-10">
          {/* JACC Header */}
          <JaccHeader />

          {/* Chat Container */}
          <div className="flex-1 overflow-hidden">
            <MessageThreadFull className="w-full h-full px-4" />
          </div>
        </div>
      </TamboProvider>
    </CollegeDataProvider>
  );
}
