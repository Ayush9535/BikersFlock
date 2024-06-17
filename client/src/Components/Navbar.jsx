import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import bflogo from '../assets/bflogo.png'; // Adjust the path to the correct location of your logo image

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          {/* Show logo only on small screens */}
          <div className="flex-shrink-0 px-8 sm:hidden">
            <img src={bflogo} alt="BikersFlock Logo" className="h-8 w-auto" />
          </div>
          {/* Show text only on medium and larger screens */}
          <div className="hidden sm:flex sm:items-center sm:shrink-0 text-bforange text-xl font-bold px-8">
            BikersFlock
          </div>
          <div className="flex-grow flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-bfbg text-gray-300 placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:border-gray-300 sm:text-sm sm:w-full sm:max-w-lg"
                placeholder="Search…"
                type="search"
                name="search"
                style={{
                  maxWidth: '60vw', // Ensure it doesn't overflow on small screens
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-6">
          <button
            className="p-1 rounded-full text-bforange hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bfbg focus:ring-white hidden sm:block"
          >
            <span className="sr-only">View profile</span>
            <FaUserCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
