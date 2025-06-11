import { Header } from "@/components/header"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { TechnologySection } from "@/components/technology-section"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionSection />
        <SpecialtiesSection />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  )
}
