import { useSpring, animated } from 'react-spring'

import styles from './SuccessAnimation.module.scss'
// import { ReactComponent as CompleteIcon } from '../../assets/complete.svg'
import CompleteIcon from '@/assets/complete.svg'

export function PurpleCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#8B4AFF" strokeWidth="4" />
    </svg>
  )
}

export function YellowSquiggle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
      <path
        d="M2 2.5L5 9L11.5 7.5L14 13.5L21.5 12.5L23.5 18.5"
        stroke="#FFD152"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GreenSquiggle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="33" viewBox="0 0 13 33" fill="none">
      <path
        d="M10.5 2.5L6 7L10.5 13.5L3 20L8 26.5L2 31"
        stroke="#01BD54"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RedSemiCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M4.65662 15.9706C1.53243 12.8464 1.53243 7.78105 4.65662 4.65685C7.78082 1.53266 12.8461 1.53266 15.9703 4.65685"
        stroke="#FE2C55"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const shapesSpringConfig = {
  mass: 1.5,
  tension: 300,
  velocity: 0.05,
  friction: 11
}

export function SuccessAnimation() {
  const purpleCircleStyles = useSpring({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: -44,
      y: -44
    },
    delay: 220,
    config: shapesSpringConfig
  })
  const greenSquiggleStyles = useSpring({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: 64,
      y: -44
    },
    delay: 220,
    config: shapesSpringConfig
  })
  const yellowSquiggleStyles = useSpring({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: -64,
      y: 10
    },
    delay: 220,
    config: shapesSpringConfig
  })
  const RedCircleStyles = useSpring({
    from: {
      x: 0,
      y: 0
    },
    to: {
      x: 64,
      y: 20
    },
    delay: 220,
    config: shapesSpringConfig
  })
  const completedStyles = useSpring({
    delay: 200,
    from: { transform: 'scale(1)' },
    to: [{ transform: 'scale(1.1)' }],
    config: { mass: 2, tension: 180, velocity: 0.03 }
  })

  return (
    <div>
      <div className={styles.completed}>
        <animated.div style={completedStyles}>
          <CompleteIcon />
        </animated.div>
      </div>
      <div className={styles.shapePosition}>
        <animated.div style={purpleCircleStyles}>
          <PurpleCircle />
        </animated.div>
      </div>
      <div className={styles.shapePosition}>
        <animated.div style={greenSquiggleStyles}>
          <GreenSquiggle />
        </animated.div>
      </div>
      <div className={styles.shapePosition}>
        <animated.div style={yellowSquiggleStyles}>
          <YellowSquiggle />
        </animated.div>
      </div>
      <div className={styles.shapePosition}>
        <animated.div style={RedCircleStyles}>
          <RedSemiCircle />
        </animated.div>
      </div>
    </div>
  )
}
