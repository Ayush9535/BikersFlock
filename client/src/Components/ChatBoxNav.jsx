import React from 'react'

const ChatBoxNav = () => {
    return (
        <div className="flex items-center bg-gray-100 p-4 h-[10vh]">
            <div class="relative">
                <img class="w-10 h-10 rounded-full" src="https://avatar.iran.liara.run/public/9" alt="" />
                <span class="bottom-0 left-7 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div className='pl-4'>
                <h2 className="text-lg font-semibold">Ava Thompson</h2>
                <span className="text-xs text-green-500 flex items-center">
                    <p>Online now</p>
                </span>
            </div>
        </div>
    )
}

export default ChatBoxNav
