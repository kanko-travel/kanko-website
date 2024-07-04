'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from './Container'
import FeatureGrid, { FeatureProps } from './FeatureGrid'

import {
  IconBolt,
  IconBulb,
  IconAffiliate,
  IconWorld,
  IconShoppingBagPlus,
  IconSwords,
  IconReplace,
} from '@tabler/icons-react'
import CommonFeatures from './CommonFeatures'

import commonImg1 from '../images/backgrounds/common_1.jpg'
import commonImg4 from '../images/backgrounds/common_5.jpg'
import commonImg6 from '../images/backgrounds/common_6.jpg'

const featuresCommon = [
  {
    title: 'Break Language Barriers',
    description:
      "Don't let business get lost in translation. State-of-the-art translation technology helps you communicate in 103 different languages, even if you might be fluent in just one.",
    bgImg: commonImg1,
  },
  {
    title: 'Manage Your Organization',
    description:
      'Manage roles and permissions within your organisation to mimic reality, so everyone is doing what they should be. Add in and take out consultants easily too.',
    bgColour: '#bc7155',
  },
  {
    title: 'Grow Comfortably',
    description:
      'Scale your operations smoothly regardless of business size, with features designed to accommodate growth and adapt to changing business needs. Your plan grows with you.',
    bgImg: commonImg6,
    applyGradient: true,
    // bgColour: '#bc7155',
  },
  {
    title: 'Deploy Robust Security',
    description:
      'Prioritize user security with advanced encryption and data protection protocols to safeguard all transactions and personal information.',
    bgImg: commonImg4,
    applyGradient: true,
  },
]

const featuresHotels = [
  {
    title: 'Get Paid Quickly',
    description:
      'Forget the delays and harness the power of real-time payments. Our global partners ensure you receive your funds quickly and reliably.',
    icon: <IconBolt size={28} />,
  },
  {
    title: 'Sell Smarter, Not Harder',
    description:
      'Maximize sales with Kanko’s dynamic pricing tools. Create custom and wholesale rates, bundles, and promotions, keeping your business selling to different audiences at attractive price points.',
    icon: <IconBulb size={28} />,
  },
  {
    title: 'Streamline Your Business',
    description:
      'Integrate seamlessly with your channel manager to ensure accurate inventory and booking information, so buyers aren’t left guessing.',
    icon: <IconAffiliate size={28} />,
  },
  {
    title: 'Expand Globally with Peace of Mind',
    description:
      'Kanko partners with industry leading verification services to eliminate fraud by ensuring you deal with verified businesses worldwide.',
    icon: <IconWorld size={28} />,
  },
]

const featuresTravelAgents = [
  {
    title: 'Something for Everyone',
    description:
      'Create unique holidays for any budget. Access real-time inventory from a range of hotels and travel services, alongside exclusive experiences and services.',
    icon: <IconShoppingBagPlus size={28} />,
  },
  {
    title: 'Hassle-Free Transactions',
    description:
      'Our partnering payment services offer you flexibility in how you pay, while our business verification partners eliminate fraud to keep you booking with confidence.',
    icon: <IconReplace size={28} />,
  },
  {
    title: 'Gain the Edge',
    description:
      'Unlock dynamic prices from hotels, including promotions, bundles and wholesale rates. Enjoy your savings or pass it on and create hard-to-beat prices.',
    icon: <IconSwords size={28} />,
  },
]

const tabs = [
  {
    name: 'Hotels',
    content: {
      title: 'Kanko for Hotels',
      description:
        'Extend your reach and maximise your sales with Kanko. Connect your property with more travel agents worldwide and reach new customers easily on a swift, secure and reliable marketplace that keeps you selling 24/7.',
    },
    features: featuresHotels,
  },
  {
    name: 'Travel Agents',
    content: {
      title: 'Kanko for Travel Agents',
      description:
        'Kanko puts properties and travel services around the globe at your fingertips, so you have offerings for any customer’s budget and desire. Eliminate complexity from booking, buying and communications with properties, so you can focus on what matters.',
    },
    features: featuresTravelAgents,
  },
]

export default function FeaturesMain() {
  return (
    <div className="w-full pt-16">
      <Container>
        <div className="mx-auto sm:space-y-8">
          <Suspense>
            <Tabs tabs={tabs} />
          </Suspense>
        </div>
      </Container>
      <div className="mt-36 w-full">
        <CommonFeatures items={featuresCommon} />
      </div>
    </div>
  )
}

interface TabProps {
  name: string
  content: TabContent
  features: FeatureProps[]
}

interface TabContent {
  title: string
  description: string
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

  const featuresHeadingVariants = {
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

  const tabsVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        variants={featuresHeadingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto mb-6 w-full sm:mb-8"
      >
        <h2 className="text-kanko-grey text-center font-display text-2xl sm:text-4xl">
          <span>A Solution Tailored to You</span>
          <span className="text-kanko-green ml-2 text-3xl sm:text-5xl">.</span>
        </h2>
      </motion.div>
      <motion.div
        variants={tabsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-12 flex justify-center space-x-3 sm:mb-20 sm:space-x-8"
      >
        {tabs.map((tab, i) => (
          <TabButton
            name={tab.name}
            key={i}
            index={i}
            isSelected={selected === i}
            onClick={handleSelect}
          />
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        {tabs.map((tab, i) =>
          selected == i ? (
            <ElevatorPitch
              key={i}
              title={tab.content.title}
              description={tab.content.description}
              features={tab.features}
            />
          ) : null,
        )}
      </AnimatePresence>
    </div>
  )
}

const tabButtonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
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
    'cursor-pointer flex justify-center rounded-lg py-2 px-5 sm:py-2 sm:px-5 text-sm sm:text-lg'
  const unselectedClassName = 'text-gray-400 hover:text-slate-700'
  const selectedClassName = 'text-slate-900 font-medium bg-green-100'

  return (
    <motion.div
      variants={tabButtonVariants}
      className={`${className} ${
        isSelected ? selectedClassName : unselectedClassName
      }`}
      onClick={() => onClick(index)}
    >
      {name}
    </motion.div>
  )
}

const elevatorPitchVariants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.6 },
  },
}

const elevatorPitchTextVariants = {
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

function ElevatorPitch({ title, description, features }) {
  return (
    <motion.div
      variants={elevatorPitchVariants}
      initial="initial"
      exit="exit"
      className="space-y-20 overflow-hidden"
    >
      <div className="flex w-full items-center justify-start">
        <div className="w-full">
          <motion.p
            variants={elevatorPitchTextVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            className="text-kanko-grey w-full font-display text-2xl tracking-tight sm:text-4xl sm:leading-tight"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <FeatureGrid items={features} />
    </motion.div>
  )
}
