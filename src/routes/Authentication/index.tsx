import './styles.scss'

import { SignInForm } from '../../components/SignInForm'
import { SignUpForm } from '../../components/SignUpForm'

export function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
