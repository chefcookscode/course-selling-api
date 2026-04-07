"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getTimeBasedQRCodeUrl, UPI_ID, GOOGLE_FORM_LINK } from "@/lib/courses";
import { QrCode, CreditCard, ExternalLink, Copy, Check } from "lucide-react";

type PaymentMethod = "qr" | "upi" | null;

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName: string;
  courseId: string;
  price: number;
}

export default function PaymentDialog({
  open,
  onOpenChange,
  courseName,
  courseId,
  price,
}: PaymentDialogProps) {
  const [method, setMethod] = useState<PaymentMethod>(null);
  const [copied, setCopied] = useState(false);

  const qrUrl = getTimeBasedQRCodeUrl(courseId, price);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = (open: boolean) => {
    if (!open) setMethod(null);
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            Complete Your Payment
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {courseName} &mdash;{" "}
            <span className="text-orange-400 font-semibold">₹{price.toLocaleString("en-IN")}</span>
          </DialogDescription>
        </DialogHeader>

        {!method ? (
          <div className="space-y-4 py-2">
            <p className="text-slate-300 text-sm text-center">
              Choose your preferred payment method
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMethod("qr")}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-white/10 bg-white/5 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200 group cursor-pointer"
              >
                <QrCode className="h-10 w-10 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">QR Code</span>
                <span className="text-slate-400 text-xs text-center">Scan &amp; Pay instantly</span>
              </button>
              <button
                onClick={() => setMethod("upi")}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-white/10 bg-white/5 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200 group cursor-pointer"
              >
                <CreditCard className="h-10 w-10 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">UPI ID</span>
                <span className="text-slate-400 text-xs text-center">Pay via any UPI app</span>
              </button>
            </div>
          </div>
        ) : method === "qr" ? (
          <div className="space-y-4 py-2">
            <div className="flex flex-col items-center gap-3">
              <div className="relative p-3 bg-white rounded-xl shadow-lg shadow-orange-500/10">
                <Image
                  src={qrUrl}
                  alt="Payment QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-white font-semibold">Scan with any UPI app</p>
                <p className="text-slate-400 text-xs">
                  PhonePe · Google Pay · Paytm · BHIM
                </p>
                <p className="text-orange-400 text-xs font-medium">
                  ⏱ QR refreshes every 5 minutes for security
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <p className="text-orange-300 text-sm font-medium flex items-center gap-2">
                <ExternalLink className="h-4 w-4 shrink-0" />
                After payment, fill the confirmation form
              </p>
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-full text-center py-2 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-colors"
              >
                Fill Form After Payment →
              </a>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-slate-400"
              onClick={() => setMethod(null)}
            >
              ← Change payment method
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <div className="text-center space-y-2">
              <p className="text-slate-300 text-sm">Send payment to this UPI ID</p>
              <div className="flex items-center gap-2 p-4 rounded-xl bg-slate-800/60 border border-white/10">
                <div className="flex-1 text-left">
                  <p className="text-xs text-slate-400 mb-0.5">UPI ID</p>
                  <p className="text-white font-mono font-semibold text-lg">{UPI_ID}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-slate-300 hover:text-white"
                  title="Copy UPI ID"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {["PhonePe", "GPay", "Paytm"].map((app) => (
                  <div
                    key={app}
                    className="py-2 px-3 rounded-lg bg-slate-800/40 border border-white/10 text-slate-400 text-xs text-center"
                  >
                    {app}
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-white/10 text-left">
                <p className="text-slate-400 text-xs">Amount to pay</p>
                <p className="text-white font-bold text-2xl">
                  ₹{price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <p className="text-orange-300 text-sm font-medium flex items-center gap-2">
                <ExternalLink className="h-4 w-4 shrink-0" />
                After payment, fill the confirmation form
              </p>
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-full text-center py-2 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-colors"
              >
                Fill Form After Payment →
              </a>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-slate-400"
              onClick={() => setMethod(null)}
            >
              ← Change payment method
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
