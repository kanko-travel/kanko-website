import Image from 'next/image'

import logoCloudbeds from '@/images/logos/cloudbeds.svg'
import logoSiteminder from '@/images/logos/siteminder.svg'
import logoEzee from '@/images/logos/ezee.png'

const channelManagers = [
  { name: 'Cloudbeds', logo: logoCloudbeds },
  { name: 'Siteminder', logo: logoSiteminder },
  { name: 'Ezee', logo: logoEzee },
]

export function ChannelManagerShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {channelManagers.map(({ name, logo }) => (
        <div
          key={name}
          className="relative flex h-[75px] w-full items-center justify-center rounded-xl bg-white p-4 ring-1 ring-inset ring-slate-200 sm:h-[95px] sm:p-8"
        >
          <Image
            src={logo}
            alt={name}
            height={name === 'Ezee' ? 48 : 32}
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
