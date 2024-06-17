import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import BottomNav from '../Components/BottomNav';
import Profile from './Profile';
import Chat from './Chat';
import Notifications from '../Components/Notifications';
import Events from '../Pages/Events';
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
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
