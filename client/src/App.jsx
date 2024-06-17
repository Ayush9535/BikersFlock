import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import PostComponent from './Components/Post';
import NotificationsPanel from './Components/Notifications';
import Chat from './Pages/Chat';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/post" element={<PostComponent />} />
        <Route path="/notify" element={<NotificationsPanel />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
