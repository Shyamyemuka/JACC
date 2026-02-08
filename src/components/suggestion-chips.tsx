/**
 * @file suggestion-chips.tsx
 * @description Quick action suggestion chips for JACC
 */

"use client";

import React from "react";
import { Calendar, BookOpen, Clock, Bell, LayoutDashboard } from "lucide-react";

interface SuggestionChipsProps {
    onChipClick: (message: string) => void;
}

const suggestions = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        message: "Show me my college dashboard",
    },
    {
        icon: BookOpen,
        label: "Assignments",
        message: "Show me all my assignments",
    },
    {
        icon: Clock,
        label: "Exam Countdown",
        message: "When is my next exam?",
    },
    {
        icon: Calendar,
        label: "Today's Schedule",
        message: "Show me today's class schedule",
    },
    {
        icon: Bell,
        label: "Reminders",
        message: "Show me my upcoming reminders",
    },
];

const SuggestionChips: React.FC<SuggestionChipsProps> = ({ onChipClick }) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                    <button
                        key={index}
                        onClick={() => onChipClick(suggestion.message)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-card hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200 text-sm font-medium text-foreground group"
                    >
                        <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span>{suggestion.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default SuggestionChips;
