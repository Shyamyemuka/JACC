/**
 * @file college-data.ts
 * @description Mock data service for college assistant features
 */

export interface ScheduleEntry {
    id: string;
    time: string;
    subject: string;
    instructor: string;
    location: string;
    day: string;
}

export interface StudyPlanEntry {
    day: number;
    topic: string;
    duration: string;
    description: string;
}

export interface Assignment {
    id: string;
    title: string;
    subject: string;
    dueDate: string;
    status: "Pending" | "Completed" | "Overdue";
    priority: "Low" | "Medium" | "High";
}

export interface Exam {
    id: string;
    subject: string;
    code?: string;
    date: string;
    time: string;
    location: string;
    duration?: string;
    type?: string;
    daysRemaining?: number;
    syllabus?: string[];
}


// Mock Exam Data for Countdown - ACTUAL SCHEDULE
const mockExamData: Exam[] = [
    {
        id: "exam-1",
        subject: "Predictive Analytics",
        code: "23A3261T",
        date: "2026-02-09",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["Regression Analysis", "Time Series Forecasting", "Machine Learning Models", "Model Evaluation"]
    },
    {
        id: "exam-2",
        subject: "Introduction to Cloud Computing",
        code: "23A326DT",
        date: "2026-02-10",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["AWS Services", "Azure Fundamentals", "Docker Containers", "Kubernetes Orchestration"]
    },
    {
        id: "exam-3",
        subject: "Computational Language Processing",
        code: "23A3063T",
        date: "2026-02-11",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["NLP Fundamentals", "Transformers Architecture", "BERT & GPT", "Text Processing"]
    },
    {
        id: "exam-4",
        subject: "Network Security & Cryptography",
        code: "23A326AT",
        date: "2026-02-12",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["Cryptographic Algorithms", "Network Protocols", "Security Architecture", "Threat Analysis"]
    },
    {
        id: "exam-5",
        subject: "Data Visualization",
        code: "23A3262T",
        date: "2026-02-13",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["D3.js Fundamentals", "Tableau Basics", "Python Visualization Tools", "Chart Design Principles"]
    },
    {
        id: "exam-6",
        subject: "Disaster Management",
        code: "23A016GT",
        date: "2026-02-16",
        time: "09:00 AM - 12:00 PM",
        location: "Exam Hall",
        type: "Final",
        syllabus: ["Disaster Preparedness", "Crisis Management", "Risk Assessment", "Emergency Response"]
    }
];

export const getExams = () => mockExamData;


