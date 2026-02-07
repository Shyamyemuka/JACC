"use client";

import React from "react";
import { useCollegeData } from "@/context/college-data-context";
import { Bell, Calendar, Trash2, Plus } from "lucide-react";

interface ReminderBoardProps {
    title?: string;
    newReminder?: {
        title: string;
        date: string;
        note?: string;
    };
}

const ReminderBoard: React.FC<ReminderBoardProps> = ({ title, newReminder }) => {
    const { reminders, addReminder, deleteReminder } = useCollegeData();
    const [error, setError] = React.useState<string>("");

    // Auto-add reminder if passed as prop
    React.useEffect(() => {
        if (newReminder) {
            try {
                addReminder(newReminder);
                setError("");
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to add reminder");
            }
        }
    }, [newReminder?.title]); // Only run when title changes

    const sortedReminders = [...reminders].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    if (reminders.length === 0) {
        return (
            <div className="w-full max-w-3xl mx-auto p-6 animate-in fade-in duration-500">
                <div className="text-center p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-500/30">
                    <Bell className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
                    <p className="text-xl text-gray-300">No reminders yet</p>
                    <p className="text-sm text-gray-500 mt-2">
                        Try: "Remind me to submit project tomorrow"
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {title || "Your Reminders"}
                </h2>
                <p className="text-gray-400 flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    {reminders.length} {reminders.length === 1 ? 'reminder' : 'reminders'}
                </p>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm font-medium">{error}</p>
                    </div>
                )}
            </div>

            {/* Reminders Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {sortedReminders.map((reminder, index) => {
                    const reminderDate = new Date(reminder.date);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const isToday = reminderDate.toDateString() === today.toDateString();
                    const isPast = reminderDate < today;

                    return (
                        <div
                            key={reminder.id}
                            className={`group p-5 rounded-lg border transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-left-4 ${isToday
                                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400/50 shadow-lg shadow-yellow-500/20'
                                : isPast
                                    ? 'bg-slate-800/30 border-slate-600/50 opacity-60'
                                    : 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50'
                                }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isToday ? 'bg-yellow-500/20' : 'bg-cyan-500/10'
                                        }`}>
                                        <Bell className={`w-5 h-5 ${isToday ? 'text-yellow-400' : 'text-cyan-400'}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-200 mb-1 break-words">
                                            {reminder.title}
                                        </h3>
                                        {isToday && (
                                            <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-yellow-500 text-black rounded-full">
                                                TODAY
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => deleteReminder(reminder.id)}
                                    className="opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-200"
                                    aria-label="Delete reminder"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(reminder.date).toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric'
                                })}</span>
                            </div>

                            {/* Note */}
                            {reminder.note && (
                                <p className="text-sm text-gray-400 mt-2 border-t border-slate-700/50 pt-2">
                                    {reminder.note}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Add hint */}
            <div className="mt-6 p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Plus className="w-4 h-4 text-cyan-400" />
                    <span>
                        To add a reminder, try: <span className="text-cyan-400 font-mono">"Remind me to X on [date]"</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReminderBoard;
