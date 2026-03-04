"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Resort", "Amenities", "Gallery"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-border" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-24 md:h-32 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group z-50">
            <img 
              src="/logo.svg" 
              alt="Kahuna Resort" 
              className={`h-16 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                (!isScrolled && !isMobileMenuOpen) ? "brightness-0 invert" : ""
              }`}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-foreground' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-12">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
