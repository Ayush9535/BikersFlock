import React from 'react'

const ChatSideBar = () => {

    const chats = [
        {
            id: 1,
            avatar: 'https://via.placeholder.com/40',
            name: 'Ethan Reynolds',
            lastMessage: 'Ethan: R u here?',
            unreadCount: 0,
            online : true
        },
        {
            id: 2,
            avatar: 'https://via.placeholder.com/40',
            name: 'Ava Thompson',
            lastMessage: 'Ava: LOL',
            unreadCount: 0,
            online : true
        },
        {
            id: 3,
            avatar: 'https://via.placeholder.com/40',
            name: 'Pablo Morarri',
            lastMessage: 'Pablo: This is the...',
            unreadCount: 1,
        },
        {
            id: 4,
            avatar: 'https://via.placeholder.com/40',
            name: 'Olivia Hayes',
            lastMessage: 'Olivia: Got the thing you...',
            unreadCount: 1,
            online : true
        },
        {
            id: 5,
            avatar: 'https://via.placeholder.com/40',
            name: 'Isabel Hughes',
            lastMessage: 'You: Ofc with me',
            unreadCount: 1,
        },
        {
            id: 6,
            avatar: 'https://via.placeholder.com/40',
            name: 'Peter Pet',
            lastMessage: 'You: I bought a cat!',
            unreadCount: 2,
            online : true
        },
        {
            id: 7,
            avatar: 'https://via.placeholder.com/40',
            name: 'Mason Cooper',
            lastMessage: 'Yes, U updated me???',
            unreadCount: 3,
        },
    ];


    return (
        <div className='w-[20%] h-full z-10'>
            <div className="bg-white rounded-lg shadow-right p-4 h-full">
                <div className="flex items-center justify-between mb-4">
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
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
                        <span className="ml-2">Go Back</span>
                    </button>
                </div>
                <div>
                    <h2 className="text-3xl mb-4 font-semibold">Chats</h2>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search in chats"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {chats.map((chat) => (
                    <div key={chat.id} className="flex items-center justify-between mb-4 hover:bg-gray-200 cursor-pointer p-2 rounded-sm">
                        <div class="relative">
                            <img class="w-10 h-10 rounded-full" src="https://avatar.iran.liara.run/public/9" alt="" />
                            {chat.online ?<span class="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> : <></>}
                        </div>
                        <div className="flex-1 px-5">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{chat.name}</h3>
                            </div>
                            <p className="text-gray-500 truncate text-xs">{chat.lastMessage}</p>
                        </div>
                        {chat.unreadCount > 0 && (
                            <span className="bg-blue-500 text-white rounded-full w-2 h-2"></span>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ChatSideBar
