import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Components/login'
import Registration from './Components/Registration'
import PostComponent from './Components/Post';
import NotificationsPanel from './Components/Notifications';
import Chat from './Pages/Chat';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/post' element={<PostComponent/>}/>
      <Route path='/notify' element={<NotificationsPanel/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </>
  )
}

export default App
