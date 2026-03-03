import * as React from "react";
import { cn } from "@/utils/cn";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  containerClass?: string;
  withContainer?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClass, children, withContainer = true, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn("w-full py-24 md:py-32 lg:py-40 relative", className)}
        {...props}
      >
        {withContainer ? (
          <div className={cn("container mx-auto px-4 md:px-8 max-w-7xl", containerClass)}>
            {children}
          </div>
        ) : (
          children
        )}
      </motion.section>
    );
  }
);
Section.displayName = "Section";
