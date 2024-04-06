'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll,
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses,
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
]

export function FeaturesTravelAgents() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-green-600 py-24"
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
            Kanko for Travel Agents
          </h2>
          <p className="mt-3 text-xl tracking-tight text-blue-50">
            Everything you need to buy inventory directly from properties
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid grid-cols-1 items-center gap-y-2 pt-12"
          vertical={false}
        >
          {({ selectedIndex }) => (
            <div className="rounded-2xl bg-white p-8">
              <div className="flex">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 ring-1 ring-inset',
                        selectedIndex === featureIndex
                          ? 'bg-green-800 ring-green-800'
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
              <Tab.Panels className="mt-8">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative">
                      {/* <div className="absolute inset-x-0 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10" /> */}
                      <p className="relative max-w-2xl text-base text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
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
