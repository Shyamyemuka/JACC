<div align="center">

<img src="public/avatars/assistant-avatar.png" alt="JACC Logo" width="120"/>

# JACC - Jedi Academy Command Center

**An AI-Driven College Assistant with Star Wars Theming**

Built with [Tambo SDK](https://www.tambo.ai) | Next.js | React | TypeScript

</div>

---

## 📖 Overview

**JACC (Jedi Academy Command Center)** is a next-generation generative UI application that combines a futuristic Star Wars-themed interface with powerful college assistant features. Using natural language processing powered by Tambo SDK, JACC allows users to manage their academic life through conversational commands.

### Key Highlights
- 🎨 **Dual Theme System**: Star Wars command center + Modern college assistant
- 🤖 **AI-Powered Interface**: Natural language commands generate contextual UI components
- ⚡ **Real-Time Updates**: Live countdown timers, dynamic dashboards, and instant data
- 🎯 **Interactive Workspace**: Add assignments, set reminders, mark tasks complete
- 🌌 **Stunning Visuals**: Light theme with animated nebula gradients and glassmorphism effects

---

## ✨ Features

### 🎓 College Assistant Features

#### 1. **Assignment Management**
- View all assignments with status tracking (Pending/Completed/Overdue)
- **Mark assignments complete** with one click
- **Color-coded priorities** (High/Medium/Low)
- Duplicate prevention for assignment entries
- Filter by status and due date

#### 2. **Interactive Dashboard** 📊
Our comprehensive **College Dashboard** displays:
- **Quick Stats Grid**: Pending tasks, classes today, upcoming reminders, completion rate
- **Urgent & Upcoming Section**: 
  - Assignments due within 2 days (highlighted in red)
  - Current/next class information
  - Today's reminders
- **Progress Visualization**: Animated completion rate bar
- **Real-time aggregation** of all academic data

#### 3. **Exam Countdown** ⏰
Advanced countdown timer with **color-coded urgency**:
- 🔴 **RED (≤2 days)**: Critical urgency with red glow and "🔥 URGENT" badge
- 🟡 **YELLOW (3-7 days)**: Warning state with amber glow and "⚠️ Soon" badge
- 🟢 **GREEN (>7 days)**: Upcoming with green glow and "✓ Upcoming" badge

**Features**:
- Live countdown (Days, Hours, Minutes) updating every minute
- Progress bars showing time elapsed
- Exam details: location, time, syllabus topics
- Visual glows and shadows matching urgency level

#### 4. **Reminder System**
- Create custom reminders with dates and descriptions
- View upcoming reminders
- Auto-triggered notifications
- Duplicate prevention

#### 5. **Timetable & Schedule**
- **Weekly Timetable**: Complete class schedule by day
- **Today's Schedule**: Current day's classes with live highlighting
- **Current Class Indicator**: Automatic detection of ongoing class
- Time-based color coding for past/current/future classes

#### 6. **Subject Information**
- Detailed subject cards with course codes
- Instructor information
- Class timings and locations

### 🌌 Additional Features

#### System Components
- **Statistics Dashboard**: Academy-wide metrics and overview
- **Alert Panel**: System alerts by severity

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Tambo API key ([Get one here](https://tambo.ai))

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd JACC
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file:
```env
NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key
NEXT_PUBLIC_TAMBO_URL=https://api.tambo.ai
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💬 Usage Examples

### College Assistant Commands

```
"Show my assignments"
"Add assignment: NLP Project due on 2026-02-20"
"Mark Data Visualization assignment complete"
"Show dashboard"
"Show exam countdown"
"When is my exam?"
"Show today's schedule"
"What's my timetable?"
"Show reminders"
"Remind me to submit report on 2026-02-15"
```

### Additional Commands

```
"Show statistics"
"Display alerts"
```

---

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **AI Integration**: Tambo SDK (Generative UI)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Animations**: Framer Motion principles

### Project Structure
```
src/
├── app/                    # Next.js app router
│   ├── chat/              # Main chat interface
│   └── globals.css        # Global styles & theme
├── components/
│   ├── tambo/             # Generative UI components
│   │   ├── assignment-board.tsx
│   │   ├── college-dashboard.tsx
│   │   ├── exam-countdown-enhanced.tsx
│   │   ├── reminder-board.tsx
│   │   ├── timetable-view.tsx
│   │   └── ...
│   └── ui/                # Base UI components
├── context/               # React Context providers
│   └── college-data-context.tsx
├── lib/
│   ├── schemas.ts         # Zod validation schemas
│   └── tambo.ts          # Tambo configuration
└── services/
    └── college-data.ts    # Mock data service
```

### Key Components

#### College Assistant Components
| Component | Description | Intent Triggers |
|-----------|-------------|----------------|
| `AssignmentBoard` | Assignment list with completion | "show assignments", "my tasks" |
| `CollegeDashboard` | Stats overview & urgent items | "dashboard", "overview", "stats" |
| `ExamCountdownEnhanced` | Live exam timers with urgency | "exam countdown", "when is exam" |
| `ReminderBoard` | Personal reminders | "show reminders", "remind me to" |
| `TimetableView` | Weekly class schedule | "timetable", "class schedule" |
| `TodayScheduleView` | Today's classes | "today's schedule", "classes today" |
| `SubjectInfoCard` | Subject details | "subject info", "course details" |
| `AddAssignmentForm` | Create new assignment | "add assignment" |

#### System Components
| Component | Description |
|-----------|-------------|
| `StatsDashboard` | Academy metrics and statistics |
| `AlertPanel` | System notifications and alerts |

---

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#22D3EE) - Headers, links, accents
- **Success**: Green (#10B981) - Completed items
- **Warning**: Amber (#F59E0B) - Pending items
- **Danger**: Red (#EF4444) - Urgent items
- **Background**: Light/white with colorful animated nebula gradients (blue, purple, pink)

### Interactive Elements
- Glassmorphism cards with blur effects
- Smooth hover animations (scale transforms)
- Gradient text for headers
- Color-coded progress bars
- Animated countdown timers

---

## 📝 Features in Detail

### Enhanced Feature Set

#### 1️⃣ Mark Assignment Complete
- **One-click completion**: Click "✓ Complete" button on any assignment
- **Visual feedback**: Strikethrough text, reduced opacity, green badge
- **State persistence**: Updates stored in React Context
- **Smart UI**: Button hidden for already-completed assignments

#### 2️⃣ College Dashboard
**Quick Stats**:
- Pending assignments count
- Classes scheduled today
- Upcoming reminders (next 3 days)
- Overall completion percentage

**Urgent Items**:
- 🔴 Assignments due within 2 days
- 🔵 Current or next class
- 🟣 Today's reminders

**Progress Tracking**:
- Animated progress bar
- Completed vs Pending breakdown
- Real-time calculations

#### 3️⃣ Exam Countdown with Color-Coded Urgency
**Visual Urgency System**:
- **Critical (≤2 days)**: 
  - Red-orange gradient background
  - Red glow shadow effect
  - "🔥 URGENT" badge
  - Red text and borders
  
- **Warning (3-7 days)**:
  - Amber-yellow gradient
  - Yellow glow effect
  - "⚠️ Soon" badge
  - Amber text and borders

- **Safe (>7 days)**:
  - Green-emerald gradient
  - Green glow effect
  - "✓ Upcoming" badge
  - Green text and borders

**Live Countdown**:
- Days, Hours, Minutes display
- Updates every 60 seconds
- Progress bar showing time elapsed
- Sorted by date (nearest first)

**Exam Details**:
- Subject name and code
- Date, time, and location
- Syllabus topics with tags
- Exam type (Final/Mid-term)

---

## 🔧 Configuration

### Tambo Configuration
All components and tools are registered in `src/lib/tambo.ts`:
- Component schemas (Zod validation)
- Intent descriptions for AI matching
- Tool definitions for data fetching

### Mock Data
Sample data is provided in `src/services/college-data.ts`:
- Exam schedules
- Weekly timetable
- Sample assignments
- Default reminders

**To customize**: Edit the mock data arrays or connect to your backend API.

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel deploy
```

**Environment Variables**: Remember to set `NEXT_PUBLIC_TAMBO_API_KEY` in your deployment platform.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational purposes.

---

## 🙏 Acknowledgments

- **Tambo AI** - For the incredible generative UI SDK
- **Vercel** - For Next.js framework
- **Tailwind Labs** - For Tailwind CSS
- **Lucide** - For the beautiful icon library

---

## 📧 Contact

For questions or support, please open an issue in the repository.

---

<div align="center">

**May the Force be with your studies!** 🌌

Built with ❤️ using Tambo SDK

</div>
