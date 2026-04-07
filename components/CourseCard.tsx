"use client";

import Link from "next/link";
import { Course } from "@/lib/courses";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, TrendingUp, ChevronRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <Card className="card-glow flex flex-col h-full relative overflow-hidden group hover:border-orange-700/50 transition-all duration-300">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e06000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Discount badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="text-xs font-bold bg-[#e06000] text-white px-2 py-1 rounded-full">
          {discount}% OFF
        </span>
      </div>

      <CardHeader className="pb-3">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d1f3c] to-[#1a3460] flex items-center justify-center text-3xl mb-3 border border-[#1a3460] group-hover:border-orange-800/50 transition-colors duration-300 shadow-lg">
          {course.icon}
        </div>

        <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-200 pr-12">
          {course.title}
        </CardTitle>
        <p className="text-xs text-[#8899bb] mt-1 leading-relaxed">{course.tagline}</p>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 rounded-lg bg-[#04080f]/60 border border-[#0d1f3c]">
            <Clock className="w-3.5 h-3.5 text-[#e06000] mb-1" />
            <span className="text-[10px] text-[#8899bb]">Duration</span>
            <span className="text-xs font-semibold text-white text-center leading-tight">{course.duration}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-[#04080f]/60 border border-[#0d1f3c]">
            <TrendingUp className="w-3.5 h-3.5 text-[#e06000] mb-1" />
            <span className="text-[10px] text-[#8899bb]">Level</span>
            <span className="text-[10px] font-semibold text-white text-center leading-tight">{course.level.split(" ")[0]}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-[#04080f]/60 border border-[#0d1f3c]">
            <Users className="w-3.5 h-3.5 text-[#e06000] mb-1" />
            <span className="text-[10px] text-[#8899bb]">Students</span>
            <span className="text-xs font-semibold text-white text-center leading-tight">{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(course.rating) ? "fill-[#e06000] text-[#e06000]" : "text-[#1a3460]"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-orange-400">{course.rating}</span>
          <span className="text-xs text-[#8899bb]">({course.students.toLocaleString()} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
          {course.tags.length > 3 && (
            <Badge variant="default">+{course.tags.length - 3}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start gap-3 pt-4 border-t border-[#0d1f3c]">
        {/* Price */}
        <div className="flex items-baseline gap-2 w-full">
          <span className="text-2xl font-bold text-white">₹{course.price.toLocaleString()}</span>
          <span className="text-sm line-through text-[#8899bb]">₹{course.originalPrice.toLocaleString()}</span>
          <span className="ml-auto text-xs text-green-400 font-medium">Save ₹{(course.originalPrice - course.price).toLocaleString()}</span>
        </div>

        {/* CTA */}
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button variant="orange" size="lg" className="w-full group/btn">
            More Details
            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-150" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
