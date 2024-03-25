import { Link } from 'react-router-dom'
import { ProductCard } from '../ProductCard'
import './styles.scss'

interface CategoryPreviewProps {
  title: string
  products: Array<{
    id: number
    name: string
    imageUrl: string
    price: number
  }>
}

export function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  )
}
