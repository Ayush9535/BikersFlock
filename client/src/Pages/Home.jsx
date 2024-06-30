import React from 'react';
import PostComponent from '../Components/Post';

function Home() {
  return (
    <div className="flex h-screen px-5 lg:px-8 py-5 gap-10">
      <div className='w-full lg:w-[70%] flex flex-col gap-5'>
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>

      <div className='w-[30%] bg-white rounded-lg shadow-md p-4 h-fit hidden lg:block'>
        <h2 className='text-xl font-semibold'>Suggestions</h2>

        <div className='flex justify-between my-6'>
          <div className='flex items-center gap-3'>
            <img src='https://avatar.iran.liara.run/public/9' alt='Profile' className='rounded-full w-10 h-10 object-cover' />
            <div>
              <span className='text-lg font-semibold'>John Doe</span>
              <p className='text-gray-500 text-xs font-normal'>New York, USA</p>
            </div>
          </div>
          <button className='bg-bforange hover:bg-orange-500 text-white px-3 py-2 rounded text-sm font-semibold'>Follow</button>
        </div>

        <div className='flex justify-between my-6'>
          <div className='flex items-center gap-3'>
            <img src='https://avatar.iran.liara.run/public/9' alt='Profile' className='rounded-full w-10 h-10 object-cover' />
            <div>
              <span className='text-lg font-semibold'>John Doe</span>
              <p className='text-gray-500 text-xs font-normal'>New York, USA</p>
            </div>
          </div>
          <button className='bg-inherit text-orange-500 border-orange-500 border-2 px-3 py-2 rounded text-sm font-semibold'>Following</button>
        </div>

        <div className='flex justify-between my-6'>
          <div className='flex items-center gap-3'>
            <img src='https://avatar.iran.liara.run/public/9' alt='Profile' className='rounded-full w-10 h-10 object-cover' />
            <div>
              <span className='text-lg font-semibold'>John Doe</span>
              <p className='text-gray-500 text-xs font-normal'>New York, USA</p>
            </div>
          </div>
          <button className='bg-bforange hover:bg-orange-500 text-white px-3 py-2 rounded text-sm font-semibold'>Follow</button>
        </div>

        <div className='flex justify-between my-6'>
          <div className='flex items-center gap-3'>
            <img src='https://avatar.iran.liara.run/public/9' alt='Profile' className='rounded-full w-10 h-10 object-cover' />
            <div>
              <span className='text-lg font-semibold'>John Doe</span>
              <p className='text-gray-500 text-xs font-normal'>New York, USA</p>
            </div>
          </div>
          <button className='bg-bforange hover:bg-orange-500 text-white px-3 py-2 rounded text-sm font-semibold'>Follow</button>
        </div>

        <div className='flex justify-between my-6'>
          <div className='flex items-center gap-3'>
            <img src='https://avatar.iran.liara.run/public/9' alt='Profile' className='rounded-full w-10 h-10 object-cover' />
            <div>
              <span className='text-lg font-semibold'>John Doe</span>
              <p className='text-gray-500 text-xs font-normal'>New York, USA</p>
            </div>
          </div>
          <button className='bg-bforange hover:bg-orange-500 text-white px-3 py-2 rounded text-sm font-semibold'>Follow</button>
        </div>

      </div>
    </div>
  );
}

export default Home;
