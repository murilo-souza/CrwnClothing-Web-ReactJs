import './styles.scss'

import { ProductCard } from '../../components/ProductCard'
import { useProducts } from '../../context/productsContext'

export function Shop() {
  const { products } = useProducts()

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
