"use client"
import { useEffect, useState } from "react"
import { Users, Award, Zap, Target } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ users: 0, power: 0, machinery: 0, year: 2020 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const targets = { users: 19, power: 65, machinery: 15, year: 2022 }
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
              users: Math.floor(targets.users * progress),
              power: Math.floor(targets.power * progress),
              machinery: Math.floor(targets.machinery * progress),
              year: Math.floor(2020 + (targets.year - 2020) * progress),
            })

            if (step >= steps) {
              clearInterval(timer)
              setCounters(targets)
            }
          }, stepTime)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: counters.users, label: "Skilled professionals dedicated to precision manufacturing" },
    {
      icon: Zap,
      value: counters.power,
      suffix: "HP",
      label: "Power capacity ensuring efficient production capabilities",
    },
    {
      icon: Award,
      value: counters.machinery,
      suffix: "+",
      label: "Advanced machinery for comprehensive manufacturing solutions",
    },
    { icon: Target, value: counters.year, label: "Established with a vision for manufacturing excellence" },
  ]

  return (
    <section id="about" className="py-32 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div>
            <h2
              className={`text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-12 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              Engineering excellence for modern industry.
            </h2>

            <div className="space-y-8">
              {[
                "ARUNAGIRI INDUSTRIES PVT. LTD. offers a comprehensive range of manufacturing services, including CNC machining, CNC Laser & Bending, all types of welding processes, assembly, and quality assurance testing.",
                "Whether it's prototyping new concepts or scaling production for established products, our experienced team collaborates closely with clients to achieve optimal outcomes. We take pride in our ability to provide flexible solutions that meet varying project specifications and timelines.",
                "Our dedication to sustainability and ethical practices underscores every aspect of our operations, ensuring that we not only meet regulatory requirements but also contribute positively to the environment and communities we serve.",
              ].map((text, index) => (
                <p
                  key={index}
                  className={`text-lg text-darkbrown leading-relaxed transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right Content - Animated Stats */}
          <div className="space-y-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 group transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-brown rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <div className="text-4xl font-light text-charcoal mb-2 group-hover:text-brown transition-colors">
                    {stat.value}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  <div className="text-darkbrown group-hover:text-charcoal transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
