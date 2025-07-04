import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MarqueeText } from "@/components/marquee-text"
import { MachinerySection } from "@/components/machinery-section"
import { ProductsSection } from "@/components/products-section"
import { IndustrialProductsSection } from "@/components/industrial-products-section"
import { CustomersSection } from "@/components/customers-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-champagne">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MarqueeText />
        <ServicesSection />
        <MachinerySection />
        <ProductsSection />
        <IndustrialProductsSection />
        <CustomersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}