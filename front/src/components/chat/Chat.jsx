import { useState } from 'react'

import ChatButton from './ChatButton'
import ChatBox from './ChatBox'

import './chat.css'

const Chat = () => {
    const [chatToggle, setChatToggle] = useState(false)
    const [messages, setMessages] = useState([])

    const toggleChat = () => {
        setChatToggle(!chatToggle)
    }

    return (
        <div id='chat'>
            {chatToggle
                ? <ChatBox toggleChat={toggleChat} messages={messages} setMessages={setMessages} />
                : <ChatButton toggleChat={toggleChat} />
            }
        </div>
    )
}

export default Chat