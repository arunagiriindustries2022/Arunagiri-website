"use client"

import { useEffect, useState } from "react"
import { Zap, Settings, Wrench, Cpu, Cog, Box } from "lucide-react"

export function ServicesGrid() {
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

    const element = document.getElementById("services-grid")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Cpu,
      title: "CAD / CAM DESIGNING",
      description: "Advanced computer-aided design and manufacturing solutions for precision engineering",
    },
    {
      icon: Zap,
      title: "CNC LASER CUTTING",
      description: "High-precision laser cutting with 3KW capacity for various materials and thicknesses",
    },
    {
      icon: Cog,
      title: "MATERIAL HANDLING & SPECIAL PURPOSE MACHINES",
      description: "Custom material handling solutions and specialized machinery for industrial applications",
    },
    {
      icon: Settings,
      title: "PRECISION COMPONENTS / SUB ASSEMBLIES",
      description: "Manufacturing of intricate parts and high-quality sub-assemblies with tight tolerances",
    },
    {
      icon: Box,
      title: "PRECISION CNC COMPONENTS",
      description: "CNC machined components with exceptional accuracy and surface finish",
    },
    {
      icon: Wrench,
      title: "CNC BENDING",
      description: "5-axis CNC press brake operations for complex bending requirements",
    },
    {
      icon: Settings,
      title: "SHEET METAL FABRICATION, ASSEMBLY, MODULES",
      description: "Complete sheet metal solutions from cutting to final assembly",
    },
    {
      icon: Wrench,
      title: "WELDING OF SPECIAL MATERIALS",
      description: "TIG/MIG welding services for aircraft materials and specialized alloys",
    },
  ]

  return (
    <section id="services-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-105 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-black group-hover:bg-gray-800 rounded-full flex items-center justify-center mb-6 transition-colors">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
