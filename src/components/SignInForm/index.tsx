/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.scss'

import { FormEvent, useState } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import {
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase'

interface SignUpFormProps {
  email: string
  password: string
}

const defaultFormFields: SignUpFormProps = {
  email: '',
  password: '',
}

export function SignInForm() {
  const [formFields, setFormFields] =
    useState<SignUpFormProps>(defaultFormFields)
  const { email, password } = formFields

  function handleChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      await signInUserAuthWithEmailAndPassword(email, password)

      setFormFields(defaultFormFields)
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect e-mail or password')
          break

        case 'auth/user-not-found':
          alert('Incorrect e-mail or password')
          break

        default:
          console.log(error)
      }
    }
  }

  async function handleGoogleSignIn() {
    await signInWithGooglePopup()
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType="google"
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
