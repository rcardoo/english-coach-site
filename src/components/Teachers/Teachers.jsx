import FadeIn from '../FadeIn/FadeIn.jsx'
import { teachers } from '../../data/homeContent.js'
import './Teachers.css'

export default function Teachers() {
  return (
    <section id="professores" className="section teachers">
      <div className="container">
        <div className="teachers__head">
          <FadeIn as="h2" className="section-title">
            Quem vai te acompanhar
          </FadeIn>
          <FadeIn as="p" className="teachers__lead" delay={0.1}>
            Professores experientes, com formação para aulas online e foco no seu objetivo.
          </FadeIn>
        </div>

        <div className="row g-6">
          {teachers.map((teacher, i) => (
            <FadeIn key={teacher.name} className="col-12 md:col-6 lg:col-4" delay={0.1 * i}>
              <article className="teacher-card">
                <span className="avatar teacher-card__avatar">
                  <img className="avatar-img" src={teacher.photo} alt={teacher.name} loading="lazy" width="128" height="128" />
                </span>
                <h3 className="teacher-card__name">{teacher.name}</h3>
                <p className="teacher-card__bio">{teacher.bio}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
