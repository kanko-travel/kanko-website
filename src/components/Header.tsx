'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from './Logo'
import { useScroll, motion, useTransform } from 'framer-motion'

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {/* <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink> */}
            {/* <hr className="m-2 border-slate-300/40" /> */}
            {/* <MobileNavLink href="/login">Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 5, 50],
    ['transparent', '#e0ece5', '#0f172a'],
  )

  const logoPrimaryColor = useTransform(
    scrollY,
    [30, 50],
    ['#0f172a', '#ffffff'],
  )

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <motion.header
      className="fixed z-50 w-full py-6"
      style={{ backgroundColor, transition: 'background-color 0.3s ease' }}
    >
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              {/* <Favicon className="h-8 w-auto" /> */}
              <Logo
                primaryColour={logoPrimaryColor as unknown as string}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            {/* <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#hoteliers">Hoteliers</NavLink>
              <NavLink href="#travel-agents">Travel Agents</NavLink>
            </div> */}
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div> */}
            <Button
              onClick={() =>
                openInNewTab('https://x96t2tdwykm.typeform.com/to/KPzyQfcL')
              }
              color="primary"
            >
              <span>Get in touch</span>
            </Button>
            {/* <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div> */}
          </div>
        </nav>
      </Container>
    </motion.header>
  )
}
