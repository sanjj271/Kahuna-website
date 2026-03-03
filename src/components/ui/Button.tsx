import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-foreground text-background hover:bg-foreground/90": variant === "secondary",
            "border border-border bg-transparent hover:bg-foreground/10 text-foreground": variant === "outline",
            "hover:bg-foreground/10 text-foreground": variant === "ghost",
            "h-9 px-4 py-2": size === "sm",
            "h-11 px-8 py-2": size === "md",
            "h-14 px-10 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
