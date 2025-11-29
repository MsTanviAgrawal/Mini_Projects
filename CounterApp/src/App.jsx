import './App.css'
import { Routes, Route } from 'react-router-dom'

import DashboardPage from './Components/Dashboard/DashboardPage'
import IncreaseCount from './Components/IncreaseCount/IncreaseCount'
import DecreaseCount from './Components/DecreaseCount/DecreaseCount'
import About from './Pages/About/About'
import IndependentOperation from './Pages/IndependentOperation/IndependentOperation'
import UniformCountOperation from './Pages/UniformCountOperation/UniformCountOperation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/increase" element={<IncreaseCount />} />
      <Route path="/about" element={<About />} />
      <Route path="/independentOperation" element={<IndependentOperation />} />
      <Route path="/uniformOperation" element={<UniformCountOperation />} />
      <Route path="/decreases" element={<DecreaseCount />} />

    </Routes>
   
  )
}

export default App
