import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/styles/Main.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NavBar from './components/AppNavBar'
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
    <>
    <BrowserRouter basename='/restorant'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
