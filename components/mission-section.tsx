"use client"

import { useEffect, useState } from "react"
import { Target, Shield, Lightbulb, Users, Leaf, Heart } from "lucide-react"

export function MissionSection() {
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

    const element = document.getElementById("mission-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const missions = [
    {
      icon: Target,
      title: "Quality Assurance",
      desc: "Ensuring all products meet or exceed quality standards through rigorous testing",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      desc: "Prioritizing worker and consumer safety while complying with regulations",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Emphasizing innovation in technologies and processes for continuous improvement",
    },
    {
      icon: Users,
      title: "Employee Development",
      desc: "Investing in training programs to enhance skills and foster positive work environment",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      desc: "Minimizing environmental impact through sustainable practices",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      desc: "Meeting or exceeding customer expectations in quality, delivery, and service",
    },
  ]

  return (
    <section id="mission-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-light text-black mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Mission
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our mission revolves around key objectives that collectively ensure efficiency, quality, and sustainability
            in production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <mission.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
