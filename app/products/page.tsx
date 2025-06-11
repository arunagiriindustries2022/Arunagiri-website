import { Header } from "@/components/header"
import { ProductsHero } from "@/components/products-hero"
import { ProductsGrid } from "@/components/products-grid"
import { CustomersSection } from "@/components/customers-section"
import { Footer } from "@/components/footer"

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsHero />
        <ProductsGrid />
        <CustomersSection />
      </main>
      <Footer />
    </div>
  )
}
