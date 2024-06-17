import React from 'react';

const ChatInterface = () => {
    return (
        <div className="flex flex-col h-[90vh]">
            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto">
                <div className="mb-4">
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            I'm on my way but there is a traffic holdup in a bus and I forgot
                            my headphones at home. 🙁
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gray-300 rounded-lg py-2 px-4 max-w-xs">
                            Oh boy! You will manage. Just don't be late.
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            I'm here. Where are you?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gray-300 rounded-lg py-2 px-4 max-w-xs">
                            On my way.
                        </div>
                    </div>
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            I may be late :)
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gray-300 rounded-lg py-2 px-4 max-w-xs">
                            Oooooopsite
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            JK, I'm here 😀 😀 😀
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Image"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end mb-2">
                        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            You are ridiculous!!!!!!!
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Field */}
            <div className="flex items-center bg-white p-4">
                <span className='mr-3'>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" className='cursor-pointer'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z"></path> </g> </g></svg>
                </span>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow mr-4 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 text-white rounded-full p-2">
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
                            d="M12 17l9 2-9-18-9 18 9-2zm0 0v-8"
                            transform='rotate(90 12 12)'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatInterface;