/**
 * @file jacc-header.tsx
 * @description Custom header component for JACC with Star Wars branding
 */

"use client";

import React from "react";

const JaccHeader: React.FC = () => {
    return (
        <header className="border-b border-cyan-500/30 bg-black/20 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center gap-4">
                    {/* Logo with Yoda */}
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
                    <div className="hidden md:block flex-1 text-right">
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
