"use client";

import * as React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function Amenities() {
  return (
    <Section id="amenities" className="bg-background border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 uppercase tracking-tight">
            {siteContent.amenities.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-sm">
            Everything you need for the perfect getaway, from high-energy sports to relaxing pools.
          </p>
          <div className="hidden lg:block w-16 h-[1px] bg-primary" />
        </div>

        <div className="lg:col-span-8 flex flex-col space-y-24">
          {siteContent.amenities.items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 relative min-h-[300px] md:min-h-[450px]">
                {item.images.slice(0, 4).map((img, i) => (
                  <div 
                    key={i} 
                    className={`relative rounded-2xl overflow-hidden shadow-lg group/img ${
                      i === 0 ? "mt-4 -ml-2" : 
                      i === 1 ? "-mt-4 ml-2" : 
                      i === 2 ? "mb-4 -ml-2" : 
                      "-mb-4 ml-2"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${item.name} ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500" />
                  </div>
                ))}
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
                <span className="text-primary font-serif italic text-xl">0{index + 1}</span>
                <h3 className="text-3xl font-serif uppercase tracking-wider">{item.name}</h3>
                <p className="text-muted-foreground text-lg font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
