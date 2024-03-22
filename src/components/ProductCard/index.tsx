import './styles.scss'

import { Button } from '../Button'
import { useCart } from '../../context/cartContext'

interface ProductCardData {
  product: {
    id: number
    name: string
    imageUrl: string
    price: number
  }
}

export function ProductCard({ product }: ProductCardData) {
  const { addItemToCart } = useCart()

  function addProductToCart() {
    addItemToCart(product)
  }

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">${product.price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  )
}
