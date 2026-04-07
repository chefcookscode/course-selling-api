import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#0d1f3c] bg-[#04080f]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e06000] to-[#b34d00] flex items-center justify-center shadow-lg shadow-orange-900/40">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Edu<span className="text-[#e06000]">Forge</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-[#a0b0cc] hover:text-white transition-colors duration-150">
              Courses
            </Link>
            <Link href="#" className="text-sm text-[#a0b0cc] hover:text-white transition-colors duration-150">
              About
            </Link>
            <Link href="#" className="text-sm text-[#a0b0cc] hover:text-white transition-colors duration-150">
              Contact
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs text-[#8899bb] border border-[#0d1f3c] rounded-full px-3 py-1">
              🔥 Enroll Today
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
