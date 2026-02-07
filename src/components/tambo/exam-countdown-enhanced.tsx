"use client";

import React, { useState, useEffect } from "react";
import { getExams, type Exam } from "@/services/college-data";
import { Calendar, Clock, MapPin, BookOpen, AlertCircle, TrendingDown } from "lucide-react";

interface ExamCountdownEnhancedProps {
    title?: string;
}

const ExamCountdownEnhanced: React.FC<ExamCountdownEnhancedProps> = ({ title }) => {
    const exams = getExams();
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const calculateTimeLeft = (examDate: string) => {
        const now = currentTime;
        const exam = new Date(examDate);
        const diff = exam.getTime() - now.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return { days, hours, minutes, totalDays: days };
    };

    const getUrgencyColor = (daysLeft: number) => {
        if (daysLeft < 0) {
            return {
                gradient: "from-gray-500/20 to-gray-600/20",
                border: "border-gray-500/50",
                text: "text-gray-300",
                badge: "bg-gray-500/30 text-gray-200 border-gray-400/50",
                progress: "bg-gray-500",
                label: "Completed",
                glow: "shadow-gray-500/20"
            };
        } else if (daysLeft <= 2) {
            return {
                gradient: "from-red-500/30 to-orange-500/30",
                border: "border-red-500/70",
                text: "text-red-300",
                badge: "bg-red-500/40 text-red-100 border-red-400/70",
                progress: "bg-gradient-to-r from-red-500 to-orange-500",
                label: "🔥 URGENT",
                glow: "shadow-lg shadow-red-500/40"
            };
        } else if (daysLeft <= 7) {
            return {
                gradient: "from-amber-500/25 to-yellow-500/25",
                border: "border-amber-500/60",
                text: "text-amber-300",
                badge: "bg-amber-500/35 text-amber-100 border-amber-400/60",
                progress: "bg-gradient-to-r from-amber-500 to-yellow-500",
                label: "⚠️ Soon",
                glow: "shadow-lg shadow-amber-500/30"
            };
        } else {
            return {
                gradient: "from-green-500/25 to-emerald-500/25",
                border: "border-green-500/60",
                text: "text-green-300",
                badge: "bg-green-500/35 text-green-100 border-green-400/60",
                progress: "bg-gradient-to-r from-green-500 to-emerald-500",
                label: "✓ Upcoming",
                glow: "shadow-lg shadow-green-500/30"
            };
        }
    };

    const getProgressPercentage = (daysLeft: number, totalDays: number = 30) => {
        if (daysLeft < 0) return 100;
        const percentage = ((totalDays - daysLeft) / totalDays) * 100;
        return Math.min(Math.max(percentage, 0), 100);
    };

    // Sort exams by date
    const sortedExams = [...exams].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return (
        <div className="w-full max-w-6xl mx-auto p-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {title || "Exam Countdown"}
                </h2>
                <p className="text-gray-400">Track your upcoming exams with live countdowns</p>
            </div>

            {/* Exam Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedExams.map((exam) => {
                    const timeLeft = calculateTimeLeft(exam.date);
                    const urgency = getUrgencyColor(timeLeft.totalDays);
                    const progress = getProgressPercentage(timeLeft.totalDays);

                    return (
                        <div
                            key={exam.id}
                            className={`bg-gradient-to-br ${urgency.gradient} border-2 ${urgency.border} rounded-lg p-6 hover:scale-[1.02] transition-all duration-300 ${urgency.glow}`}
                        >
                            {/* Header with Subject and Urgency Badge */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className={`text-xl font-bold ${urgency.text} mb-1`}>
                                        {exam.subject}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(exam.date).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric'
                                        })}</span>
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-full text-sm font-bold ${urgency.badge} border-2`}>
                                    {urgency.label}
                                </div>
                            </div>

                            {/* Countdown Timer */}
                            {timeLeft.totalDays >= 0 ? (
                                <div className="mb-5">
                                    <div className="grid grid-cols-3 gap-3 mb-3">
                                        {/* Days */}
                                        <div className="text-center p-3 bg-black/20 rounded-lg border border-white/10">
                                            <div className={`text-3xl font-bold ${urgency.text} mb-1`}>
                                                {timeLeft.days}
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Days</div>
                                        </div>

                                        {/* Hours */}
                                        <div className="text-center p-3 bg-black/20 rounded-lg border border-white/10">
                                            <div className={`text-3xl font-bold ${urgency.text} mb-1`}>
                                                {timeLeft.hours}
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Hours</div>
                                        </div>

                                        {/* Minutes */}
                                        <div className="text-center p-3 bg-black/20 rounded-lg border border-white/10">
                                            <div className={`text-3xl font-bold ${urgency.text} mb-1`}>
                                                {timeLeft.minutes}
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Mins</div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="relative">
                                        <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${urgency.progress} transition-all duration-500 rounded-full`}
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-xs text-gray-500">
                                                {timeLeft.totalDays} days remaining
                                            </span>
                                            <TrendingDown className={`w-3 h-3 ${urgency.text}`} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-5 p-4 bg-black/20 rounded-lg border border-gray-500/30 text-center">
                                    <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-400 text-sm">Exam completed</p>
                                </div>
                            )}

                            {/* Exam Details */}
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <Clock className="w-4 h-4 text-cyan-400" />
                                    <span>{exam.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-cyan-400" />
                                    <span>{exam.location}</span>
                                </div>
                                {exam.syllabus && exam.syllabus.length > 0 && (
                                    <div className="flex items-start gap-2 text-gray-300 pt-2 border-t border-white/10">
                                        <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5" />
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-400 mb-1">Topics:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {exam.syllabus.map((topic, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300 font-medium">Total Exams: {exams.length}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
                            <span className="text-gray-400">Urgent (≤2 days)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                            <span className="text-gray-400">Soon (3-7 days)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                            <span className="text-gray-400">Upcoming (&gt;7 days)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamCountdownEnhanced;
