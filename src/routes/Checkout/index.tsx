import './styles.scss'

import { useCart } from '../../context/cartContext'
import { CheckoutItem } from '../../components/CheckoutItem'

export function Checkout() {
  const { cartItems, cartTotal } = useCart()

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}
