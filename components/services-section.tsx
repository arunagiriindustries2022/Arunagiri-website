"use client"
import { useEffect, useState } from "react"
import { Zap, Wrench, Cpu, Shield } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
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

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Zap,
      title: "CNC Laser Cutting",
      description:
        "High-precision laser cutting with 3KW capacity for various materials and thicknesses. Perfect for intricate designs and clean edges on metal sheets up to 15mm thickness.",
      backgroundImage: "/images/services/laser-cutting.png",
    },
    {
      icon: Wrench,
      title: "Sheet Metal Fabrication",
      description:
        "Complete fabrication solutions from cutting to final assembly and finishing. Includes bending, forming, welding, and powder coating for durable, professional results.",
      backgroundImage: "/images/services/sheet-metal-fabrication.png",
    },
    {
      icon: Cpu,
      title: "CAD/CAM Design",
      description:
        "Advanced computer-aided design and manufacturing solutions for optimized production. From concept to reality with 3D modeling, simulation, and toolpath generation.",
      backgroundImage: "/images/services/cad-cam-design.png",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous testing and inspection ensuring products meet specifications. CMM inspection, material testing, and comprehensive documentation for every project.",
      backgroundImage: "/images/services/quality-assurance.jpg",
    },
  ]

  return (
    <section id="services" className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-light text-charcoal mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Our services.
          </h2>
          <p
            className={`text-xl text-darkbrown max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            From prototyping to full-scale production, we deliver comprehensive manufacturing solutions with precision
            and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 border border-darkbrown/20 hover:border-charcoal cursor-pointer relative overflow-hidden hover:shadow-xl hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Background Image with better visibility */}
              {service.backgroundImage ? (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={service.backgroundImage || "/placeholder.svg"}
                      alt={`${service.title} background`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/70 to-brown/60 group-hover:from-charcoal/70 group-hover:via-charcoal/60 group-hover:to-brown/50 transition-all duration-500"></div>
                </>
              ) : (
                <div className="absolute inset-0 bg-beige group-hover:bg-brown transition-colors duration-500"></div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-12 h-12 bg-cream/90 group-hover:bg-cream rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-4 group-hover:text-white transition-colors drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-cream/90 leading-relaxed group-hover:text-white/95 transition-colors drop-shadow-sm text-sm">
                  {service.description}
                </p>
              </div>

              {/* Animated Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-cream w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
