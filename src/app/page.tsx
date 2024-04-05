import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { FeaturesHoteliers } from '@/components/FeaturesHoteliers'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import LogoCloud from '@/components/LogoCloud'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesHoteliers />
        <LogoCloud />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
