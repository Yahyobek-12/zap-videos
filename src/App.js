import React from 'react'
import { Navbar, Home, Footer, Features } from './constants'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div id='dad' className='relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App