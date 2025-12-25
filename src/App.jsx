import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/navbar.jsx'
import Contulmeu from './assets/components/Contulmeu.jsx'
import Featured from './assets/components/featured.jsx'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>               {/* 🔥 ÎMPACHETEAZĂ APLICAȚIA */}
      <Router>
        <Navbar />
        <Featured />

        <Routes>
          <Route path="/contulmeu" element={<Contulmeu />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
