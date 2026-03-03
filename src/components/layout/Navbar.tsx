"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-28 md:h-32 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <img 
            src="/logo.svg" 
            alt="Kahuna Resort" 
            className={`h-20 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              !isScrolled ? "brightness-0 invert" : ""
            }`}
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Resort", "Amenities", "Gallery"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm uppercase tracking-widest transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
