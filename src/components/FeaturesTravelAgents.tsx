import animationGlobe from '@/lotties/globe.json'
import animationCm from '@/lotties/connection.json'

import { Features } from './Features'

const title = (
  <>
    Kanko for <span className="text-white">Travel Agents</span>
  </>
)
const subtitle = 'Everything you need to buy inventory directly from properties'

const features = [
  {
    title: 'Real Time Inventory',
    description:
      "This is a really cool feature travel agents don't want to miss out on. It's super cool. Did I mention that it's cool already?",
    animationData: animationCm,
  },
  {
    title: 'Instant Booking Confirmation',
    description:
      'This is another super cool feature that might be particularly relevant to travel managers of the Spanish speaking kind.',
    animationData: animationGlobe,
  },
  {
    title: 'Unparalled Booking Search',
    description:
      'This is another super cool feature that might be particularly relevant to travel managers of the Spanish speaking kind.',
    animationData: animationGlobe,
  },
]

export function FeaturesTravelAgents() {
  return (
    <Features
      title={title}
      subtitle={subtitle}
      features={features}
      bgColour="bg-green-500"
    />
  )
}
