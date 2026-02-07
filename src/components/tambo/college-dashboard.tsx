"use client";

import React from "react";
import { useCollegeData } from "@/context/college-data-context";
import { getTodaySchedule } from "@/services/college-data";
import { Calendar, Clock, Bell, FileText, Target, TrendingUp, AlertCircle } from "lucide-react";

interface CollegeDashboardProps {
    title?: string;
}

const CollegeDashboard: React.FC<CollegeDashboardProps> = ({ title }) => {
    const { assignments, reminders } = useCollegeData();
    const todaySchedule = getTodaySchedule();

    // Calculate stats
    const pendingAssignments = assignments.filter(a => a.status === "Pending");
    const completedAssignments = assignments.filter(a => a.status === "Completed");
    const completionRate = assignments.length > 0
        ? Math.round((completedAssignments.length / assignments.length) * 100)
        : 0;

    // Urgent assignments (due in 2 days)
    const today = new Date();
    const twoDaysFromNow = new Date(today);
    twoDaysFromNow.setDate(today.getDate() + 2);

    const urgentAssignments = pendingAssignments.filter(a => {
        const dueDate = new Date(a.dueDate);
        return dueDate <= twoDaysFromNow && dueDate >= today;
    });

    // Upcoming reminders (next 3 days)
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3);

    const upcomingReminders = reminders.filter(r => {
        const reminderDate = new Date(r.date);
        return reminderDate <= threeDaysFromNow && reminderDate >= today;
    });

    // Get current/next class
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

    const currentOrNextClass = todaySchedule.schedule.find(entry => {
        const endTime = entry.time.split('-')[1]?.trim() || '23:59';
        return currentTimeString <= endTime;
    });

    return (
        <div className="w-full max-w-6xl mx-auto p-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {title || "Dashboard Overview"}
                </h2>
                <p className="text-gray-400">Your academic summary at a glance</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Pending Assignments */}
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-5 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between mb-3">
                        <FileText className="w-8 h-8 text-amber-400" />
                        <span className="text-2xl font-bold text-amber-400">{pendingAssignments.length}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">Pending Tasks</p>
                </div>

                {/* Classes Today */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-5 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between mb-3">
                        <Calendar className="w-8 h-8 text-cyan-400" />
                        <span className="text-2xl font-bold text-cyan-400">{todaySchedule.schedule.length}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">Classes Today</p>
                </div>

                {/* Upcoming Reminders */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-5 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between mb-3">
                        <Bell className="w-8 h-8 text-purple-400" />
                        <span className="text-2xl font-bold text-purple-400">{upcomingReminders.length}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">Upcoming Reminders</p>
                </div>

                {/* Completion Rate */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-5 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between mb-3">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                        <span className="text-2xl font-bold text-green-400">{completionRate}%</span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">Completion Rate</p>
                </div>
            </div>

            {/* Urgent Items Section */}
            {(urgentAssignments.length > 0 || upcomingReminders.length > 0 || currentOrNextClass) && (
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Urgent & Upcoming
                    </h3>

                    <div className="space-y-3">
                        {/* Urgent Assignments */}
                        {urgentAssignments.length > 0 && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-red-400 mb-2">Due Soon</h4>
                                        <div className="space-y-1">
                                            {urgentAssignments.map(assignment => (
                                                <div key={assignment.id} className="text-sm text-gray-300">
                                                    • <span className="font-medium">{assignment.title}</span>
                                                    <span className="text-gray-500 ml-2">
                                                        ({new Date(assignment.dueDate).toLocaleDateString()})
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Current/Next Class */}
                        {currentOrNextClass && (
                            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-cyan-400 mb-1">Current/Next Class</h4>
                                        <p className="text-gray-300 font-medium">{currentOrNextClass.subject}</p>
                                        <p className="text-sm text-gray-500">
                                            {currentOrNextClass.time} • {currentOrNextClass.location} • {currentOrNextClass.instructor}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Today's Reminders */}
                        {upcomingReminders.length > 0 && (
                            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <Bell className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-purple-400 mb-2">Upcoming Reminders</h4>
                                        <div className="space-y-1">
                                            {upcomingReminders.map(reminder => (
                                                <div key={reminder.id} className="text-sm text-gray-300">
                                                    • <span className="font-medium">{reminder.title}</span>
                                                    <span className="text-gray-500 ml-2">
                                                        ({new Date(reminder.date).toLocaleDateString()})
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Progress Visualization */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-200 mb-4">Assignment Progress</h3>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Completion Rate</span>
                        <span className="text-sm font-semibold text-cyan-400">{completionRate}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-500 rounded-full"
                            style={{ width: `${completionRate}%` }}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-2xl font-bold text-green-400">{completedAssignments.length}</p>
                        <p className="text-xs text-gray-400">Completed</p>
                    </div>
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-2xl font-bold text-amber-400">{pendingAssignments.length}</p>
                        <p className="text-xs text-gray-400">Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDashboard;
