/**
 * @file schemas.ts
 * @description Zod schemas for JACC component props and tool outputs
 */

import { z } from "zod";

// ============================================================================
// PERSONNEL SCHEMAS
// ============================================================================

export const personnelSchema = z.object({
    id: z.string(),
    name: z.string(),
    rank: z.enum(["Initiate", "Padawan", "Knight", "Master"]),
    status: z.enum(["Active", "Training", "On Mission", "Resting"]),
    specialty: z.enum(["Combat", "Healing", "Diplomacy", "Engineering", "Research"]),
    skillLevel: z.number().min(1).max(100),
    joinDate: z.string(),
    currentMission: z.string().nullable(),
});

export const personnelTrackerSchema = z.object({
    personnel: z.array(personnelSchema),
    title: z.string().optional(),
    filterByStatus: z.string().optional(),
});

// ============================================================================
// MISSION SCHEMAS
// ============================================================================

export const missionSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]),
    status: z.enum(["Planning", "Active", "Completed", "On Hold"]),
    assignedPersonnel: z.array(z.string()),
    startDate: z.string(),
    deadline: z.string(),
    location: z.string(),
    objectives: z.array(z.string()),
    progress: z.number().min(0).max(100),
});

export const missionBriefingSchema = z.object({
    missions: z.array(missionSchema),
    title: z.string().optional(),
});

// ============================================================================
// RESOURCE SCHEMAS
// ============================================================================

export const resourceSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(["Equipment", "Supplies", "Vehicles", "Technology"]),
    quantity: z.number(),
    maxQuantity: z.number(),
    status: z.enum(["Available", "Low Stock", "Out of Stock", "Reserved"]),
    location: z.string(),
});

export const resourceInventorySchema = z.object({
    resources: z.array(resourceSchema),
    title: z.string().optional(),
    filterByCategory: z.string().optional(),
});

// ============================================================================
// STATISTICS SCHEMAS
// ============================================================================

export const statisticsSchema = z.object({
    totalPersonnel: z.number(),
    activePersonnel: z.number(),
    totalMissions: z.number(),
    activeMissions: z.number(),
    completedMissions: z.number(),
    resourceUtilization: z.number(),
    trainingSessionsToday: z.number(),
    activeAlerts: z.number(),
});

export const statsDashboardSchema = z.object({
    stats: statisticsSchema,
    title: z.string().optional(),
});

// ============================================================================
// ALERT SCHEMAS
// ============================================================================

export const alertSchema = z.object({
    id: z.string(),
    title: z.string(),
    message: z.string(),
    severity: z.enum(["Info", "Warning", "Critical"]),
    timestamp: z.string(),
    isRead: z.boolean(),
    category: z.enum(["Security", "System", "Personnel", "Mission"]),
});

export const alertPanelSchema = z.object({
    alerts: z.array(alertSchema),
    title: z.string().optional(),
    filterBySeverity: z.string().optional(),
});

// ============================================================================
// TRAINING SCHEMAS
// ============================================================================

export const trainingSessionSchema = z.object({
    id: z.string(),
    title: z.string(),
    instructor: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    location: z.string(),
    type: z.enum(["Combat", "Meditation", "Diplomacy", "Technical"]),
    participants: z.number(),
    maxParticipants: z.number(),
});

export const trainingScheduleSchema = z.object({
    sessions: z.array(trainingSessionSchema),
    title: z.string().optional(),
    date: z.string().optional(),
});

// ============================================================================
// COLLEGE ASSISTANT SCHEMAS
// ============================================================================

// Timetable Schemas
export const scheduleEntrySchema = z.object({
    id: z.string(),
    time: z.string(),
    subject: z.string(),
    instructor: z.string(),
    location: z.string(),
    day: z.string(),
});

export const timetableViewSchema = z.object({
    schedule: z.array(scheduleEntrySchema),
    date: z.string().optional(),
    title: z.string().optional(),
});

// Study Plan Schemas
export const studyPlanEntrySchema = z.object({
    day: z.number(),
    topic: z.string(),
    duration: z.string(),
    description: z.string(),
});

export const studyPlanViewSchema = z.object({
    plan: z.array(studyPlanEntrySchema),
    topic: z.string().optional(),
    days: z.number().optional(),
    title: z.string().optional(),
});

// Assignment Schemas
export const assignmentSchema = z.object({
    id: z.string(),
    title: z.string(),
    subject: z.string(),
    dueDate: z.string(),
    status: z.enum(["Pending", "Completed", "Overdue"]),
    priority: z.enum(["Low", "Medium", "High"]),
});

export const assignmentBoardSchema = z.object({
    assignments: z.array(assignmentSchema),
    filterByStatus: z.string().optional(),
    title: z.string().optional(),
});

// Exam Schemas
export const examSchema = z.object({
    id: z.string(),
    subject: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    daysRemaining: z.number(),
});

export const examCountdownSchema = z.object({
    exam: examSchema,
    title: z.string().optional(),
});

// ============================================================================
// TODAY SCHEDULE SCHEMA
// ============================================================================

export const todayScheduleSchema = z.object({
    day: z.string(),
    schedule: z.array(scheduleEntrySchema),
    title: z.string().optional(),
});

// ============================================================================
// SUBJECT INFO SCHEMA
// ============================================================================

export const subjectInfoSchema = z.object({
    subject: z.string(),
    code: z.string(),
    faculty: z.string(),
    location: z.string(),
});

// ============================================================================
// ADD ASSIGNMENT FORM SCHEMA
// ============================================================================

export const addAssignmentFormSchema = z.object({
    title: z.string().optional(),
    subject: z.string().optional(),
    dueDate: z.string().optional().describe("Due date in YYYY-MM-DD or DD-MM-YYYY format"),
    priority: z.enum(["Low", "Medium", "High"]).optional(),
});

// ============================================================================
// REMINDER SCHEMAS
// ============================================================================

export const reminderSchema = z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    note: z.string().optional(),
});

export const reminderBoardSchema = z.object({
    title: z.string().optional(),
    newReminder: z.object({
        title: z.string(),
        date: z.string(),
        note: z.string().optional(),
    }).optional(),
});

// ============================================================================
// COLLEGE STATS DASHBOARD SCHEMA
// ============================================================================

export const collegeDashboardSchema = z.object({
    title: z.string().optional(),
});

// ============================================================================
// EXAM COUNTDOWN ENHANCED SCHEMA
// ============================================================================

export const examCountdownEnhancedSchema = z.object({
    title: z.string().optional(),
});
