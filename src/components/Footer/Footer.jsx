import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { WHATSAPP_URL, contact } from '../../data/homeContent.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-6">
          <div className="col-12 lg:col-5">
            <Logo size="lg" />
            <p className="site-footer__about">
              Escola de idiomas pioneira no ensino online, com aulas particulares para adolescentes a partir de 13 anos
              e adultos.
            </p>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <h3 className="site-footer__title">Contato</h3>
            <ul className="site-footer__list">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp {contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href="https://www.instagram.com/englishcoach.idiomas/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <h3 className="site-footer__title">Endereço e horário</h3>
            <address className="site-footer__list">
              <p>{contact.address}</p>
              {contact.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} Brasil English Coach. Todos os direitos reservados.</span>
          <Link to="/creditos" className="site-footer__credits">
            Créditos das imagens
          </Link>
          <span>
            Desenvolvido por{' '}
            <a href="https://github.com/rcardoo" target="_blank" rel="noreferrer" className="site-footer__credits">
              ricardo
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
