"use client";

import * as React from "react";
import { siteContent } from "@/content/site";

export function HorizontalGallery() {
  return (
    <section 
      id="gallery" 
      className="relative bg-background border-y border-border py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <h2 className="text-sm md:text-base uppercase tracking-widest text-primary font-bold">The Archives</h2>
      </div>

      <div className="flex gap-4 md:gap-8 px-4 md:px-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 cursor-grab active:cursor-grabbing">
        {siteContent.gallery.map((src, index) => (
          <div 
            key={index}
            className={`relative h-[40vh] md:h-[50vh] min-w-[85vw] md:min-w-[40vw] shrink-0 snap-center overflow-hidden rounded-xl border border-border ${
              index % 2 === 0 ? "mt-0 md:mt-16" : "mt-8 md:mt-0"
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
      </div>
    </section>
  );
}
