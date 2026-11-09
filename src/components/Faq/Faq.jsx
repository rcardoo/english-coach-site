import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from '../FadeIn/FadeIn.jsx'
import { LuPlus } from 'react-icons/lu'
import { faqs } from '../../data/homeContent.js'
import './Faq.css'

function FaqItem({ item, open, onToggle, id }) {
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3 className="faq-item__heading">
        <button type="button" aria-expanded={open} aria-controls={`${id}-panel`} id={id} onClick={onToggle}>
          <span>{item.q}</span>
          <motion.span className="faq-item__icon" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
            <LuPlus size={16} aria-hidden="true" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={id}
            className="faq-item__panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="duvidas" className="section section--tinted faq">
      <div className="container">
        <FadeIn as="h2" className="section-title text-center mb-8">Dúvidas frequentes</FadeIn>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <FadeIn key={item.q} delay={0.06 * i}>
              <FaqItem
                id={`faq-${i}`}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
