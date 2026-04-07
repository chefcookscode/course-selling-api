import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { Navbar } from "@/components/Navbar";
import { GraduationCap, Zap, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--background)" }}>
      <Navbar />
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-700/40 bg-orange-900/10 text-orange-300 text-sm mb-6">
            <Zap className="w-3.5 h-3.5" /> Industry-ready courses · Limited seats
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Launch Your <span className="gradient-text">Tech Career</span>
          </h1>
          <p className="text-lg text-[#8899bb] max-w-2xl mx-auto mb-10">
            Master in-demand skills with hands-on projects, expert mentors, and industry certificates.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {[
              { icon: <GraduationCap className="w-5 h-5" />, value: "15,000+", label: "Students Enrolled" },
              { icon: <Award className="w-5 h-5" />, value: "5", label: "Expert Courses" },
              { icon: <Zap className="w-5 h-5" />, value: "98%", label: "Placement Rate" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-[#a0b0cc]">
                <span className="text-[#e06000]">{s.icon}</span>
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
