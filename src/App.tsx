import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { DashboardLayout } from './components/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import { Cards } from './pages/Cards'
import { Transactions } from './pages/Transactions'
import { Analytics } from './pages/Analytics'
import { Settings } from './pages/Settings'
import CardInfo from './pages/CardInfo'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="cards" element={<Cards />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="card-info" element={<CardInfo />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
