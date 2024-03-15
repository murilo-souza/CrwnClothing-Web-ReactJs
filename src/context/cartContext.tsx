/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface CartItemProps {
  id: number
  name: string
  quantity: number
  price: number
  imageUrl: string
}
export interface ProductProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

interface CartContextData {
  isCartOpen: boolean
  setIsCartOpen: (item: boolean) => void
  cartItems: CartItemProps[]
  addItemToCart: (product: ProductProps) => void
  cartCount: number
}

function addCartItem(cartItems: CartItemProps[], productToAdd: ProductProps) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    )

    setCartCount(newCartCount)
  }, [cartItems])

  function addItemToCart(product: ProductProps) {
    setCartItems(addCartItem(cartItems, product))
  }

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
