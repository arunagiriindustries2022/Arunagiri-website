"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  interval?: number
  alt: string
}

export function ImageCarousel({ images, interval = 5000, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${alt} - Image ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}

      {/* Navigation arrows - only show if more than one image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-brown/70 hover:bg-brown rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-cream" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-brown/70 hover:bg-brown rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-cream" />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-brown w-4" : "bg-cream/50 hover:bg-cream"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent z-10"></div>
    </div>
  )
}
