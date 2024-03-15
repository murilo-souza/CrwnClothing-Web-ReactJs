import { Link } from 'react-router-dom'
import CrwnLogo from '../../assets/crown.svg'
import './styles.scss'
import { useUser } from '../../context/userContext'
import { signOutUser } from '../../utils/firebase/firebase'

export function Header() {
  const { user, setUser } = useUser()

  async function signOutHandler() {
    const response = await signOutUser()
    console.log(response)
    setUser(null)
  }

  return (
    <header className="navigation">
      <Link className="logo-container" to="/">
        <img src={CrwnLogo} alt="" className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop">SHOP</Link>

        {user ? (
          <span onClick={signOutHandler}>SIGN OUT</span>
        ) : (
          <Link to="/auth">SIGN IN</Link>
        )}
      </div>
    </header>
  )
}
