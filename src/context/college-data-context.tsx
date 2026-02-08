"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getAssignments as getInitialAssignments } from "@/services/college-data";

// Types
export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: "Pending" | "Completed" | "Overdue";
  priority: "Low" | "Medium" | "High";
}

export interface Reminder {
  id: string;
  title: string;
  date: string;
  note?: string;
}

interface CollegeDataContextType {
  // Assignments
  assignments: Assignment[];
  addAssignment: (assignment: Omit<Assignment, "id">) => Assignment;
  completeAssignment: (idOrTitle: string) => boolean;

  // Reminders
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, "id">) => Reminder;
  deleteReminder: (id: string) => void;
}

const CollegeDataContext = createContext<CollegeDataContextType | undefined>(
  undefined,
);

// LocalStorage keys
const ASSIGNMENTS_STORAGE_KEY = "jacc-assignments";
const REMINDERS_STORAGE_KEY = "jacc-reminders";

// Helper functions for localStorage
const loadFromLocalStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return fallback;
  }
};

const saveToLocalStorage = <T,>(key: string, data: T): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export function CollegeDataProvider({ children }: { children: ReactNode }) {
  // Initialize with data from localStorage or fallback to mock data
  const [assignments, setAssignments] = useState<Assignment[]>(() =>
    loadFromLocalStorage(ASSIGNMENTS_STORAGE_KEY, getInitialAssignments()),
  );
  const [reminders, setReminders] = useState<Reminder[]>(() =>
    loadFromLocalStorage(REMINDERS_STORAGE_KEY, []),
  );

  // Persist assignments to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage(ASSIGNMENTS_STORAGE_KEY, assignments);
  }, [assignments]);

  // Persist reminders to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage(REMINDERS_STORAGE_KEY, reminders);
  }, [reminders]);

  // Add assignment
  const addAssignment = (assignment: Omit<Assignment, "id">): Assignment => {
    // Check for duplicates (same title, subject, and due date)
    const isDuplicate = assignments.some(
      (existing) =>
        existing.title.toLowerCase() === assignment.title.toLowerCase() &&
        existing.subject.toLowerCase() === assignment.subject.toLowerCase() &&
        existing.dueDate === assignment.dueDate,
    );

    if (isDuplicate) {
      throw new Error(
        "Duplicate assignment: An assignment with the same title, subject, and due date already exists.",
      );
    }

    const newAssignment: Assignment = {
      ...assignment,
      id: `assignment-${Date.now()}`,
    };
    setAssignments((prev) => [...prev, newAssignment]);
    return newAssignment;
  };

  // Complete assignment
  const completeAssignment = (idOrTitle: string): boolean => {
    let found = false;
    setAssignments((prev) =>
      prev.map((assignment) => {
        if (
          assignment.id === idOrTitle ||
          assignment.title.toLowerCase().includes(idOrTitle.toLowerCase())
        ) {
          found = true;
          return { ...assignment, status: "Completed" as const };
        }
        return assignment;
      }),
    );
    return found;
  };

  // Add reminder
  const addReminder = (reminder: Omit<Reminder, "id">): Reminder => {
    // Check for duplicates (same title and date)
    const isDuplicate = reminders.some(
      (existing) =>
        existing.title.toLowerCase() === reminder.title.toLowerCase() &&
        existing.date === reminder.date,
    );

    if (isDuplicate) {
      throw new Error(
        "Duplicate reminder: A reminder with the same title and date already exists.",
      );
    }

    const newReminder: Reminder = {
      ...reminder,
      id: `reminder-${Date.now()}`,
    };
    setReminders((prev) => [...prev, newReminder]);
    return newReminder;
  };

  // Delete reminder
  const deleteReminder = (id: string): void => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  };

  const value: CollegeDataContextType = {
    assignments,
    addAssignment,
    completeAssignment,
    reminders,
    addReminder,
    deleteReminder,
  };

  return (
    <CollegeDataContext.Provider value={value}>
      {children}
    </CollegeDataContext.Provider>
  );
}

export function useCollegeData(): CollegeDataContextType {
  const context = useContext(CollegeDataContext);
  if (context === undefined) {
    throw new Error("useCollegeData must be used within a CollegeDataProvider");
  }
  return context;
}
