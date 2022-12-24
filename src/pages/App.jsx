import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import Testing from './Testing'
import Home from './Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
