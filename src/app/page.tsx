import Link from "next/link";
import { courses } from "@/lib/courses";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BarChart2,
  Star,
  Users,
  ChevronRight,
  BookOpen,
  Award,
  Zap,
} from "lucide-react";

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0f1e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Edu<span className="text-orange-500">Verse</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <Link href="#courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <Link href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </Link>
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl" />
          <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5" />
            Industry-Aligned Tech Courses
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Build Real Skills.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Launch Your Career.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Expert-led courses in the most in-demand technologies. Structured
            curriculum, hands-on projects, and lifetime access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="#courses">
                Explore Courses <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="#why-us">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Users, label: "Students Enrolled", value: "12,000+" },
              { icon: BookOpen, label: "Expert Courses", value: "5+" },
              { icon: Award, label: "Certificates Issued", value: "8,500+" },
              { icon: Star, label: "Average Rating", value: "4.8/5" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Icon className="h-5 w-5 text-orange-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Courses</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Choose from our carefully crafted courses designed to take you
              from beginner to job-ready professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group flex flex-col hover:border-orange-500/40 hover:shadow-orange-500/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-1 rounded-t-xl bg-gradient-to-r from-orange-600 to-orange-400" />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{course.icon}</div>
                    <Badge variant={badgeVariantMap[course.badge] ?? "default"}>
                      {course.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-300 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 line-clamp-2">
                    {course.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div
                      className={`flex items-center gap-1.5 text-sm font-medium ${
                        levelColorMap[course.level] ?? "text-slate-400"
                      }`}
                    >
                      <BarChart2 className="h-4 w-4" />
                      {course.level}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.syllabus[0].topics.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
                      >
                        {t.split(" ").slice(0, 2).join(" ")}
                      </span>
                    ))}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      +more
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-white">
                      ₹{course.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-slate-500">one-time payment</p>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/courses/${course.id}`}>
                      More Details <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1526]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-500">EduVerse?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Industry-Relevant Curriculum",
                desc: "Our courses are designed in collaboration with industry experts and updated regularly to reflect current market demands.",
              },
              {
                icon: "🛠️",
                title: "Hands-On Projects",
                desc: "Build real-world projects that go directly into your portfolio and demonstrate your skills to potential employers.",
              },
              {
                icon: "🏆",
                title: "Certificate of Completion",
                desc: "Earn a verifiable certificate upon completing the course that you can share on LinkedIn and your resume.",
              },
              {
                icon: "💬",
                title: "Doubt Resolution",
                desc: "Get your questions answered through our dedicated support channels and community forums.",
              },
              {
                icon: "♾️",
                title: "Lifetime Access",
                desc: "Once you purchase a course, you have lifetime access to all materials including future updates at no extra cost.",
              },
              {
                icon: "🚀",
                title: "Career Support",
                desc: "Resume building workshops, mock interviews, and job referrals to help you land your dream tech job.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-orange-500/30 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
              <BookOpen className="h-3 w-3 text-white" />
            </div>
            <span className="text-white font-semibold">
              Edu<span className="text-orange-500">Verse</span>
            </span>
          </div>
          <p>© {new Date().getFullYear()} EduVerse. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
