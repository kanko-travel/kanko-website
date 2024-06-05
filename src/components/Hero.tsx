'use client'

import Image from 'next/image'

import { Container } from '@/components/Container'
import CountryCycler from './CountryCycler'

import bgImg from '../images/backgrounds/eberhard-grossgasteiger-vztdLE4li3o-unsplash.jpg'
// import j1Img from '../images/backgrounds/j1.jpg'
// import j2Img from '../images/backgrounds/j2.jpg'
// import s1Img from '../images/backgrounds/s1.jpg'
// import l1Img from '../images/backgrounds/l1.jpg'
// import z1 from '../images/backgrounds/z1.jpg'

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center bg-sky-50 py-24">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={bgImg}
            alt="background image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <Container className="z-10 text-center">
        <div className="mx-auto">
          <h1 className="w-full text-left font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Connecting Travel Agents & Suppliers in <CountryCycler />
          </h1>
          <p className="mt-10 hidden w-full text-left text-lg tracking-tight text-slate-900 sm:block sm:text-3xl">
            Kanko connects travel suppliers and agents directly, making services
            more accessible, affordable and profitable throughout the travel
            supply chain.
          </p>
        </div>
      </Container>
    </div>
  )
}
