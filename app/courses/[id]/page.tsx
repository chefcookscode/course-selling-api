import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseById } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, BarChart2, CheckCircle2, ChevronLeft } from "lucide-react";
import CourseDetailClient from "./CourseDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} — EduVerse`,
    description: course.fullDescription,
  };
}

const badgeVariantMap: Record<
  string,
  "bestseller" | "popular" | "hot" | "trending" | "new"
> = {
  Bestseller: "bestseller",
  Popular: "popular",
  Hot: "hot",
  Trending: "trending",
  New: "new",
};

const levelColorMap: Record<string, string> = {
  Beginner: "text-emerald-400",
  Intermediate: "text-blue-400",
  Advanced: "text-purple-400",
};

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0f1e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Edu<span className="text-orange-500">Verse</span>
            </span>
          </Link>
          <span className="text-slate-600">/</span>
          <Link
            href="/#courses"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            All Courses
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0d1526] to-[#0a0f1e]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
            {/* Left: Course Info */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{course.icon}</span>
                <Badge variant={badgeVariantMap[course.badge] ?? "default"} className="text-sm px-3 py-1">
                  {course.badge}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                {course.fullDescription}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span>{course.duration}</span>
                </div>
                <div className={`flex items-center gap-2 font-medium ${levelColorMap[course.level] ?? "text-slate-400"}`}>
                  <BarChart2 className="h-4 w-4" />
                  {course.level}
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <BookOpen className="h-4 w-4 text-orange-400" />
                  {course.syllabus.length} Modules
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="lg:w-80 xl:w-96 shrink-0">
              <CourseDetailClient course={course} />
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Course <span className="text-orange-500">Syllabus</span>
        </h2>
        <div className="space-y-4">
          {course.syllabus.map((module, idx) => (
            <div
              key={module.module}
              className="rounded-xl border border-white/10 bg-[#0d1526]/80 overflow-hidden"
            >
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-white/3">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-bold shrink-0">
                  {idx + 1}
                </span>
                <h3 className="text-white font-semibold">{module.module}</h3>
              </div>
              <ul className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {module.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-orange-500 mt-1 shrink-0">▸</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} EduVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}
