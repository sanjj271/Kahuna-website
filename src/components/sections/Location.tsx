"use client";

import * as React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Location() {
  return (
    <section className="relative w-full h-[800px] md:h-[900px] bg-muted overflow-hidden">
      {/* Full-width Interactive Map */}
      <div className="absolute inset-0 z-0 group">
        <div className="absolute inset-0 pointer-events-none bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-1000 group-hover:opacity-0" />
        <iframe 
          src={siteContent.location.mapEmbedUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Floating Glass Card */}
      <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-8 flex items-center md:items-end justify-center md:justify-start pb-0 md:pb-24 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] max-w-[420px] w-full pointer-events-auto border border-white/50 flex flex-col space-y-10 transform translate-y-4 md:translate-y-0">
          
          {/* Location Details */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight text-foreground">
              {siteContent.location.title}
            </h2>
            <div className="flex flex-col space-y-2">
              <p className="text-foreground font-medium text-lg leading-relaxed">
                {siteContent.location.address}
              </p>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {siteContent.location.description}
              </p>
            </div>
            <div className="pt-2">
              <a 
                href={siteContent.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 uppercase text-xs tracking-widest font-bold text-primary hover:text-accent transition-colors"
              >
                Get Directions
                <span className="w-8 h-[1px] bg-current" />
              </a>
            </div>
          </div>

          <div className="w-full h-[1px] bg-border/50" />

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-tight text-foreground">
              {siteContent.contact.title}
            </h2>
            <div className="flex flex-col space-y-1 text-muted-foreground font-light text-lg">
              <a href={`mailto:${siteContent.contact.email}`} className="hover:text-primary transition-colors">
                {siteContent.contact.email}
              </a>
              <a href={`tel:${siteContent.contact.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                {siteContent.contact.phone}
              </a>
            </div>
            <div className="pt-4">
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="inline-block uppercase text-xs tracking-widest bg-primary text-white px-8 py-4 rounded-full hover:bg-accent transition-colors font-bold shadow-lg"
              >
                {siteContent.contact.cta}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
