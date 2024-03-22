import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

export interface objectsToAdd {
  title: string
  items: Array<{
    id: number
    name: string
    imageUrl: string
    price: number
  }>
}

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

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: objectsToAdd[],
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const categoriesRef = collection(db, 'categories')
  const q = query(categoriesRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce(
    (acc, docSnapshot) => {
      const { title, items } = docSnapshot.data()
      acc[title.toLowerCase()] = items
      return acc
    },
    {} as { [key: string]: objectsToAdd },
  )

  return categoryMap
}

export async function createUserAuthDocument(
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)
