import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Header/>
    </>
  )
}

export default App
