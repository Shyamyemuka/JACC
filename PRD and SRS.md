**Answer: JACC - Jedi Academy Command Center**

A command center dashboard where users can interact with AI to manage various academy operations through natural language. This is ideal because:
- Multiple components = shows Tambo's capabilities
- Dashboard use case = high impact for "real-world" applications
- Themeable = Star Wars aesthetic
- Achievable in 2 days = focused scope

---

# Software Requirements Specification (SRS)
## JACC - Jedi Academy Command Center

### Document Version: 1.0
### Date: February 6, 2025
### Project Duration: 2 Days (Hackathon)

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document provides a comprehensive description of the JACC (Jedi Academy Command Center) application. JACC is a generative UI application built using the Tambo SDK that allows users to interact with a Star Wars-themed command center through natural language conversations. The AI dynamically renders appropriate UI components based on user intent.

### 1.2 Scope
JACC is a web-based React application that demonstrates the power of Tambo's Generative UI SDK. The application will:
- Provide a conversational interface for managing fictional Jedi Academy operations
- Dynamically render UI components based on natural language input
- Showcase multiple Tambo features including component registration, tools, and streaming
- Feature a Star Wars-inspired visual theme while maintaining clean, readable code

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|------|------------|
| JACC | Jedi Academy Command Center - the application name |
| Tambo | Generative UI SDK for React |
| Generative UI | UI components that are dynamically selected and rendered by AI |
| Component | A reusable React UI element registered with Tambo |
| Tool | A function that Tambo can call to retrieve or manipulate data |
| Padawan | Student/trainee (used in UI theming only) |
| Mission | Task/Project (used in UI theming only) |
| Holocron | Knowledge base/documentation (used in UI theming only) |

### 1.4 References
- Tambo SDK Documentation: https://tambo.co/docs
- Hackathon Page: https://www.wemakedevs.org/hackathons/tambo
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs

### 1.5 Overview
This SRS document is organized into the following sections:
- Section 2: Overall Description
- Section 3: Specific Requirements
- Section 4: External Interface Requirements
- Section 5: System Features
- Section 6: Non-Functional Requirements

---

## 2. Overall Description

### 2.1 Product Perspective

JACC is a standalone web application that interfaces with the Tambo API for AI-powered component rendering. It operates within the following ecosystem:

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                            │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    JACC Application                        │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐│  │
│  │  │   Chat      │  │  Rendered   │  │   Star Wars Theme   ││  │
│  │  │  Interface  │  │  Components │  │   (CSS/Styling)     ││  │
│  │  └──────┬──────┘  └──────▲──────┘  └─────────────────────┘│  │
│  │         │                │                                  │  │
│  │  ┌──────▼────────────────┴──────┐                          │  │
│  │  │      TamboProvider           │                          │  │
│  │  │  (Context & State Mgmt)      │                          │  │
│  │  └──────────────┬───────────────┘                          │  │
│  └─────────────────┼─────────────────────────────────────────┘  │
│                    │                                             │
└────────────────────┼─────────────────────────────────────────────┘
                     │ HTTPS/API Calls
                     ▼
          ┌─────────────────────┐
          │     Tambo API       │
          │  (AI Orchestration) │
          └─────────────────────┘
