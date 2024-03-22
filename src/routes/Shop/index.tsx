import { CategoriesPreview } from '../CategoriesPreview'
import { Category } from '../Category'
import './styles.scss'
import { Route, Routes } from 'react-router-dom'

export function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}
