"use client";

import * as React from "react";
import { siteContent } from "@/content/site";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalGallery() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section 
      ref={targetRef} 
      id="gallery" 
      className="relative h-[300vh] bg-background border-y border-border"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Gallery Intro Label */}
        <div className="absolute top-24 md:top-32 left-8 md:left-16 z-10">
          <h2 className="text-sm md:text-base uppercase tracking-widest text-primary font-bold">The Archives</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-16">
          {siteContent.gallery.map((src, index) => (
            <div 
              key={index}
              className={`relative h-[50vh] min-w-[70vw] md:min-w-[40vw] overflow-hidden rounded-xl border border-border ${
                index % 2 === 0 ? "self-end mb-24" : "self-start mt-24"
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
