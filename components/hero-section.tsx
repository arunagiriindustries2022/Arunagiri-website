"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle video loading error
  const handleVideoError = () => {
    setVideoFailed(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0">
        {!videoFailed ? (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            onError={handleVideoError}
          >
            <source src="/videos/manufacturing-showcase.mp4" type="video/mp4" />
            {/* Will trigger onError if video fails to load */}
          </video>
        ) : (
          <>
            {/* Fallback image when video fails */}
            <div className="w-full h-full bg-[url('/images/hero-background.jpg')] bg-cover bg-center"></div>
            
            {/* Missing video message */}
            <div className="absolute bottom-4 right-4 bg-cream/90 text-brown p-3 rounded-md shadow-md text-sm max-w-xs border border-taupe/20">
              Video file is missing. Please add a video file at:<br/>
              <code className="text-xs font-mono bg-sand p-1 rounded">public/videos/manufacturing-showcase.mp4</code>
            </div>
          </>
        )}
        
        {/* Overlay for better text readability - using our new color scheme */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown/50 via-brown/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-8 drop-shadow-lg">
            Precision manufacturing for everyone.
          </h1>

          {/* CTA Button */}
          <div className="mb-16">
            <a href="#services">
              <button className="btn-elegant group flex items-center">
                Our solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
