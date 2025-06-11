"use client"

import { useEffect, useRef } from "react"

export function MarqueeText() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const marqueeInner = marquee.querySelector(".marquee-inner") as HTMLElement
    if (!marqueeInner) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 1
      if (position <= -marqueeInner.offsetWidth / 2) {
        position = 0
      }
      marqueeInner.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="py-8 bg-buff overflow-hidden" ref={marqueeRef}>
      <div className="marquee-inner flex whitespace-nowrap">
        <span className="text-2xl font-light text-champagne mx-8">
          We design & develop precision manufacturing solutions
        </span>
        <span className="text-2xl font-light text-champagne mx-8">•</span>
        <span className="text-2xl font-light text-champagne mx-8">
          CNC Machining • Laser Cutting • Sheet Metal Fabrication
        </span>
        <span className="text-2xl font-light text-champagne mx-8">•</span>
        <span className="text-2xl font-light text-champagne mx-8">
          Quality Assurance • CAD/CAM Design • Welding Services
        </span>
        <span className="text-2xl font-light text-champagne mx-8">•</span>
        <span className="text-2xl font-light text-champagne mx-8">
          We design & develop precision manufacturing solutions
        </span>
        <span className="text-2xl font-light text-champagne mx-8">•</span>
        <span className="text-2xl font-light text-champagne mx-8">
          CNC Machining • Laser Cutting • Sheet Metal Fabrication
        </span>
        <span className="text-2xl font-light text-champagne mx-8">•</span>
        <span className="text-2xl font-light text-champagne mx-8">
          Quality Assurance • CAD/CAM Design • Welding Services
        </span>
      </div>
    </div>
  )
}
