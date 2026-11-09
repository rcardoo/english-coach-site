import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function FadeIn({ children, className, as = 'div', delay = 0, offset = 12, direction = 'up', ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const axis = direction === 'left' ? 'x' : 'y'
  const variants = {
    hidden: { [axis]: offset, opacity: 0 },
    visible: { [axis]: 0, opacity: 1 },
  }

  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay: Math.min(delay, 0.2), duration: 0.4, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
