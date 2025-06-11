import Image from "next/image"
import { Instagram, Facebook, Twitter, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image src="/images/agi-logo.png" alt="Arunagiri Industries Logo" width={160} height={80} className="brightness-110" />
            </div>
            <p className="text-sand max-w-md leading-relaxed mb-6 font-light">
              Experts in precision manufacturing solutions for industrial applications and specialized equipment.
            </p>
            <div className="space-y-1 text-sm text-beige/80 font-light">
              <div>GSTIN: 29AAWCA5903H1Z8</div>
              <div>CIN: U29299KA2022PTC158398</div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-medium text-cream mb-6 border-b border-taupe/30 pb-2 inline-block">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/arunagiriindustries?igsh=ZzQ4OXA2MWJzYnU0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown hover:bg-[#E4405F] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-cream group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576697536249"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-cream group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/Arunagiri_pvt?t=PbW6DgI63BxQRFBlWI4g_Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brown hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-cream group-hover:text-black transition-colors" />
              </a>
            </div>
            <p className="text-beige/80 text-sm mt-4 font-light">
              Stay updated with our latest projects and manufacturing insights
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-serif font-medium text-cream mb-6 border-b border-taupe/30 pb-2 inline-block">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-beige hover:text-cream transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-beige hover:text-cream transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-beige hover:text-cream transition-colors">
                  Machinery
                </a>
              </li>
              <li>
                <a href="#products" className="text-beige hover:text-cream transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gym-products" className="text-beige hover:text-cream transition-colors">
                  Gym Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-beige hover:text-cream transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-brown/20">
          <h3 className="text-xl font-serif font-medium text-cream mb-6 border-b border-taupe/30 pb-2 inline-block">Contact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tan" />
                <span className="text-beige">+91 9108046625</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tan" />
                <span className="text-beige">+91 9108046626</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tan" />
                <span className="text-beige">arunagiriindustry@gmail.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-beige font-medium mb-2">Address</h4>
              <p className="text-beige/80 font-light">
              #18, 19, 32 & 33, Byraveshwara Industrial Estate,<br />
              Peenya, Bengaluru - 560091
              </p>
            </div>
            
            <div>
              <h4 className="text-beige font-medium mb-2">Business Hours</h4>
              <p className="text-beige/80 font-light">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brown/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beige/60 text-sm">© 2024 Arunagiri Industries Pvt. Ltd.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://arunagiriindustries.com"
                className="text-beige/60 hover:text-cream text-sm transition-colors"
              >
                arunagiriindustries.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
