import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { Authentication } from './routes/Authentication'
import { Shop } from './routes/Shop'
import { Checkout } from './routes/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
