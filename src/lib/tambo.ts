/**
 * @file tambo.ts
 * @description Central configuration file for JACC Tambo components and tools
 *
 * This file registers all JACCs generative UI components and data-fetching tools
 * with the Tambo provider.
 */



import AlertPanel from "@/components/tambo/alert-panel";
import TimetableView from "@/components/tambo/timetable-view";
import StudyPlanView from "@/components/tambo/study-plan-view";
import AssignmentBoard from "@/components/tambo/assignment-board";
import ExamCountdownCard from "@/components/tambo/exam-countdown-card";
import TodayScheduleView from "@/components/tambo/today-schedule-view";
import SubjectInfoCard from "@/components/tambo/subject-info-card";
import AddAssignmentForm from "@/components/tambo/add-assignment-form";
import ReminderBoard from "@/components/tambo/reminder-board";
import CollegeDashboard from "@/components/tambo/college-dashboard";
import ExamCountdownEnhanced from "@/components/tambo/exam-countdown-enhanced";

import {
  statsDashboardSchema,
  alertPanelSchema,
  alertSchema,
  timetableViewSchema,
  studyPlanViewSchema,
  assignmentBoardSchema,
  examCountdownSchema,
  scheduleEntrySchema,
  studyPlanEntrySchema,
  assignmentSchema as collegeAssignmentSchema,
  examSchema,
  todayScheduleSchema,
  subjectInfoSchema,
  addAssignmentFormSchema,
  reminderBoardSchema,
  collegeDashboardSchema,
  examCountdownEnhancedSchema,
} from "@/lib/schemas";

import {
  getStatistics,
  getAlerts,
} from "@/services/mock-data";

import {
  getTimetable,
  getTodaySchedule,
  generateStudyPlan,
  getAssignments,
  getNextExam,
  getSubjectInfo,
} from "@/services/college-data";

import { useCollegeData } from "@/context/college-data-context";

import type { TamboComponent, TamboTool } from "@tambo-ai/react";
import { z } from "zod";

/**
 * tools
 *
 * Data-fetching tools that Tambo AI can call to retrieve information
 * for populating components.
 */
export const tools: TamboTool[] = [
  {
    name: "get-statistics",
    description:
      "Retrieves dashboard statistics and key metrics. Call this when you need to show a status overview, summary, dashboard, or academy-wide metrics.",
    tool: () => getStatistics(),
    inputSchema: z.object({}),
    outputSchema: z.object({
      totalAssignments: z.number(),
      completedAssignments: z.number(),
      upcomingClasses: z.number(),
      upcomingExams: z.number(),
      activeReminders: z.number(),
      activeAlerts: z.number(),
    }),
  },
  {
    name: "get-alerts",
    description:
      "Retrieves system alerts and notifications. Call this when you need to show alerts, warnings, notifications, or system status. Supports filtering by severity.",
    tool: (input: { severity?: string }) => getAlerts(input),
    inputSchema: z.object({
      severity: z
        .string()
        .optional()
        .describe("Filter by severity: Info, Warning, or Critical"),
    }),
    outputSchema: z.array(alertSchema),
  },
  // COLLEGE ASSISTANT TOOLS
  {
    name: "get-timetable",
    description:
      "Retrieves class timetable/schedule. Call this when user asks about timetable, schedule, classes, or 'what classes do I have'. Supports filtering by day of the week.",
    tool: (input?: { day?: string }) => getTimetable(input),
    inputSchema: z.object({
      day: z.string().optional().describe("Day of the week: Monday, Tuesday, etc."),
    }),
    outputSchema: z.array(scheduleEntrySchema),
  },
  {
    name: "generate-study-plan",
    description:
      "Generates a customized study plan for a topic. Call this when user asks to 'create study plan', 'generate study plan', or 'make a study plan for [topic]'. Can customize by topic and number of days.",
    tool: (input?: { topic?: string; days?: number }) => generateStudyPlan(input),
    inputSchema: z.object({
      topic: z.string().optional().describe("Subject/topic to study"),
      days: z.number().optional().describe("Number of days for the plan (default: 5)"),
    }),
    outputSchema: z.array(studyPlanEntrySchema),
  },
  {
    name: "get-assignments",
    description:
      "Retrieves assignments/homework. Call this when user asks about assignments, homework, pending work, or 'what assignments do I have'. Supports filtering by status.",
    tool: (input?: { status?: string }) => getAssignments(input),
    inputSchema: z.object({
      status: z.string().optional().describe("Filter by status: Pending, Completed, or Overdue"),
    }),
    outputSchema: z.array(collegeAssignmentSchema),
  },
  {
    name: "get-next-exam",
    description:
      "Retrieves information about the next upcoming exam. Call this when user asks about 'next exam', 'when is my exam', 'exam countdown', or 'upcoming exam'.",
    tool: () => getNextExam(),
    inputSchema: z.object({}),
    outputSchema: examSchema,
  },
  {
    name: "get-today-schedule",
    description:
      "Retrieves today's class schedule automatically detecting the current day. Call this when user asks 'what do I have today', 'today's classes', 'show today's schedule', or 'what's my schedule today'.",
    tool: () => getTodaySchedule(),
    inputSchema: z.object({}),
    outputSchema: z.object({
      day: z.string(),
      schedule: z.array(scheduleEntrySchema),
    }),
  },
  {
    name: "get-subject-info",
    description:
      "Retrieves information about a subject including faculty and location. Call this when user asks 'who teaches X', 'faculty for Y', 'subject details for Z', or 'teacher for X'. Extract the subject name from the query.",
    tool: (input: { query: string }) => getSubjectInfo(input),
    inputSchema: z.object({
      query: z.string().describe("The subject name or code to search for"),
    }),
    outputSchema: subjectInfoSchema.nullable(),
  },
];

