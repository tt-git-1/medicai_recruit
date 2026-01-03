import { Hero } from "@/components/sections/Hero"
import { MissionSection } from "@/components/sections/MissionSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { CultureSection } from "@/components/sections/CultureSection"
import { CareersSection } from "@/components/sections/CareersSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MissionSection />
      <ServicesSection />
      <CultureSection />
      <CareersSection />
    </div>
  )
}
