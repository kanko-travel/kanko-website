'use client'

import Image from 'next/image'
import Ticker from 'framer-motion-ticker'

import logoCloudbeds from '@/images/logos/cloudbeds.svg'
import logoSiteminder from '@/images/logos/siteminder.svg'
import logoMyallocator from '@/images/logos/myallocator.png'
import logoEzee from '@/images/logos/ezee.png'
import logoQuickbooks from '@/images/logos/quickbooks.svg'
import logoXero from '@/images/logos/xero.svg'
import sapLogo from '@/images/logos/sap.svg'
import tripadvisorLogo from '@/images/logos/tripadvisor.svg'
import wiseLogo from '@/images/logos/wise.svg'

const logos = [
  // { name: 'Cloudbeds', logo: logoCloudbeds },
  // { name: 'Myallocator', logo: logoMyallocator },
  // { name: 'Siteminder', logo: logoSiteminder },
  // { name: 'Ezee', logo: logoEzee },
  { name: 'Quickbooks', logo: logoQuickbooks },
  { name: 'Xero', logo: logoXero },
  { name: 'SAP', logo: sapLogo },
  // { name: 'TripAdvisor', logo: tripadvisorLogo },
  { name: 'Wise', logo: wiseLogo },
]

export default function LogoCloud() {
  return (
    <div className="flex flex-col items-center space-y-12 bg-slate-100 py-36">
      <div className="max-w-3xl px-8">
        <p className="text-center font-display text-base text-slate-900 sm:text-lg">
          Optimize your workflow with integrations to your existing technology
          stack
        </p>
      </div>
      <div className="flex w-full">
        <Ticker duration={15}>
          {logos.map((company) => (
            <li key={company.name} className="flex px-4 xl:px-6">
              <div className="relative flex h-[75px] w-full min-w-[120px] max-w-[190px] items-center justify-center sm:h-[95px]">
                <Image
                  src={company.logo}
                  alt={company.name}
                  height={32}
                  unoptimized
                />
              </div>
            </li>
          ))}
        </Ticker>
      </div>
    </div>
  )
}
