import { ButtonHTMLAttributes, ReactNode } from 'react'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  buttonType?: 'google' | 'inverted' | 'default'
}

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: '',
}

export function Button({
  children,
  buttonType = 'default',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...rest}
    >
      {children}
    </button>
  )
}