```

### 2.2 Product Functions

The primary functions of JACC are:

1. **Conversational Interface**: Accept natural language input from users
2. **Component Generation**: Dynamically render appropriate UI components based on user intent
3. **Data Retrieval**: Use tools to fetch relevant data for component population
4. **State Management**: Maintain conversation history and component state
5. **Visual Theming**: Present all UI elements with Star Wars-inspired aesthetics

### 2.3 User Classes and Characteristics

| User Class | Description | Technical Expertise |
|------------|-------------|---------------------|
| Hackathon Judges | Evaluators assessing the project | High |
| Demo Users | People trying the application | Low to Medium |
| Developers | Those examining the code | High |

### 2.4 Operating Environment

- **Client-Side**:
  - Modern web browsers (Chrome, Firefox, Safari, Edge)
  - Desktop and tablet devices (responsive design)
  - Minimum screen width: 768px (optimized for demo)

- **Server-Side**:
  - Next.js 14+ runtime
  - Node.js 18+
  - Vercel deployment (recommended)

- **External Services**:
  - Tambo API (requires API key)

### 2.5 Design and Implementation Constraints

| Constraint | Description |
|------------|-------------|
| Time | 2-day hackathon timeline |
| SDK | Must use Tambo SDK as primary AI orchestration |
| Framework | Next.js with React (Tambo requirement) |
| Styling | Tailwind CSS (included in template) |
| Theming | Star Wars visual theme (UI only, not variable names) |
| Deployment | Must be publicly accessible for judging |

### 2.6 Assumptions and Dependencies

**Assumptions:**
1. Tambo API will be available and responsive during development and judging
2. Users have stable internet connectivity
3. Modern browser features (ES6+, CSS Grid/Flexbox) are supported
4. Judges will test the application in desktop browsers

**Dependencies:**
1. Tambo SDK and API service
2. Next.js framework
3. React 18+
4. Tailwind CSS
5. Zod for schema validation
6. Lucide React for icons

---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 Chat Interface Module

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CHAT-001 | The system shall display a chat input field for user messages | High |
| FR-CHAT-002 | The system shall display sent messages in a conversation thread | High |
| FR-CHAT-003 | The system shall show AI responses with streaming text support | High |
| FR-CHAT-004 | The system shall render AI-selected components inline with messages | High |
| FR-CHAT-005 | The system shall maintain conversation history during the session | Medium |
| FR-CHAT-006 | The system shall display a loading indicator while AI is processing | Medium |
| FR-CHAT-007 | The system shall allow users to clear conversation history | Low |

#### 3.1.2 Personnel Tracker Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-PERSONNEL-001 | The system shall display a list of personnel with their details | High |
| FR-PERSONNEL-002 | Each personnel card shall show: name, rank, status, specialty | High |
| FR-PERSONNEL-003 | The system shall support filtering by status (active, training, on-mission) | Medium |
| FR-PERSONNEL-004 | Each personnel card shall display a skill level indicator | Medium |
| FR-PERSONNEL-005 | The component shall use Star Wars-themed styling (colors, borders) | High |

#### 3.1.3 Mission Briefing Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-MISSION-001 | The system shall display mission details in a card format | High |
| FR-MISSION-002 | Mission cards shall show: title, description, priority, status | High |
| FR-MISSION-003 | The system shall display assigned personnel for each mission | Medium |
| FR-MISSION-004 | Mission cards shall show deadline/timeline information | Medium |
| FR-MISSION-005 | Priority levels shall be visually distinguished (color-coded) | Medium |
| FR-MISSION-006 | The component shall support mission status updates | Low |

#### 3.1.4 Resource Inventory Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-RESOURCE-001 | The system shall display available resources in a grid/list | High |
| FR-RESOURCE-002 | Each resource shall show: name, quantity, category, status | High |
| FR-RESOURCE-003 | Resources shall have visual indicators for low stock | Medium |
| FR-RESOURCE-004 | The component shall support categorization (equipment, supplies, vehicles) | Medium |

#### 3.1.5 Statistics Dashboard Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-STATS-001 | The system shall display key metrics in card format | High |
| FR-STATS-002 | Statistics shall include: total personnel, active missions, resources | High |
| FR-STATS-003 | Each stat card shall show current value and trend indicator | Medium |
| FR-STATS-004 | The dashboard shall have visual charts for data representation | Low |

#### 3.1.6 Training Schedule Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-TRAINING-001 | The system shall display training sessions in a schedule format | High |
| FR-TRAINING-002 | Each session shall show: title, instructor, time, location | High |
| FR-TRAINING-003 | The schedule shall support daily/weekly views | Medium |
| FR-TRAINING-004 | Sessions shall be color-coded by type | Medium |

#### 3.1.7 Alert/Notification Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ALERT-001 | The system shall display alerts with severity levels | High |
| FR-ALERT-002 | Alert levels shall include: info, warning, critical | High |
| FR-ALERT-003 | Each alert shall show: title, message, timestamp | High |
| FR-ALERT-004 | Critical alerts shall have distinct visual treatment | Medium |

#### 3.1.8 Knowledge Base Component

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-KNOWLEDGE-001 | The system shall display information entries in card format | Medium |
| FR-KNOWLEDGE-002 | Each entry shall show: title, category, summary, details | Medium |
| FR-KNOWLEDGE-003 | The component shall support expandable content sections | Low |

#### 3.1.9 Tool Functions

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-TOOL-001 | The system shall provide a tool to retrieve personnel data | High |
| FR-TOOL-002 | The system shall provide a tool to retrieve mission data | High |
| FR-TOOL-003 | The system shall provide a tool to retrieve resource data | High |
| FR-TOOL-004 | The system shall provide a tool to retrieve statistics data | Medium |
| FR-TOOL-005 | The system shall provide a tool to retrieve training schedule data | Medium |
| FR-TOOL-006 | The system shall provide a tool to retrieve alerts data | Medium |
| FR-TOOL-007 | All tools shall return mock data (no real backend required) | High |

### 3.2 Data Requirements

#### 3.2.1 Personnel Data Schema

```
Personnel {
  id: string
  name: string
  rank: string (e.g., "Initiate", "Padawan", "Knight", "Master")
  status: string (e.g., "Active", "Training", "On Mission", "Resting")
  specialty: string (e.g., "Combat", "Healing", "Diplomacy", "Engineering")
  skillLevel: number (1-100)
  joinDate: string (ISO date format)
  currentMission: string | null
  avatarUrl: string (optional)
}
```

#### 3.2.2 Mission Data Schema

```
Mission {
  id: string
  title: string
  description: string
  priority: string ("Low", "Medium", "High", "Critical")
  status: string ("Planning", "Active", "Completed", "On Hold")
  assignedPersonnel: string[]
  startDate: string
  deadline: string
  location: string
  objectives: string[]
  progress: number (0-100)
}
```

#### 3.2.3 Resource Data Schema

```
Resource {
  id: string
  name: string
  category: string ("Equipment", "Supplies", "Vehicles", "Technology")
  quantity: number
  maxQuantity: number
  status: string ("Available", "Low Stock", "Out of Stock", "Reserved")
  location: string
}
```

#### 3.2.4 Training Session Data Schema

```
TrainingSession {
  id: string
  title: string
  instructor: string
  date: string
  startTime: string
  endTime: string
  location: string
  type: string ("Combat", "Meditation", "Diplomacy", "Technical")
  participants: string[]
  maxParticipants: number
}
```

#### 3.2.5 Alert Data Schema

```
Alert {
  id: string
  title: string
  message: string
  severity: string ("Info", "Warning", "Critical")
  timestamp: string
  isRead: boolean
  category: string ("Security", "System", "Personnel", "Mission")
}
```

#### 3.2.6 Statistics Data Schema

```
Statistics {
  totalPersonnel: number
  activePersonnel: number
  totalMissions: number
  activeMissions: number
  completedMissions: number
  resourceUtilization: number (percentage)
  trainingSessionsToday: number
  activeAlerts: number
}
```

---

## 4. External Interface Requirements

### 4.1 User Interfaces

#### 4.1.1 Main Layout

```
┌────────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════════╗ │
│  ║  🌟 JEDI ACADEMY COMMAND CENTER                    [Settings] ║ │
│  ╚═══════════════════════════════════════════════════════════════╝ │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                              │   │
│  │                    RENDERED COMPONENTS                       │   │
│  │                    (Dynamic Content Area)                    │   │
│  │                                                              │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │   │
│  │  │  Component   │  │  Component   │  │  Component   │       │   │
│  │  │      1       │  │      2       │  │      3       │       │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘       │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    CONVERSATION THREAD                       │   │
│  │  ┌─────────────────────────────────────────────────────┐    │   │
│  │  │ User: Show me active missions                        │    │   │
│  │  └─────────────────────────────────────────────────────┘    │   │
│  │  ┌─────────────────────────────────────────────────────┐    │   │
│  │  │ AI: Here are the active missions...                  │    │   │
│  │  │ [MissionBriefing Component Rendered Here]            │    │   │
│  │  └─────────────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  [Type your command here...]                          [Send] │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Quick Commands: [Personnel] [Missions] [Resources] [Stats] │   │
│  └─────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘
```

#### 4.1.2 Color Scheme (Star Wars Theme)

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Background | Deep Space Black | #0a0a0f |
| Secondary Background | Dark Navy | #1a1a2e |
| Card Background | Charcoal | #16213e |
| Primary Accent | Lightsaber Blue | #00d4ff |
| Secondary Accent | Rebel Gold | #ffd700 |
| Warning | Sith Red | #ff4444 |
| Success | Jedi Green | #00ff88 |
| Text Primary | Hologram White | #e8e8e8 |
| Text Secondary | Muted Gray | #8b8b8b |
| Border | Glow Blue | #0f3460 |

#### 4.1.3 Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Headings | Orbitron (Google Fonts) | 24-32px | 700 |
| Subheadings | Inter | 18-20px | 600 |
| Body Text | Inter | 14-16px | 400 |
| Labels | Inter | 12-14px | 500 |
| Monospace | JetBrains Mono | 14px | 400 |

### 4.2 Hardware Interfaces

Not applicable - web-based application.

### 4.3 Software Interfaces

#### 4.3.1 Tambo API Interface

| Attribute | Value |
|-----------|-------|
| Protocol | HTTPS |
| Authentication | API Key (Bearer Token) |
| Data Format | JSON |
| Endpoint | Provided by Tambo SDK |

#### 4.3.2 Component Registration Interface

```typescript
interface ComponentRegistration {
  name: string;
  description: string;
  component: React.ComponentType<any>;
  propsSchema: ZodSchema;
}
```

#### 4.3.3 Tool Registration Interface

```typescript
interface ToolRegistration {
  name: string;
  description: string;
  tool: (...args: any[]) => any;
  inputSchema: ZodSchema;
  outputSchema: ZodSchema;
}
```

### 4.4 Communications Interfaces

| Interface | Protocol | Purpose |
|-----------|----------|---------|
| Client-Server | HTTPS | Tambo API communication |
| WebSocket | WSS | Streaming responses (handled by Tambo SDK) |

---

## 5. System Features

### 5.1 Feature: Natural Language Command Processing

**Description:** Users can type natural language commands to interact with the command center.

**Stimulus/Response Sequences:**

| Stimulus | Response |
|----------|----------|
| "Show me all active personnel" | PersonnelTracker component with filtered active personnel |
| "What missions are in progress?" | MissionBriefing component with active missions |
| "Display resource inventory" | ResourceInventory component with all resources |
| "Give me a status overview" | StatsDashboard component with all metrics |
| "Show today's training schedule" | TrainingSchedule component with today's sessions |
| "Are there any critical alerts?" | AlertPanel component with filtered critical alerts |

### 5.2 Feature: Dynamic Component Rendering

**Description:** The AI selects and renders appropriate UI components based on user intent.

**Priority:** High

**Requirements:**
- FR-CHAT-004
- All component requirements (FR-PERSONNEL-*, FR-MISSION-*, etc.)

### 5.3 Feature: Data Retrieval Tools

**Description:** Tools that Tambo can call to retrieve mock data for populating components.

**Priority:** High

**Requirements:**
- FR-TOOL-001 through FR-TOOL-007

---

## 6. Non-Functional Requirements

### 6.1 Performance Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-PERF-001 | Initial page load time | < 3 seconds |
| NFR-PERF-002 | AI response start (streaming) | < 2 seconds |
| NFR-PERF-003 | Component render time | < 500ms |
| NFR-PERF-004 | Lighthouse Performance Score | > 80 |

### 6.2 Safety Requirements

| ID | Requirement |
|----|-------------|
| NFR-SAFE-001 | API keys shall not be exposed in client-side code |
| NFR-SAFE-002 | All data shall be mock data (no real personal information) |

### 6.3 Security Requirements

| ID | Requirement |
|----|-------------|
| NFR-SEC-001 | Tambo API key shall be stored in environment variables |
| NFR-SEC-002 | HTTPS shall be used for all API communications |
| NFR-SEC-003 | No sensitive data shall be logged to console in production |

### 6.4 Software Quality Attributes

| Attribute | Requirement |
|-----------|-------------|
| Reliability | Application shall handle API errors gracefully with user-friendly messages |
| Maintainability | Code shall follow consistent naming conventions and file structure |
| Portability | Application shall run on all modern browsers (Chrome, Firefox, Safari, Edge) |
| Usability | New users shall be able to send their first command within 30 seconds |
| Testability | Components shall be isolated and independently testable |

### 6.5 Business Rules

| ID | Rule |
|----|------|
| BR-001 | All UI theming shall be Star Wars-inspired but code shall use descriptive, professional names |
| BR-002 | Application shall showcase at least 5 unique Tambo components |
| BR-003 | Application shall demonstrate at least 3 Tambo tools |
| BR-004 | All features shall be accessible via natural language commands |

---

## 7. Appendices

### Appendix A: Sample User Interactions

```
User: "Hello, what can you do?"
AI: "Welcome to the Jedi Academy Command Center! I can help you with:
     - Viewing and managing personnel
     - Tracking missions and their progress
     - Monitoring resource inventory
     - Checking training schedules
     - Viewing alerts and notifications
     - Getting overall academy statistics
     
     Just tell me what you'd like to see!"

