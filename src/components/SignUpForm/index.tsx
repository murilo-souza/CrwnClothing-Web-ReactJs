import { FormEvent, useState } from 'react'
import { Input } from '../Input'
import {
  createUserAuthWithEmailAndPassword,
  createUserAuthDocumentFromAuth,
} from '../../utils/firebase/firebase'
import './styles.scss'
import { Button } from '../Button'

interface SignUpFormProps {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultFormFields: SignUpFormProps = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export function SignUpForm() {
  const [formFields, setFormFields] =
    useState<SignUpFormProps>(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  function handleChange(event) {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(email, password)

      await createUserAuthDocumentFromAuth(user, {
        displayName,
      })

      setFormFields(defaultFormFields)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <Input
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Input
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Input
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  )
}
