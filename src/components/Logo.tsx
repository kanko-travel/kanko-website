'use client'

import { motion } from 'framer-motion'
import { MotionValue } from 'framer-motion/dom'

const PRIMARY_COLOUR = '#3b4147'
const SECONDARY_COLOUR = '#32d98e'

interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  primaryColour?: string
  secondaryColour?: string
}

export function Logo({
  primaryColour = PRIMARY_COLOUR,
  secondaryColour = SECONDARY_COLOUR,
  ...props
}: LogoProps) {
  return (
    <svg
      width="273"
      height="48"
      viewBox="0 0 272.22559 47.999999"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs1">
        <clipPath id="clip_13">
          <path
            transform="matrix(1,0,0,-1,0,1070)"
            d="M 0,1070 H 1700 V 0 H 0 Z"
            id="path2"
          />
        </clipPath>
      </defs>
      <g id="layer1" transform="translate(-79.110412,-89.693748)">
        <g
          id="g12"
          transform="matrix(0.57442268,0,0,0.57442268,-273.03608,-193.62234)"
        >
          <motion.path
            transform="matrix(1,0,0,-1,642.1741,562.4258)"
            d="M 0,0 20.33,8.78 V -12.48 H 0 Z"
            id="path5"
            style={{ fill: secondaryColour as string }}
          />
          <motion.g
            clipPath="url(#clip_13)"
            id="g10"
            style={{ fill: primaryColour as string }}
          >
            <path
              transform="matrix(1,0,0,-1,707.5242,545.3333)"
              d="M 0,0 23.22,-29.57 H -3.05 l -15.29,19.82 c -4.69,6.1 -11.93,9.68 -19.62,9.75 h -56.52 l 15.69,20.34 h 13.44 v 29.9 h 20.33 v -29.9 h 7.06 c 7.69,0.07 14.93,3.65 19.62,9.75 L -2.8,50.24 H 23.46 L 0,20.34 -2.36,17.32 c -2.09,-2.66 -4.46,-5.06 -7.02,-7.15 2.56,-2.1 4.93,-4.49 7.02,-7.16 z"
              id="path6"
              // style={{ fill: primaryColour }}
            />
            <path
              transform="matrix(1,0,0,-1,793.6124,535)"
              d="m 0,0 c 0,12.52 -9.388,22.065 -22.064,22.065 -12.519,0 -21.908,-9.545 -21.908,-22.065 0,-12.518 9.389,-22.064 21.908,-22.064 C -9.388,-22.064 0,-12.518 0,0 m -64.941,0 c 0,23.786 16.745,41.781 38.965,41.781 10.64,0 19.561,-4.225 25.976,-11.267 v 9.39 H 20.342 V -39.903 H 0 v 9.389 c -6.415,-7.041 -15.336,-11.267 -25.976,-11.267 -22.22,0 -38.965,17.996 -38.965,41.781"
              id="path7"
              // style={{ fill: primaryColour }}
            />
            <path
              transform="matrix(1,0,0,-1,826.1935,495.09584)"
              d="m 0,0 h 20.342 v -8.92 c 6.26,7.042 15.023,10.797 25.351,10.797 18.778,0 31.139,-12.206 31.139,-30.983 V -79.807 H 56.49 v 44.129 c 0,10.797 -6.885,17.839 -17.37,17.839 -11.266,0 -18.778,-7.199 -18.778,-18.153 V -79.807 H 0 Z"
              id="path8"
              // style={{ fill: primaryColour }}
            />
            <path
              transform="matrix(1,0,0,-1,1065.9868,535)"
              d="m 0,0 c 0,12.52 -9.233,22.065 -21.908,22.065 -12.518,0 -21.907,-9.545 -21.907,-22.065 0,-12.518 9.389,-22.064 21.907,-22.064 C -9.233,-22.064 0,-12.518 0,0 m -64.784,0 c 0,23.786 18.464,41.781 42.876,41.781 24.411,0 42.877,-17.995 42.877,-41.781 0,-23.785 -18.466,-41.781 -42.877,-41.781 -24.412,0 -42.876,17.996 -42.876,41.781"
              id="path9"
              // style={{ fill: primaryColour }}
            />
            <path
              transform="matrix(1,0,0,-1,978.094,542.323)"
              d="m 0,0 c -2.09,2.67 -4.46,5.06 -7.02,7.16 2.56,2.09 4.93,4.49 7.02,7.15 l 2.36,3.02 23.46,29.9 H -0.44 L -15.98,27.08 c -4.69,-6.1 -11.93,-9.68 -19.62,-9.75 h -7.06 v 29.9 H -62.99 V -3.01 -32.58 h 20.33 v 29.57 h 7.06 c 7.69,-0.07 14.93,-3.65 19.62,-9.75 L -0.69,-32.58 H 25.58 L 2.36,-3.01 Z"
              id="path10"
              // style={{ fill: primaryColour }}
            />
          </motion.g>
        </g>
      </g>
    </svg>
  )
}
