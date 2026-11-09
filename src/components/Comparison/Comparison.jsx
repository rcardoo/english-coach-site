import FadeIn from '../FadeIn/FadeIn.jsx'
import { LuCheck, LuX } from 'react-icons/lu'
import { comparison } from '../../data/homeContent.js'
import './Comparison.css'

function Cell({ value, highlight }) {
  let content
  if (value === true) {
    content = (
      <span className={`cmp-mark cmp-mark--yes ${highlight ? 'is-highlight' : ''}`} role="img" aria-label="Sim">
        <LuCheck size={14} strokeWidth={3} aria-hidden="true" />
      </span>
    )
  } else if (value === false) {
    content = (
      <span className="cmp-mark cmp-mark--no" role="img" aria-label="Não">
        <LuX size={12} strokeWidth={3} aria-hidden="true" />
      </span>
    )
  } else {
    content = <span className="cmp-partial">{value}</span>
  }

  return <td className={highlight ? 'is-highlight' : undefined}>{content}</td>
}

export default function Comparison() {
  const { columns, rows } = comparison

  return (
    <section id="comparativo" className="section comparison">
      <div className="container">
        <div className="comparison__head">
          <FadeIn as="h2" className="section-title">
            Por que aula particular faz diferença
          </FadeIn>
          <FadeIn as="p" className="comparison__lead" delay={0.1}>
            Veja o que muda quando o curso é montado para você, e não para uma turma ou um algoritmo.
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="cmp-wrap">
          <table className="cmp-table">
            <caption className="visually-hidden">
              Comparação entre Brasil English Coach, cursos em grupo e apps de idiomas
            </caption>
            <thead>
              <tr>
                <th scope="col" className="cmp-table__corner">
                  <span className="d-none lg:d-inline">O que você recebe</span>
                  <span className="visually-hidden lg:d-none">Recurso</span>
                </th>
                {columns.map((col) => (
                  <th key={col.label} scope="col" className={col.highlight ? 'is-highlight' : undefined}>
                    <span className="d-none lg:d-inline">{col.label}</span>
                    <abbr className="lg:d-none cmp-abbr" title={col.label} aria-label={col.label}>
                      {col.short}
                    </abbr>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, c) => (
                    <Cell key={c} value={value} highlight={columns[c].highlight} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  )
}