/**
 * components
 *
 * Generative UI components that Tambo AI can dynamically render
 * based on user conversations and intents.
 */
export const components: TamboComponent[] = [

  {
    name: "AlertPanel",
    description:
      "Displays system alerts and notifications sorted by severity (Critical, Warning, Info). Use when the user asks about alerts, notifications, warnings, errors, or system status. Shows timestamps, categories, and highlights critical alerts.",
    component: AlertPanel,
    propsSchema: alertPanelSchema,
  },
  // COLLEGE ASSISTANT COMPONENTS
  {
    name: "TimetableView",
    description:
      "Displays class schedule/timetable in a clean grid format showing time, subject, instructor, and location. Use when user asks about timetable, schedule, classes, or 'what classes do I have today'.",
    component: TimetableView,
    propsSchema: timetableViewSchema,
  },
  {
    name: "StudyPlanView",
    description:
      "Displays a customized study plan as a timeline with topics, duration, and descriptions for each day. Use when user asks to create/generate/make a study plan for a topic or subject.",
    component: StudyPlanView,
    propsSchema: studyPlanViewSchema,
  },
  {
    name: "AssignmentBoard",
    description:
      "Displays assignments/homework in a card layout with titles, due dates, subjects, and status indicators. Use when user asks about assignments, homework, pending work, or 'what assignments do I have'.",
    component: AssignmentBoard,
    propsSchema: assignmentBoardSchema,
  },
  {
    name: "ExamCountdownCard",
    description:
      "Displays upcoming exam with a prominent countdown timer, date, time, and location. Use when user asks about next exam, exam countdown, when is my exam, or upcoming exams.",
    component: ExamCountdownCard,
    propsSchema: examCountdownSchema,
  },
  {
    name: "TodayScheduleView",
    description:
      "Displays today's class schedule in a clean timeline format with current/upcoming class highlighted. Use when user asks 'what do I have today', 'show today's classes', 'today's schedule', or 'what's my schedule for today'.",
    component: TodayScheduleView,
    propsSchema: todayScheduleSchema,
  },
  {
    name: "SubjectInfoCard",
    description:
      "Displays detailed information about a specific subject including name, code, faculty, and location. Use when user asks 'who teaches X', 'faculty for Y', 'subject details', or 'teacher for X subject'.",
    component: SubjectInfoCard,
    propsSchema: subjectInfoSchema,
  },
  {
    name: "AddAssignmentForm",
    description:
      "Displays a form to add a new assignment. Use when user asks 'add assignment', 'create assignment', or 'new assignment'. IMPORTANT: Extract details from the user's message - if they say 'add NLP assignment due Friday', parse and pre-fill: title='NLP assignment', dueDate='[next Friday's date in YYYY-MM-DD]'. If no details provided, show empty form.",
    component: AddAssignmentForm,
    propsSchema: addAssignmentFormSchema,
  },
  {
    name: "ReminderBoard",
    description:
      "Displays personal reminders with dates and notes. Use when user asks 'show reminders', 'my reminders', 'add reminder', or 'remind me to X'. Can automatically add a reminder if details are provided.",
    component: ReminderBoard,
    propsSchema: reminderBoardSchema,
  },
  {
    name: "CollegeDashboard",
    description:
      "Displays comprehensive dashboard overview with assignment stats, class schedule, reminders, and urgent items. Use when user asks 'show dashboard', 'stats', 'overview', 'summary', or just 'dashboard'.",
    component: CollegeDashboard,
    propsSchema: collegeDashboardSchema,
  },
  {
    name: "ExamCountdownEnhanced",
    description:
      "Displays exam countdown timers with live updates (days, hours, minutes), color-coded urgency, progress bars, and exam details. Use when user asks 'exam countdown', 'when is my exam', 'show exams', 'exam dates', or 'exam schedule'.",
    component: ExamCountdownEnhanced,
    propsSchema: examCountdownEnhancedSchema,
  },
];

