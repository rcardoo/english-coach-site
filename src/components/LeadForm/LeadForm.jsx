import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import { maskPhone } from '../../utils/phone.js'
import './LeadForm.css'

export default function LeadForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nome: '', whatsapp: '', paraQuem: 'Mim' })

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: field === 'whatsapp' ? maskPhone(e.target.value) : e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/agendamento', { state: form })
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>

      <div className="lead-form__field">
        <label htmlFor="lead-nome" className="form-label">Nome completo</label>
        <input
          id="lead-nome"
          className="form-control"
          placeholder="Seu nome"
          autoComplete="name"
          required
          value={form.nome}
          onChange={update('nome')}
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor="lead-whatsapp" className="form-label">WhatsApp</label>
        <input
          id="lead-whatsapp"
          className="form-control"
          type="tel"
          inputMode="numeric"
          placeholder="(85) 90000-0000"
          autoComplete="tel"
          required
          pattern="\(\d{2}\) \d{4,5}-\d{4}"
          title="Informe o WhatsApp com DDD"
          value={form.whatsapp}
          onChange={update('whatsapp')}
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor="lead-para" className="form-label">A aula é para</label>
        <select id="lead-para" className="form-control" value={form.paraQuem} onChange={update('paraQuem')}>
          <option>Mim</option>
          <option>Meu filho(a)</option>
          <option>Outra pessoa</option>
        </select>
      </div>

      <button type="submit" className="lead-form__submit">
        Escolher dia e horário <LuArrowRight size={16} aria-hidden="true" />
      </button>
      <p className="lead-form__note">Seus dados são usados só para agendar sua aula.</p>
    </form>
  )
}
