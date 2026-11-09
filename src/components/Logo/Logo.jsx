import { Link } from 'react-router-dom'
import logo from '../../assets/otimizadas/logo-principal.webp'
import './Logo.css'

export default function Logo({ size = 'md' }) {
  return (
    <Link to="/" className={`logo logo--${size}`} aria-label="Brasil English Coach — início">
      <img src={logo} alt="Brasil English Coach" width="320" height="240" />
    </Link>
  )
}
