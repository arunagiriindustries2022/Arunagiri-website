"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ power: 0, customers: 0, experience: 0, machinery: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const targets = { power: 65, customers: 12, experience: 2, machinery: 15 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        setCounts({
          power: Math.floor(targets.power * progress),
          customers: Math.floor(targets.customers * progress),
          experience: Math.floor(targets.experience * progress),
          machinery: Math.floor(targets.machinery * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    { value: counts.power, suffix: "HP", label: "Power Capacity" },
    { value: counts.customers, suffix: "+", label: "Valued Customers" },
    { value: counts.experience, suffix: "+", label: "Years Experience" },
    { value: counts.machinery, suffix: "+", label: "Advanced Machinery" },
  ]

  return (
    <section id="stats-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
