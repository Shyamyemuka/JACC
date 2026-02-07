import React from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import type { ScheduleEntry } from "@/services/college-data";

interface TimetableViewProps {
    schedule: ScheduleEntry[];
    date?: string;
    title?: string;
}

const TimetableView: React.FC<TimetableViewProps> = ({
    schedule,
    date = "Today",
    title = "Class Schedule",
}) => {
    // Handle undefined schedule array
    if (!schedule || !Array.isArray(schedule)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading schedule data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full my-4">
            {/* Header */}
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {date}
                </p>
            </div>

            {/* Timetable Grid */}
            <div className="jacc-card p-6">
                {schedule.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                        <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No classes scheduled for {date}</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {schedule.map((entry) => (
                            <div
                                key={entry.id}
                                className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                                    {/* Time */}
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-cyan-400" />
                                        <span className="font-semibold text-foreground">
                                            {entry.time}
                                        </span>
                                    </div>

                                    {/* Subject */}
                                    <div className="md:col-span-2">
                                        <h3 className="text-lg font-bold text-cyan-400 mb-1">
                                            {entry.subject}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <User className="w-3 h-3" />
                                            <span>{entry.instructor}</span>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <MapPin className="w-4 h-4 text-amber-400" />
                                        <span>{entry.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimetableView;
