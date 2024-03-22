import { useEffect, useState } from 'react'
import { useCategories } from '../../context/categoriesContext'
import './styles.scss'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'

export function Category() {
  const { categories } = useCategories()
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <div className="category-container-r">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}
