"use client";

import React from "react";
import { FileText, Calendar, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { useCollegeData } from "@/context/college-data-context";
import type { Assignment } from "@/context/college-data-context";

interface AssignmentBoardProps {
    filterByStatus?: string;
    title?: string;
}

const AssignmentBoard: React.FC<AssignmentBoardProps> = ({
    filterByStatus,
    title = "Assignments",
}) => {
    // Get assignments from context
    const { assignments, completeAssignment } = useCollegeData();

    const filteredAssignments = filterByStatus
        ? assignments.filter((a) => a.status === filterByStatus)
        : assignments;

    const getStatusColor = (status: Assignment["status"]) => {
        switch (status) {
            case "Completed":
                return { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", icon: CheckCircle2 };
            case "Overdue":
                return { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", icon: AlertCircle };
            default:
                return { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: Clock };
        }
    };

    const getPriorityClass = (priority: Assignment["priority"]) => {
        switch (priority) {
            case "High":
                return "border-amber-500/50 bg-amber-500/5";
            case "Medium":
                return "border-cyan-500/30 bg-cyan-500/5";
            default:
                return "border-gray-500/20 bg-gray-500/5";
        }
    };

    return (
        <div className="w-full my-4">
            {/* Header */}
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                <p className="text-sm text-gray-400 mt-1">
                    {filteredAssignments.length} assignment{filteredAssignments.length !== 1 ? "s" : ""}
                    {filterByStatus && ` (${filterByStatus})`}
                </p>
            </div>

            {/* Assignments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAssignments.length === 0 ? (
                    <div className="col-span-full jacc-card p-8 text-center">
                        <FileText className="w-12 h-12 mx-auto mb-3 opacity-50 text-gray-400" />
                        <p className="text-gray-400">No assignments found</p>
                    </div>
                ) : (
                    filteredAssignments.map((assignment) => {
                        const statusStyle = getStatusColor(assignment.status);
                        const StatusIcon = statusStyle.icon;
                        const isCompleted = assignment.status === "Completed";

                        return (
                            <div
                                key={assignment.id}
                                className={`jacc-card p-5 border ${getPriorityClass(assignment.priority)} hover:scale-[1.02] transition-transform duration-200 ${isCompleted ? 'opacity-60' : ''
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold mb-1 ${isCompleted ? 'line-through text-gray-500' : 'text-foreground'}`}>
                                            {assignment.title}
                                        </h3>
                                        <p className="text-sm text-cyan-400">{assignment.subject}</p>
                                    </div>
                                    <FileText className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                </div>

                                {/* Due Date */}
                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                </div>

                                {/* Footer with Status, Priority, and Complete Button */}
                                <div className="flex items-center justify-between gap-2">
                                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.border} ${statusStyle.text} border`}>
                                        <StatusIcon className="w-3 h-3" />
                                        {assignment.status}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-xs text-gray-400 font-medium">
                                            {assignment.priority} Priority
                                        </div>
                                        {!isCompleted && (
                                            <button
                                                onClick={() => completeAssignment(assignment.id)}
                                                className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all duration-200"
                                                title="Mark as complete"
                                            >
                                                ✓ Complete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Summary */}
            {filteredAssignments.length > 0 && (
                <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="text-gray-400">
                                {filteredAssignments.filter(a => a.status === "Pending").length} Pending
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <span className="text-gray-400">
                                {filteredAssignments.filter(a => a.status === "Completed").length} Completed
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssignmentBoard;
