import { CartItemProps, useCart } from '../../context/cartContext'
import './styles.scss'

interface CheckoutItemProps {
  checkoutItem: CartItemProps
}

export function CheckoutItem({ checkoutItem }: CheckoutItemProps) {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useCart()

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={checkoutItem.imageUrl} alt={checkoutItem.name} />
      </div>
      <span className="name">{checkoutItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(checkoutItem)}>
          &#10094;
        </div>
        <span className="value">{checkoutItem.quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(checkoutItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${checkoutItem.price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(checkoutItem)}
      >
        &#10005;
      </div>
    </div>
  )
}
