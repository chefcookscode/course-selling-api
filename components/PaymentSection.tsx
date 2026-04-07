"use client";

import { useState, useEffect, useRef } from "react";
import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { QrCode, Smartphone, X, ExternalLink, Timer } from "lucide-react";

interface PaymentSectionProps {
  course: Course;
}

const QR_TIMEOUT_SECONDS = 300; // 5 minutes

export function PaymentSection({ course }: PaymentSectionProps) {
  const [step, setStep] = useState<"choose" | "qr" | "upi" | "form">("choose");
  const [timeLeft, setTimeLeft] = useState(QR_TIMEOUT_SECONDS);
  const [qrExpired, setQrExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start countdown when QR is shown
  useEffect(() => {
    if (step === "qr") {
      setTimeLeft(QR_TIMEOUT_SECONDS);
      setQrExpired(false);
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(intervalRef.current!);
            setQrExpired(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [step]);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const pct = (timeLeft / QR_TIMEOUT_SECONDS) * 100;

  return (
    <div id="payment" className="mt-10 rounded-2xl border border-[#0d1f3c] bg-[#080e1a] p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white mb-1">Enroll Now</h2>
      <p className="text-[#8899bb] text-sm mb-6">
        Secure your spot · ₹{course.price.toLocaleString()} one-time payment
      </p>

      {/* Step: choose */}
      {step === "choose" && (
        <div className="space-y-4">
          <p className="text-[#a0b0cc] font-medium mb-2">Choose payment method:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setStep("qr")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-[#1a3460] hover:border-[#e06000] bg-[#04080f] hover:bg-[#0a1628] transition-all duration-200 cursor-pointer group"
            >
              <QrCode className="w-10 h-10 text-[#e06000]" />
              <span className="font-semibold text-white">Pay via QR Code</span>
              <span className="text-xs text-[#8899bb] text-center">Scan with any UPI app — time-limited QR</span>
            </button>
            <button
              onClick={() => setStep("upi")}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-[#1a3460] hover:border-[#e06000] bg-[#04080f] hover:bg-[#0a1628] transition-all duration-200 cursor-pointer group"
            >
              <Smartphone className="w-10 h-10 text-[#e06000]" />
              <span className="font-semibold text-white">Pay via UPI ID</span>
              <span className="text-xs text-[#8899bb] text-center">Copy our UPI ID and pay from any app</span>
            </button>
          </div>
        </div>
      )}
