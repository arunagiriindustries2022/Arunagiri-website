"use client"

import { useEffect, useState } from "react"

export function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("technology-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-light text-black mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Technology & Facility
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Today, Arunagiri Industries utilise the latest equipment such as water jet, laser and other cutting-edge
            technology. We are integrated with certified welding services and heavy plate capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`text-center p-8 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-out hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="text-4xl font-bold text-black mb-2">12</div>
            <div className="text-gray-600 mb-4">Skilled Manpower</div>
            <div className="text-sm text-gray-500">For fabrication work</div>
          </div>

          <div
            className={`text-center p-8 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-out hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="text-4xl font-bold text-black mb-2">4</div>
            <div className="text-gray-600 mb-4">Contractors</div>
            <div className="text-sm text-gray-500">Additional fabrication workload</div>
          </div>

          <div
            className={`text-center p-8 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-out hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="text-4xl font-bold text-black mb-2">65HP</div>
            <div className="text-gray-600 mb-4">Power Capacity</div>
            <div className="text-sm text-gray-500">EB power source</div>
          </div>
        </div>
      </div>
    </section>
  )
}
