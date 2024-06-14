import React from 'react';

const NotificationsPanel = () => {

  return (
    <div className='w-[20%] h-[50%]'>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Today</h3>
          <div className="flex items-center mb-4">
            <div className="bg-red-100 text-red-500 rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-600">lea.9 & 10 others liked your post</p>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full mr-2"
            />
            <div>
              <p className="text-gray-600">lea.9 started following you</p>
              <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mt-2">
                Follow back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;