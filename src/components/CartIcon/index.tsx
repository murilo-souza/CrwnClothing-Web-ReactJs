import './styles.scss'
import ShoppingCard from '../../assets/shopping-bag.svg'

export function CartIcon() {
  return (
    <div className="cart-icon-container">
      <img src={ShoppingCard} alt="shopping card" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
