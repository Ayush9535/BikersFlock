import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Components/login'
import Registration from './Components/Registration'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
    </Routes>
    </>
  )
}

export default App
