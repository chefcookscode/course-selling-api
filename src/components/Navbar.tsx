import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0d1f3c] bg-[#060e1e]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <GraduationCap className="w-6 h-6 text-orange-400" />
          EduForge
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[#8899bb]">
          <Link href="/#courses" className="hover:text-white transition-colors">
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}
