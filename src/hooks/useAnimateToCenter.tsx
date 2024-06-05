import { useState, useEffect, RefObject } from 'react'

interface Bounds {
  start: number
  end: number
}

const useAnimateToCenter = (elementRef: RefObject<HTMLElement>): Bounds => {
  const [center, setBounds] = useState<Bounds>({ start: 0, end: 0 })

  useEffect(() => {
    const calculateBounds = () => {
      if (elementRef.current) {
        const body = document.body
        const docEl = document.documentElement

        const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop
        const clientTop = docEl.clientTop || body.clientTop || 0

        const rect = elementRef.current.getBoundingClientRect()

        const top = rect.top + scrollTop - clientTop

        const start = top * 0.5
        const end = top - window.innerHeight / 2 + rect.height / 2

        setBounds({ start, end })
      }
    }

    calculateBounds()

    // Add event listener to recalculate center on window resize
    window.addEventListener('resize', calculateBounds)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateBounds)
    }
  }, [elementRef])

  return center
}

export default useAnimateToCenter
