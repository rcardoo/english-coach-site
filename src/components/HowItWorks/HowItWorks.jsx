import FadeIn from '../FadeIn/FadeIn.jsx'
import { steps } from '../../data/homeContent.js'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section how">
      <div className="container">
        <FadeIn as="h2" className="section-title how__title">
          Em uma aula, você descobre seu nível e sai com um plano de estudo pronto.
        </FadeIn>

        <div className="row g-6">
          {steps.map((step, i) => (
            <FadeIn key={step.title} className="col-12 lg:col-4" delay={0.12 * i}>
              <article className="step-card">
                <div className="step-card__media">
                  <img src={step.image} alt="" loading="lazy" style={{ objectPosition: step.position }} />
                </div>
                <div className="step-card__body">
                  <span className="eyebrow">{step.label}</span>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__text d-none lg:d-block">{step.text}</p>
                  <p className="step-card__text lg:d-none">{step.short}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
