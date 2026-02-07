/**
 * @file mock-data.ts
 * @description Mock data service for JACC - College Assistant
 * Provides data for alert components
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Statistics {
    totalAssignments: number;
    completedAssignments: number;
    upcomingClasses: number;
    upcomingExams: number;
    activeReminders: number;
    activeAlerts: number;
}

export interface Alert {
    id: string;
    title: string;
    message: string;
    severity: "Info" | "Warning" | "Critical";
    timestamp: string;
    isRead: boolean;
    category: "Security" | "System" | "Personnel" | "Mission" | "Academic";
}

// ============================================================================
// MOCK DATA
// ============================================================================

const ALERT_DATA: Alert[] = [
    {
        id: "a1",
        title: "Assignment Due Soon",
        message: "Machine Learning assignment is due in 2 days. Make sure to submit before the deadline.",
        severity: "Warning",
        timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
        isRead: false,
        category: "Academic",
    },
    {
        id: "a2",
        title: "Class Schedule Update",
        message: "Tomorrow's Data Structures class has been moved to Room 301.",
        severity: "Info",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        isRead: false,
        category: "Academic",
    },
    {
        id: "a3",
        title: "Exam Reminder",
        message: "Database Management exam is scheduled for next week. Start your revision!",
        severity: "Info",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        isRead: true,
        category: "Academic",
    },
];

// ============================================================================
// DATA ACCESS FUNCTIONS
// ============================================================================

export function getStatistics(): Statistics {
    // Return college-focused statistics
    // These would typically come from the college-data context
    return {
        totalAssignments: 8,
        completedAssignments: 3,
        upcomingClasses: 5,
        upcomingExams: 2,
        activeReminders: 4,
        activeAlerts: ALERT_DATA.filter((a) => !a.isRead).length,
    };
}

export function getAlerts(filters?: { severity?: string }): Alert[] {
    let result = [...ALERT_DATA];

    if (filters?.severity) {
        result = result.filter((a) => a.severity === filters.severity);
    }

    // Sort by timestamp, newest first
    result.sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return result;
}

