import { useEffect, useState } from 'react'
import { useCategories } from '../../context/categoriesContext'
import './styles.scss'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'

export function Category() {
  const { categories } = useCategories()
  const { category } = useParams()
  const [products, setProducts] = useState(categories[category])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <h2 className="category-title">{category?.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}
