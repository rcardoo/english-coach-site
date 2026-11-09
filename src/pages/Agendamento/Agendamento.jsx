import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuArrowRight, LuCheck, LuCircleAlert, LuCircleCheck, LuClock, LuMapPin, LuMessageCircle } from 'react-icons/lu'
import FadeIn from '../../components/FadeIn/FadeIn.jsx'
import { WHATSAPP_URL, contact, pricing } from '../../data/homeContent.js'
import { maskPhone } from '../../utils/phone.js'
import './Agendamento.css'

const PARA_QUEM = ['Mim', 'Meu filho(a)', 'Outra pessoa']
const OBJETIVOS = ['Conversação', 'Viagens', 'Trabalho', 'Provas internacionais', 'Outro']
const NIVEIS = ['Nunca estudei', 'Básico', 'Intermediário', 'Avançado', 'Não sei']
const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const PERIODOS = ['Manhã', 'Tarde', 'Noite']
const PLANOS = [...pricing.map((p) => p.name), 'Ainda não sei']

const beneficios = [
  'Aula experimental gratuita e sem compromisso',
  'Teste de nível feito pelo professor',
  'Você sai com um plano de estudos para o seu objetivo',
]

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="booking__field-error">
      <LuCircleAlert size={14} aria-hidden="true" />
      {message}
    </p>
  )
}

function ChipGroup({ legend, name, options, value, onChange, multiple = false, error }) {
  const isChecked = (opt) => (multiple ? value.includes(opt) : value === opt)

  const toggle = (opt) => {
    if (!multiple) return onChange(opt)
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt])
  }

  return (
    <fieldset
      id={`grupo-${name}`}
      className={`booking__group${error ? ' is-invalid' : ''}`}
      aria-describedby={error ? `erro-${name}` : undefined}
    >
      <legend className="booking__legend">{legend}</legend>
      <div className="booking__chips">
        {options.map((opt) => (
          <label key={opt} className={`booking__chip${isChecked(opt) ? ' is-active' : ''}`}>
            <input
              type={multiple ? 'checkbox' : 'radio'}
              name={name}
              value={opt}
              checked={isChecked(opt)}
              onChange={() => toggle(opt)}
            />
            {isChecked(opt) && <LuCheck size={14} aria-hidden="true" />}
            {opt}
          </label>
        ))}
      </div>
      <FieldError id={`erro-${name}`} message={error} />
    </fieldset>
  )
}

function validate(form) {
  const errors = {}
  if (form.nome.trim().length < 3) errors.nome = 'Informe seu nome completo.'
  if (!form.whatsapp) errors.whatsapp = 'Informe seu WhatsApp com DDD.'
  else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(form.whatsapp)) errors.whatsapp = 'Número incompleto. Ex.: (85) 99999-0000.'
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'E-mail inválido.'
  if (!form.objetivo) errors.objetivo = 'Escolha seu objetivo.'
  if (!form.nivel) errors.nivel = 'Escolha seu nível.'
  if (!form.dias.length) errors.dias = 'Escolha pelo menos um dia.'
  if (!form.periodo) errors.periodo = 'Escolha um período.'
  return errors
}

const FIELD_ORDER = ['nome', 'whatsapp', 'email', 'objetivo', 'nivel', 'dias', 'periodo']
const INPUT_IDS = { nome: 'ag-nome', whatsapp: 'ag-whatsapp', email: 'ag-email' }

function cardRows(form) {
  return [
    ['Nome', form.nome],
    ['WhatsApp', form.whatsapp],
    ['E-mail', form.email],
    ['A aula é para', form.paraQuem],
    ['Objetivo', form.objetivo],
    ['Nível atual', form.nivel],
    ['Dias', form.dias.join(', ')],
    ['Período', form.periodo],
    ['Plano', form.plano],
    ['Observações', form.obs],
  ].filter(([, value]) => value)
}

const CARD_TITLE = 'AGENDAMENTO — AULA EXPERIMENTAL GRÁTIS'
const CARD_DIVIDER = '━━━━━━━━━━━━━━━'

function buildMessage(form) {
  const rows = cardRows(form).map(([label, value]) => `▸ *${label}:* ${value}`)
  return [
    `*${CARD_TITLE}*`,
    '_Brasil English Coach_',
    CARD_DIVIDER,
    ...rows,
    CARD_DIVIDER,
    'Olá! Gostaria de confirmar minha aula experimental.',
  ].join('\n')
}

