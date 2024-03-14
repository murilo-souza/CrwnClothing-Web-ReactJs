import { InputHTMLAttributes } from 'react'
import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className="group">
      <input className="form-input" {...rest} required />
      {label && (
        <label
          className={`form-input-label ${rest.value?.toString().length ? 'shrink' : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
