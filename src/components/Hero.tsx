'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'

import cloudImg from '../images/backgrounds/clouds_3.png'
import EarlyAccessForm from './EarlyAccessForm'

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
      className="relative flex min-h-screen w-full items-center sm:items-end sm:py-24"
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
      <Container className="z-10">
        <div className="w-full">
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full overflow-hidden sm:w-4/5"
          >
            <motion.h1
              variants={textVariants}
              className="sm:leading-tighter lg:leading-tighter w-full text-left font-display text-4xl font-medium tracking-tighter text-kanko-grey sm:text-6xl lg:text-7xl"
            >
              The Marketplace for Travel Agents & Suppliers
              {/* {' '}
              <span className="text-kanko-green">Everywhere</span> */}
              {/* <CountryCycler /> */}
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="mt-6 w-full text-left text-xl font-light leading-snug tracking-tight text-gray-400 opacity-75 sm:mt-8 sm:text-2xl lg:mt-12 lg:text-3xl"
            >
              Kanko connects travel agents and suppliers directly, making
              services more accessible, affordable and profitable throughout the
              supply chain.
            </motion.p>
            <EarlyAccessForm>
              <CTAButton />
            </EarlyAccessForm>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

function CTAButton() {
  return (
    <motion.div
      variants={buttonVariants}
      className="mt-6 inline-flex rounded-sm bg-kanko-green px-6 py-2 font-display text-xl tracking-tight text-white sm:mt-8 sm:px-8 sm:py-3 sm:text-2xl lg:mt-12 lg:px-9 lg:text-3xl"
    >
      Get Early Access
    </motion.div>
  )
}
