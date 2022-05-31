import React from 'react';
import './styles/globalStyles.css';
import { Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './containers/Home'
import _Works from './containers/Works'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<_Works />} />
        <Route path="/*" element={<h1>404</h1>} />
        <Route path="/contact" element={<h1>This Page In A Under Development</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
