"use client";

import { useState } from "react";
import { Course } from "@/lib/courses";
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
import PaymentDialog from "@/components/PaymentDialog";
import { Clock, BarChart2, CheckCircle2 } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "hot"
  | "new"
  | "trending"
  | "popular"
  | "bestseller";

const badgeVariantMap: Record<string, BadgeVariant> = {
  Bestseller: "bestseller",
  Popular: "popular",
  Hot: "hot",
  New: "new",
  Trending: "trending",
};

export function CourseCard({ course }: CourseCardProps) {
  const [open, setOpen] = useState(false);

  const variant: BadgeVariant =
    badgeVariantMap[course.badge] ?? "default";

  return (
    <>
      <Card className="flex flex-col hover:border-orange-500/40 transition-colors duration-200">
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-1">
            <span className="text-3xl">{course.icon}</span>
            <Badge variant={variant}>{course.badge}</Badge>
          </div>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.shortDescription}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 className="w-3.5 h-3.5 text-orange-400" />
              {course.level}
            </span>
          </div>
          <ul className="space-y-1.5">
            {course.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <p className="text-2xl font-bold text-white">
            ₹{course.price.toLocaleString("en-IN")}
          </p>
          <Button onClick={() => setOpen(true)}>Enroll Now</Button>
        </CardFooter>
      </Card>

      <PaymentDialog
        open={open}
        onOpenChange={setOpen}
        courseName={course.title}
        courseId={course.id}
        price={course.price}
      />
    </>
  );
}
