import { motion } from 'framer-motion'
import React from 'react'

export interface FeatureProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export interface FeatureGridProps {
  items: FeatureProps[]
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

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <motion.div
      variants={rootVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      className="grid grid-cols-1 gap-20 overflow-hidden sm:grid-cols-2"
    >
      {items.map(({ title, description, icon }) => (
        <Feature
          key={title}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </motion.div>
  )
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <motion.div
      variants={featureVariants}
      className="flex flex-col border-t-2 border-[#3b4147] pt-4 sm:pt-8"
    >
      <div className="flex items-start justify-between">
        <h4 className="mb-6 font-display text-xl font-medium text-[#3b4147] sm:text-2xl">
          {title}
        </h4>
        <span className="">{icon}</span>
      </div>
      <p className="font-display text-base leading-tight text-gray-400 sm:text-lg">
        {description}
      </p>
    </motion.div>
  )
}
