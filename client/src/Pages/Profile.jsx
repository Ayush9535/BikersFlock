import React, { useState } from 'react';
import ProfileCardComponent from '../Components/ProfileCardComponent';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div className="bg-gray-100 p-4 flex flex-col  h-full">
            <div className="flex flex-col items-center md:flex-col md:justify-center gap-8">
                <div className="flex flex-col items-center mb-4 md:mb-0 gap-5">
                    <img
                        className="w-20 h-20 rounded-full"
                        src="https://via.placeholder.com/80"
                        alt="Profile"
                    />
                    <div className='text-center'>
                        <h2 className="text-3xl font-semibold">Brittany Dinan</h2>
                        <p className="text-gray-500 text-sm mt-3 font-semibold">New York, USA</p>
                        <p className="text-gray-500 text-md mt-2 font-semibold">Jane Doe is an accomplished professional biker with a passion for long-distance touring and rally racing.</p>
                        <div className="flex justify-center items-center mt-5 gap-10">
                            <div className='flex flex-col text-center'>
                                <span className="font-bold">159</span>
                                <span className=" text-gray-400">Total Posts</span>
                            </div>
                            <div className='flex flex-col text-center'>
                                <span className="font-bold">112</span>
                                <span className=" text-gray-400">Followers</span>
                            </div>
                            <div className='flex flex-col text-center'>
                                <span className="font-bold">97</span>
                                <span className="text-gray-400">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-orange-400">
                        Follow
                    </button>
                    <button className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">Message</button>
                </div>
            </div>
            <div className="mb-4 mt-10 border-b border-gray-200 dark:border-gray-400 w-[90%] m-auto">
                <ul className="flex overflow-x-auto justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'posts' ? 'border-blue-500 bg-gray-200' : 'border-transparent'}`}
                            onClick={() => setActiveTab('posts')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'posts'}
                        >
                            Posts
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block text-nowrap p-4 border-b-2 rounded-t-lg ${activeTab === 'bikes' ? 'border-blue-500 bg-gray-200' : 'border-transparent'}`}
                            onClick={() => setActiveTab('bikes')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'bikes'}
                        >
                            Favourite Bikes
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'achievements' ? 'border-blue-500 bg-gray-200' : 'border-transparent'}`}
                            onClick={() => setActiveTab('achievements')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'achievements'}
                        >
                            Achievements
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'events' ? 'border-blue-500 bg-gray-200' : 'border-transparent'}`}
                            onClick={() => setActiveTab('events')}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'events'}
                        >
                            Events
                        </button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                {activeTab === 'posts' && (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-[90%] m-auto'>
                        <ProfileCardComponent />
                        <ProfileCardComponent />
                        <ProfileCardComponent />
                        <ProfileCardComponent />
                        <ProfileCardComponent />
                        <ProfileCardComponent />
                    </div>
                )}
                {activeTab === 'bikes' && (
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 w-[90%] m-auto'>
                    <ProfileCardComponent />
                    <ProfileCardComponent />
                    <ProfileCardComponent />
                </div>
                )}
                {activeTab === 'achievements' && (
                    <div className='text-center'>
                    <h1>Achievements</h1>
                    </div>
                    
                )}
                {activeTab === 'events' && (
                    <div className='text-center'>
                        <h1>Events</h1>
                    </div>
                   
                )}
            </div>
        </div>
    );
};

export default UserProfile;