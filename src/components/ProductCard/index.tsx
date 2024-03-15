import './styles.scss'

import { Button } from '../Button'

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

interface ProductCardData {
  product: ProductCardProps
}

export function ProductCard({ product }: ProductCardData) {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  )
}
