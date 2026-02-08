import React from "react";
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";
import type { Exam } from "@/services/college-data";

interface ExamCountdownCardProps {
    exam: Exam;
    title?: string;
}

const ExamCountdownCard: React.FC<ExamCountdownCardProps> = ({
    exam,
    title = "Next Exam",
}) => {
    // Handle undefined exam
    if (!exam) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading exam data...</p>
                </div>
            </div>
        );
    }

    const isUrgent = (exam.daysRemaining ?? Infinity) <= 7;

    return (
        <div className="w-full my-4">
            {/* Header */}
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
            </div>

            {/* Countdown Card */}
            <div className={`jacc-card p-8 ${isUrgent ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/5 to-red-500/5' : 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5'}`}>
                {/* Subject */}
                <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                    {exam.subject}
                </h3>

                {/* Countdown Display */}
                <div className="flex flex-col items-center mb-6">
                    <div className={`relative w-40 h-40 rounded-full flex items-center justify-center ${isUrgent ? 'bg-gradient-to-br from-amber-500/20 to-red-500/20 border-4 border-amber-500/50' : 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-4 border-cyan-500/50'} shadow-lg`}>
                        <div className="text-center">
                            <div className={`text-6xl font-bold ${isUrgent ? 'text-amber-400' : 'text-cyan-400'}`}>
                                {exam.daysRemaining ?? 0}
                            </div>
                            <div className="text-sm text-gray-400 font-semibold mt-1">
                                {(exam.daysRemaining ?? 0) === 1 ? 'DAY' : 'DAYS'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Exam Details */}
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3 text-gray-300">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">
                            {new Date(exam.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-gray-300">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">{exam.time}</span>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-amber-400" />
                        <span className="font-semibold">{exam.location}</span>
                    </div>
                </div>

                {/* Urgency Message */}
                {isUrgent && (
                    <div className="mt-6 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-400" />
                        <span className="text-sm text-amber-400 font-semibold">
                            Exam approaching soon! Make sure you're prepared.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamCountdownCard;
