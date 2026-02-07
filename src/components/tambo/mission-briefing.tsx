/**
 * @file mission-briefing.tsx
 * @description Mission tracking component for JACC
 * Displays missions with priorities, progress, and assigned personnel
 */

"use client";

import React from "react";
import { Target, Clock, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import type { Mission } from "@/services/mock-data";

interface MissionBriefingProps {
    missions: Mission[];
    title?: string;
}

const MissionBriefing: React.FC<MissionBriefingProps> = ({
    missions,
    title = "Mission Briefing",
}) => {
    // Handle undefined missions array
    if (!missions || !Array.isArray(missions)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading mission data...</p>
                </div>
            </div>
        );
    }

    const getPriorityClass = (priority: Mission["priority"]) => {
        switch (priority) {
            case "Critical":
                return "priority-critical";
            case "High":
                return "priority-high";
            case "Medium":
                return "priority-medium";
            case "Low":
                return "priority-low";
            default:
                return "priority-medium";
        }
    };

    const getStatusIcon = (status: Mission["status"]) => {
        switch (status) {
            case "Completed":
                return <CheckCircle2 className="w-4 h-4" />;
            case "Active":
                return <Target className="w-4 h-4" />;
            case "Planning":
                return <Clock className="w-4 h-4" />;
            case "On Hold":
                return <AlertCircle className="w-4 h-4" />;
            default:
                return <Target className="w-4 h-4" />;
        }
    };

    const getProgressColor = (progress: number) => {
        if (progress >= 75) return "from-green-600 to-green-400";
        if (progress >= 50) return "from-cyan-600 to-cyan-400";
        if (progress >= 25) return "from-yellow-600 to-yellow-400";
        return "from-red-600 to-red-400";
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="w-full my-4">
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                <p className="text-sm text-gray-400 mt-1">{missions.length} missions</p>
            </div>

            <div className="space-y-4">
                {missions.map((mission) => (
                    <div key={mission.id} className="jacc-card p-5">
                        {/* Header with title and priority */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {mission.title}
                                    </h3>
                                    <div
                                        className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityClass(
                                            mission.priority
                                        )}`}
                                    >
                                        {mission.priority?.toUpperCase() || 'MEDIUM'}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {mission.description}
                                </p>
                            </div>
                        </div>

                        {/* Mission Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            {/* Status */}
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">Status:</span>
                                <div className="flex items-center gap-1 text-cyan-400">
                                    {getStatusIcon(mission.status)}
                                    <span className="font-medium">{mission.status}</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">Location:</span>
                                <span className="text-foreground font-medium">
                                    {mission.location}
                                </span>
                            </div>

                            {/* Deadline */}
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400">Deadline:</span>
                                <span className="text-foreground font-medium">
                                    {formatDate(mission.deadline)}
                                </span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between text-xs mb-2">
                                <span className="text-gray-400">Progress</span>
                                <span className="text-cyan-400 font-bold">
                                    {mission.progress}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${getProgressColor(
                                        mission.progress
                                    )} transition-all duration-300`}
                                    style={{ width: `${mission.progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Objectives */}
                        {mission.objectives.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                                    Objectives:
                                </h4>
                                <ul className="space-y-1">
                                    {mission.objectives.map((obj, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm text-gray-400 flex items-start gap-2"
                                        >
                                            <span className="text-cyan-400 mt-0.5">▸</span>
                                            <span>{obj}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Assigned Personnel */}
                        {mission.assignedPersonnel.length > 0 && (
                            <div className="pt-3 border-t border-gray-700">
                                <div className="flex items-center gap-2 text-sm">
                                    <Users className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-400">Assigned:</span>
                                    <span className="text-foreground font-medium">
                                        {mission.assignedPersonnel.join(", ")}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {missions.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                    <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No missions found</p>
                </div>
            )}
        </div>
    );
};

export default MissionBriefing;
