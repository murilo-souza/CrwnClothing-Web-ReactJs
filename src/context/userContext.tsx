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
  user: User | null
  setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({} as User)

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
