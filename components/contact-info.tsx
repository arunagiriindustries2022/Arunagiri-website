"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Globe, Clock, LucideIcon } from "lucide-react"
import Link from "next/link"

// Define types for the ContactCard props
interface ContactCardProps {
  title: string;
  detail: string;
  icon: LucideIcon;
  link: string;
}

// Individual contact card that matches the image
function ContactCard({ title, detail, icon: Icon, link }: ContactCardProps) {
  return (
    <Link 
      href={link}
      className="block bg-sand hover:bg-tan/30 transition-all duration-300 aspect-square"
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={link.startsWith("http") ? "noopener noreferrer" : ""}
    >
      <div className="h-full flex flex-col justify-center items-center p-6 text-center">
        <div className="w-16 h-16 bg-brown rounded-sm flex items-center justify-center mb-6">
          <Icon className="h-8 w-8 text-cream" />
        </div>
        <h3 className="text-2xl font-serif text-charcoal mb-3">{title}</h3>
        <p className="text-brown font-light">
          {detail}
        </p>
      </div>
    </Link>
  )
}

export function ContactInfo() {
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

    const element = document.getElementById("contact-info")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      detail: "arunagiriindustry@gmail.com",
      link: "mailto:arunagiriindustry@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 9108046625",
      link: "tel:+919108046625",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru - 560091",
      link: "https://maps.google.com/?q=#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru - 560091",
    },
    {
      icon: Globe,
      title: "Website",
      detail: "arunagiriindustries.com",
      link: "https://arunagiriindustries.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday - Saturday: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ]

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      details: ["arunagiriindustry@gmail.com"],
      link: "mailto:arunagiriindustry@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 72598 50531", "+91 91080 46626", "+91 91080 46625"],
      link: "tel:+917259850531",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "#18, 19, 32 & 33, Byraveshwara Industrial Estate,",
        "Peenya, Bengaluru - 560091",
      ],
      link: "https://maps.google.com/?q=#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru - 560091",
    },
    {
      icon: Globe,
      title: "Website",
      details: ["arunagiriindustries.com"],
      link: "https://arunagiriindustries.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      link: "#",
    },
  ]

  return (
    <section id="contact-info" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stylized Contact Cards - Matches the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-12 border border-brown/10">
          {contactCards.map((contact, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ContactCard {...contact} />
            </div>
          ))}
        </div>

        {/* Detailed Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactDetails.map((contact, index) => (
            <Link
              href={contact.link}
              key={index}
              className={`block text-center p-8 bg-sand hover:bg-tan/50 border border-brown/10 rounded-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              target={contact.link.startsWith("http") ? "_blank" : "_self"}
              rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
            >
              <div className="w-16 h-16 bg-brown rounded-sm flex items-center justify-center mx-auto mb-6">
                <contact.icon className="h-8 w-8 text-cream" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{contact.title}</h3>
              <div className="space-y-1">
                {contact.details.map((detail, idx) => (
                  <div key={idx} className="text-brown font-light">
                    {detail}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div
            className={`max-w-xl mx-auto p-8 bg-sand border border-brown/10 rounded-sm transition-all duration-1000 ease-out delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-serif text-charcoal mb-4 text-center">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="p-4 border border-brown/10 bg-tan/20 rounded-sm">
                <p className="font-medium text-brown mb-1">GSTIN</p>
                <p className="text-brown/80 font-light">29AAWCA5903H1Z8</p>
              </div>
              <div className="p-4 border border-brown/10 bg-tan/20 rounded-sm">
                <p className="font-medium text-brown mb-1">CIN</p>
                <p className="text-brown/80 font-light">U29299KA2022PTC158398</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
