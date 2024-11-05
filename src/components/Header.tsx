'use client'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from './Logo'
import { useScroll, motion, useTransform } from 'framer-motion'

export function Header({ basic }: { basic?: boolean }) {
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 5, 50],
    ['transparent', '#3b9bf5', '#ffffff'],
  )

  const actualBackgroundColor = basic ? '#ffffff' : backgroundColor

  const logoPrimaryColorStart = basic ? '#3b4147' : '#ffffff'

  const logoPrimaryColor = useTransform(
    scrollY,
    [30, 50],
    [logoPrimaryColorStart, '#3b4147'],
  )

  return (
    <motion.header
      className="fixed z-50 w-full py-6 drop-shadow-sm"
      style={{
        backgroundColor: actualBackgroundColor,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo
                primaryColour={logoPrimaryColor as unknown as string}
                className="h-7 w-auto sm:h-8"
              />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8"></div>
        </nav>
      </Container>
    </motion.header>
  )
}
