'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

import { Container } from './Container'
import FeaturePresentationSellers from './FeaturePresentationSellers'
import LottiePlayer from './LottiePlayer'

import hotelLottie from '../lotties/hotel.json'
import travelAgencyLottie from '../lotties/travel_agency.json'
import planeLottie from '../lotties/plane.json'

const airlineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0f172a"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727z" />
    <path d="M3 21h18" />
  </svg>
)

const planeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0f172a"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
  </svg>
)

const hotelIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0f172a"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l18 0" />
    <path d="M5 21v-14l8 -4v18" />
    <path d="M19 21v-10l-6 -4" />
    <path d="M9 9l0 .01" />
    <path d="M9 12l0 .01" />
    <path d="M9 15l0 .01" />
    <path d="M9 18l0 .01" />
  </svg>
)

const beachIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0f172a"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
    <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
    <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
    <path d="M15 9l-3 5.196" />
    <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
  </svg>
)

const tabs = [
  {
    name: 'Hotels',
    content: {
      title: 'Kanko for Hotels',
      description:
        'Kanko is your marketplace to reach customer segments like luxury tourists and emerging markets that OTAs miss. Connect directly with travel agents quickly and securely, without intermediaries, helping you sell more while doing less.',
      featurePresentation: <FeaturePresentationSellers />,
      lottie: hotelLottie,
      icon: hotelIcon,
    },
  },
  {
    name: 'Travel Agents',
    content: {
      title: 'Kanko for Travel Agents',
      description:
        'Kanko gives you easy access to properties and travel services worldwide, catering to any budget or preference. Our all in one service handles everything from booking to payment to management, ensuring a hassle-free experience from start to finish.',
      featurePresentation: <FeaturePresentationSellers />,
      lottie: travelAgencyLottie,
      icon: beachIcon,
    },
  },
  // {
  //   name: 'Airlines',
  //   content: {
  //     title: 'Kanko for Airlines',
  //     description:
  //       'Kanko is a marketplace that helps you secure customer segments who prefer the personalised approach of travel agents, like luxury tourists and emerging markets that OTAs simply can’t reach. Kanko transforms your current operations within this segment by connecting you to more travel agents swiftly, securely, and without any intermediaries, helping you work less and sell more.',
  //     featurePresentation: <FeaturePresentationSellers />,
  //     lottie: planeLottie,
  //     icon: airlineIcon,
  //   },
  // },
]

export default function FeaturesMain() {
  return (
    <div className="w-full">
      <Container>
        <div className="mx-auto space-y-8 py-24 sm:space-y-8">
          <h1 className="w-full text-center font-display text-xl font-medium tracking-tighter text-slate-900 sm:text-3xl">
            Is Kanko for <span className="">You</span>?
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
  lottie: any
  icon: React.ReactNode
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
      <AnimatePresence mode="wait">
        {tabs.map((tab, i) =>
          selected == i ? (
            <ElevatorPitch
              key={i}
              title={tab.content.title}
              description={tab.content.description}
              lottie={tab.content.lottie}
            />
          ) : null,
        )}
      </AnimatePresence>
      <div className="mt-12 w-full">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="flex w-20 items-center justify-center bg-white p-4">
              <AnimatePresence mode="wait">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={tabs[selected].name}
                >
                  {tabs[selected].content.icon}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-24 w-full">
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
    'cursor-pointer flex justify-center rounded-full py-2 px-5 sm:py-2 sm:px-5 text-sm sm:text-lg'
  const unselectedClassName =
    'text-slate-900 ring-1 ring-inset ring-slate-900 hover:ring-[#32d98e] hover:text-[#32d98e]'
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

function ElevatorPitch({ title, description, lottie }) {
  return (
    <motion.div
      key={title}
      initial={{ x: '-20%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '20%', opacity: 0 }}
      className="flex w-full items-center sm:space-x-16"
    >
      {/* <div className="hidden sm:block">
        <LottiePlayer key="questionLottie" animationData={lottie} />
      </div> */}
      <div className="mx-auto w-3/5">
        <div className="tex-slate-900 rounded-4xl bg-white px-20 py-20 text-center ring-1 ring-slate-900">
          <motion.div className="flex w-full flex-grow flex-col space-y-4">
            <motion.h1 className="w-full font-display text-3xl font-medium tracking-tighter sm:text-5xl">
              {title}
            </motion.h1>
            <motion.p className="w-full text-xl font-light sm:text-2xl">
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
