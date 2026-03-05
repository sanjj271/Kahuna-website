"use client";

import * as React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="resort" className="bg-background relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Typographic side */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-primary mb-4"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            {siteContent.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            {siteContent.about.description}
          </p>
        </div>

        {/* Abstract/Atmospheric image side */}
        <div className="relative aspect-[4/5] w-full overflow-hidden border-premium rounded-2xl">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={siteContent.about.image}
              alt="Kahuna Resort Sanctuary"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