User: "Show me personnel who are currently on missions"
AI: "Here are the personnel currently assigned to missions:"
[PersonnelTracker component renders with filtered data]

User: "What's the status of Operation Eclipse?"
AI: "Here are the details for Operation Eclipse:"
[MissionBriefing component renders with specific mission data]

User: "Give me a complete status report"
AI: "Here's your comprehensive status report:"
[StatsDashboard component renders with all metrics]
[AlertPanel component renders with active alerts]
```

### Appendix B: File Structure

```
JACC/
├── .codesandbox/
├── .next/
├── node_modules/
├── public/
│   ├── fonts/
│   │   └── Orbitron-VariableFont.woff2
│   └── images/
│       └── logo.svg
├── src/
│   ├── app/
│   │   ├── chat/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── card.tsx
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── badge.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── command-input.tsx
│   │   ├── tambo/
│   │   │   ├── personnel-tracker.tsx
│   │   │   ├── mission-briefing.tsx
│   │   │   ├── resource-inventory.tsx
│   │   │   ├── stats-dashboard.tsx
│   │   │   ├── training-schedule.tsx
│   │   │   ├── alert-panel.tsx
│   │   │   └── knowledge-base.tsx
│   │   └── chat/
│   │       ├── message-list.tsx
│   │       └── message-item.tsx
│   ├── lib/
│   │   ├── tambo.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── services/
│   │   └── mock-data.ts
│   └── types/
│       └── index.ts
├── .env.local
├── .gitignore
├── CLAUDE.md
├── eslint.config.mjs
├── example.env.local
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

