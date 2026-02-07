"use client";

import React from "react";
import { Clock, MapPin, User } from "lucide-react";

interface ScheduleEntry {
    id: string;
    time: string;
    subject: string;
    instructor: string;
    location: string;
    day: string;
}

interface TodayScheduleViewProps {
    day: string;
    schedule: ScheduleEntry[];
    title?: string;
}

const TodayScheduleView: React.FC<TodayScheduleViewProps> = ({ day, schedule, title }) => {
    // Get current time to highlight current/upcoming class
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // minutes since midnight

    const parseTime = (timeStr: string): number => {
        // Parse "09:15-10:05" to get start time in minutes
        const match = timeStr.match(/(\d{1,2}):(\d{2})/);
        if (!match) return 0;
        return parseInt(match[1]) * 60 + parseInt(match[2]);
    };

    const findCurrentClass = () => {
        for (let i = 0; i < schedule.length; i++) {
            const entry = schedule[i];
            const startTime = parseTime(entry.time);
            const endMatch = entry.time.match(/-(\d{1,2}):(\d{2})/);
            const endTime = endMatch ? parseInt(endMatch[1]) * 60 + parseInt(endMatch[2]) : startTime + 60;

            if (currentTime >= startTime && currentTime < endTime) {
                return i; // Current class
            } else if (currentTime < startTime) {
                return i; // Next upcoming class
            }
        }
        return -1;
    };

    const currentClassIndex = findCurrentClass();

    if (schedule.length === 0) {
        return (
            <div className="w-full max-w-3xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-500/30">
                    <Clock className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
                    <p className="text-xl text-gray-300">No classes scheduled for {day}</p>
                    <p className="text-sm text-gray-500 mt-2">Enjoy your day off! 🎉</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {title || `Today's Schedule`}
                </h2>
                <p className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {day} • {schedule.length} {schedule.length === 1 ? 'class' : 'classes'}
                </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
                {schedule.map((entry, index) => {
                    const isCurrent = index === currentClassIndex;
                    const isLunch = entry.subject === "LUNCH";

                    return (
                        <div
                            key={entry.id}
                            className={`relative group animate-in fade-in slide-in-from-left-4 duration-500`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Timeline connector */}
                            {index < schedule.length - 1 && (
                                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                            )}

                            {/* Card */}
                            <div
                                className={`relative flex gap-4 p-5 rounded-lg border transition-all duration-300 ${isCurrent
                                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                                        : isLunch
                                            ? 'bg-slate-800/30 border-slate-600/50'
                                            : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 hover:shadow-md'
                                    }`}
                            >
                                {/* Time Badge */}
                                <div className={`flex-shrink-0 ${isCurrent ? 'animate-pulse' : ''}`}>
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${isCurrent
                                                ? 'bg-cyan-500 text-black'
                                                : isLunch
                                                    ? 'bg-slate-700 text-gray-400'
                                                    : 'bg-slate-700 text-cyan-400'
                                            }`}
                                    >
                                        <Clock className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-lg font-semibold truncate ${isCurrent ? 'text-cyan-300' : isLunch ? 'text-gray-400' : 'text-gray-200'
                                                }`}>
                                                {entry.subject}
                                            </h3>
                                            <p className="text-sm text-gray-500">{entry.time}</p>
                                        </div>
                                        {isCurrent && (
                                            <span className="px-3 py-1 text-xs font-semibold bg-cyan-500 text-black rounded-full animate-pulse">
                                                NOW
                                            </span>
                                        )}
                                    </div>

                                    {!isLunch && (
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                            <div className="flex items-center gap-1.5">
                                                <User className="w-4 h-4" />
                                                <span>{entry.instructor}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" />
                                                <span>{entry.location}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodayScheduleView;
