'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
// import CountryCycler from './CountryCycler'

import cloudImg from '../images/backgrounds/clouds_3.png'

const textContainerVariants = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      duration: 0.6,
      staggerChildren: 0.4,
    },
  },
}

const textVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center sm:items-end sm:pb-12"
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
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full overflow-hidden sm:w-4/5"
          >
            <motion.h1
              variants={textVariants}
              className="text-kanko-grey w-full text-left font-display text-4xl font-medium tracking-tighter sm:text-6xl lg:text-7xl"
            >
              The Marketplace for Travel Agents & Suppliers{' '}
              <span className="text-kanko-green">Everywhere</span>
              {/* <CountryCycler /> */}
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="mt-6 w-full text-left text-lg font-light leading-snug tracking-tight text-gray-400 opacity-75 sm:text-2xl lg:mt-8 lg:text-3xl"
            >
              Kanko connects travel agents and suppliers directly, making
              services more accessible, affordable and profitable throughout the
              supply chain.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