---

# Product Requirements Document (PRD)
## JACC - Jedi Academy Command Center

### Document Version: 1.0
### Date: February 6, 2025
### Product Owner: Hackathon Participant

---

## 1. Executive Summary

### 1.1 Product Vision

JACC (Jedi Academy Command Center) is a generative UI demonstration application that showcases the power of Tambo SDK in building conversational, AI-driven interfaces. Wrapped in an engaging Star Wars theme, JACC allows users to manage a fictional Jedi Academy through natural language commands, with the AI dynamically rendering appropriate UI components.

### 1.2 Problem Statement

Traditional applications force users to learn complex interfaces, navigate through menus, and understand the application structure. This creates friction, especially for:
- New users unfamiliar with the system
- Users who need quick access to information
- Users who prefer natural interaction over point-and-click

### 1.3 Solution

JACC demonstrates how generative UI solves these problems by:
- Accepting natural language input
- Letting AI decide which components to display
- Rendering dynamic, contextual interfaces
- Reducing the learning curve to zero

### 1.4 Target Hackathon Criteria Alignment

| Criteria | How JACC Addresses It |
|----------|----------------------|
| Potential Impact | Command center/dashboard use case applicable to real businesses |
| Creativity & Originality | Unique Star Wars theming with comprehensive component set |
| Learning & Growth | First implementation using Tambo SDK with multiple features |
| Technical Implementation | Multiple components, tools, streaming, and proper architecture |
| Aesthetics & UX | Polished Star Wars theme with intuitive conversational interface |
| Best Use of Tambo | Demonstrates 7 components and 6 tools with natural language |

---

## 2. Product Overview

### 2.1 Product Name
**JACC - Jedi Academy Command Center**

### 2.2 Tagline
*"Your command, the Force executes."*

### 2.3 Product Description

JACC is an AI-powered command center interface where users interact through natural language. Instead of clicking through menus, users simply describe what they want to see, and the AI renders the appropriate dashboard components with relevant data.

The application is themed as a Jedi Academy management system, making the demo engaging and memorable while demonstrating serious real-world applications like:
- HR dashboards
- Project management tools
- Resource allocation systems
- Monitoring consoles

### 2.4 Key Features Summary

| Feature | Description |
|---------|-------------|
| Conversational Interface | Chat-based interaction for all operations |
| Personnel Management | View and filter academy personnel |
| Mission Tracking | Monitor ongoing and planned missions |
| Resource Monitoring | Track inventory and supplies |
| Statistics Dashboard | Overview of key metrics |
| Training Scheduler | View and manage training sessions |
| Alert System | Critical notifications and warnings |
| Knowledge Base | Information repository |

---

## 3. User Personas

### 3.1 Primary Persona: Demo User (Hackathon Judge)

**Name:** Alex the Evaluator

**Background:**
- Technical background (developer or product person)
- Evaluating multiple hackathon projects
- Limited time per project (5-10 minutes)
- Looking for innovation, polish, and Tambo usage

**Goals:**
- Quickly understand what the app does
- See impressive Tambo integration
- Test the AI's understanding and component selection
- Evaluate code quality and architecture

**Pain Points:**
- Limited time to explore
- Seen many similar demos
- Wants to be impressed quickly

**What JACC Provides:**
- Clear introduction and quick commands
- Visually impressive Star Wars theme
- Multiple components to explore
- Clean, well-documented code

### 3.2 Secondary Persona: General Demo User

**Name:** Sam the Explorer

**Background:**
- May or may not be technical
- Curious about AI and generative UI
- First time seeing Tambo in action

**Goals:**
- Have fun interacting with the app
- See AI "magic" in action
- Understand the potential of generative UI

**What JACC Provides:**
- Engaging Star Wars theme
- Forgiving natural language processing
- Quick command buttons for easy start
- Impressive visual feedback

---

## 4. Feature Requirements

### 4.1 Feature: Conversational Command Interface

**Priority:** P0 (Must Have)

**User Story:**
As a user, I want to type natural language commands so that I can get information without learning the interface.

**Acceptance Criteria:**
- [ ] Chat input field is prominently displayed
- [ ] Messages appear in a scrollable conversation thread
- [ ] User messages are visually distinct from AI responses
- [ ] Loading indicator shows while AI is processing
- [ ] Quick command buttons provide one-click common actions

**UI Components:**
- Command input with send button
- Message thread container
- Message bubbles (user and AI variants)
- Loading spinner/animation
- Quick command button bar

### 4.2 Feature: Personnel Tracker

**Priority:** P0 (Must Have)

**User Story:**
As a user, I want to see personnel information so that I can understand who is available and their current status.

**Acceptance Criteria:**
- [ ] Personnel displayed in card grid format
- [ ] Each card shows: name, rank, status, specialty
- [ ] Status has color-coded indicators
- [ ] Skill level shown as progress bar
- [ ] Optional filter chips for status

**Sample Prompt Triggers:**
- "Show me all personnel"
- "Who is currently active?"
- "List the combat specialists"
- "How many masters do we have?"

**Props Schema:**
```typescript
{
  personnel: [{
    id: string,
    name: string,
    rank: string,
    status: string,
    specialty: string,
    skillLevel: number
  }],
  title?: string,
  filterByStatus?: string
}
```

### 4.3 Feature: Mission Briefing

**Priority:** P0 (Must Have)

**User Story:**
As a user, I want to view mission details so that I can track ongoing operations.

**Acceptance Criteria:**
- [ ] Mission cards with clear hierarchy
- [ ] Priority visually distinguished (color + icon)
- [ ] Progress bar for mission completion
- [ ] Assigned personnel listed
- [ ] Deadline/timeline visible

**Sample Prompt Triggers:**
- "Show me active missions"
- "What's the status of high priority missions?"
- "Show mission details for Operation Eclipse"
- "Which missions are behind schedule?"

**Props Schema:**
```typescript
{
  missions: [{
    id: string,
    title: string,
    description: string,
    priority: "Low" | "Medium" | "High" | "Critical",
    status: string,
    progress: number,
    assignedPersonnel: string[],
    deadline: string
  }],
  title?: string
}
```

### 4.4 Feature: Resource Inventory

**Priority:** P1 (Should Have)

