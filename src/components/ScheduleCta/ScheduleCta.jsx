import estudante from '../../assets/otimizadas/teste-nivel-estudante.webp'
import FadeIn from '../FadeIn/FadeIn.jsx'
import Button from '../Button/Button.jsx'
import { LuArrowRight } from 'react-icons/lu'
import LeadForm from '../LeadForm/LeadForm.jsx'
import './ScheduleCta.css'

export default function ScheduleCta() {
  return (
    <section id="agendar" className="schedule">
      <div className="container">
        <div className="row align-items-center g-8">
          <div className="col-12 lg:col-6">
            <FadeIn as="h2" className="schedule__title">
              <span className="d-none lg:d-inline">Agende agora e descubra seu nível de inglês</span>
              <span className="lg:d-none">Agende sua aula experimental grátis</span>
            </FadeIn>
            <FadeIn as="p" className="schedule__text" delay={0.1}>
              Sem compromisso de pagamento. Você recebe a confirmação no WhatsApp.
            </FadeIn>

            <img
              src={estudante}
              alt=""
              className="schedule__image d-none lg:d-block"
              loading="lazy"
              width="190"
              height="190"
            />

            <FadeIn className="lg:d-none" delay={0.2}>
              <Button to="/agendamento" className="schedule__mobile-btn">
                Começar agendamento <LuArrowRight size={16} aria-hidden="true" />
              </Button>
            </FadeIn>
          </div>

          <div className="col-12 lg:col-6 d-none lg:d-block">
            <FadeIn direction="left" delay={0.15}>
              <LeadForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
