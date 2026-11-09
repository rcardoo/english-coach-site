import { LuExternalLink } from 'react-icons/lu'
import { imageCredits } from '../../data/homeContent.js'
import './Creditos.css'

export default function Creditos() {
  return (
    <section className="section credits">
      <div className="container">
        <h1 className="section-title">Créditos das imagens</h1>
        <p className="credits__lead">
          Algumas fotos usadas neste site são de bancos de imagens gratuitos. Agradecemos aos autores.
        </p>

        <ul className="credits__list">
          {imageCredits.map((credit) => (
            <li key={credit.url} className="credit">
              <img className={`credit__thumb${credit.logo ? ' credit__thumb--logo' : ''}`} src={credit.image} alt="" loading="lazy" width="160" height="107" />
              <div>
                <p className="credit__title">{credit.title}</p>
                <p className="credit__meta">Usada em: {credit.usedIn}</p>
                <p className="credit__attribution">
                  Imagem de{' '}
                  <a href={credit.authorUrl} target="_blank" rel="noreferrer">
                    {credit.author}
                  </a>{' '}
                  no{' '}
                  <a href={credit.url} target="_blank" rel="noreferrer">
                    {credit.source}
                    <LuExternalLink size={12} aria-hidden="true" />
                  </a>
                  {credit.license && (
                    <>
                      {' '}— licença{' '}
                      <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                        {credit.license}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
