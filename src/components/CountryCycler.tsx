import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
const countries = [
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Australia',
  'Bangladesh',
  'Brunei',
  'Cambodia',
  'China',
  'Fiji',
  'India',
  'Indonesia',
  'Japan',
  'Laos',
  'Malaysia',
  'Maldives',
  'Mongolia',
  'Myanmar',
  'Nepal',
  'New Zealand',
  'Pakistan',
  //   'Papua New Guinea',
  'Philippines',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Thailand',
  'Vietnam',
  'UK',
  'USA',
]

const CountryCycler = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % countries.length)
    }, 2000) // Change country every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{ verticalAlign: 'top' }}
      className="relative inline-block overflow-hidden text-[#32d98e]"
    >
      <AnimatePresence>
        <motion.span
          key={countries[index]}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {countries[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0">Czech Republic</span>
    </div>
  )
}

export default CountryCycler
