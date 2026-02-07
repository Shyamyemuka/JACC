/**
 * @file mock-data.ts
 * @description Mock data service for JACC - Jedi Academy Command Center
 * Provides Star Wars-themed data for all components
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Personnel {
    id: string;
    name: string;
    rank: "Initiate" | "Padawan" | "Knight" | "Master";
    status: "Active" | "Training" | "On Mission" | "Resting";
    specialty: "Combat" | "Healing" | "Diplomacy" | "Engineering" | "Research";
    skillLevel: number; // 1-100
    joinDate: string;
    currentMission: string | null;
}

export interface Mission {
    id: string;
    title: string;
    description: string;
    priority: "Low" | "Medium" | "High" | "Critical";
    status: "Planning" | "Active" | "Completed" | "On Hold";
    assignedPersonnel: string[];
    startDate: string;
    deadline: string;
    location: string;
    objectives: string[];
    progress: number; // 0-100
}

export interface Resource {
    id: string;
    name: string;
    category: "Equipment" | "Supplies" | "Vehicles" | "Technology";
    quantity: number;
    maxQuantity: number;
    status: "Available" | "Low Stock" | "Out of Stock" | "Reserved";
    location: string;
}

export interface Statistics {
    totalPersonnel: number;
    activePersonnel: number;
    totalMissions: number;
    activeMissions: number;
    completedMissions: number;
    resourceUtilization: number; // percentage
    trainingSessionsToday: number;
    activeAlerts: number;
}

export interface Alert {
    id: string;
    title: string;
    message: string;
    severity: "Info" | "Warning" | "Critical";
    timestamp: string;
    isRead: boolean;
    category: "Security" | "System" | "Personnel" | "Mission";
}

export interface TrainingSession {
    id: string;
    title: string;
    instructor: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    type: "Combat" | "Meditation" | "Diplomacy" | "Technical";
    participants: number;
    maxParticipants: number;
}

// ============================================================================
// MOCK DATA
// ============================================================================

const PERSONNEL_DATA: Personnel[] = [
    {
        id: "p1",
        name: "Aria Sunstrider",
        rank: "Knight",
        status: "Active",
        specialty: "Combat",
        skillLevel: 85,
        joinDate: "2022-03-15",
        currentMission: "m1",
    },
    {
        id: "p2",
        name: "Kael Windwalker",
        rank: "Padawan",
        status: "Training",
        specialty: "Diplomacy",
        skillLevel: 45,
        joinDate: "2024-01-10",
        currentMission: null,
    },
    {
        id: "p3",
        name: "Zara Moonwhisper",
        rank: "Master",
        status: "Active",
        specialty: "Healing",
        skillLevel: 95,
        joinDate: "2018-06-20",
        currentMission: null,
    },
    {
        id: "p4",
        name: "Marcus Stoneforge",
        rank: "Knight",
        status: "On Mission",
        specialty: "Engineering",
        skillLevel: 78,
        joinDate: "2021-09-05",
        currentMission: "m1",
    },
    {
        id: "p5",
        name: "Elena Starweaver",
        rank: "Padawan",
        status: "Training",
        specialty: "Research",
        skillLevel: 52,
        joinDate: "2023-11-12",
        currentMission: null,
    },
    {
        id: "p6",
        name: "Theron Ironblade",
        rank: "Knight",
        status: "Active",
        specialty: "Combat",
        skillLevel: 82,
        joinDate: "2020-02-28",
        currentMission: null,
    },
    {
        id: "p7",
        name: "Lyra Dawnbringer",
        rank: "Master",
        status: "On Mission",
        specialty: "Diplomacy",
        skillLevel: 92,
        joinDate: "2017-04-18",
        currentMission: "m2",
    },
    {
        id: "p8",
        name: "Finn Lightseeker",
        rank: "Initiate",
        status: "Training",
        specialty: "Combat",
        skillLevel: 28,
        joinDate: "2025-10-01",
        currentMission: null,
    },
];

const MISSION_DATA: Mission[] = [
    {
        id: "m1",
        title: "Operation Eclipse",
        description: "Investigate disturbances in the Outer Rim territories and establish diplomatic relations with local factions.",
        priority: "High",
        status: "Active",
        assignedPersonnel: ["Aria Sunstrider", "Marcus Stoneforge"],
        startDate: "2025-01-15",
        deadline: "2025-02-15",
        location: "Outer Rim - Tatooine Sector",
        objectives: [
            "Investigate energy anomalies",
            "Establish contact with local leadership",
            "Report findings to Council",
        ],
        progress: 65,
    },
    {
        id: "m2",
        title: "Peace Accord Negotiations",
        description: "Mediate peace talks between conflicting trade guilds in the Mid Rim.",
        priority: "Critical",
        status: "Active",
        assignedPersonnel: ["Lyra Dawnbringer"],
        startDate: "2025-01-20",
        deadline: "2025-02-10",
        location: "Mid Rim - Corellia",
        objectives: [
            "Facilitate dialogue between guilds",
            "Draft peace agreement",
            "Ensure treaty signing",
        ],
        progress: 40,
    },
    {
        id: "m3",
        title: "Ancient Temple Survey",
        description: "Survey and document newly discovered Jedi temple ruins on Ilum.",
        priority: "Medium",
        status: "Planning",
        assignedPersonnel: [],
        startDate: "2025-02-20",
        deadline: "2025-03-30",
        location: "Ilum - Northern Wastes",
        objectives: [
            "Map temple structure",
            "Catalog artifacts",
            "Assess restoration feasibility",
        ],
        progress: 10,
    },
    {
        id: "m4",
        title: "Supply Route Protection",
        description: "Escort supply convoys through contested space lanes.",
        priority: "High",
        status: "Active",
        assignedPersonnel: ["Theron Ironblade"],
        startDate: "2025-01-25",
        deadline: "2025-02-08",
        location: "Hydian Way Trade Route",
        objectives: [
            "Secure convoy path",
            "Deter pirate activity",
            "Deliver supplies to outpost",
        ],
        progress: 75,
    },
    {
        id: "m5",
        title: "Kyber Crystal Expedition",
        description: "Completed expedition to harvest kyber crystals for lightsaber construction.",
        priority: "Low",
        status: "Completed",
        assignedPersonnel: ["Zara Moonwhisper"],
        startDate: "2024-12-01",
        deadline: "2025-01-05",
        location: "Jedha",
        objectives: [
            "Locate crystal deposits",
            "Extract samples",
            "Return to academy",
        ],
        progress: 100,
    },
];

const RESOURCE_DATA: Resource[] = [
    {
        id: "r1",
        name: "Training Lightsabers",
        category: "Equipment",
        quantity: 45,
        maxQuantity: 100,
        status: "Available",
        location: "Training Hall A",
    },
    {
        id: "r2",
        name: "Medical Supplies",
        category: "Supplies",
        quantity: 12,
        maxQuantity: 50,
        status: "Low Stock",
        location: "Medical Bay",
    },
    {
        id: "r3",
        name: "T-65 X-Wing Starfighters",
        category: "Vehicles",
        quantity: 8,
        maxQuantity: 12,
        status: "Available",
        location: "Hangar Bay 1",
    },
    {
        id: "r4",
        name: "Holocron Archives",
        category: "Technology",
        quantity: 127,
        maxQuantity: 150,
        status: "Available",
        location: "Archive Tower",
    },
    {
        id: "r5",
        name: "Combat Training Droids",
        category: "Equipment",
        quantity: 3,
        maxQuantity: 20,
        status: "Low Stock",
        location: "Training Hall B",
    },
    {
        id: "r6",
        name: "Ration Packs",
        category: "Supplies",
        quantity: 0,
        maxQuantity: 500,
        status: "Out of Stock",
        location: "Commissary",
    },
    {
        id: "r7",
        name: "Communication Satellites",
        category: "Technology",
        quantity: 15,
        maxQuantity: 20,
        status: "Available",
        location: "Communications Hub",
    },
    {
        id: "r8",
        name: "Speeder Bikes",
        category: "Vehicles",
        quantity: 22,
        maxQuantity: 30,
        status: "Available",
        location: "Hangar Bay 2",
    },
    {
        id: "r9",
        name: "Meditation Crystals",
        category: "Supplies",
        quantity: 8,
        maxQuantity: 25,
        status: "Low Stock",
        location: "Meditation Chamber",
    },
    {
        id: "r10",
        name: "Datapad Tablets",
        category: "Technology",
        quantity: 5,
        maxQuantity: 60,
        status: "Reserved",
        location: "Library",
    },
];

const ALERT_DATA: Alert[] = [
    {
        id: "a1",
        title: "Critical: Hangar Bay Security Breach",
        message: "Unauthorized access detected in Hangar Bay 1. Security droids dispatched.",
        severity: "Critical",
        timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
        isRead: false,
        category: "Security",
    },
    {
        id: "a2",
        title: "Low Medical Supplies",
        message: "Medical supply inventory below 25% threshold. Resupply recommended.",
        severity: "Warning",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        isRead: false,
        category: "System",
    },
    {
        id: "a3",
        title: "Mission Deadline Approaching",
        message: "Operation Eclipse deadline is in 8 days. Current progress: 65%",
        severity: "Info",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        isRead: true,
        category: "Mission",
    },
    {
        id: "a4",
        title: "New Padawan Enrollment",
        message: "Finn Lightseeker has completed initiate trials and been promoted to Padawan.",
        severity: "Info",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        isRead: true,
        category: "Personnel",
    },
    {
        id: "a5",
        title: "Critical: Ration Packs Depleted",
        message: "Commissary ration pack inventory at zero. Immediate resupply required.",
        severity: "Critical",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
        isRead: false,
        category: "System",
    },
    {
        id: "a6",
        title: "Training Droid Maintenance Required",
        message: "Combat training droids showing signs of wear. Schedule maintenance check.",
        severity: "Warning",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
        isRead: false,
        category: "System",
    },
];

const TRAINING_DATA: TrainingSession[] = [
    {
        id: "t1",
        title: "Advanced Lightsaber Forms",
        instructor: "Master Zara Moonwhisper",
        date: "2025-02-07",
        startTime: "09:00",
        endTime: "11:00",
        location: "Training Hall A",
        type: "Combat",
        participants: 8,
        maxParticipants: 12,
    },
    {
        id: "t2",
        title: "Diplomatic Protocol Workshop",
        instructor: "Master Lyra Dawnbringer",
        date: "2025-02-07",
        startTime: "14:00",
        endTime: "16:00",
        location: "Conference Room 3",
        type: "Diplomacy",
        participants: 5,
        maxParticipants: 10,
    },
    {
        id: "t3",
        title: "Force Meditation Basics",
        instructor: "Knight Aria Sunstrider",
        date: "2025-02-07",
        startTime: "18:00",
        endTime: "19:30",
        location: "Meditation Chamber",
        type: "Meditation",
        participants: 12,
        maxParticipants: 15,
    },
    {
        id: "t4",
        title: "Starship Systems Engineering",
        instructor: "Knight Marcus Stoneforge",
        date: "2025-02-08",
        startTime: "10:00",
        endTime: "13:00",
        location: "Engineering Lab",
        type: "Technical",
        participants: 6,
        maxParticipants: 8,
    },
];

// ============================================================================
// DATA ACCESS FUNCTIONS
// ============================================================================

export function getPersonnel(filters?: {
    status?: string;
    rank?: string;
    specialty?: string;
}): Personnel[] {
    let result = [...PERSONNEL_DATA];

    if (filters?.status) {
        result = result.filter((p) => p.status === filters.status);
    }
    if (filters?.rank) {
        result = result.filter((p) => p.rank === filters.rank);
    }
    if (filters?.specialty) {
        result = result.filter((p) => p.specialty === filters.specialty);
    }

    return result;
}

export function getMissions(filters?: {
    status?: string;
    priority?: string;
}): Mission[] {
    let result = [...MISSION_DATA];

    if (filters?.status) {
        result = result.filter((m) => m.status === filters.status);
    }
    if (filters?.priority) {
        result = result.filter((m) => m.priority === filters.priority);
    }

    return result;
}

export function getResources(filters?: { category?: string }): Resource[] {
    let result = [...RESOURCE_DATA];

    if (filters?.category) {
        result = result.filter((r) => r.category === filters.category);
    }

    return result;
}

export function getStatistics(): Statistics {
    const activePersonnel = PERSONNEL_DATA.filter(
        (p) => p.status === "Active" || p.status === "On Mission"
    ).length;
    const activeMissions = MISSION_DATA.filter((m) => m.status === "Active")
        .length;
    const completedMissions = MISSION_DATA.filter((m) => m.status === "Completed")
        .length;

    // Calculate resource utilization as average percentage of used capacity
    const utilizationSum = RESOURCE_DATA.reduce(
        (sum, r) => sum + (r.quantity / r.maxQuantity) * 100,
        0
    );
    const resourceUtilization = Math.round(utilizationSum / RESOURCE_DATA.length);

    // Count today's training sessions
    const today = new Date().toISOString().split("T")[0];
    const trainingSessionsToday = TRAINING_DATA.filter(
        (t) => t.date === today
    ).length;

    const activeAlerts = ALERT_DATA.filter((a) => !a.isRead).length;

    return {
        totalPersonnel: PERSONNEL_DATA.length,
        activePersonnel,
        totalMissions: MISSION_DATA.length,
        activeMissions,
        completedMissions,
        resourceUtilization,
        trainingSessionsToday,
        activeAlerts,
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

export function getTrainingSchedule(filters?: { date?: string }): TrainingSession[] {
    let result = [...TRAINING_DATA];

    if (filters?.date) {
        result = result.filter((t) => t.date === filters.date);
    }

    // Sort by date and time
    result.sort((a, b) => {
        const dateCompare = a.date.localeCompare(b.date);
        if (dateCompare !== 0) return dateCompare;
        return a.startTime.localeCompare(b.startTime);
    });

    return result;
}
