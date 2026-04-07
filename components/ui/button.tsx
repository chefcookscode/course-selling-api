import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "orange" | "orange-outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#04080f] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants: Record<string, string> = {
      default: "bg-[#0d1f3c] text-white hover:bg-[#1a3460] focus:ring-[#0d1f3c]",
      outline:
        "border border-[#1a3460] text-[#a0b0cc] hover:bg-[#0d1f3c] hover:text-white focus:ring-[#1a3460]",
      ghost: "text-[#a0b0cc] hover:bg-[#0d1f3c] hover:text-white focus:ring-[#1a3460]",
      orange:
        "bg-[#e06000] text-white hover:bg-[#ff7a1a] active:bg-[#b34d00] focus:ring-[#e06000] shadow-lg shadow-orange-900/30",
      "orange-outline":
        "border border-[#e06000] text-[#ff9a3c] hover:bg-[#e06000] hover:text-white focus:ring-[#e06000]",
    };

    const sizes: Record<string, string> = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    };

    return (
      <button
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
