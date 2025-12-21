import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './assets/components/navbar.jsx'
import Contulmeu from './assets/components/Contulmeu.jsx'
import Featured from './assets/components/featured.jsx'


const App = () => {
  return (
    <Router>
      <Navbar />
      
      
      
      <Routes>
        <Route path='/contulmeu' element={<Contulmeu />} />

      </Routes>
    </Router>
  )
}

export default App