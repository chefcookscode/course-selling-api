import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-orange-600 text-white",
        secondary: "border-transparent bg-slate-700 text-slate-200",
        outline: "border-orange-500/50 text-orange-400",
        success: "border-transparent bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
        hot: "border-transparent bg-red-600/20 text-red-400 border-red-500/30",
        new: "border-transparent bg-blue-600/20 text-blue-400 border-blue-500/30",
        trending: "border-transparent bg-purple-600/20 text-purple-400 border-purple-500/30",
        popular: "border-transparent bg-amber-600/20 text-amber-400 border-amber-500/30",
        bestseller: "border-transparent bg-orange-600/20 text-orange-400 border-orange-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
