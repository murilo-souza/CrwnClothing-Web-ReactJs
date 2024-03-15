import './styles.scss'

import { CartItemProps } from '../../context/cartContext'

interface CartItemData {
  data: CartItemProps
}

export function CartItem({ data }: CartItemData) {
  return (
    <div className="cart-item-container">
      <img src={data.imageUrl} alt={data.name} />
      <div className="item-details">
        <span className="name">{data.name}</span>
        <span className="price">
          {data.quantity} x ${data.price}
        </span>
      </div>
    </div>
  )
}
