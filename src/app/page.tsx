'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { BookOpen, Calendar, Target, FileText, Bell, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Nebula Background - Extended coverage */}
      <div className="fixed inset-0 z-0" style={{ height: '150vh', top: '-20vh' }}>
        <AnimatedShaderBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Column - Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <Spotlight />

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                JACC
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                Jedi Academy Command Center
              </p>
              <p className="text-gray-600 mt-2">
                Your AI-Powered College Assistant
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Why JACC?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Smart Assignment Tracking</h3>
                    <p className="text-gray-600 text-sm">Never miss a deadline with intelligent reminders</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Intelligent Timetable Management</h3>
                    <p className="text-gray-600 text-sm">Auto-sync your schedule and stay organized</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Exam Countdown & Preparation</h3>
                    <p className="text-gray-600 text-sm">Track upcoming exams and prepare effectively</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Study Plan Generation</h3>
                    <p className="text-gray-600 text-sm">AI-generated personalized study schedules</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Smart Reminders</h3>
                    <p className="text-gray-600 text-sm">Context-aware notifications for tasks and events</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">AI-Powered Assistant</h3>
                    <p className="text-gray-600 text-sm">Chat with your intelligent college companion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/chat"
                className="px-6 py-3 rounded-md font-medium shadow-sm transition-colors text-lg bg-[#7FFFC3] hover:bg-[#72e6b0] text-gray-800"
              >
                Go to Chat →
              </a>
              <a
                href="/interactables"
                className="px-6 py-3 rounded-md font-medium shadow-sm transition-colors text-lg bg-[#FFE17F] hover:bg-[#f5d570] text-gray-800"
              >
                Interactables Demo →
              </a>
            </div>
          </div>

          {/* Right Column - 3D Spline Robot */}
          <div className="h-[600px] lg:h-[700px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
