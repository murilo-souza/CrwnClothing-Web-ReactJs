import { CategoryItem, CategoryItemProps } from '../CategoryItem'
import './styles.scss'

interface DirectoryProps {
  categories: CategoryItemProps[]
}

export function Directory({ categories }: DirectoryProps) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
