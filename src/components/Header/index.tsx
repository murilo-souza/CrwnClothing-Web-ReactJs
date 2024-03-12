import { Link } from 'react-router-dom'
import CrwnLogo from '../../assets/crown.svg'
import './styles.scss'

export function Header() {
  return (
    <header className="navigation">
      <Link className="logo-container" to="/">
        <img src={CrwnLogo} alt="" className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop">SHOP</Link>
        <Link to="/sign-in">SIGN IN</Link>
      </div>
    </header>
  )
}
