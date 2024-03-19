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
  removeItemFromCart: (product: ProductProps) => void
  clearItemFromCart: (product: ProductProps) => void
  cartCount: number
  cartTotal: number
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

function removeCartItem(
  cartItems: CartItemProps[],
  productToRemove: ProductProps,
) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id,
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  })
}

function clearCartItem(
  cartItems: CartItemProps[],
  productToClear: ProductProps,
) {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    )

    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0,
    )

    setCartTotal(newCartTotal)
  }, [cartItems])

  function addItemToCart(product: ProductProps) {
    setCartItems(addCartItem(cartItems, product))
  }
  function removeItemFromCart(product: ProductProps) {
    setCartItems(removeCartItem(cartItems, product))
  }
  function clearItemFromCart(product: ProductProps) {
    setCartItems(clearCartItem(cartItems, product))
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        cartTotal,
        removeItemFromCart,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
