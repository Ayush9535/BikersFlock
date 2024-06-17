import React from 'react';

const NotificationsPanel = () => {

  return (
    <div className='w-[40%] '>
      <div className="bg-white rounded-lg shadow-md py-4">
        <div className="flex items-center justify-center mb-6 w-full shadow-lg pb-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        <div className='px-5'>
          <div className="flex items-center mb-4 justify-between">
            <div className='flex items-center gap-4'>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
                />
              <p className="text-gray-600">lea.9 & 10 others liked your post</p>
            </div>
              <span class="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center mb-4 justify-between">
            <div className='flex items-center gap-4'>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
                />
              <p className="text-gray-600">lea.9 started following you</p>
            </div>
            <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mt-2">
              Follow back
            </button>
          </div>
          <div className="flex items-center mb-4 justify-between">
            <div className='flex items-center gap-4'>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
                />
              <p className="text-gray-600">lea.9 & 10 others liked your post</p>
            </div>
              <span class="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center mb-4 justify-between">
            <div className='flex items-center gap-4'>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
                />
              <p className="text-gray-600">lea.9 & 10 others liked your post</p>
            </div>
              <span class="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center mb-4 justify-between">
            <div className='flex items-center gap-4'>
              <img
                src="https://via.placeholder.com/150"
                alt="Post"
                className="w-16 h-16 rounded-lg mt-2"
                />
              <p className="text-gray-600">lea.9 & 10 others liked your post</p>
            </div>
              <span class="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;