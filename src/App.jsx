import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'

// Páginas secundárias ficam em chunks separados: não pesam no carregamento da home.
const Agendamento = lazy(() => import('./pages/Agendamento/Agendamento.jsx'))
const Creditos = lazy(() => import('./pages/Creditos/Creditos.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agendamento" element={<Agendamento />} />
        <Route path="creditos" element={<Creditos />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