**User Story:**
As a user, I want to see resource levels so that I can ensure adequate supplies.

**Acceptance Criteria:**
- [ ] Resources displayed in categorized grid
- [ ] Quantity shown with max capacity
- [ ] Low stock items highlighted
- [ ] Category icons/badges
- [ ] Status indicators

**Sample Prompt Triggers:**
- "Show inventory"
- "What resources are running low?"
- "Display equipment list"
- "Check vehicle availability"

**Props Schema:**
```typescript
{
  resources: [{
    id: string,
    name: string,
    category: string,
    quantity: number,
    maxQuantity: number,
    status: string
  }],
  title?: string,
  filterByCategory?: string
}
```

### 4.5 Feature: Statistics Dashboard

**Priority:** P1 (Should Have)

**User Story:**
As a user, I want to see key metrics at a glance so that I can understand the overall status.

**Acceptance Criteria:**
- [ ] Stat cards with icons
- [ ] Current values prominently displayed
- [ ] Trend indicators (up/down arrows)
- [ ] Clean grid layout
- [ ] Optional mini charts

**Sample Prompt Triggers:**
- "Give me a status overview"
- "Show statistics"
- "What's our current capacity?"
- "Dashboard please"

**Props Schema:**
```typescript
{
  stats: {
    totalPersonnel: number,
    activePersonnel: number,
    totalMissions: number,
    activeMissions: number,
    completedMissions: number,
    resourceUtilization: number,
    trainingSessionsToday: number,
    activeAlerts: number
  }
}
```

### 4.6 Feature: Training Schedule

**Priority:** P2 (Nice to Have)

**User Story:**
As a user, I want to see training sessions so that I can plan attendance.

**Acceptance Criteria:**
- [ ] Schedule displayed in timeline/list format
- [ ] Sessions color-coded by type
- [ ] Time and location clearly visible
- [ ] Instructor and participant count shown
- [ ] Today's sessions highlighted

**Sample Prompt Triggers:**
- "Show training schedule"
- "What training sessions are today?"
- "When is combat training?"
- "Who's instructing meditation?"

**Props Schema:**
```typescript
{
  sessions: [{
    id: string,
    title: string,
    instructor: string,
    date: string,
    startTime: string,
    endTime: string,
    location: string,
    type: string,
    participants: number,
    maxParticipants: number
  }],
  date?: string
}
```

### 4.7 Feature: Alert Panel

**Priority:** P1 (Should Have)

**User Story:**
As a user, I want to see alerts and notifications so that I'm aware of important information.

**Acceptance Criteria:**
- [ ] Alerts listed with severity indicators
- [ ] Critical alerts visually prominent
- [ ] Timestamp for each alert
- [ ] Category badges
- [ ] Clear hierarchy by severity

**Sample Prompt Triggers:**
- "Any alerts?"
- "Show critical notifications"
- "What security alerts are there?"
- "System status?"

**Props Schema:**
```typescript
{
  alerts: [{
    id: string,
    title: string,
    message: string,
    severity: "Info" | "Warning" | "Critical",
    timestamp: string,
    category: string
  }],
  filterBySeverity?: string
}
```

### 4.8 Feature: Knowledge Base

**Priority:** P2 (Nice to Have)

**User Story:**
As a user, I want to access information about academy topics.

**Acceptance Criteria:**
- [ ] Information cards with categories
- [ ] Expandable content sections
- [ ] Search/filter capability implied through chat
- [ ] Clear formatting

**Sample Prompt Triggers:**
- "Tell me about lightsaber forms"
- "What's the history of the academy?"
- "Explain the training protocols"

**Props Schema:**
```typescript
{
  entries: [{
    id: string,
    title: string,
    category: string,
    summary: string,
    content: string
  }],
  topic?: string
}
```

---

## 5. Technical Requirements

### 5.1 Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| UI Library | React 18+ |
| Styling | Tailwind CSS |
| AI SDK | Tambo SDK |
| Schema Validation | Zod |
| Icons | Lucide React |
| Fonts | Orbitron (headings), Inter (body) |

### 5.2 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Next.js Application                       │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                      App Layer                             │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐    │  │
│  │  │   Layout    │  │    Pages    │  │   Global Styles │    │  │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘    │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    Component Layer                         │  │
│  │  ┌──────────────┐  ┌───────────────┐  ┌────────────────┐  │  │
│  │  │ UI Components│  │Tambo Components│  │ Chat Components│  │  │
│  │  │  (Generic)   │  │  (Registered)  │  │   (Messages)   │  │  │
│  │  └──────────────┘  └───────────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                     Service Layer                          │  │
│  │  ┌──────────────┐  ┌───────────────┐  ┌────────────────┐  │  │
│  │  │  Mock Data   │  │ Tambo Config  │  │   Utilities    │  │  │
│  │  │   Service    │  │   (tools +    │  │   (helpers)    │  │  │
│  │  │              │  │  components)  │  │                │  │  │
│  │  └──────────────┘  └───────────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    Provider Layer                          │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │              TamboProvider (Context)                 │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Tambo API     │
                    └─────────────────┘
