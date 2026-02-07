/**
 * @file personnel-tracker.tsx
 * @description Personnel management component for JACC
 * Displays personnel in a responsive grid with ranks, statuses, and skill levels
 */

"use client";

import React from "react";
import { User, Award, Activity, Shield } from "lucide-react";
import type { Personnel } from "@/services/mock-data";

interface PersonnelTrackerProps {
    personnel: Personnel[];
    title?: string;
    filterByStatus?: string;
}

const PersonnelTracker: React.FC<PersonnelTrackerProps> = ({
    personnel,
    title = "Academy Personnel",
    filterByStatus,
}) => {
    // Handle undefined personnel array
    if (!personnel || !Array.isArray(personnel)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading personnel data...</p>
                </div>
            </div>
        );
    }

    const filteredPersonnel = filterByStatus
        ? personnel.filter((p) => p.status === filterByStatus)
        : personnel;

    const getRankColor = (rank: Personnel["rank"]) => {
        switch (rank) {
            case "Master":
                return "text-amber-400 border-amber-400";
            case "Knight":
                return "text-cyan-400 border-cyan-400";
            case "Padawan":
                return "text-blue-400 border-blue-400";
            case "Initiate":
                return "text-gray-400 border-gray-400";
            default:
                return "text-gray-400 border-gray-400";
        }
    };

    const getStatusClass = (status: Personnel["status"]) => {
        switch (status) {
            case "Active":
                return "status-active";
            case "Training":
                return "status-training";
            case "On Mission":
                return "status-on-mission";
            case "Resting":
                return "status-resting";
            default:
                return "status-active";
        }
    };

    const getSpecialtyIcon = (specialty: Personnel["specialty"]) => {
        switch (specialty) {
            case "Combat":
                return <Shield className="w-4 h-4" />;
            case "Healing":
                return <Activity className="w-4 h-4" />;
            case "Diplomacy":
                return <User className="w-4 h-4" />;
            case "Engineering":
            case "Research":
                return <Award className="w-4 h-4" />;
            default:
                return <User className="w-4 h-4" />;
        }
    };

    return (
        <div className="w-full my-4">
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                {filterByStatus && (
                    <p className="text-sm text-gray-400 mt-1">
                        Filter: {filterByStatus}
                    </p>
                )}
                <p className="text-sm text-gray-400 mt-1">
                    {filteredPersonnel.length} personnel
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPersonnel.map((person) => (
                    <div key={person.id} className="jacc-card p-4">
                        {/* Header with name and rank */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-1">
                                    {person.name}
                                </h3>
                                <div
                                    className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getRankColor(
                                        person.rank
                                    )}`}
                                >
                                    {person.rank}
                                </div>
                            </div>
                            <div className="text-cyan-400 ml-2">
                                {getSpecialtyIcon(person.specialty)}
                            </div>
                        </div>

                        {/* Status and Specialty */}
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Status:</span>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusClass(
                                        person.status
                                    )}`}
                                >
                                    {person.status}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Specialty:</span>
                                <span className="text-foreground font-medium">
                                    {person.specialty}
                                </span>
                            </div>
                        </div>

                        {/* Skill Level Progress Bar */}
                        <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-400">Skill Level</span>
                                <span className="text-cyan-400 font-medium">
                                    {person.skillLevel}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300"
                                    style={{ width: `${person.skillLevel}%` }}
                                />
                            </div>
                        </div>

                        {/* Current Mission */}
                        {person.currentMission && (
                            <div className="mt-3 pt-3 border-t border-gray-700">
                                <div className="flex items-center gap-2 text-xs text-gold-400">
                                    <Activity className="w-3 h-3" />
                                    <span>Assigned to: {person.currentMission}</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {filteredPersonnel.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                    <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No personnel found matching the criteria</p>
                </div>
            )}
        </div>
    );
};

export default PersonnelTracker;
