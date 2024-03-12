import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { DefaultLayout } from './layout/DefaultLayout'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
