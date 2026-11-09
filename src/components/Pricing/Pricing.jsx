import { LuCheck } from 'react-icons/lu'
import Button from '../Button/Button.jsx'
import FadeIn from '../FadeIn/FadeIn.jsx'
import { logoCambridge, pricing } from '../../data/homeContent.js'
import './Pricing.css'

const included = ['Aulas particulares e individuais', 'Material Cambridge incluso', 'Para todos os níveis']

export default function Pricing() {
  return (
    <section id="valores" className="section pricing">
      <div className="container">
        <div className="pricing__head">
          <FadeIn as="h2" className="section-title">
            Valores
          </FadeIn>
          <FadeIn as="p" className="pricing__lead" delay={0.1}>
            Curso particular moldado à sua necessidade, por bem menos do que você pagaria em outros cursos.
          </FadeIn>
        </div>

        <div className="row g-6 pricing__row">
          {pricing.map((plan, i) => (
            <FadeIn key={plan.name} className="col-12 lg:col-4" delay={0.1 * i}>
              <article className={`price-card${plan.featured ? ' price-card--featured' : ''}`}>
                {plan.featured && <span className="price-card__badge">Mais vendido</span>}
                <h3 className="price-card__name">{plan.name}</h3>

                <p className="price-card__others">
                  Outros cursos: <s>{plan.others}</s>
                </p>
                <span className="price-card__label">Investimento mensal</span>
                <p className="price-card__price">{plan.price}</p>

                <ul className="price-card__list">
                  <li>
                    <LuCheck aria-hidden="true" />
                    {plan.schedule}
                  </li>
                  <li>
                    <LuCheck aria-hidden="true" />
                    Carga horária total de {plan.hours}
                  </li>
                  {included.map((item) => (
                    <li key={item}>
                      <LuCheck aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button to="/agendamento" state={{ plano: plan.name }} className={`price-card__cta${plan.featured ? '' : ' price-card__cta--ghost'}`}>
                  Quero aprender inglês
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="pricing__material">
          <img src={logoCambridge} alt="University of Cambridge" width="180" height="39" loading="lazy" />
          <p>Material didático Cambridge incluso em todos os planos.</p>
        </FadeIn>
      </div>
    </section>
  )
}
