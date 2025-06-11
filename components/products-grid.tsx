"use client"

import { useEffect, useState } from "react"

export function ProductsGrid() {
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

    const element = document.getElementById("products-grid")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    { name: "Wrist Conditioner", category: "Fitness Equipment" },
    { name: "Multi Station Unit", category: "Fitness Equipment" },
    { name: "Pilates Ladder Barrel", category: "Fitness Equipment" },
    { name: "Dumbbells Rack (4ft, 5ft, 8ft)", category: "Fitness Equipment" },
    { name: "SUPERTHROWER AUTOMATIC", category: "Training Equipment" },
    { name: "360 Multi Functional Trainer Machine", category: "Fitness Equipment" },
    { name: "Squat Rack", category: "Fitness Equipment" },
    { name: "Multi Adjustable Bench", category: "Fitness Equipment" },
    { name: "Free Bowling Machine Automatic", category: "Sports Equipment" },
    { name: "Dead Lift Platform", category: "Fitness Equipment" },
    { name: "Pilates Reformer", category: "Fitness Equipment" },
    { name: "Motor Cycle Dynamo Meter", category: "Testing Equipment" },
  ]

  return (
    <section id="products-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-105 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="text-sm">Product Image</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-2">{product.category}</div>
              <h3 className="text-xl font-semibold text-black mb-4">{product.name}</h3>
              <div className="text-gray-600">High-quality manufactured product with precision engineering</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
