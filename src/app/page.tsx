import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import FeaturesMain from '@/components/FeaturesMain'
import { redirect } from 'next/navigation'

export default function Home({ searchParams }) {
  if (searchParams && searchParams.source === 'wtm_2024') {
    const queryParams = new URLSearchParams(searchParams).toString()
    redirect(`/early-access?${queryParams}`)
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesMain />
      </main>
      <Footer />
    </>
  )
}
