"use client"
import { useIntersectionObserver } from "./scroll-animations"
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [setRef, isVisible] = useIntersectionObserver(0.1)

  const contactDetails = [
    { 
      icon: Mail, 
      title: "Email", 
      info: "arunagiriindustry@gmail.com",
      link: "mailto:arunagiriindustry@gmail.com" 
    },
    { 
      icon: Phone, 
      title: "Phone", 
      info: "+91 9108046625",
      link: "tel:+919108046625" 
    },
    { 
      icon: Phone, 
      title: "Phone", 
      info: "+91 9108046626",
      link: "tel:+919108046626" 
    },
    {
      icon: MapPin,
      title: "Address",
      info: "#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru - 560091",
      link: "https://maps.google.com/?q=#18, 19, 32 & 33, Byraveshwara Industrial Estate, Peenya, Bengaluru - 560091"
    },
    { 
      icon: Globe, 
      title: "Website", 
      info: "arunagiriindustries.com",
      link: "https://arunagiriindustries.com" 
    },
  ]

  return (
    <section id="contact" className="py-32 bg-cream" ref={setRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl lg:text-6xl font-serif font-light text-charcoal mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Get in touch.
          </h2>
          <p
            className={`text-xl text-brown max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Ready to start your next project? Contact our team for precision manufacturing solutions tailored to your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <Link
              href={contact.link}
              key={index}
              className={`block text-center p-8 bg-sand hover:bg-tan/50 border border-brown/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              target={contact.link.startsWith("http") ? "_blank" : "_self"}
              rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
            >
              <div className="w-16 h-16 bg-brown rounded-sm flex items-center justify-center mx-auto mb-6">
                <contact.icon className="w-6 h-6 text-cream" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                {contact.title}
              </h3>
              <p className="text-brown font-light leading-relaxed">
                {contact.info}
              </p>
            </Link>
          ))}
        </div>

        {/* Company Details */}
        <div
          className={`max-w-xl mx-auto p-8 bg-sand border border-brown/10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-2xl font-serif text-charcoal mb-4 text-center">Company Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="p-4 border border-brown/10 bg-tan/20">
              <p className="font-medium text-brown mb-1">GSTIN</p>
              <p className="text-brown/80 font-light">29AAWCA5903H1Z8</p>
            </div>
            <div className="p-4 border border-brown/10 bg-tan/20">
              <p className="font-medium text-brown mb-1">CIN</p>
              <p className="text-brown/80 font-light">U29299KA2022PTC158398</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
