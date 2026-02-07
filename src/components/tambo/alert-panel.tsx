/**
 * @file alert-panel.tsx
 * @description Alert and notification component for JACC
 * Displays alerts with severity levels, timestamps, and categories
 */

"use client";

import React from "react";
import { AlertCircle, AlertTriangle, Info, Shield, Server, Users, Target } from "lucide-react";
import type { Alert } from "@/services/mock-data";

interface AlertPanelProps {
    alerts: Alert[];
    title?: string;
    filterBySeverity?: string;
}

const AlertPanel: React.FC<AlertPanelProps> = ({
    alerts,
    title = "System Alerts",
    filterBySeverity,
}) => {
    // Handle undefined alerts array
    if (!alerts || !Array.isArray(alerts)) {
        return (
            <div className="w-full my-4">
                <div className="jacc-card-header mb-4">
                    <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                    <p className="text-sm text-gray-400 mt-1">Loading alert data...</p>
                </div>
            </div>
        );
    }

    const filteredAlerts = filterBySeverity
        ? alerts.filter((a) => a.severity === filterBySeverity)
        : alerts;

    // Sort by severity (Critical first) then by timestamp (newest first)
    const sortedAlerts = [...filteredAlerts].sort((a, b) => {
        const severityPriority = { Critical: 3, Warning: 2, Info: 1 };
        const aSeverity = severityPriority[a.severity] || 0;
        const bSeverity = severityPriority[b.severity] || 0;

        if (aSeverity !== bSeverity) {
            return bSeverity - aSeverity;
        }

        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    const getSeverityIcon = (severity: Alert["severity"]) => {
        switch (severity) {
            case "Critical":
                return <AlertCircle className="w-5 h-5" />;
            case "Warning":
                return <AlertTriangle className="w-5 h-5" />;
            case "Info":
                return <Info className="w-5 h-5" />;
            default:
                return <Info className="w-5 h-5" />;
        }
    };

    const getSeverityClass = (severity: Alert["severity"]) => {
        switch (severity) {
            case "Critical":
                return "severity-critical";
            case "Warning":
                return "severity-warning";
            case "Info":
                return "severity-info";
            default:
                return "severity-info";
        }
    };

    const getCategoryIcon = (category: Alert["category"]) => {
        switch (category) {
            case "Security":
                return <Shield className="w-4 h-4" />;
            case "System":
                return <Server className="w-4 h-4" />;
            case "Personnel":
                return <Users className="w-4 h-4" />;
            case "Mission":
                return <Target className="w-4 h-4" />;
            default:
                return <Info className="w-4 h-4" />;
        }
    };

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    };

    return (
        <div className="w-full my-4">
            <div className="jacc-card-header mb-4">
                <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
                {filterBySeverity && (
                    <p className="text-sm text-gray-400 mt-1">
                        Severity: {filterBySeverity}
                    </p>
                )}
                <p className="text-sm text-gray-400 mt-1">
                    {sortedAlerts.length} alert(s) • {sortedAlerts.filter(a => !a.isRead).length} unread
                </p>
            </div>

            <div className="space-y-3">
                {sortedAlerts.map((alert) => {
                    const isCritical = alert.severity === "Critical";

                    return (
                        <div
                            key={alert.id}
                            className={`jacc-card p-4 ${isCritical ? "border-red-500/50 animate-glow-pulse" : ""
                                } ${!alert.isRead ? "bg-card/80" : "bg-card/40"}`}
                        >
                            <div className="flex items-start gap-4">
                                {/* Severity Icon */}
                                <div
                                    className={`flex-shrink-0 p-2 rounded-lg border ${getSeverityClass(
                                        alert.severity
                                    )}`}
                                >
                                    {getSeverityIcon(alert.severity)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-base font-semibold text-foreground">
                                            {alert.title}
                                        </h3>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">
                                            {formatTimestamp(alert.timestamp)}
                                        </span>
                                    </div>

                                    {/* Message */}
                                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                                        {alert.message}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center gap-4 text-xs">
                                        <div
                                            className={`flex items-center gap-1 px-2 py-1 rounded border ${getSeverityClass(
                                                alert.severity
                                            )}`}
                                        >
                                            <span className="font-medium">{alert.severity}</span>
                                        </div>

                                        <div className="flex items-center gap-1 text-gray-400">
                                            {getCategoryIcon(alert.category)}
                                            <span>{alert.category}</span>
                                        </div>

                                        {!alert.isRead && (
                                            <div className="ml-auto">
                                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {sortedAlerts.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                    <Info className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No alerts found</p>
                    <p className="text-sm mt-1">All systems nominal</p>
                </div>
            )}
        </div>
    );
};

export default AlertPanel;
