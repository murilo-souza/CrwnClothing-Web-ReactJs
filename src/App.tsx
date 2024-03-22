import { CartContextProvider } from './context/cartContext'
import { CategoriesContextProvider } from './context/categoriesContext'
import { UserContextProvider } from './context/userContext'
import { Router } from './Router'

export function App() {
  return (
    <UserContextProvider>
      <CategoriesContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </CategoriesContextProvider>
    </UserContextProvider>
  )
}
