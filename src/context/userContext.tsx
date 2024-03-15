import { ReactNode, createContext, useContext, useState } from 'react'

interface UserContextData {
  user: any | null
  setUser: (user: any) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
