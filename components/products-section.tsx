"use client"
import { useIntersectionObserver } from "./scroll-animations"
import Image from "next/image"

export function ProductsSection() {
  const [setRef, isVisible] = useIntersectionObserver(0.1)

  const products = [
    {
      image: "/images/power-rack.png",
      name: "Power Rack / Squat Rack",
      category: "Fitness Equipment",
      description:
        "Heavy-duty commercial-grade power rack with multiple safety bar positions and pull-up bar. Constructed with 3mm thick steel for maximum stability and durability during intense training sessions.",
    },
    {
      image: "/images/multi-station.png",
      name: "Multi-Station Cable Machine",
      category: "Fitness Equipment",
      description:
        "Professional multi-station cable machine featuring dual weight stacks, multiple pulley positions, and adjustable components. Ideal for commercial gyms offering versatile training options in a compact footprint.",
    },
    {
      image: "/images/adjustable-bench.png",
      name: "Adjustable Weight Bench",
      category: "Fitness Equipment",
      description:
        "Multi-position adjustable weight bench with ladder adjustment system for flat, incline, and decline positions. Features high-density padding and 600kg weight capacity for heavy-duty commercial use.",
    },
    {
      image: "/images/pilates-barrel.png",
      name: "Pilates Ladder Barrel",
      category: "Rehabilitation Equipment",
      description:
        "Professional-grade pilates ladder barrel with solid wood rungs and premium upholstery. Designed for rehabilitation centers and pilates studios with adjustable distance settings to accommodate different user heights.",
    },
    {
      image: "/images/deadlift-platform.png",
      name: "Olympic Deadlift Platform",
      category: "Strength Training",
      description:
        "Competition-grade deadlift platform with shock-absorbing design featuring rubber and hardwood surfaces. Built to withstand heavy loads while protecting floor surfaces and reducing noise in training facilities.",
    },
  ]

  return (
    <section id="gym-products" className="py-32 bg-champagne" ref={setRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-light text-sage mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Our gym equipments
          </h2>
          <p
            className={`text-xl text-ash max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            High-quality fitness equipment designed and manufactured with precision for commercial and home gyms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`p-6 bg-desert hover:bg-buff transition-all duration-500 border border-ash/30 hover:border-sage group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-full h-64 bg-ash/20 rounded mb-4 overflow-hidden relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs text-buff mb-2 uppercase tracking-wider font-medium">{product.category}</div>
              <h3 className="text-lg font-semibold text-sage mb-3 group-hover:text-champagne transition-colors">
                {product.name}
              </h3>
              <p className="text-ash text-sm leading-relaxed group-hover:text-champagne transition-colors">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