function CardPreview({ form }) {
  return (
    <div className="booking__preview" aria-label="Prévia da mensagem enviada">
      <div className="booking__bubble">
        <strong>{CARD_TITLE}</strong>
        <em>Brasil English Coach</em>
        <hr />
        {cardRows(form).map(([label, value]) => (
          <span key={label} className="booking__bubble-row">
            <span aria-hidden="true">▸</span> <strong>{label}:</strong> {value}
          </span>
        ))}
        <hr />
        <span>Olá! Gostaria de confirmar minha aula experimental.</span>
      </div>
    </div>
  )
}

export default function Agendamento() {
  const { state } = useLocation()
  const [form, setForm] = useState({
    nome: state?.nome ?? '',
    whatsapp: state?.whatsapp ?? '',
    email: '',
    paraQuem: state?.paraQuem ?? 'Mim',
    objetivo: '',
    nivel: '',
    dias: [],
    periodo: '',
    plano: state?.plano ?? 'Ainda não sei',
    obs: '',
  })
  const [attempted, setAttempted] = useState(false)
  const [sentUrl, setSentUrl] = useState('')

  const set = (field) => (value) => setForm((f) => ({ ...f, [field]: value }))
  const setInput = (field) => (e) =>
    set(field)(field === 'whatsapp' ? maskPhone(e.target.value) : e.target.value)

  const sabadoNaoManha = form.dias.includes('Sáb') && form.periodo && form.periodo !== 'Manhã'

  const errors = attempted ? validate(form) : {}
  const errorCount = Object.keys(errors).length

  const fieldProps = (field) => ({
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `erro-${field}` : undefined,
    className: `booking__input${errors[field] ? ' is-invalid' : ''}`,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setAttempted(true)
    const first = FIELD_ORDER.find((f) => found[f])
    if (first) {
      const el = INPUT_IDS[first]
        ? document.getElementById(INPUT_IDS[first])
        : document.querySelector(`#grupo-${first} input`)
      el?.focus({ preventScroll: true })
      el?.closest('.booking__group, .booking__field')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage(form))}`
    setSentUrl(url)
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section className="section booking">
      <div className="container">
        <div className="row g-8">
          <div className="col-12 lg:col-5">
            <div className="booking__aside">
              <FadeIn as="h1" className="booking__title">
                Agende sua aula
              </FadeIn>
              <FadeIn as="p" className="booking__lead" delay={0.1}>
                Preencha em menos de 1 minuto. Enviamos seus dados pelo WhatsApp e confirmamos o melhor horário com
                você.
              </FadeIn>

              <FadeIn as="ul" className="booking__benefits" delay={0.15}>
                {beneficios.map((b) => (
                  <li key={b}>
                    <LuCheck aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </FadeIn>

              <FadeIn className="booking__info d-none lg:d-block" delay={0.2}>
                <p>
                  <LuClock aria-hidden="true" />
                  <span>
                    {contact.hours.map((h) => (
                      <span key={h} className="d-block">
                        {h}
                      </span>
                    ))}
                  </span>
                </p>
                <p>
                  <LuMapPin aria-hidden="true" />
                  <span>Aulas online, de onde você estiver</span>
                </p>
                <p>
                  <LuMessageCircle aria-hidden="true" />
                  <span>
                    Prefere falar direto?{' '}
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      WhatsApp {contact.whatsapp}
                    </a>
                  </span>
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="col-12 lg:col-7">
            <FadeIn delay={0.1}>
              {sentUrl ? (
                <div className="booking__card booking__done" role="status">
                  <LuCircleCheck className="booking__done-icon" aria-hidden="true" />
                  <h2 className="booking__done-title">Quase lá, {form.nome.split(' ')[0]}!</h2>
                  <p>
                    Abrimos o WhatsApp com este card pronto. É só tocar em <strong>enviar</strong> na conversa para
                    concluir o agendamento.
                  </p>
                  <CardPreview form={form} />
                  <p className="booking__done-small">
                    O WhatsApp não abriu?{' '}
                    <a href={sentUrl} target="_blank" rel="noreferrer">
                      Clique aqui para abrir
                    </a>
                    .
                  </p>
                  <div className="booking__done-actions">
                    <button type="button" className="booking__link-btn" onClick={() => setSentUrl('')}>
                      Editar respostas
                    </button>
                    <Link to="/" className="booking__link-btn">
                      Voltar para o início
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="booking__card" onSubmit={handleSubmit} noValidate>
                  <h2 className="booking__step">1. Seus dados</h2>
                  <div className="row g-4">
                    <div className="col-12 booking__field">
                      <label htmlFor="ag-nome" className="booking__label">
                        Nome completo
                      </label>
                      <input
                        id="ag-nome"
                        {...fieldProps('nome')}
                        placeholder="Seu nome"
                        autoComplete="name"
                        required
                        value={form.nome}
                        onChange={setInput('nome')}
                      />
                      <FieldError id="erro-nome" message={errors.nome} />
                    </div>
                    <div className="col-12 md:col-6 booking__field">
                      <label htmlFor="ag-whatsapp" className="booking__label">
                        WhatsApp
                      </label>
                      <input
                        id="ag-whatsapp"
                        {...fieldProps('whatsapp')}
                        type="tel"
                        inputMode="numeric"
                        placeholder="(85) 90000-0000"
                        autoComplete="tel"
                        required
                        value={form.whatsapp}
                        onChange={setInput('whatsapp')}
                      />
                      <FieldError id="erro-whatsapp" message={errors.whatsapp} />
                    </div>
                    <div className="col-12 md:col-6 booking__field">
                      <label htmlFor="ag-email" className="booking__label">
                        E-mail <span className="booking__optional">(opcional)</span>
                      </label>
                      <input
                        id="ag-email"
                        {...fieldProps('email')}
                        type="email"
                        placeholder="voce@email.com"
                        autoComplete="email"
                        value={form.email}
                        onChange={setInput('email')}
                      />
                      <FieldError id="erro-email" message={errors.email} />
                    </div>
                  </div>

                  <ChipGroup
                    legend="A aula é para"
                    name="paraQuem"
                    options={PARA_QUEM}
                    value={form.paraQuem}
                    onChange={set('paraQuem')}
                  />

                  <h2 className="booking__step">2. Seu objetivo</h2>
                  <ChipGroup
                    legend="Por que você quer aprender inglês?"
                    name="objetivo"
                    options={OBJETIVOS}
                    value={form.objetivo}
                    onChange={set('objetivo')}
                    error={errors.objetivo}
                  />
                  <ChipGroup
                    legend="Qual é o seu nível hoje?"
                    name="nivel"
                    options={NIVEIS}
                    value={form.nivel}
                    onChange={set('nivel')}
                    error={errors.nivel}
                  />

                  <h2 className="booking__step">3. Melhor horário</h2>
                  <ChipGroup
                    legend="Dias preferidos (pode marcar mais de um)"
                    name="dias"
                    options={DIAS}
                    value={form.dias}
                    onChange={set('dias')}
                    error={errors.dias}
                    multiple
                  />
                  <ChipGroup
                    legend="Período"
                    name="periodo"
                    options={PERIODOS}
                    value={form.periodo}
                    onChange={set('periodo')}
                    error={errors.periodo}
                  />
                  {sabadoNaoManha && (
                    <p className="booking__hint">Aos sábados atendemos só pela manhã, das 08:00 às 12:00.</p>
                  )}

                  <div className="row g-4 booking__extra">
                    <div className="col-12 md:col-6">
                      <label htmlFor="ag-plano" className="booking__label">
                        Plano de interesse
                      </label>
                      <select id="ag-plano" className="booking__input" value={form.plano} onChange={setInput('plano')}>
                        {PLANOS.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 md:col-6">
                      <label htmlFor="ag-obs" className="booking__label">
                        Observações <span className="booking__optional">(opcional)</span>
                      </label>
                      <input
                        id="ag-obs"
                        className="booking__input"
                        placeholder="Ex.: prova em março"
                        value={form.obs}
                        onChange={setInput('obs')}
                      />
                    </div>
                  </div>

                  {errorCount > 0 && (
                    <p className="booking__error" role="alert">
                      {errorCount === 1
                        ? 'Falta 1 informação. Confira o campo marcado em vermelho.'
                        : `Faltam ${errorCount} informações. Confira os campos marcados em vermelho.`}
                    </p>
                  )}

                  <button type="submit" className="booking__submit">
                    Enviar pelo WhatsApp <LuArrowRight size={18} aria-hidden="true" />
                  </button>
                  <p className="booking__note">Seus dados são usados só para agendar sua aula.</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
