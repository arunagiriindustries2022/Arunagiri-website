"use client"
import { useIntersectionObserver } from "./scroll-animations"
import { Zap, Settings, Wrench, Cpu, Cog, Drill } from "lucide-react"
import Image from "next/image"

export function MachinerySection() {
  const [setRef, isVisible] = useIntersectionObserver(0.1)

  const machinery = [
    {
      icon: Zap,
      name: "CNC Laser Cutting Machine",
      specs: "3KW (3000 X 1500 MM)",
      description:
        "High-speed fiber laser cutting system capable of processing steel, aluminum, and stainless steel with exceptional edge quality and minimal heat-affected zones.",
      image: "/images/cnc-laser-cutting.jpg",
    },
    {
      icon: Settings,
      name: "CNC 5 Axis Press Brake",
      specs: "Amada RG M2 1003",
      description:
        "Precision bending machine with advanced back-gauge system for consistent angle accuracy and repeatability across complex sheet metal forming operations.",
      image: "/images/amada-press-brake.jpg",
    },
    {
      icon: Wrench,
      name: "TIG Welding Machine",
      specs: "MWA Professional Series",
      description:
        "Professional-grade tungsten inert gas welding equipment for high-quality joints on stainless steel, aluminum, and exotic materials with superior finish.",
      image: "/images/tig-welding-machine.jpg",
    },
    {
      icon: Cog,
      name: "MIG Welding Machine",
      specs: "Industrial Grade 400A",
      description:
        "Heavy-duty metal inert gas welding system designed for high-volume production with consistent penetration and excellent weld pool control.",
      image: "/images/mig-welding-machine.jpg",
    },
    {
      icon: Cpu,
      name: "Air Compressor",
      specs: "Kaeser 1000L Capacity",
      description:
        "Industrial-grade compressed air system providing consistent pressure for pneumatic tools, spray finishing, and automated machinery operations.",
      image: "/images/air-compressor.jpg",
    },
    {
      icon: Drill,
      name: "Riveting Machine",
      specs: "SL-TECH SL-618 Pneumatic",
      description:
        "Industrial pneumatic riveting machine for high-strength joining applications with precise pressure control and automated operation cycles.",
      image: "/images/riveting-machine.jpg",
    },
  ]

  return (
    <section id="machinery" className="py-32 bg-desert" ref={setRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-light text-sage mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Our machinery.
          </h2>
          <p
            className={`text-xl text-ash max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            State-of-the-art equipment ensuring precision and efficiency in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machinery.map((machine, index) => (
            <div
              key={index}
              className={`bg-champagne hover:shadow-lg transition-all duration-500 border border-ash/30 hover:border-buff overflow-hidden group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Machine Image */}
              <div className="relative h-64 bg-ash/20 overflow-hidden">
                <Image
                  src={machine.image || "/placeholder.svg"}
                  alt={machine.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-buff rounded-lg flex items-center justify-center">
                  <machine.icon className="w-6 h-6 text-champagne" />
                </div>
              </div>

              {/* Machine Details */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-sage mb-2 group-hover:text-buff transition-colors">
                  {machine.name}
                </h3>
                <p className="text-buff text-sm mb-3 font-medium">{machine.specs}</p>
                <p className="text-ash text-sm leading-relaxed">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div
            className={`inline-flex items-center space-x-8 p-8 bg-champagne rounded-xl border border-ash/30 shadow-sm transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="text-center">
              <div className="text-3xl font-light text-sage">65HP</div>
              <div className="text-ash text-sm">Total Power Capacity</div>
            </div>
            <div className="w-px h-12 bg-ash/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-sage">6+</div>
              <div className="text-ash text-sm">Advanced Machines</div>
            </div>
            <div className="w-px h-12 bg-ash/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-sage">24/7</div>
              <div className="text-ash text-sm">Operation Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
