import { CartContextProvider } from './context/cartContext'
import { ProductsContextProvider } from './context/productsContext'
import { UserContextProvider } from './context/userContext'
import { Router } from './Router'

export function App() {
  return (
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  )
}
