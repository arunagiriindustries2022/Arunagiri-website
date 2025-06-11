"use client"

import { useEffect, useState } from "react"

export function SpecialtiesSection() {
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

    const element = document.getElementById("specialties-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="specialties-section" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl lg:text-5xl font-light text-white mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our Specialties
            </h2>
            <p
              className={`text-lg text-gray-300 mb-6 leading-relaxed transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We specialise in developing metal products, fabrication of metals, material welding, manufacturing
              intricate parts and high-quality sub-assemblies.
            </p>
            <p
              className={`text-lg text-gray-300 leading-relaxed transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We are associated with the latest technology and experienced engineers with a team of technical
              consultants who handle in-house quality inspection.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 gap-4">
              {[
                "Precision CNC components",
                "Sheet metal fabrication",
                "Custom-made press tools",
                "Jigs & fixtures",
                "CNC laser cutting",
                "CNC wire cutting components",
                "CAD/CAM parts designing",
                "TIG/MIG welding aircraft material",
                "Hydraulics handling equipment",
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-white">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
