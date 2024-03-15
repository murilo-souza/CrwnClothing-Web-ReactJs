import { Link } from 'react-router-dom'
import CrwnLogo from '../../assets/crown.svg'
import './styles.scss'
import { useUser } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase/firebase'
import { CartIcon } from '../CartIcon'
import { CartDropdown } from '../CartDropdown'
import { useCart } from '../../context/cartContext'

export function Header() {
  const { user } = useUser()
  const { isCartOpen } = useCart()

  return (
    <header className="navigation">
      <Link className="logo-container" to="/">
        <img src={CrwnLogo} alt="" className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop">SHOP</Link>

        {user ? (
          <span onClick={signOutUser}>SIGN OUT</span>
        ) : (
          <Link to="/auth">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </header>
  )
}
