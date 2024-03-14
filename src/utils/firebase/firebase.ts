import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9pebrQbKHAkT5Yu3YYXDVwJZT4cpW7xc',
  authDomain: 'crwn-clothing-db-48beb.firebaseapp.com',
  projectId: 'crwn-clothing-db-48beb',
  storageBucket: 'crwn-clothing-db-48beb.appspot.com',
  messagingSenderId: '823929909714',
  appId: '1:823929909714:web:dd81c1b43b0adbee72180b',
}

export const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export async function createUserAuthDocumentFromAuth(
  userAuth: User,
  additionalInfo = {},
) {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    } catch (error: any) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createUserAuthWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInUserAuthWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}
