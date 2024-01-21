import { useState } from 'react'

import ChatButton from './ChatButton'
import ChatBox from './ChatBox'

import './chat.css'

const Chat = () => {
    const [chatToggle, setChatToggle] = useState(false)

    const toggleChat = () => {
        setChatToggle(!chatToggle)
    }

    return (
        <div id='chat'>
            {chatToggle
                ? <ChatBox toggleChat={toggleChat} />
                : <ChatButton toggleChat={toggleChat} />
            }
        </div>
    )
}

export default Chat