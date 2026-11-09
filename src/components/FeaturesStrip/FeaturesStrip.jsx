import FadeIn from '../FadeIn/FadeIn.jsx'
import { LuCalendarDays, LuHeadphones, LuPencilLine, LuUser } from 'react-icons/lu'
import { features } from '../../data/homeContent.js'
import './FeaturesStrip.css'

const icons = {
  user: LuUser,
  headphones: LuHeadphones,
  pencil: LuPencilLine,
  calendar: LuCalendarDays,
}

export default function FeaturesStrip() {
  return (
    <section className="features" aria-label="Diferenciais">
      <div className="container">
        <h2 className="visually-hidden">Diferenciais</h2>
        <FadeIn className="features__card" offset={30}>
          <div className="row g-6">
            {features.map((feature, i) => {
              const Icon = icons[feature.icon]
              return (
                <FadeIn key={feature.title} className="col-6 lg:col-3" delay={0.1 + 0.08 * i}>
                  <div className="feature">
                    <span className="feature__icon">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="feature__title">{feature.title}</h3>
                      <p className="feature__text d-none lg:d-block">{feature.text}</p>
                      <p className="feature__text lg:d-none">{feature.short}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
