'use client'

import { motion } from 'framer-motion'

const primaryColour = '#3b4147'
const secondaryColour = '#32d98e'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1.1,
    },
  },
}

const letterVariants = {
  hidden: {
    // opacity: 0,
    // y: -50,
    // scale: 0.5,
    pathLength: 0,
  },
  visible: {
    // opacity: 1,
    // y: 0,
    // scale: 1,
    pathLength: 1,
    // transition: {
    //   type: 'spring', // Use spring for a springy effect
    //   stiffness: 175, // Control the spring stiffness
    //   damping: 15,
    // },
    transition: {
      duration: 1,
    },
  },
}

const accentVariants = {
  hidden: {
    // opacity: 0,
    // y: 50,
    // scale: 0.2,
    pathLength: 0,
  },
  visible: {
    // opacity: 1,
    // y: 0,
    // scale: 1,
    pathLength: 1,
    // transition: {
    //   type: 'spring', // Use spring for a springy effect
    //   stiffness: 300, // Control the spring stiffness
    //   damping: 12,
    // },
    transition: {
      duration: 1,
    },
  },
}

export function Favicon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      version="1.1"
      id="svg1"
      width="72.395592"
      height="48"
      viewBox="0 0 72.395591 47.999999"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs1" />

      <motion.g
        id="g1"
        transform="matrix(0.21486007,0,0,0.21486007,-2.2920589,-2.6951542)"
        // style={{
        //   fill: primaryColour,
        // }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          style={{
            fill: 'none',
            strokeWidth: 5,
            stroke: primaryColour,
          }}
          d="m 246.70669,227.35304 c -31.79705,-41.39792 -33.18351,-43.09251 -39.61341,-48.41707 -8.31211,-6.88322 -18.12429,-11.61861 -29.03992,-14.01477 l -4.9345,-1.0832 -83.132863,-0.29408 c -45.723074,-0.16174 -83.2617588,-0.42305 -83.4193006,-0.58068 -0.1575419,-0.15764 2.4775044,-3.85852 5.8556586,-8.22418 19.256431,-24.88549 24.06367,-31.1162 30.960161,-40.12777 l 7.607361,-9.94045 18.195984,-0.009 18.195985,-0.009 V 58.597238 12.541865 h 29.401424 29.40142 l 0.001,37.111584 c 5.5e-4,20.411371 0.12254,41.136289 0.27108,46.055373 l 0.27009,8.943788 8.8783,-0.0145 c 4.88307,-0.008 11.32176,-0.18312 14.30821,-0.38919 13.04695,-0.90027 26.50876,-6.313751 37.0081,-14.8823 4.91476,-4.010954 9.83181,-9.700758 21.6154,-25.012451 6.17885,-8.028849 15.37607,-19.964181 20.43826,-26.52296 5.0622,-6.558778 11.51161,-14.921121 14.33202,-18.582983 l 5.12802,-6.65793 37.46204,0.237388 c 20.60412,0.130564 37.52609,0.291669 37.60438,0.358011 0.0783,0.06634 -3.16996,4.343415 -7.21834,9.504607 -19.38332,24.711396 -47.40407,60.514463 -52.75487,67.406707 -20.53475,26.450331 -22.69518,29.067171 -30.12841,36.493401 -4.04073,4.03694 -7.28811,7.40486 -7.21638,7.48428 0.0717,0.0794 3.46119,3.53362 7.53216,7.676 4.75011,4.83344 9.47518,10.18084 13.18947,14.9266 3.18324,4.06724 10.57775,13.50143 16.43225,20.96487 5.85449,7.46344 12.05261,15.42033 13.7736,17.68198 1.72099,2.26164 9.37062,12.05039 16.99919,21.75276 7.62857,9.70238 13.72201,17.78753 13.54098,17.96701 -0.18102,0.17948 -16.98309,0.45522 -37.33792,0.61275 l -37.00878,0.28642 z"
          id="path39"
          transform="translate(4.1076979,0.0019)"
          variants={letterVariants}
        />
        <motion.path
          style={{
            fill: 'none',
            strokeWidth: 10,
            stroke: secondaryColour,
          }}
          d="M 87.369779,218.87025 V 202.0602 l 1.475407,-0.65916 c 1.414306,-0.63186 12.115504,-5.26436 20.206664,-8.74738 3.98128,-1.71383 5.60747,-2.42562 6.928,-3.03242 0.42338,-0.19454 2.73271,-1.18326 5.13185,-2.19715 2.39915,-1.01388 8.71297,-3.73001 14.03072,-6.03583 5.31776,-2.30582 9.96529,-4.26685 10.32786,-4.35785 l 0.6592,-0.16545 v 29.40767 29.40767 H 116.74963 87.369779 Z"
          id="path40"
          transform="translate(4.1076979,0.0019)"
          variants={accentVariants}
        />
      </motion.g>
    </svg>
  )
}
