import { FaStar } from 'react-icons/fa'
import { LuArrowRight } from 'react-icons/lu'
import logoCambridge from '../../assets/otimizadas/logo-cambridge.webp'
import logoGoogle from '../../assets/otimizadas/logo-google.webp'
import Button from '../Button/Button.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo" aria-hidden="true">
        <img
          src="/img/hero-fundo-1600.webp"
          srcSet="/img/hero-fundo-800.webp 800w, /img/hero-fundo-1600.webp 1600w"
          sizes="(max-width: 991px) 100vw, 62vw"
          alt=""
          fetchPriority="high"
          width="1600"
          height="1067"
        />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Inglês online com aula particular, do jeito que <span className="hero__accent">você</span> precisa.
          </h1>

          <p className="hero__lead">
            Você conta seus objetivos, o professor monta seu plano de estudos. Para adolescentes a partir de 13 anos e
            adultos.
          </p>

          <div className="hero__actions">
            <Button to="/agendamento" className="hero__cta">
              Agendar aula experimental grátis <LuArrowRight size={16} aria-hidden="true" />
            </Button>
            <a href="#como-funciona" className="btn-outline hero__secondary">
              Como funciona
            </a>
          </div>

          <ul className="hero__trust">
            <li className="hero__trust-item">
              <img src={logoCambridge} alt="University of Cambridge" width="128" height="28" />
              <span>Material Cambridge</span>
            </li>
            <li className="hero__trust-item">
              <img src={logoGoogle} alt="Google" width="62" height="21" className="hero__trust-google" />
              <span className="hero__rating">
                <strong>5,0</strong>
                <span className="hero__stars" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
