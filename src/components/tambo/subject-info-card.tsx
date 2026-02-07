"use client";

import React from "react";
import { BookOpen, User, MapPin, Code } from "lucide-react";

interface SubjectInfoCardProps {
    subject: string;
    code: string;
    faculty: string;
    location: string;
}

const SubjectInfoCard: React.FC<SubjectInfoCardProps> = ({ subject, code, faculty, location }) => {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Card */}
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50 flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-cyan-400" />
                        </div>
                    </div>

                    {/* Subject Name */}
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-3">
                        {subject}
                    </h2>

                    {/* Subject Code */}
                    <div className="flex items-center gap-2 mb-6">
                        <Code className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 font-mono text-sm">{code}</span>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-4">
                        {/* Faculty */}
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 mb-1">Faculty</p>
                                <p className="text-base text-gray-200 font-medium">{faculty}</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 mb-1">Location</p>
                                <p className="text-base text-gray-200 font-medium">{location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </div>
    );
};

export default SubjectInfoCard;