```

### 5.3 Tambo Integration

#### 5.3.1 Component Registration

All custom components must be registered with Tambo:

```typescript
// src/lib/tambo.ts
export const components = [
  {
    name: "PersonnelTracker",
    description: "Displays a list of personnel with their details, rank, status, and specialty",
    component: PersonnelTracker,
    propsSchema: personnelTrackerSchema
  },
  // ... additional components
];
```

#### 5.3.2 Tool Registration

All tools must be registered with proper schemas:

```typescript
// src/lib/tambo.ts
export const tools = [
  {
    name: "get-personnel",
    description: "Retrieves a list of all personnel in the academy",
    tool: () => mockPersonnelData,
    inputSchema: z.object({}),
    outputSchema: z.array(personnelSchema)
  },
  // ... additional tools
];
```

### 5.4 Deployment Requirements

| Requirement | Specification |
|-------------|---------------|
| Hosting | Vercel (recommended) |
| Environment Variables | TAMBO_API_KEY |
| Build Command | npm run build |
| Output | Static + Serverless Functions |
| Domain | Vercel subdomain or custom |

---

## 6. Design Specifications

### 6.1 Visual Design

#### 6.1.1 Theme: Star Wars Command Center

The design draws inspiration from Star Wars control rooms and interfaces while maintaining usability:

- **Dark Mode Only**: Deep space backgrounds
- **Holographic Elements**: Glow effects, transparency
- **Clean Typography**: Readable despite theming
- **Subtle Animations**: Scanning lines, pulsing effects (subtle)

#### 6.1.2 Component Visual Style

**Card Components:**
```
┌─────────────────────────────────────┐
│ ═══════════════════════════════════ │  ← Glowing border top
│                                     │
│  [Icon] TITLE                       │
│  ─────────────────                  │  ← Subtle divider
│                                     │
│  Content area with clean            │
│  typography and good spacing        │
│                                     │
│  [Status Badge]  [Action Button]    │
│                                     │
│ ═══════════════════════════════════ │  ← Glowing border bottom
└─────────────────────────────────────┘
```

**Color Usage:**
- Blue (#00d4ff) for primary actions and accents
- Gold (#ffd700) for important items and highlights
- Red (#ff4444) for critical/warning states
- Green (#00ff88) for success/active states
- Gray (#8b8b8b) for secondary information

### 6.2 Responsive Design

**Target Breakpoints:**

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Desktop | 1024px+ | Full layout with sidebars |
| Tablet | 768px - 1023px | Collapsed sidebar, full content |
| Mobile | < 768px | Stack layout (out of scope for hackathon) |

### 6.3 Accessibility Considerations

| Consideration | Implementation |
|---------------|----------------|
| Color Contrast | Minimum 4.5:1 for text |
| Focus States | Visible focus indicators |
| Keyboard Navigation | All interactive elements accessible |
| Screen Readers | Semantic HTML, ARIA labels |

---

## 7. Development Timeline

### 7.1 Two-Day Sprint Plan

#### Day 1: Foundation (8-10 hours)

| Hour | Task | Deliverable |
|------|------|-------------|
| 0-1 | Project setup | Running Tambo template |
| 1-2 | Theme setup | Colors, fonts, global styles |
| 2-4 | Core components (2) | PersonnelTracker, MissionBriefing |
| 4-5 | Tool implementation (2) | get-personnel, get-missions |
| 5-6 | Chat interface styling | Themed message list |
| 6-8 | Layout components | Header, main structure |
| 8-9 | Integration testing | Components render via chat |
| 9-10 | Bug fixes | Resolve issues |

#### Day 2: Polish & Complete (8-10 hours)

| Hour | Task | Deliverable |
|------|------|-------------|
| 0-2 | Additional components (2-3) | ResourceInventory, StatsDashboard, AlertPanel |
| 2-3 | Additional tools (2-3) | get-resources, get-stats, get-alerts |
| 3-4 | Quick command buttons | Button bar with common actions |
| 4-5 | Welcome/intro experience | Opening message, suggestions |
| 5-7 | Visual polish | Animations, hover states, refinements |
| 7-8 | Deployment | Vercel deployment and testing |
| 8-9 | README & documentation | Project documentation |
| 9-10 | Final testing | End-to-end testing, screenshots |

### 7.2 Priority Breakdown

**Must Complete (P0):**
- [ ] Chat interface with Tambo integration
- [ ] PersonnelTracker component + tool
- [ ] MissionBriefing component + tool
- [ ] Star Wars theme (colors, fonts, basic styling)
- [ ] Deployment

**Should Complete (P1):**
- [ ] ResourceInventory component + tool
- [ ] StatsDashboard component + tool
- [ ] AlertPanel component + tool
- [ ] Quick command buttons
- [ ] Welcome experience

**Nice to Have (P2):**
- [ ] TrainingSchedule component + tool
- [ ] KnowledgeBase component
- [ ] Animations and effects
- [ ] Advanced filtering
- [ ] Sound effects (subtle)

---

## 8. Success Metrics

### 8.1 Hackathon Success Criteria

| Metric | Target |
|--------|--------|
| Components Registered | ≥ 5 |
| Tools Implemented | ≥ 4 |
| Distinct Commands Handled | ≥ 10 |
| UI Polish Level | Cohesive Star Wars theme |
| Deployment | Working public URL |
| Documentation | Complete README |

### 8.2 Demo Success Criteria

| Scenario | Expected Outcome |
|----------|------------------|
| First impression | "Wow, this looks cool!" |
| First command | Component renders within 3 seconds |
| Exploring features | Multiple components discovered |
| Technical review | Clean code, good architecture |
| Overall impression | Memorable and well-executed |

---

## 9. Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Tambo API downtime | Low | High | Test early, have fallback message |
| Time overrun on styling | Medium | Medium | Use Tailwind utilities, minimal custom CSS |
| Component complexity | Medium | Medium | Start simple, iterate |
| Streaming issues | Low | Medium | Follow Tambo docs exactly |
| Deployment issues | Low | High | Deploy early on Day 1 |

---

## 10. Post-Hackathon Opportunities

If the project is well-received, potential extensions include:

1. **Real Backend Integration**: Connect to actual databases
2. **User Authentication**: Personal command centers
3. **Custom Themes**: Beyond Star Wars (Cyberpunk, Retro, etc.)
4. **Voice Commands**: Speech-to-text integration
5. **Mobile Optimization**: Full responsive design
6. **Collaboration**: Multi-user command centers

---

## Appendix A: Sample Mock Data

### Personnel Data
```javascript
[
  {
    id: "p1",
    name: "Aria Sunstrider",
    rank: "Jedi Knight",
    status: "Active",
    specialty: "Combat",
    skillLevel: 85,
    joinDate: "2022-03-15",
    currentMission: null
  },
  {
    id: "p2",
    name: "Kael Windwalker",
    rank: "Padawan",
    status: "Training",
    specialty: "Diplomacy",
    skillLevel: 45,
    joinDate: "2024-01-10",
    currentMission: null
  },
  // ... more personnel
]
```

### Mission Data
```javascript
[
  {
    id: "m1",
    title: "Operation Eclipse",
    description: "Investigate disturbances in the Outer Rim territories",
    priority: "High",
    status: "Active",
    progress: 65,
    assignedPersonnel: ["Aria Sunstrider", "Marcus Stone"],
    deadline: "2025-02-15",
    location: "Outer Rim"
  },
  // ... more missions
]
```

---

## Appendix B: Command Examples for Testing

```
1. "Hello" / "What can you do?"
   → Welcome message with capabilities

2. "Show me all personnel"
   → PersonnelTracker with all data

