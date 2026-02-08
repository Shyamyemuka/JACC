"use client";

import { useEffect } from "react";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useTamboThread } from "@tambo-ai/react";
import { TamboProvider } from "@tambo-ai/react";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";

/**
 * Redirect /chat to a new thread
 * This ensures users always have a threadId in the URL
 */
export default function ChatRedirect() {
  const mcpServers = useMcpServers();

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <RedirectToNewThread />
    </TamboProvider>
  );
}

function RedirectToNewThread() {
  const router = useRouter();
  const { thread, startNewThread } = useTamboThread();
  const [hasInitialized, setHasInitialized] = React.useState(false);
  const previousThreadIdRef = React.useRef<string | undefined>(thread?.id);

  // Create a new thread on mount
  useEffect(() => {
    if (!hasInitialized) {
      setHasInitialized(true);
      startNewThread();
    }
  }, [hasInitialized, startNewThread]);

  // Navigate when thread is created
  useEffect(() => {
    if (hasInitialized && thread?.id && thread.id !== previousThreadIdRef.current) {
      router.replace(`/chat/${thread.id}`);
    }
    previousThreadIdRef.current = thread?.id;
  }, [thread?.id, hasInitialized, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Loading chat...</p>
    </div>
  );
}
