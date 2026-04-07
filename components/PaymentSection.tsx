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
