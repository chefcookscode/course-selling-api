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
