"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import JaccHeader from "@/components/jacc-header";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { useEffect } from "react";
import { CollegeDataProvider } from "@/context/college-data-context";
import { useParams, useRouter } from "next/navigation";
import { useTamboThread } from "@tambo-ai/react";

/**
 * JACC - Jedi Academy Command Center
 * Chat interface for a specific thread
 */
export default function ChatThreadPage() {
    const params = useParams();
    const router = useRouter();
    const threadId = params.threadId as string;

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
                <ThreadInitializer threadId={threadId} />

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

/**
 * Component to initialize the thread from URL parameter
 */
function ThreadInitializer({ threadId }: { threadId: string }) {
    const { switchCurrentThread, startNewThread, thread } = useTamboThread();
    const router = useRouter();

    useEffect(() => {
        // Handle special "new" thread ID - create a new thread
        if (threadId === "new") {
            startNewThread();
            return;
        }

        // If threadId is provided and different from current thread, switch to it
        if (threadId && threadId !== thread?.id && threadId !== "new") {
            switchCurrentThread(threadId);
        }
    }, [threadId, thread?.id, switchCurrentThread, startNewThread]);

    // Redirect to the actual thread ID after creating new thread
    useEffect(() => {
        if (threadId === "new" && thread?.id) {
            router.replace(`/chat/${thread.id}`);
        }
    }, [threadId, thread?.id, router]);

    return null;
}
