import React from "react";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import type { StudyPlanEntry } from "@/services/college-data";

interface StudyPlanViewProps {
    plan: StudyPlanEntry[];
    topic?: string;
    days?: number;
    title?: string;
}

const StudyPlanView: React.FC<StudyPlanViewProps> = ({
    plan,
    topic = "Your Subject",
    days,
    title = "Study Plan",
}) => {
    // Handle undefined plan array
    if (!plan || !Array.isArray(plan)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading study plan...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full my-4">
            {/* Header */}
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                <p className="text-sm text-gray-400 mt-1">
                    {days ? `${days}-day` : ""} plan for {topic}
                </p>
            </div>

            {/* Study Plan Timeline */}
            <div className="jacc-card p-6">
                <div className="space-y-4">
                    {plan.map((entry, index) => (
                        <div key={entry.day} className="relative">
                            {/* Timeline connector */}
                            {index < plan.length - 1 && (
                                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />
                            )}

                            <div className="flex gap-4">
                                {/* Day Badge */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                                        <span className="text-lg font-bold text-cyan-400">
                                            {entry.day}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 jacc-card p-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-cyan-400" />
                                            {entry.topic}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-400 bg-background/50 px-2 py-1 rounded">
                                            <Clock className="w-3 h-3" />
                                            {entry.duration}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {entry.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Footer */}
                <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm font-semibold">
                            Complete this {plan.length}-day plan to master {topic}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyPlanView;
