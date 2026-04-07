import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow hover:from-orange-500 hover:to-orange-400 active:scale-[0.98]",
        outline:
          "border border-orange-500/50 bg-transparent text-orange-400 hover:bg-orange-500/10 hover:text-orange-300",
        ghost: "text-slate-300 hover:bg-white/10 hover:text-white",
        secondary:
          "bg-slate-800 text-slate-200 hover:bg-slate-700",
        destructive:
          "bg-red-600 text-white hover:bg-red-500",
        link: "text-orange-400 underline-offset-4 hover:underline hover:text-orange-300 p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-semibold",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