// Mock Timetable Data
const mockTimetable: ScheduleEntry[] = [
    // MONDAY
    { id: "mon-1", time: "09:15-10:05", subject: "Predictive Analytics (23A3261T)", instructor: "B. Venkatesu Goud", location: "B. Ed 410", day: "Monday" },
    { id: "mon-2", time: "10:05-10:55", subject: "Computational Language Processing (23A3063T)", instructor: "A. Ramesh Babu", location: "B. Ed 410", day: "Monday" },
    { id: "mon-3", time: "10:55-11:45", subject: "Disaster Management (23A016GT)", instructor: "M. Nagaraj", location: "B. Ed 410", day: "Monday" },
    { id: "mon-4", time: "11:45-12:35", subject: "Introduction to Cloud Computing (23A326DT)", instructor: "B. Panduranga Raju", location: "B. Ed 410", day: "Monday" },
    { id: "mon-5", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Monday" },
    { id: "mon-6", time: "01:30-02:20", subject: "Data Visualization (23A3262T)", instructor: "N. Swathi", location: "B. Ed 410", day: "Monday" },
    { id: "mon-7", time: "02:20-03:10", subject: "Network Security & Cryptography (23A326AT)", instructor: "P. Renuka", location: "B. Ed 410", day: "Monday" },
    { id: "mon-8", time: "03:10-04:00", subject: "Technical Paper Writing & IPR (23AHS67T)", instructor: "M. Nagaraju Kumar", location: "B. Ed 410", day: "Monday" },

    // TUESDAY
    { id: "tue-1", time: "09:15-10:55", subject: "Soft Skills Lab (23AHS65L)", instructor: "B. Jaheer, S. Saiyam", location: "BELL LAB", day: "Tuesday" },
    { id: "tue-2", time: "10:55-11:45", subject: "Network Security & Cryptography (23A326AT)", instructor: "P. Renuka", location: "B. Ed 410", day: "Tuesday" },
    { id: "tue-3", time: "11:45-12:35", subject: "Introduction to Cloud Computing (23A326DT)", instructor: "B. Panduranga Raju", location: "B. Ed 410", day: "Tuesday" },
    { id: "tue-4", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Tuesday" },
    { id: "tue-5", time: "01:30-02:20", subject: "Soft Skills (23AHS65L)", instructor: "B. Jaheer, S. Saiyam", location: "B. Ed 410", day: "Tuesday" },
    { id: "tue-6", time: "02:20-03:10", subject: "Computational Language Processing (23A3063T)", instructor: "A. Ramesh Babu", location: "B. Ed 410", day: "Tuesday" },
    { id: "tue-7", time: "03:10-04:00", subject: "Data Visualization (23A3262T)", instructor: "N. Swathi", location: "B. Ed 410", day: "Tuesday" },

    // WEDNESDAY
    { id: "wed-1", time: "09:15-10:05", subject: "Introduction to Cloud Computing (23A326DT)", instructor: "B. Panduranga Raju", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-2", time: "10:05-10:55", subject: "Predictive Analytics (23A3261T)", instructor: "B. Venkatesu Goud", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-3", time: "10:55-11:45", subject: "Computational Language Processing (23A3063T)", instructor: "A. Ramesh Babu", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-4", time: "11:45-12:35", subject: "Network Security & Cryptography (23A326AT)", instructor: "P. Renuka", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-5", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Wednesday" },
    { id: "wed-6", time: "01:30-02:20", subject: "Data Visualization (23A3262T)", instructor: "N. Swathi", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-7", time: "02:20-03:10", subject: "Computational Language Processing (23A3063T)", instructor: "A. Ramesh Babu", location: "B. Ed 410", day: "Wednesday" },
    { id: "wed-8", time: "03:10-04:00", subject: "Disaster Management (23A016GT)", instructor: "M. Nagaraj", location: "B. Ed 410", day: "Wednesday" },

    // THURSDAY
    { id: "thu-1", time: "09:15-10:05", subject: "Network Security & Cryptography (23A326AT)", instructor: "P. Renuka", location: "B. Ed 410", day: "Thursday" },
    { id: "thu-2", time: "10:05-10:55", subject: "Introduction to Cloud Computing (23A326DT)", instructor: "B. Panduranga Raju", location: "B. Ed 410", day: "Thursday" },
    { id: "thu-3", time: "10:55-11:45", subject: "Disaster Management (23A016GT)", instructor: "M. Nagaraj", location: "B. Ed 410", day: "Thursday" },
    { id: "thu-4", time: "11:45-12:35", subject: "Predictive Analytics (23A3261T)", instructor: "B. Venkatesu Goud", location: "B. Ed 410", day: "Thursday" },
    { id: "thu-5", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Thursday" },
    { id: "thu-6", time: "01:30-03:10", subject: "NLP & Data Visualization Lab (23A3263L)", instructor: "N. Swathi", location: "PR LAB", day: "Thursday" },

    // FRIDAY
    { id: "fri-1", time: "09:15-10:05", subject: "Disaster Management (23A016GT)", instructor: "M. Nagaraj", location: "B. Ed 410", day: "Friday" },
    { id: "fri-2", time: "10:05-10:55", subject: "Computational Language Processing (23A3063T)", instructor: "A. Ramesh Babu", location: "B. Ed 410", day: "Friday" },
    { id: "fri-3", time: "10:55-11:45", subject: "Data Visualization (23A3262T)", instructor: "N. Swathi", location: "B. Ed 410", day: "Friday" },
    { id: "fri-4", time: "11:45-12:35", subject: "Introduction to Cloud Computing (23A326DT)", instructor: "B. Panduranga Raju", location: "B. Ed 410", day: "Friday" },
    { id: "fri-5", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Friday" },
    { id: "fri-6", time: "01:30-02:20", subject: "Network Security & Cryptography (23A326AT)", instructor: "P. Renuka", location: "B. Ed 410", day: "Friday" },
    { id: "fri-7", time: "02:20-03:10", subject: "Predictive Analytics (23A3261T)", instructor: "B. Venkatesu Goud", location: "B. Ed 410", day: "Friday" },

    // SATURDAY
    { id: "sat-1", time: "09:15-10:05", subject: "Technical Paper Writing & IPR (23AHS67T)", instructor: "M. Nagaraju Kumar", location: "B. Ed 410", day: "Saturday" },
    { id: "sat-2", time: "10:05-10:55", subject: "Data Visualization (23A3262T)", instructor: "N. Swathi", location: "B. Ed 410", day: "Saturday" },
    { id: "sat-3", time: "10:55-11:45", subject: "Predictive Analytics (23A3261T)", instructor: "B. Venkatesu Goud", location: "B. Ed 410", day: "Saturday" },
    { id: "sat-4", time: "11:45-12:35", subject: "Disaster Management (23A016GT)", instructor: "M. Nagaraj", location: "B. Ed 410", day: "Saturday" },
    { id: "sat-5", time: "12:35-01:30", subject: "LUNCH", instructor: "-", location: "-", day: "Saturday" },
    { id: "sat-6", time: "01:30-04:00", subject: "Predictive Analytics Lab (23A3261L)", instructor: "B. Venkatesu Goud", location: "PR LAB", day: "Saturday" },
];

// Mock Assignments Data
const mockAssignments: Assignment[] = [
    {
        id: "1",
        title: "Cloud Security Project Report",
        subject: "Cloud Security",
        dueDate: "2026-02-15",
        status: "Pending",
        priority: "High"
    },
    {
        id: "2",
        title: "ML Model Implementation",
        subject: "Machine Learning",
        dueDate: "2026-02-12",
        status: "Pending",
        priority: "Critical" as any
    },
    {
        id: "3",
        title: "Database Design Document",
        subject: "Database Systems",
        dueDate: "2026-02-20",
        status: "Pending",
        priority: "Medium"
    },
    {
        id: "4",
        title: "Web Portfolio",
        subject: "Web Development",
        dueDate: "2026-01-28",
        status: "Completed",
        priority: "Medium"
    },
    {
        id: "5",
        title: "Network Topology Analysis",
        subject: "Network Security",
        dueDate: "2026-02-10",
        status: "Pending",
        priority: "High"
    }
];

// Mock Exams Data
const mockExams: Exam[] = [
    {
        id: "1",
        subject: "Predictive Analytics",
        code: "23A3261T",
        date: "2026-02-09",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    },
    {
        id: "2",
        subject: "Introduction to Cloud Computing",
        code: "23A326DT",
        date: "2026-02-10",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    },
    {
        id: "3",
        subject: "Computational Language Processing",
        code: "23A3063T",
        date: "2026-02-11",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    },
    {
        id: "4",
        subject: "Network Security & Cryptography",
        code: "23A326AT",
        date: "2026-02-12",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    },
    {
        id: "5",
        subject: "Data Visualization",
        code: "23A3262T",
        date: "2026-02-13",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    },
    {
        id: "6",
        subject: "Disaster Management",
        code: "23A016GT",
        date: "2026-02-16",
        time: "FN",
        location: "Exam Hall",
        duration: "3 hours",
        type: "1st Mid Exam"
    }
];

/**
 * Get timetable for a specific day
 */
export function getTimetable(input?: { day?: string }): ScheduleEntry[] {
    const day = input?.day || "Monday";
    return mockTimetable.filter(entry => entry.day === day);
}

/**
 * Get today's schedule (auto-detect current day)
 */
export function getTodaySchedule(): { day: string; schedule: ScheduleEntry[] } {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[new Date().getDay()];
    return {
        day: today,
        schedule: mockTimetable.filter(entry => entry.day === today)
    };
}

/**
 * Get subject information by name or code
 */
export function getSubjectInfo(input: { query: string }): {
    subject: string;
    code: string;
    faculty: string;
    location: string;
} | null {
    const query = input.query.toLowerCase();

    // Find first matching entry in timetable
    const match = mockTimetable.find(entry =>
        entry.subject.toLowerCase().includes(query) ||
        entry.subject.toLowerCase().replace(/[()]/g, '').includes(query)
    );

    if (!match) return null;

    // Extract code from subject string
    const codeMatch = match.subject.match(/\(([^)]+)\)/);
    const code = codeMatch ? codeMatch[1] : "";
    const subject = match.subject.split('(')[0].trim();

    return {
        subject,
        code,
        faculty: match.instructor,
        location: match.location
    };
}

/**
 * Generate a study plan for a topic
 */
export function generateStudyPlan(input?: {
    topic?: string;
    days?: number
}): StudyPlanEntry[] {
    const topic = input?.topic || "Cloud Security";
    const days = input?.days || 5;

    const basePlans: Record<string, StudyPlanEntry[]> = {
        "Cloud Security": [
            { day: 1, topic: "Introduction to Cloud Computing", duration: "2-3 hours", description: "Understand cloud fundamentals, service models (IaaS, PaaS, SaaS), and deployment models" },
            { day: 2, topic: "Cloud Security Fundamentals", duration: "3-4 hours", description: "Learn about shared responsibility model, CIA triad, and cloud-specific threats" },
            { day: 3, topic: "Identity and Access Management", duration: "2-3 hours", description: "Study IAM best practices, MFA, and zero-trust architecture" },
            { day: 4, topic: "Data Protection & Encryption", duration: "3-4 hours", description: "Explore encryption methods, key management, and data privacy" },
            { day: 5, topic: "Security Monitoring & Compliance", duration: "2-3 hours", description: "Review logging, monitoring tools, and compliance frameworks (GDPR, HIPAA)" }
        ],
        "Machine Learning": [
            { day: 1, topic: "ML Fundamentals & Python Setup", duration: "2-3 hours", description: "Install libraries, review linear algebra and statistics basics" },
            { day: 2, topic: "Supervised Learning Algorithms", duration: "3-4 hours", description: "Study regression, classification, and model evaluation metrics" },
            { day: 3, topic: "Unsupervised Learning & Clustering", duration: "2-3 hours", description: "Explore K-means, hierarchical clustering, and dimensionality reduction" },
            { day: 4, topic: "Neural Networks & Deep Learning", duration: "3-4 hours", description: "Understand perceptrons, backpropagation, and CNNs" },
            { day: 5, topic: "Model Deployment & Real-world Projects", duration: "2-3 hours", description: "Learn deployment strategies and work on a mini-project" }
        ]
    };

    const plan = basePlans[topic] || basePlans["Cloud Security"];
    return plan.slice(0, days);
}

/**
 * Get assignments with optional status filter
 */
export function getAssignments(input?: { status?: string }): Assignment[] {
    if (input?.status) {
        return mockAssignments.filter(a => a.status === input.status);
    }
    return mockAssignments;
}

/**
 * Get the next upcoming exam
 */
export function getNextExam(): Exam {
    return mockExams[0]; // Return the closest exam
}

/**
 * Get all upcoming exams
 */
export function getAllExams(): Exam[] {
    return mockExams;
}
