/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartContextData {
  isCartOpen: boolean
  setIsCartOpen: (item: boolean) => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
