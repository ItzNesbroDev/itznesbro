import React from 'react';
import './styles/globalStyles.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App;
