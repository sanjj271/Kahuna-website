import * as React from "react";
import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center text-center space-y-16">
        
        {/* Minimal Aesthetic Tagline */}
        <div className="flex flex-col items-center gap-6">
          <img 
            src="/logo.svg" 
            alt="Kahuna Resort" 
            className="h-28 md:h-40 w-auto object-contain transition-transform duration-700 hover:scale-105 opacity-80" 
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-primary font-light max-w-3xl leading-relaxed mt-4">
            We look forward to welcoming you to a space where the pace slows, ideas flow, and every stay feels intentional.
          </h2>
        </div>

        {/* Essential Links */}
        <nav className="flex items-center gap-8 md:gap-16 pt-12">
          {["Resort", "Amenities", "Gallery"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Minimal Copyright */}
        <div className="w-full pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Kahuna Resort.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
