/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  createUserAuthDocument,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase'

interface UserContextData {
  user: User
  setUser: (user: User) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserAuthDocument(user)
      }
      setUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
