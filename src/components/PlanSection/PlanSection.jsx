import FadeIn from '../FadeIn/FadeIn.jsx'
import Button from '../Button/Button.jsx'
import { LuArrowRight } from 'react-icons/lu'
import PlanCarousel from '../PlanCarousel/PlanCarousel.jsx'
import { plans } from '../../data/homeContent.js'
import './PlanSection.css'

export default function PlanSection() {
  return (
    <section id="cursos" className="section section--tinted plans">
      <div className="container">
        <div className="row align-items-center g-8">
          <div className="col-12 lg:col-5">
            <FadeIn as="h2" className="section-title">
              Um plano feito com você, para você.
            </FadeIn>
            <FadeIn as="p" className="plans__lead" delay={0.1}>
              Na aula experimental você conta por que quer aprender inglês, seus objetivos e suas metas. A partir dessa
              conversa, o professor monta o plano de estudos que você vai seguir.
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button to="/agendamento" size="sm" className="plans__cta">
                Quero montar meu plano <LuArrowRight size={16} aria-hidden="true" />
              </Button>
            </FadeIn>
          </div>

          <div className="col-12 lg:col-7">
            <FadeIn delay={0.15} direction="left">
              <PlanCarousel items={plans} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
