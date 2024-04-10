import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { LogoAnimated } from './LogoAnimated'

export function Hero() {
  return (
    <div className="flex h-screen items-center py-24">
      <Container className="text-center">
        <div className="mb-8 flex justify-center">
          <LogoAnimated className="h-16" />
        </div>
        <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          The Marketplace for <span className="text-blue-700">Hoteliers</span>
          {' and '}
          <span className="text-green-700">Travel Agents</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Kanko connects Maldives travel services with global agents directly,
          removing complexity and enhancing visibility.
        </p>
        <div className="mt-12 flex justify-center gap-x-6">
          {/* <Button href="/register" color="blue">
            <span>
              Get started <span className="hidden lg:inline">today</span>
            </span>
          </Button> */}
          {/* <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="outline"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">Watch video</span>
          </Button> */}
        </div>
        {/* <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}
      </Container>
    </div>
  )
}
