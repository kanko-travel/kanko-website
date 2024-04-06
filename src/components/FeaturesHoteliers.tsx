'use client'

import Image from 'next/image'
import Lottie from 'react-lottie'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

import logoCloudbeds from '@/images/logos/cloudbeds.svg'
import logoSiteminder from '@/images/logos/siteminder.svg'
import logoEzee from '@/images/logos/ezee.png'

import animationGlobe from '@/lotties/globe.json'
import animationCm from '@/lotties/connection.json'
import animationTransfer from '@/lotties/transfer.json'

const lottieOptions = (animationData: any) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
})

const logos = [
  { name: 'Cloudbeds', logo: logoCloudbeds },
  { name: 'Siteminder', logo: logoSiteminder },
  { name: 'Ezee', logo: logoEzee },
]

const features = [
  {
    title: 'Synchronized Inventory',
    description: () => (
      <>
        <p>
          Kanko integrates with all the major channel managers, allowing
          real-time synchronization of availability and rates between Kanko and
          your PMS.
        </p>
        <div className="mt-auto grid grid-cols-3 gap-4">
          {logos.map(({ name, logo }) => (
            <div
              key={name}
              className="relative flex h-[75px] w-full items-center justify-center rounded-xl bg-white p-4 ring-1 ring-inset ring-slate-200 sm:h-[95px] sm:p-8"
            >
              <Image src={logo} alt={name} height={32} unoptimized />
            </div>
          ))}
        </div>
      </>
    ),
    image: screenshotPayroll,
    animationData: animationCm,
  },
  {
    title: 'Global Exposure',
    description:
      'Kanko partners with over 500 travel agencies in 125 countries. By listing your inventory on Kanko you have access to all of them.',
    image: screenshotPayroll,
    animationData: animationGlobe,
  },
  {
    title: 'Real Time Settlements',
    description:
      'Have payments wired straight to your account in your local currency, with real-time settlements per booking.',
    image: screenshotVatReturns,
    animationData: animationTransfer,
  },
]

export function FeaturesHoteliers() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 py-24"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Kanko for Hoteliers
          </h2>
          <p className="mt-3 text-xl tracking-tight text-blue-50">
            Everything you need to sell inventory directly to travel agencies
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid grid-cols-1 items-center gap-y-2 pt-12"
          vertical={false}
        >
          {({ selectedIndex }) => (
            <div className="rounded-2xl bg-white px-24 py-12">
              <div className="flex">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 ring-1 ring-inset',
                        selectedIndex === featureIndex
                          ? 'bg-blue-800 ring-blue-800'
                          : 'ring-slate-200 hover:bg-slate-400 hover:ring-slate-400',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-white'
                              : 'text-slate-400 hover:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full" />
                          {feature.title}
                        </Tab>
                      </h3>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="relative mt-12">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative h-96">
                      <div className="flex h-full w-full items-center justify-end">
                        <div
                          className="flex h-full items-center justify-end"
                          style={{ width: '50%', height: 'auto' }}
                        >
                          <Lottie
                            options={lottieOptions(feature.animationData)}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0">
                        <div className="flex h-full max-w-2xl flex-col">
                          <h2 className="text-3xl text-slate-800">
                            {feature.title}
                          </h2>
                          <div className="mt-4 flex grow flex-col text-xl text-slate-400">
                            {typeof feature.description == 'string' ? (
                              <p className="">{feature.description}</p>
                            ) : (
                              <>{feature.description()}</>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
