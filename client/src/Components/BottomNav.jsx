import React from 'react';
import { FaUser, FaHome, FaBell, FaCalendarAlt, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
      <div className="flex justify-around py-2">
        <Link to="/" className="text-bforange hover:text-bforange flex flex-col items-center">
          <FaHome className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/notifications" className="text-bforange hover:text-bforange flex flex-col items-center">
          <FaBell className="h-6 w-6" />
          <span className="text-xs">Notifications</span>
        </Link>
        <Link to="/newpost" className="text-bforange hover:text-bforange flex flex-col items-center">
          <FaPlusSquare className="h-6 w-6" />
          <span className="text-xs">New Post</span>
        </Link>
        <Link to="/events" className="text-bforange hover:text-bforange flex flex-col items-center">
          <FaCalendarAlt className="h-6 w-6" />
          <span className="text-xs">Events</span>
        </Link>
        <Link to="/profile" className="text-bforange hover:text-bforange flex flex-col items-center">
          <FaUser className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  );
}
