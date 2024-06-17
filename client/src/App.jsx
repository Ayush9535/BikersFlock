import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import PostComponent from './Components/Post';
import NotificationsPanel from './Components/Notifications';
import Chat from './Pages/Chat';
import Home from './Pages/Home';
import UserProfile from './Pages/Profile';
import Sidebar from './Components/Sidebar';
import BottomNav from './Components/BottomNav';
import Navbar from './Components/Navbar';
import Events from './Pages/Events';
import NewPost from './Components/NewPost';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex-1 bg-gray-100 h-[90vh] overflow-auto z-01">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/post" element={<PostComponent />} />
            <Route path="/notify" element={<NotificationsPanel />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/event" element={<Events />} />
            <Route path="/newpost" element={<NewPost/>} />
          </Routes>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
