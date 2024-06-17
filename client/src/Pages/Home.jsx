import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import BottomNav from '../Components/BottomNav';
import Profile from '../Components/Profile';
import Chat from './Chat';
import Notifications from '../Components/Notifications';
import Events from '../Components/Events';
import NewPost from '../Components/NewPost';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
