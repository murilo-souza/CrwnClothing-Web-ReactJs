import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { SignIn } from './routes/SignIn'
import { Shop } from './routes/Shop'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
