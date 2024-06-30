import React, { useEffect, useState } from 'react';
import { Routes, Route , useNavigate} from 'react-router-dom';
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

  const navigate = useNavigate();

  useEffect(()=>{
    console.log(sessionStorage.getItem("loggedin") !== "true")
    if (sessionStorage.getItem("loggedin") !== "true"){
      navigate("/login")
    }else{
      navigate("/")
    }
  },[])

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 lg:h-[90vh] h-[82vh]">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/post" element={<PostComponent />} />
            <Route path="/notify" element={<NotificationsPanel />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newpost" element={<NewPost/>} />
          </Routes>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
