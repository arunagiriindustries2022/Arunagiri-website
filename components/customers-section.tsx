"use client"
import { useIntersectionObserver } from "./scroll-animations"
import Image from "next/image"

export function CustomersSection() {
  const [setRef, isVisible] = useIntersectionObserver(0.1)

  const customers = [
    {
      logo: "/images/clients/aadhya-airtek.jpg",
      name: "AADHYA AIRTEK",
      description: "Aviation and aerospace components manufacturing",
    },
    {
      logo: "/images/clients/anscer-robotics.jpg",
      name: "ANSCER ROBOTICS",
      description: "Autonomous robotics solutions provider",
    },
    {
      logo: "/images/clients/emflux.jpg",
      name: "EMFLUX",
      description: "Electric motorcycle manufacturer",
    },
    {
      logo: "/images/clients/lazy-idli.jpg",
      name: "LAZY IDLI",
      description: "Signature catering and gourmet food services",
    },
    {
      logo: "/images/clients/ossus.jpg",
      name: "OSSUS",
      description: "Sustainable technology solutions",
    },
    {
      logo: "/images/clients/illuminify.jpg",
      name: "ILLUMINIFY",
      description: "Smart lighting and IoT systems",
    },
  ]

  return (
    <section id="customers" className="py-32 bg-desert" ref={setRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-light text-sage mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Trusted by industry leaders.
          </h2>
          <p
            className={`text-xl text-ash max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            We're proud to work with innovative companies across various industries, delivering precision manufacturing
            solutions that drive their success.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {customers.map((customer, index) => (
            <div
              key={index}
              className="p-6 flex flex-col items-center justify-center bg-champagne hover:bg-buff hover:shadow-lg transition-all duration-300 border border-ash/30 rounded-lg group"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="h-24 flex items-center justify-center mb-4 w-full relative">
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={`${customer.name} logo`}
                  width={120}
                  height={80}
                  className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="text-sm font-medium text-sage group-hover:text-champagne text-center transition-colors">
                {customer.name}
              </div>
              <div className="text-xs text-ash group-hover:text-champagne text-center mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {customer.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-flex flex-col md:flex-row items-center md:space-x-8 p-8 bg-champagne rounded-xl border border-ash/30 shadow-sm">
            <div className="text-center mb-4 md:mb-0">
              <div className="text-3xl font-light text-sage">6+</div>
              <div className="text-ash text-sm">Trusted Partners</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-ash/30"></div>
            <div className="text-center mb-4 md:mb-0">
              <div className="text-3xl font-light text-sage">100%</div>
              <div className="text-ash text-sm">Satisfaction Rate</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-ash/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-sage">24/7</div>
              <div className="text-ash text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
