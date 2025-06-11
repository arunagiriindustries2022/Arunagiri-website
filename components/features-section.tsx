"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Cpu, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export function FeaturesSection() {
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

    const element = document.getElementById("features-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for maximum efficiency and speed in all our solutions.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for peace of mind.",
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence to automate and enhance your workflows.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide infrastructure ensuring seamless connectivity across all regions.",
    },
  ]

  return (
    <section id="features-section" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Why choose Arunagiri?
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We deliver exceptional results through innovative technology and unmatched expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
