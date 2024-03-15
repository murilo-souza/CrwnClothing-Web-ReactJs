import { UserContextProvider } from './context/userContext'
import { Router } from './Router'

export function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}
