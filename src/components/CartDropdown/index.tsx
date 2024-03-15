import { useCart } from '../../context/cartContext'
import { Button } from '../Button'
import { CartItem } from '../CartItem'
import './styles.scss'

export function CartDropdown() {
  const { cartItems } = useCart()

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
