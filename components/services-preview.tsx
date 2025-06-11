"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Settings, Wrench, Cpu } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function ServicesPreview() {
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

    const element = document.getElementById("services-preview")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: Zap, title: "CNC Laser Cutting", desc: "Precision laser cutting with 3KW capacity" },
    { icon: Settings, title: "CNC Machining", desc: "5-axis press brake and precision components" },
    { icon: Wrench, title: "Welding Services", desc: "TIG/MIG welding for special materials" },
    { icon: Cpu, title: "CAD/CAM Design", desc: "Custom design and engineering solutions" },
  ]

  return (
    <section id="services-preview" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-light text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Core Services
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From prototyping to full-scale production, we deliver comprehensive manufacturing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              className={`bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full group transition-all duration-300 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
