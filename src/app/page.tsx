import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
    <section className="flex flex-col w-full">  
      <HeroSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />    
    </section>
    </>
  )
}

