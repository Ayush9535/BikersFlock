import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Components/login'
import Registration from './Components/Registration'
import PostComponent from './Components/Post';
import NotificationsPanel from './Components/Notifications';
import Chat from './Pages/Chat';
import UserProfile from './Pages/Profile';
import EventCard from './Components/EventCard';

function App() {

  return (
    <div className='bg-gray-100 h-full'>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/post' element={<PostComponent/>}/>
      <Route path='/notify' element={<NotificationsPanel/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/event' element={<EventCard/>}/>
    </Routes>
    </div>  
  )
}

export default App
