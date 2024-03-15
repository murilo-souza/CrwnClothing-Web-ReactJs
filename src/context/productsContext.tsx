/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react'

import Products from '../shop-data.json'

interface ProductsContextData {
  products: typeof Products
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState(Products)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext)
