/**
 * @file jacc-header.tsx
 * @description Custom header component for JACC with Star Wars branding
 */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const JaccHeader: React.FC = () => {
    const router = useRouter();
    return (
        <header className="border-b border-cyan-500/30 bg-black/20 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-cyan-500/10 relative">
            {/* Back Button - Absolute Left Edge */}
            <button
                onClick={() => router.back()}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group z-10"
                aria-label="Go back"
            >
                <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </button>

            <div className="px-4 py-4 pl-20">
                <div className="flex items-center gap-3">
                    {/* Logo with Yoda - Left aligned with minimal spacing from back button */}
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            {/* Assistant Avatar as Logo */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 border-2 border-cyan-400/50 flex items-center justify-center hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 overflow-hidden">
                                <img
                                    src="/avatars/assistant-avatar.png"
                                    alt="JACC Assistant"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to emoji if image not found
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = '<span class="text-3xl filter drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]">🧙</span>';
                                    }}
                                />
                            </div>
                            <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent leading-none tracking-wider drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                J.A.C.C
                            </h1>
                            <p className="text-xs text-gray-400 leading-none mt-1.5 tracking-wide font-medium" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>
                                <span className="text-cyan-400/80">J</span>EDI <span className="text-cyan-400/80">A</span>CADEMY <span className="text-cyan-400/80">C</span>OMMAND <span className="text-cyan-400/80">C</span>ENTER
                            </p>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="hidden md:block absolute right-4">
                        <p className="text-sm text-cyan-300/70 italic font-light tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                            "May the Force be with you"
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default JaccHeader;
