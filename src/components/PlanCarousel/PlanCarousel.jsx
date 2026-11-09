import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import './PlanCarousel.css'

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.98 }),
}

const AUTOPLAY_MS = 6000

export default function PlanCarousel({ items }) {
  const [[index, direction], setState] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const go = useCallback(
    (dir) => setState(([i]) => [(i + dir + items.length) % items.length, dir]),
    [items.length],
  )

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, reduceMotion, go, index])

  const item = items[index]

  return (
    <div
      className="plan-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Tipos de curso"
    >
      <div className="plan-carousel__viewport">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.article
            key={index}
            className="plan-slide"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, { offset }) => {
              if (offset.x < -60) go(1)
              else if (offset.x > 60) go(-1)
            }}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${items.length}: ${item.title}`}
          >
            <img src={item.image} alt="" draggable="false" />
            <div className="plan-slide__overlay">
              <h3 className="plan-slide__title">{item.title}</h3>
              <p className="plan-slide__text">{item.text}</p>
              <div className="plan-slide__chips">
                {item.chips.map((chip) => (
                  <span key={chip} className="chip-glass">{chip}</span>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="plan-carousel__controls">
        <div className="plan-carousel__dots">
          {items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Ir para ${it.title}`}
              className={`plan-carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
            />
          ))}
        </div>
        <div className="plan-carousel__arrows">
          <button type="button" className="plan-carousel__arrow" aria-label="Anterior" onClick={() => go(-1)}>
            <LuChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="plan-carousel__arrow plan-carousel__arrow--primary"
            aria-label="Próximo"
            onClick={() => go(1)}
          >
            <LuChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
