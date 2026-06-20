/**
 * Sri Vetrivel Furnitures - Landing Page
 * Full section composition. Architecture defined in IMPLEMENTATION_KICKSTART.md §5.
 */

import { Separator } from '@/components/ui/separator'
import { Navbar } from '@/components/navbar/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/footer/Footer'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Page() {
  return (
    <main id="top">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <Separator className="bg-accent/10" />
      <ProductsSection />
      <Separator className="bg-accent/10" />
      <WhyUsSection />
      <Separator className="bg-accent/10" />
      <TestimonialsSection />
      <Separator className="bg-accent/10" />
      <FaqSection />
      <Separator className="bg-accent/10" />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
