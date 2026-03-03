"use client";

import * as React from "react";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  videoSrc: string;
  thumbnailSrc?: string;
}

export function VideoModal({ videoSrc, thumbnailSrc }: VideoModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div 
        className="relative w-full aspect-video group cursor-pointer overflow-hidden rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        {thumbnailSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={thumbnailSrc} 
            alt="Video thumbnail" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
          <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-border transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 text-foreground ml-1" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-5xl aspect-video p-4">
              <video 
                src={videoSrc} 
                autoPlay 
                controls 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
