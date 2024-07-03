'use client'

import Image from 'next/image'

import { Container } from '@/components/Container'
// import CountryCycler from './CountryCycler'

import cloudImg from '../images/backgrounds/clouds_3.png'

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center"
      style={{
        background:
          'linear-gradient(180deg, #2f95f4, rgb(255, 255, 255) 72.08%)',
      }}
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={cloudImg}
            alt="background image"
            fill
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            // className="-scale-x-100 transform"
          />
        </div>
      </div>
      <Container className="z-10 text-center">
        <div className="flex w-full">
          <div className="w-full overflow-hidden lg:w-4/5">
            <h1 className="w-full text-left font-display text-4xl font-medium tracking-tighter text-[#3b4147] sm:text-6xl lg:text-7xl">
              The Marketplace for Travel Agents & Suppliers{' '}
              <span className="text-[#32d98e]">Everywhere</span>
              {/* <CountryCycler /> */}
            </h1>
            <p className="mt-8 w-full text-left text-xl font-light tracking-tight text-gray-400 opacity-75 sm:block sm:text-2xl lg:mt-16 lg:text-3xl">
              Kanko connects travel agents and suppliers directly, making
              services more accessible, affordable and profitable throughout the
              supply chain.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
