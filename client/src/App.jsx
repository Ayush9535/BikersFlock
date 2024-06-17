import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import PostComponent from './Components/Post';
import NotificationsPanel from './Components/Notifications';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import UserProfile from './Pages/Profile';
function App() {
  return (
    <>
    <div className='bg-gray-100 h-full'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/post" element={<PostComponent />} />
        <Route path="/notify" element={<NotificationsPanel />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
    </>
  );
}

export default App;


