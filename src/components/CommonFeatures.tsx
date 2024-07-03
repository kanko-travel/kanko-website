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

const featureVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
}

export default function CommonFeatures({ items }: CommonFeaturesProps) {
  return (
    <motion.div
      variants={rootVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
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
      <div className="z-10 p-12">
        <h4 className="mb-4 font-display text-3xl font-medium leading-tight text-white sm:mb-6 sm:text-4xl">
          {title}
        </h4>
        <p className="font-display text-lg leading-tight text-white sm:text-xl">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
