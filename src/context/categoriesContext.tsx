/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import {
  objectsToAdd,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase'
interface CategoriesContextData {
  categories: { [key: string]: objectsToAdd }
}

export const CategoriesContext = createContext<CategoriesContextData>(
  {} as CategoriesContextData,
)

export function CategoriesContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [categories, setCategories] = useState(
    {} as { [key: string]: objectsToAdd },
  )

  useEffect(() => {
    async function getCategoriesMap() {
      const categoryMap = await getCategoriesAndDocuments()
      setCategories(categoryMap)
    }

    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => useContext(CategoriesContext)
