import animationGlobe from '@/lotties/globe.json'
import animationCm from '@/lotties/connection.json'
import animationTransfer from '@/lotties/wire.json'

import { Features } from './Features'
import { ChannelManagerShowcase } from './ChannelManagerShowcase'

const title = (
  <>
    Kanko for <span className="text-white">Hoteliers</span>
  </>
)
const subtitle =
  'Everything you need to sell inventory directly to travel agencies'

const features = [
  {
    title: 'Synchronized Inventory',
    description: (
      <>
        <div className="mb-12">
          <p>
            Kanko integrates with all the major channel managers, allowing
            real-time synchronization of availability and rates between Kanko
            and your PMS.
          </p>
        </div>

        <div className="mt-auto">
          <div className="">
            <p className="text-xs font-semibold tracking-tight sm:text-sm">
              We currently support the following channel managers out of the
              box, with more on the way
            </p>
          </div>
          <div className="mt-4">
            <ChannelManagerShowcase />
          </div>
        </div>
      </>
    ),
    animationData: animationCm,
  },
  {
    title: 'Global Reach',
    description:
      'Kanko partners with major travel agencies in the UK and European Union. By listing your inventory on Kanko you have access to all of them.',
    animationData: animationGlobe,
  },
  {
    title: 'Real Time Settlements',
    description:
      'Have payments wired straight to your account in your local currency, with real-time settlements per booking.',
    animationData: animationTransfer,
  },
]

export function FeaturesHoteliers() {
  return (
    <Features
      title={title}
      subtitle={subtitle}
      features={features}
      bgColour="bg-blue-500"
    />
  )
}
