'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import useAnimateToCenter from '@/hooks/useAnimateToCenter'

export default function FeaturePresentation({
  features,
}: {
  features: FeatureProps[]
}) {
  return (
    <div className="mx-auto space-y-32">
      {features.map((f, i) => (
        <div
          className={`flex w-full flex-col items-center justify-around text-left ${
            i % 2 == 0 ? 'sm:items-start' : 'sm:items-end'
          }`}
          key={f.title}
        >
          <Feature {...f} />
        </div>
      ))}
    </div>
  )
}

export interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

function Feature({ title, description, icon }: FeatureProps) {
  const ref = useRef(null)
  const { start, end } = useAnimateToCenter(ref)

  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [start, end], [0, 1])
  const opacity = useTransform(scrollY, [start, end], [0, 1])

  return (
    <div className="w-full sm:w-3/5">
      <motion.div
        ref={ref}
        className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-4xl sm:flex-row sm:space-x-16 sm:space-y-0"
        style={{ scale, opacity }}
      >
        <div className="w-12 sm:w-64">{icon}</div>
        <div className="flex flex-col space-y-4 text-center sm:text-left">
          <motion.h1 className="w-full font-display text-3xl font-medium tracking-tighter text-[#32d98e] sm:text-4xl">
            {title}
          </motion.h1>
          <motion.p className="w-full text-xl tracking-tight text-slate-900 sm:text-2xl">
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
