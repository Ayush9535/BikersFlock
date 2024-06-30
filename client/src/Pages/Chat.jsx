import React , { useState } from 'react'
import ChatSideBar from '../Components/ChatSideBar'
import ChatBoxNav from '../Components/ChatBoxNav'
import ChatInterface from '../Components/ChatInterface'

const Chat = () => {

  const [showChat , setShowChat] = useState(false)

  return (
    <div className='w-full h-full flex'>
      <div className={`${showChat ? "hidden" : "block"} w-full lg:w-[25%] lg:block `}>
        <ChatSideBar setShowChat={setShowChat}/>
      </div>
      <div className={`flex-1 ${showChat ? "block" : "hidden"} lg:block`}>
          <ChatBoxNav setShowChat={setShowChat} />
          <ChatInterface/>
      </div>
    </div>
  )
}

export default Chat
