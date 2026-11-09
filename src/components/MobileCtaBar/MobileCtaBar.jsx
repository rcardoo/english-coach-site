import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Button from '../Button/Button.jsx'
import './MobileCtaBar.css'

export default function MobileCtaBar() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && pathname !== '/agendamento' && (
        <motion.div
          className="mobile-cta-bar lg:d-none"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        >
          <Button to="/agendamento" className="w-100">
            Aula experimental grátis
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
