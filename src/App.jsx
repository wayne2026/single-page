import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './home'
import ScrollToSection from './components/ScrollToSection'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToSection />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/our-mission' element={<HomePage />} />
          <Route path='/our-vision' element={<HomePage />} />
          <Route path='/our-project' element={<HomePage />} />
          <Route path='/about-us' element={<HomePage />} />
          <Route path='/get-involved' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