3. "Who is currently on a mission?"
   → PersonnelTracker filtered by status

4. "Show active missions"
   → MissionBriefing with active missions

5. "What's the status of Operation Eclipse?"
   → MissionBriefing for specific mission

6. "Give me a status overview"
   → StatsDashboard

7. "Check inventory"
   → ResourceInventory

8. "Any critical alerts?"
   → AlertPanel filtered by severity

9. "What training sessions are today?"
   → TrainingSchedule

10. "Show me everything"
    → Multiple components rendered
```

---

This completes the detailed SRS and PRD for JACC. Ready to proceed with implementation when you are!


# Great Question - Let Me Clarify and Correct

You're absolutely right to ask this. Let me be **crystal clear** about the approach:

## The Correct Approach (Tambo-First)

```
┌─────────────────────────────────────────────────────────────────┐
│                    HOW JACC SHOULD WORK                         │
│                                                                 │
│   User Types: "Show me personnel"                               │
│                      │                                          │
│                      ▼                                          │
│              ┌──────────────┐                                   │
│              │  Tambo API   │  ← AI decides which component     │
│              └──────┬───────┘                                   │
│                     │                                           │
│                     ▼                                           │
│         ┌─────────────────────┐                                 │
│         │ Renders Personnel   │  ← Component appears in chat    │
│         │ Tracker Component   │                                 │
│         └─────────────────────┘                                 │
│                                                                 │
│   ❌ NOT: Click "Personnel" button → Show PersonnelTracker     │
│   ✅ YES: Type/say what you want → AI renders component         │
└─────────────────────────────────────────────────────────────────┘
```

## What I Got RIGHT in the SRS/PRD:

1. ✅ Using `npm create tambo-app@latest` as the starting point
2. ✅ Registering components with Tambo (name, description, propsSchema)
3. ✅ Registering tools for data fetching
4. ✅ Components rendered by AI based on conversation

## What Needs CLARIFICATION/CORRECTION:

### ❌ WRONG Interpretation of My Layout:

If you interpreted my layout as having a traditional sidebar or navigation:

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
├──────────┬───────────────────────────────────┤
│ SIDEBAR  │                                   │
│ [Person] │     MAIN CONTENT AREA             │  ← WRONG! This is 
│ [Mission]│     (clicking sidebar changes     │    traditional UI,
│ [Stats]  │      this area)                   │    NOT generative UI
│          │                                   │
└──────────┴───────────────────────────────────┘
```

### ✅ CORRECT Layout (100% Tambo-Driven):

```
┌─────────────────────────────────────────────────────────────────┐
│  ═══════════════════════════════════════════════════════════    │
│  🌟 JEDI ACADEMY COMMAND CENTER                                 │
│  ═══════════════════════════════════════════════════════════    │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  CHAT CONVERSATION                         │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │ 🤖 Welcome to JACC! I can help you manage the        │ │  │
│  │  │    academy. Try asking about personnel, missions,    │ │  │
│  │  │    resources, or training schedules.                 │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │ 👤 Show me all active personnel                       │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │ 🤖 Here are the active personnel:                     │ │  │
│  │  │                                                       │ │  │
│  │  │  ┌─────────────────────────────────────────────────┐ │ │  │
│  │  │  │  ╔═══════════════════════════════════════════╗  │ │ │  │
│  │  │  │  ║  PERSONNEL TRACKER                        ║  │ │ │  │
│  │  │  │  ║  ┌─────────┐ ┌─────────┐ ┌─────────┐      ║  │ │ │  │
│  │  │  │  ║  │ Aria S. │ │ Kael W. │ │ Zara M. │      ║  │ │ │  │
│  │  │  │  ║  │ Knight  │ │ Padawan │ │ Master  │      ║  │ │ │  │
│  │  │  │  ║  │ Active  │ │ Active  │ │ Active  │      ║  │ │ │  │
│  │  │  │  ║  └─────────┘ └─────────┘ └─────────┘      ║  │ │ │  │
│  │  │  │  ╚═══════════════════════════════════════════╝  │ │ │  │
│  │  │  └─────────────────────────────────────────────────┘ │ │  │
│  │  │                                                       │ │  │
│  │  │  ↑ THIS COMPONENT WAS RENDERED BY TAMBO AI           │ │  │
│  │  │    based on the user's natural language request      │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  │                                                            │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ [Type your command...]                            [Send]  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Suggestions: [Show personnel] [Active missions] [Stats]  │  │
│  └───────────────────────────────────────────────────────────┘  │
│        ↑                                                        │
│   These buttons just SEND A MESSAGE to the chat                 │
│   They don't directly render components!                        │
│   onClick={() => sendMessage("Show me all personnel")}          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Updated/Corrected Understanding

### The Architecture is 100% Tambo-Driven:

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATA FLOW                                 │
│                                                                  │
│  1. User types: "Show missions"                                  │
│           │                                                      │
│           ▼                                                      │
│  2. useTamboThreadInput() sends to Tambo API                     │
│           │                                                      │
│           ▼                                                      │
│  3. Tambo AI processes:                                          │
│     - Understands intent: "user wants to see missions"           │
│     - Calls tool: get-missions()                                 │
│     - Selects component: MissionBriefing                         │
│     - Generates props from tool result                           │
│           │                                                      │
│           ▼                                                      │
│  4. Tambo streams response back:                                 │
│     - Text: "Here are the current missions:"                     │
│     - Component: <MissionBriefing missions={[...]} />            │
│           │                                                      │
│           ▼                                                      │
│  5. UI renders in chat thread with component embedded            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### There is NO:
- ❌ Traditional page navigation (/personnel, /missions, /stats)
- ❌ Sidebar with clickable menu items
- ❌ Direct component rendering without Tambo
- ❌ Manual state management for which component to show

### There IS:
- ✅ Single chat interface
- ✅ All components rendered INSIDE the chat thread
- ✅ Tambo AI deciding what to show
- ✅ Tools fetching data for components
- ✅ Streaming responses with progressive rendering

---

## Corrected File Structure

```
JACC/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Redirects to /chat OR is the chat page
│   │   ├── chat/
│   │   │   └── page.tsx          # Main (and ONLY) page - the chat interface
│   │   ├── layout.tsx            # Root layout with TamboProvider
│   │   └── globals.css           # Star Wars theme styles
│   │
│   ├── components/
│   │   ├── ui/                   # Generic styled components
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── progress-bar.tsx
│   │   │
│   │   ├── chat/                 # Chat-specific components
│   │   │   ├── chat-container.tsx    # The main chat wrapper
│   │   │   ├── message-list.tsx      # Scrollable message area
│   │   │   ├── message-bubble.tsx    # Individual message (user or AI)
│   │   │   ├── chat-input.tsx        # Input field + send button
│   │   │   └── suggestion-chips.tsx  # Quick command buttons
│   │   │
│   │   └── generative/           # TAMBO-RENDERED COMPONENTS
│   │       │                     # These are ONLY rendered by Tambo AI
│   │       │                     # Never manually instantiated
│   │       │
│   │       ├── personnel-tracker.tsx
│   │       ├── mission-briefing.tsx
│   │       ├── resource-inventory.tsx
│   │       ├── stats-dashboard.tsx
│   │       ├── training-schedule.tsx
│   │       ├── alert-panel.tsx
│   │       └── knowledge-entry.tsx
│   │
│   ├── lib/
│   │   ├── tambo.ts              # Component & Tool registration
│   │   ├── schemas.ts            # Zod schemas for props
│   │   └── utils.ts              # Helper functions
│   │
│   ├── data/
│   │   └── mock-data.ts          # Static mock data for tools
│   │
│   └── types/
│       └── index.ts              # TypeScript interfaces
```

---

## Corrected Code Flow Example

### 1. The Chat Page (The ONLY Page)

```tsx
// src/app/chat/page.tsx
"use client";

