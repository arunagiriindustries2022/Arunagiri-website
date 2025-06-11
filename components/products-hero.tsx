"use client"

import { useEffect, useState } from "react"

export function ProductsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className={`text-5xl lg:text-6xl font-light text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our GYM Products
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            High-quality manufactured products across fitness equipment and industrial machinery
          </p>
        </div>
      </div>
    </section>
  )
}
