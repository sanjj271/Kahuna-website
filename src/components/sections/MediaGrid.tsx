"use client";

import * as React from "react";
import { siteContent } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { VideoModal } from "@/components/ui/VideoModal";

export function MediaGrid() {
  return (
    <Section className="bg-muted pb-24">
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-tight text-primary">
          Visual Story
        </h2>
        <div className="w-12 h-[1px] bg-primary" />
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
        <VideoModal 
          videoSrc={siteContent.visualStory.videoSrc} 
          thumbnailSrc={siteContent.visualStory.thumbnail} 
        />
      </div>
    </Section>
  );
}
