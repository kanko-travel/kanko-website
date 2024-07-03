import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface CommonFeatureProps {
  title: string
  description: string
  bgColour?: string
  bgImg?: string | StaticImport
  applyGradient?: boolean
}

export interface CommonFeaturesProps {
  items: CommonFeatureProps[]
}

const rootVariants = {
  initial: {},
  animate: {
    transition: {},
  },
}

const featureVariants = {
  initial: {
    // y: 50,
    opacity: 0,
  },
  animate: {
    // y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.6,
    },
  },
}

const featureTextContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const featureTextVariants = {
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

export default function CommonFeatures({ items }: CommonFeaturesProps) {
  return (
    <motion.div
      // variants={rootVariants}
      // initial="initial"
      // whileInView="animate"
      // viewport={{ once: true, amount: 0.2 }}
      className="grid w-full grid-cols-1 overflow-hidden sm:grid-cols-2"
    >
      {items.map(({ title, description, bgColour, bgImg, applyGradient }) => (
        <CommonFeature
          key={title}
          title={title}
          description={description}
          bgColour={bgColour}
          bgImg={bgImg}
          applyGradient={applyGradient}
        />
      ))}
    </motion.div>
  )
}

function CommonFeature({
  title,
  description,
  bgColour,
  bgImg,
  applyGradient,
}: CommonFeatureProps) {
  return (
    <motion.div
      variants={featureVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      className="relative flex flex-col justify-end"
      style={{ height: '50vh', minHeight: '512px' }}
    >
      <div className="absolute inset-0">
        {bgColour && (
          <div
            className="relative h-full w-full"
            style={{ backgroundColor: bgColour }}
          />
        )}
        {bgImg && (
          <div className="relative h-full w-full">
            <Image
              src={bgImg}
              alt="background image"
              fill
              style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            />
          </div>
        )}
      </div>
      {typeof applyGradient != 'undefined' && applyGradient && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
          }}
        />
      )}
      <motion.div variants={featureTextContainerVariants} className="z-10 p-12">
        <motion.h4
          variants={featureTextVariants}
          className="mb-4 font-display text-3xl font-medium leading-tight text-white sm:mb-6 sm:text-4xl"
        >
          {title}
        </motion.h4>
        <motion.p
          variants={featureTextVariants}
          className="font-display text-lg leading-tight text-white sm:text-xl"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
