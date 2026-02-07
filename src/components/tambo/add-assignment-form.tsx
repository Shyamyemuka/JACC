"use client";

import React, { useState } from "react";
import { useCollegeData } from "@/context/college-data-context";
import { Calendar, Tag, AlertCircle, Plus } from "lucide-react";

interface AddAssignmentFormProps {
    title?: string;
    subject?: string;
    dueDate?: string;
    priority?: "Low" | "Medium" | "High";
}

// Date conversion utilities
const convertToYYYYMMDD = (ddmmyyyy: string): string => {
    if (!ddmmyyyy) return "";
    // If already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(ddmmyyyy)) return ddmmyyyy;
    // Convert DD-MM-YYYY to YYYY-MM-DD
    const parts = ddmmyyyy.split(/[-/]/);
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return ddmmyyyy;
};

const convertToDDMMYYYY = (yyyymmdd: string): string => {
    if (!yyyymmdd) return "";
    const parts = yyyymmdd.split("-");
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return yyyymmdd;
};

const AddAssignmentForm: React.FC<AddAssignmentFormProps> = (props) => {
    const { addAssignment } = useCollegeData();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string>("");

    // Form state with pre-filled values from props
    // Store in YYYY-MM-DD internally for HTML date input
    const [formData, setFormData] = useState({
        title: props.title || "",
        subject: props.subject || "",
        dueDate: convertToYYYYMMDD(props.dueDate || ""),
        priority: props.priority || "Medium" as "Low" | "Medium" | "High",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear any previous errors

        try {
            addAssignment({
                ...formData,
                status: "Pending",
            });
            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to add assignment");
        }
    };

    if (submitted) {
        return (
            <div className="w-full max-w-2xl mx-auto p-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Plus className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Assignment Added!</h3>
                    <p className="text-gray-300">{formData.title} has been added to your assignments.</p>
                    <p className="text-sm text-gray-500 mt-2">Ask "show assignments" to see your updated list.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/30 rounded-xl p-8 shadow-2xl">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                        Add New Assignment
                    </h2>
                    <p className="text-gray-400">Fill in the details below</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm font-medium">{error}</p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Assignment Title *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g., NLP Project Report"
                            required
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            Subject *
                        </label>
                        <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g., Computational Language Processing"
                            required
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Due Date *
                        </label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                            required
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                        {formData.dueDate && (
                            <p className="mt-1 text-xs text-gray-500">
                                Format: {convertToDDMMYYYY(formData.dueDate)} (dd-mm-yyyy)
                            </p>
                        )}
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Priority
                        </label>
                        <select
                            value={formData.priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value as "Low" | "Medium" | "High" })}
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                        Add Assignment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAssignmentForm;
