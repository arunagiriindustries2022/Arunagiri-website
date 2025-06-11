"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-40 h-auto mx-auto mb-6">
          <Image src="/images/agi-logo.png" alt="Arunagiri Industries Logo" width={160} height={80} priority />
        </div>
        <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto mt-4">
          <div
            className="h-full bg-[#2980b9] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
