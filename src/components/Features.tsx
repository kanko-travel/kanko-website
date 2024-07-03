'use client'

import { ReactNode } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

interface Feature {
  title: string
  description?: ReactNode
  animationData?: Object
}

export function Features({
  title,
  subtitle,
  features,
  bgColour = 'bg-indigo-400',
}: {
  title: ReactNode
  subtitle?: ReactNode
  features: Feature[]
  bgColour?: string
}) {
  return (
    <section className={`relative ${bgColour} py-24`}>
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-xl tracking-tight text-blue-50 sm:text-2xl">
            {subtitle}
          </p>
        </div>

        <Tab.Group
          as="div"
          className="mt-12 grid grid-cols-1 items-center gap-y-4"
          vertical={false}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex">
                <Tab.List className="relative flex w-full flex-wrap gap-2 whitespace-nowrap sm:gap-4">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 ring-1 ring-inset ring-white',
                        selectedIndex === featureIndex
                          ? 'bg-white'
                          : 'hover:ring-slate-800',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-sm ui-not-focus-visible:outline-none lg:text-lg',
                            selectedIndex === featureIndex
                              ? 'text-slate-800'
                              : 'text-white hover:text-slate-800',
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
              <div className="rounded-2xl bg-white px-12 py-8 xl:px-16 xl:py-12">
                <Tab.Panels className="relative">
                  {features.map((feature) => (
                    <Tab.Panel key={feature.title} unmount={false}>
                      <div className="relative h-[450px] sm:h-96">
                        <div className="relative flex h-full items-center xl:absolute xl:inset-0">
                          <div className="flex max-w-2xl flex-col">
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-800 lg:text-3xl">
                              {feature.title}
                            </h2>
                            <div className="mt-4 flex grow flex-col text-base text-slate-400 lg:text-xl">
                              {typeof feature.description === 'string' ? (
                                <p className="">{feature.description}</p>
                              ) : (
                                <>{feature.description}</>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
