import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Logo from '../Logo/Logo.jsx'
import { LuMenu, LuX } from 'react-icons/lu'
import Button from '../Button/Button.jsx'
import { navLinks } from '../../data/homeContent.js'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-nav d-none lg:d-flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <Button to="/agendamento" size="sm" className="d-none lg:d-flex">
          Aula experimental grátis
        </Button>

        <button
          type="button"
          className="site-header__toggle lg:d-none"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX size={24} aria-hidden="true" /> : <LuMenu size={24} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            className="mobile-nav lg:d-none"
            aria-label="Menu mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="container mobile-nav__list">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
