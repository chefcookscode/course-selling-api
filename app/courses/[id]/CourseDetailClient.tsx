"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PaymentDialog from "@/components/PaymentDialog";
import { Course } from "@/lib/courses";
import { ShieldCheck, Star, Zap } from "lucide-react";

interface Props {
  course: Course;
}

export default function CourseDetailClient({ course }: Props) {
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-[#0d1526] shadow-2xl shadow-black/50 overflow-hidden sticky top-24">
        {/* Card top glow */}
        <div className="h-1.5 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300" />

        <div className="p-6 space-y-5">
          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white">
                ₹{course.price.toLocaleString("en-IN")}
              </span>
              <span className="text-slate-500 text-sm">/ one-time</span>
            </div>
            <p className="text-slate-500 text-xs">No hidden charges · GST included</p>
          </div>

          {/* CTA Button */}
          <Button
            size="xl"
            className="w-full text-base"
            onClick={() => setPaymentOpen(true)}
          >
            <Zap className="h-5 w-5" />
            PAY NOW
          </Button>

          {/* Trust Badges */}
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Secure payment · Instant access</span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Course Meta */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
              This course includes:
            </h4>
            {[
              { emoji: "🎥", text: "HD video lessons with lifetime access" },
              { emoji: "📁", text: "Downloadable resources & source code" },
              { emoji: "🏆", text: "Certificate of completion" },
              { emoji: "💬", text: "Community & doubt support" },
              { emoji: "📱", text: "Access on mobile, tablet & desktop" },
            ].map(({ emoji, text }) => (
              <div key={text} className="flex items-start gap-2.5 text-sm text-slate-400">
                <span className="text-base leading-none mt-0.5">{emoji}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Ratings */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-4 w-4 ${
                    s <= Math.round(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">{course.rating}</span>
            <span className="text-slate-500 text-xs">(2,400+ reviews)</span>
          </div>
        </div>
      </div>

      <PaymentDialog
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        courseName={course.title}
        courseId={course.id}
        price={course.price}
      />
    </>
  );
}
