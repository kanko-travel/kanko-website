'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import { Container } from './Container'
import FeaturePresentationSellers from './FeaturePresentationSellers'

const tabs = [
  {
    name: 'Hotels',
    content: {
      title: 'Kanko for Hotels',
      description:
        'Kanko is a marketplace that helps you secure customer segments who prefer the personalised approach of travel agents, like luxury tourists and emerging markets that OTAs simply can’t reach. Kanko transforms your current operations within this segment by connecting you to more travel agents swiftly, securely, and without any intermediaries, helping you work less and sell more.',
      featurePresentation: <FeaturePresentationSellers />,
    },
  },
  {
    name: 'Travel Agents',
    content: {
      title: 'Kanko for Travel Agents',
      description:
        'Kanko is a marketplace that helps you secure customer segments who prefer the personalised approach of travel agents, like luxury tourists and emerging markets that OTAs simply can’t reach. Kanko transforms your current operations within this segment by connecting you to more travel agents swiftly, securely, and without any intermediaries, helping you work less and sell more.',
      featurePresentation: <FeaturePresentationSellers />,
    },
  },
  // {
  //   name: 'Destination Managers',
  //   content: {
  //     title: 'Kanko for Destination Managers',
  //     description:
  //       'Kanko is a marketplace that helps you secure customer segments who prefer the personalised approach of travel agents, like luxury tourists and emerging markets that OTAs simply can’t reach. Kanko transforms your current operations within this segment by connecting you to more travel agents swiftly, securely, and without any intermediaries, helping you work less and sell more.',
  //     featurePresentation: <FeaturePresentationSellers />,
  //   },
  // },
  // {
  //   name: 'Airlines',
  //   content: {
  //     title: 'Kanko for Airlines',
  //     description:
  //       'Kanko is a marketplace that helps you secure customer segments who prefer the personalised approach of travel agents, like luxury tourists and emerging markets that OTAs simply can’t reach. Kanko transforms your current operations within this segment by connecting you to more travel agents swiftly, securely, and without any intermediaries, helping you work less and sell more.',
  //     featurePresentation: <FeaturePresentationSellers />,
  //   },
  // },
]

export default function FeaturesMain() {
  return (
    <div className="w-full">
      <Container>
        <div className="mx-auto space-y-8 py-24">
          <h1 className="w-full text-center font-display text-xl font-medium tracking-tighter text-slate-900 sm:text-3xl">
            Is Kanko for You?
          </h1>
          <Suspense>
            <Tabs tabs={tabs} />
          </Suspense>
        </div>
      </Container>
    </div>
  )
}

interface TabProps {
  name: string
  content: TabContent
}

interface TabContent {
  title: string
  description: string
  featurePresentation: React.ReactNode
}

function Tabs({ tabs }: { tabs: TabProps[] }) {
  const searchParams = useSearchParams()
  const audience = searchParams.get('audience')

  const defaultIndex = audience
    ? Math.min(parseInt(audience), tabs.length - 1)
    : 0

  const [selected, updateSelected] = useState(defaultIndex)

  const handleSelect = useCallback(
    (index: number) => {
      updateSelected(index)
    },
    [updateSelected],
  )

  return (
    <div className="w-full">
      <div className="mb-16 flex justify-center space-x-6">
        {tabs.map((tab, i) => (
          <TabButton
            name={tab.name}
            key={i}
            index={i}
            isSelected={selected === i}
            onClick={handleSelect}
          />
        ))}
      </div>
      <ElevatorPitch
        title={tabs[selected].content.title}
        description={tabs[selected].content.description}
      />
      <div className="mt-32 w-full">
        {tabs[selected].content.featurePresentation}
      </div>
    </div>
  )
}

function TabButton({
  name,
  index,
  isSelected,
  onClick,
}: {
  name: string
  index: number
  isSelected: boolean
  onClick: (i: number) => void
}) {
  const className =
    'cursor-pointer flex justify-center rounded-full py-3 px-4 sm:py-4 sm:px-6 text-lg sm:text-xl font-semibold'
  const unselectedClassName =
    'text-slate-900 ring-2 ring-inset ring-slate-900 hover:ring-[#32d98e] hover:text-[#32d98e]'
  const selectedClassName = 'text-white bg-[#32d98e]'

  return (
    <div
      className={`${className} ${
        isSelected ? selectedClassName : unselectedClassName
      }`}
      onClick={() => onClick(index)}
    >
      {name}
    </div>
  )
}

function ElevatorPitch({ title, description }) {
  return (
    <div className="flex w-full flex-col space-y-8 text-left text-slate-900">
      <motion.h1 className="w-full font-display text-3xl font-medium tracking-tighter sm:text-5xl">
        {title}
      </motion.h1>
      <motion.p className="w-full text-xl tracking-tight sm:text-2xl">
        {description}
      </motion.p>
    </div>
  )
}
