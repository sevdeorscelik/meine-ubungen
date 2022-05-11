import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.scss'

import Spa002 from './pages/spa002'
import Spa004 from './pages/spa004'
import Spa005 from './pages/spa005'
import Spa006 from './pages/spa006'
import Spa007 from './pages/spa007'
import Menu from './pages/menu'


function App() {
 
  return (
    <div className="page_sevde">
      <h1>Sevde's Page</h1>
      <Router>
        <nav>
          <Link to="/" >Menu</Link>
          <Link to="/spa002" >Spa002</Link>
          <Link to="/spa004" >Spa004</Link>
          <Link to="/spa005" >Spa005</Link>
          <Link to="/spa006" >Spa006</Link>
          <Link to="/spa007" >Spa007</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/spa002" element={<Spa002/>} />
          <Route path="/spa004" element={<Spa004/>} />
          <Route path="/spa005" element={<Spa005/>} />
          <Route path="/spa006" element={<Spa006/>} />
          <Route path="/spa007" element={<Spa007/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
