import React from 'react';
import { FaUser, FaEnvelope, FaBell, FaCalendarAlt, FaSignOutAlt, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  return (
    <div className={`fixed sm:relative inset-y-0 left-0 w-[13%] bg-white ${isOpen ? 'block' : 'hidden'} sm:block`}>
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <Link to="/profile" className="text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <FaUser className="mr-4" /> Profile
            </Link>
            <Link to="/newpost" className="text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <FaPlusSquare className="mr-4" /> New Post
            </Link>
            <Link to="/messages" className="text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <FaEnvelope className="mr-4" /> Messages
            </Link>
            <Link to="/notifications" className="text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <FaBell className="mr-4" /> Notifications
            </Link>
            <Link to="/events" className="text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
              <FaCalendarAlt className="mr-4" /> Events
            </Link>
          </nav>
        </div>
        <div className="flex-shrink-0 px-2 py-4">
          <button className="w-full text-black hover:bg-bforange hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            <FaSignOutAlt className="mr-4" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