import { TamboProvider } from "@tambo-ai/react";
import { ChatContainer } from "@/components/chat/chat-container";
import { components, tools } from "@/lib/tambo";

export default function ChatPage() {
  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}  // Registered generative components
      tools={tools}            // Registered data-fetching tools
    >
      <div className="min-h-screen bg-space-black">
        <Header />
        <ChatContainer />      {/* This is the ENTIRE app */}
      </div>
    </TamboProvider>
  );
}
```

### 2. The Chat Container

```tsx
// src/components/chat/chat-container.tsx
"use client";

import { useTamboThread } from "@tambo-ai/react";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";
import { SuggestionChips } from "./suggestion-chips";

export function ChatContainer() {
  const { thread, sendMessage, isLoading } = useTamboThread();
  
  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Messages with Tambo-rendered components */}
      <MessageList messages={thread.messages} />
      
      {/* Input for natural language */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
      
      {/* Quick suggestions - these just call sendMessage() */}
      <SuggestionChips onSelect={(msg) => sendMessage(msg)} />
    </div>
  );
}
```

### 3. Suggestion Chips (NOT Navigation!)

```tsx
// src/components/chat/suggestion-chips.tsx
"use client";

interface SuggestionChipsProps {
  onSelect: (message: string) => void;
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  const suggestions = [
    { label: "Show Personnel", message: "Show me all personnel" },
    { label: "Active Missions", message: "What missions are currently active?" },
    { label: "Resources", message: "Display the resource inventory" },
    { label: "Status Report", message: "Give me a full status report" },
  ];
  
  return (
    <div className="flex gap-2 p-4">
      {suggestions.map((s) => (
        <button
          key={s.label}
          onClick={() => onSelect(s.message)}  // Sends message to Tambo!
          className="px-4 py-2 bg-blue-900/50 text-cyan-400 rounded-lg 
                     border border-cyan-500/30 hover:bg-blue-800/50"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
```

### 4. Tambo Registration (The Core)

```tsx
// src/lib/tambo.ts
import { z } from "zod";
import PersonnelTracker from "@/components/generative/personnel-tracker";
import MissionBriefing from "@/components/generative/mission-briefing";
import { getPersonnel, getMissions } from "@/data/mock-data";

export const components = [
  {
    name: "PersonnelTracker",
    description: "Displays a grid of personnel cards showing name, rank, status, and specialty. Use this when the user asks about personnel, team members, or staff.",
    component: PersonnelTracker,
    propsSchema: z.object({
      personnel: z.array(z.object({
        id: z.string(),
        name: z.string(),
        rank: z.string(),
        status: z.string(),
        specialty: z.string(),
        skillLevel: z.number(),
      })),
      title: z.string().optional(),
    }),
  },
  {
    name: "MissionBriefing",
    description: "Displays mission cards with details like title, priority, status, and progress. Use when the user asks about missions, operations, or tasks.",
    component: MissionBriefing,
    propsSchema: z.object({
      missions: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        priority: z.enum(["Low", "Medium", "High", "Critical"]),
        status: z.string(),
        progress: z.number(),
      })),
      title: z.string().optional(),
    }),
  },
  // ... more components
];

export const tools = [
  {
    name: "get-personnel",
    description: "Retrieves the list of all personnel. Call this when you need personnel data to display in the PersonnelTracker component.",
    tool: getPersonnel,  // Returns mock data
    inputSchema: z.object({
      status: z.string().optional().describe("Filter by status: Active, Training, On Mission"),
    }),
    outputSchema: z.array(z.object({
      id: z.string(),
      name: z.string(),
      rank: z.string(),
      status: z.string(),
      specialty: z.string(),
      skillLevel: z.number(),
    })),
  },
  {
    name: "get-missions",
    description: "Retrieves the list of all missions. Call this when you need mission data to display in the MissionBriefing component.",
    tool: getMissions,
    inputSchema: z.object({
      status: z.string().optional().describe("Filter by status: Active, Planning, Completed"),
      priority: z.string().optional().describe("Filter by priority: Low, Medium, High, Critical"),
    }),
    outputSchema: z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      priority: z.string(),
      status: z.string(),
      progress: z.number(),
    })),
  },
  // ... more tools
];
```

---

## Summary: YES, It's Tambo-First

| Aspect | Approach |
|--------|----------|
| Project Setup | `npm create tambo-app@latest JACC` |
| Main Interaction | Chat interface only |
| Component Rendering | 100% by Tambo AI |
| Navigation | None (single page) |
| Data Fetching | Via Tambo tools |
| User Input | Natural language + suggestion buttons |
| Suggestion Buttons | Send chat messages (not navigation) |

**The app IS the chat. The chat IS the app.**

There's no "build UI first, integrate Tambo later" – you're building a chat interface where Tambo is the engine that renders everything.

---


