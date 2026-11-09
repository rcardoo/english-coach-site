import { Link } from 'react-router-dom'
import FadeIn from '../FadeIn/FadeIn.jsx'
import { WHATSAPP_URL } from '../../data/homeContent.js'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <FadeIn as="h2" className="final-cta__title">
          Comece a falar inglês
        </FadeIn>

        <FadeIn className="final-cta__actions" delay={0.1}>
          <Link to="/agendamento" className="final-cta__btn final-cta__btn--solid">
            Agendar aula experimental grátis
          </Link>
        </FadeIn>

        <FadeIn as="p" className="final-cta__note" delay={0.2}>
          Ainda tem dúvidas?{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Fale com a gente no WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
