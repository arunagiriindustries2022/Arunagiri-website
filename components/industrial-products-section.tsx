"use client"
import { useIntersectionObserver } from "./scroll-animations"
import Image from "next/image"
import { ArrowRight, Cpu, Cog, Settings, FlaskConical } from "lucide-react"
import { ImageCarousel } from "./image-carousel"

export function IndustrialProductsSection() {
  const [setRef, isVisible] = useIntersectionObserver(0.1)

  const products = [
    {
      name: "Kiosk",
      category: "Self-Service Technology",
      description: "Interactive self-service kiosks for PLOY with card tap functionality and digital waiver system.",
      image: "/images/products/ploy-kiosk.jpg",
      icon: Cpu,
      isCarousel: false,
    },
    {
      name: "SUPERTHROWER AUTOMATIC",
      category: "Sports Equipment",
      description: "Cricket's first arm-simulated, automated ball thrower with adjustable speed and trajectory.",
      image: "/images/products/superthrower-automatic.jpg",
      icon: Settings,
      isCarousel: false,
    },
    {
      name: "Motor Cycle Dynamo Meter",
      category: "Testing Equipment",
      description: "Precision device measuring torque and RPM for motorcycle performance testing and tuning.",
      image: "/images/products/motorcycle-dynamometer.jpg",
      icon: Cog,
      isCarousel: false,
    },
    {
      name: "Material Handling & Special Purpose Machines",
      category: "Industrial Automation",
      description:
        "Custom automated material handling solutions and specialized machinery designed for specific industrial applications.",
      image: "/images/products/material-handling-machine.jpg",
      icon: Cog,
      isCarousel: false,
    },
    {
      name: "Precision Components / Sub Assemblies",
      category: "Manufacturing Components",
      description:
        "High-precision machined components and sub-assemblies with tight tolerances for critical applications including molds, dies, and specialized templates.",
      images: [
        "/images/products/precision-component-1.jpg",
        "/images/products/precision-component-2.jpg",
        "/images/products/precision-component-3.jpg",
      ],
      icon: Settings,
      isCarousel: true,
    },
    {
      name: "Research & Development",
      category: "Innovation & Prototyping",
      description:
        "Custom R&D solutions from concept to prototype, including specialized electronic equipment, aerodynamic models, and precision-engineered systems.",
      images: [
        "/images/products/rd-product-1.jpg",
        "/images/products/rd-product-2.jpg",
        "/images/products/rd-product-3.jpg",
      ],
      icon: FlaskConical,
      isCarousel: true,
    },
  ]

  return (
    <section id="products" className="py-32 bg-beige" ref={setRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-light text-charcoal mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Our customised products.
          </h2>
          <p
            className={`text-xl text-darkbrown max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Innovative solutions across technology, sports equipment, and precision manufacturing components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group p-8 bg-cream hover:bg-brown transition-all duration-500 border border-darkbrown/20 hover:border-charcoal hover:shadow-lg hover:scale-105 cursor-pointer relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Product Image or Carousel */}
              <div className="w-full h-48 bg-darkbrown/10 rounded-lg mb-6 overflow-hidden relative">
                {product.isCarousel ? (
                  <ImageCarousel images={product.images || []} alt={product.name} />
                ) : (
                  <>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </>
                )}
                <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-brown group-hover:bg-charcoal rounded-lg flex items-center justify-center transition-colors">
                  <product.icon className="w-6 h-6 text-cream" />
                </div>
              </div>

              {/* Product Details */}
              <div className="text-xs text-brown mb-2 uppercase tracking-wider font-medium group-hover:text-cream transition-colors">
                {product.category}
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-cream transition-colors">
                {product.name}
              </h3>
              <p className="text-darkbrown text-sm leading-relaxed mb-4 group-hover:text-cream transition-colors">
                {product.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-brown hover:text-charcoal group-hover:text-cream transition-colors text-sm"
              >
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Animated Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-charcoal w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
