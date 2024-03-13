import {
  signInWithGooglePopup,
  createUserAuthDocumentFromAuth,
} from '../../utils/firebase/firebase'

export function SignIn() {
  async function handleGoogleSignIn() {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserAuthDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sigin In pages</h1>
      <button type="button" onClick={handleGoogleSignIn}>
        Signin with google popup
      </button>
    </div>
  )
}
