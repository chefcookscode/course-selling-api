import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "orange" | "blue" | "green";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants: Record<string, string> = {
      default: "bg-[#0d1f3c] text-[#a0b0cc] border border-[#1a3460]",
      orange: "bg-orange-900/20 text-orange-300 border border-orange-700/40",
      blue: "bg-blue-900/20 text-blue-300 border border-blue-700/40",
      green: "bg-green-900/20 text-green-300 border border-green-700/40",
    };
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
