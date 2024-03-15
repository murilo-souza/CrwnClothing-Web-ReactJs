import './styles.scss'
import ShoppingCard from '../../assets/shopping-bag.svg'
import { useCart } from '../../context/cartContext'

export function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useCart()

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <img src={ShoppingCard} alt="shopping card" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}
