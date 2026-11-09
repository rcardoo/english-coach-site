import { useRef, useState } from 'react'
import FadeIn from '../FadeIn/FadeIn.jsx'
import { FaStar } from 'react-icons/fa'
import { testimonials } from '../../data/homeContent.js'
import './Testimonials.css'

export default function Testimonials() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    if (!card) return
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)))
  }

  const goTo = (i) => {
    const el = trackRef.current
    const card = el?.children[i]
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <FadeIn as="h2" className="section-title">Quem estuda com a gente indica</FadeIn>

        <div className="testimonials__track" ref={trackRef} onScroll={handleScroll}>
          {testimonials.map((t, i) => (
            <FadeIn key={t.quote} className="testimonial" delay={0.1 * i}>
              <div className="testimonial__stars" role="img" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FaStar key={s} size={12} aria-hidden="true" />
                ))}
              </div>
              <p className="testimonial__quote">{t.quote}</p>
              <div className="testimonial__author">
                <span className="avatar testimonial__avatar">
                  <img className="avatar-img" src={t.photo} alt="" loading="lazy" width="48" height="48" />
                </span>
                <div>
                  <strong className="testimonial__name">{t.name}</strong>
                  <span className="testimonial__role">{t.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="testimonials__dots lg:d-none">
          {testimonials.map((t, i) => (
            <button
              key={t.quote}
              type="button"
              aria-label={`Ver depoimento ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
              className={i === active ? 'is-active' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
