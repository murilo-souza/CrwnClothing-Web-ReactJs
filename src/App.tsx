import { CategoryItem } from './components/CategoryItem/category-item'

export function App() {
  return (
    <div className="w-full flex flex-wrap justify-between">
      <CategoryItem title="Hats" />
      <CategoryItem title="Jackets" />
      <CategoryItem title="Sneakers" />
      <CategoryItem title="Women" />
      <CategoryItem title="Mens" />
    </div>
  )
}
