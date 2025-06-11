"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Cog } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function AboutPreview() {
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

    const element = document.getElementById("about-preview")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-preview" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2
              className={`text-4xl lg:text-5xl font-light text-black mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Precision Manufacturing Excellence
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              ARUNAGIRI INDUSTRIES PVT. LTD. offers a comprehensive range of manufacturing services, including CNC
              machining, CNC Laser & Bending, all types of welding processes, assembly, and quality assurance testing.
            </p>
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our experienced team collaborates closely with clients to achieve optimal outcomes, providing flexible
              solutions that meet varying project specifications and timelines.
            </p>
            <Link href="/about">
              <Button
                className={`bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full group transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Award, title: "Quality Assurance", desc: "Rigorous testing and adherence to specifications" },
              { icon: Users, title: "Skilled Team", desc: "19+ skilled professionals and experienced engineers" },
              { icon: Cog, title: "Latest Technology", desc: "Water jet, laser cutting, and cutting-edge equipment" },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 transition-all duration-1000 ease-out hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
