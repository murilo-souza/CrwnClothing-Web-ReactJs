import './styles.scss'

import { useCategories } from '../../context/categoriesContext'
import { CategoryPreview } from '../../components/CategoryPreview'

export function CategoriesPreview() {
  const { categories } = useCategories()

  return (
    <div className="categories-preview-container">
      {Object.keys(categories).map((title) => {
        const category = categories[title]
        return <CategoryPreview key={title} title={title} products={category} />
      })}
    </div>
  )
}
