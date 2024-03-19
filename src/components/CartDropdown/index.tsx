import './styles.scss'

import { useCart } from '../../context/cartContext'
import { Button } from '../Button'
import { CartItem } from '../CartItem'
import { useNavigate } from 'react-router-dom'

export function CartDropdown() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  function goToCheckoutPage() {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </div>
  )
}
