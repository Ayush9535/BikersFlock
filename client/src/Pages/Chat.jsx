import React from 'react'
import ChatSideBar from '../Components/ChatSideBar'
import ChatBoxNav from '../Components/ChatBoxNav'
import ChatInterface from '../Components/ChatInterface'

const Chat = () => {
  return (
    <div className='w-full h-full flex'>
        <ChatSideBar />
        <div className='flex-1'>
            <ChatBoxNav/>
            <ChatInterface/>
        </div>
    </div>
  )
}

export default Chat
