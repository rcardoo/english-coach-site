import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ children, to, className = '', size = 'md', ...props }) {
  const classes = `button button--${size} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
