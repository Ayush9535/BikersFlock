import React from 'react';

const NotificationsPanel = () => {
  return (
    <div className='md:w-[87vw] h-[90vh] bg-white w-[100vw] pt-8'>
      <div className="bg-white py-4]">
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
            <span className="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
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
            <span className="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
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
            <span className="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
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
            <span className="w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;
