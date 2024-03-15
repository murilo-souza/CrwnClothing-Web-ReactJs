import { ProductsContextProvider } from './context/productsContext'
import { UserContextProvider } from './context/userContext'
import { Router } from './Router'

export function App() {
  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </UserContextProvider>
  )
}
