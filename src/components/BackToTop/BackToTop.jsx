import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { LuArrowUp } from 'react-icons/lu'
import './BackToTop.css'

export default function BackToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  const aboveBar = pathname !== '/agendamento'

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className={`back-to-top${aboveBar ? ' back-to-top--above-bar' : ''}`}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <LuArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
