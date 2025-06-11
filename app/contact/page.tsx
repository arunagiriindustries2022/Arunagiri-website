import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
