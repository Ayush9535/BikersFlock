import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const ChatBoxNav = ({ setShowChat }) => {
  return (
    <div className="flex items-center bg-white p-4 h-[10vh]">
      <button
        onClick={()=>setShowChat(false)}
        className="bg-blue-500 text-white rounded-full p-2 mr-4 lg:hidden"
      >
        <FiArrowLeft className="h-6 w-6" />
      </button>
      <div className="relative">
        <img
          className="w-10 h-10 rounded-full"
          src="https://avatar.iran.liara.run/public/9"
          alt=""
        />
        <span className="bottom-0 left-7 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="pl-4">
        <h2 className="text-lg font-semibold">Ava Thompson</h2>
        <span className="text-xs text-green-500 flex items-center">
          <p>Online now</p>
        </span>
      </div>
    </div>
  );
};

export default ChatBoxNav;
