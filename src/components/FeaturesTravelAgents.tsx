import animationGlobe from '@/lotties/globe.json'
import animationCm from '@/lotties/connection.json'
import animationTransfer from '@/lotties/wire.json'

import { Features } from './Features'
import { ChannelManagerShowcase } from './ChannelManagerShowcase'

const title = (
  <>
    Kanko for <span className="text-white">Travel Agents</span>
  </>
)
const subtitle = 'Everything you need to buy inventory directly from properties'

const features = [
  {
    title: 'Some Really Cool Feature',
    description:
      "This is a really cool feature travel agents don't want to miss out on. It's super cool. Did I mention that it's cool already?",
    animationData: animationCm,
  },
  {
    title: 'Super Cool Feature Numero Dos',
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
