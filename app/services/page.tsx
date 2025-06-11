import { Header } from "@/components/header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { MachinerySection } from "@/components/machinery-section"
import { Footer } from "@/components/footer"

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <MachinerySection />
      </main>
      <Footer />
    </div>
  )
}
