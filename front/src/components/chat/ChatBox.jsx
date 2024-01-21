import { useState } from 'react'

import Message from './Message'
import Confirm from './Confirm'

const ChatBox = ({ messages, setMessages, toggleChat }) => {
    const [message, setMessage] = useState('')
    const [confirm, setConfirm] = useState(false)

    const minimize = () => {
        toggleChat()
    }

    const toggleConfirm = () => {
        setConfirm(!confirm)
    }
    
    const close = () => {
        toggleConfirm()
        setMessages([])
        toggleChat()
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()

        setMessages(messages.concat({
            message,
            user: 'human'
        }))

        console.log(messages)

        setMessage('')
    }

    return (
        <div id='chat-box'>
            <div id='chat-header'>
                <div id='chat-info'>
                    <img id='chat-profile' src='../../../../assets/gear.svg'/>
                    <span id='chat-title'>SAPMechanic</span>
                </div>
                <div id='chat-buttons'>
                    <span id="minimize-button" onClick={minimize}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
                        </svg>
                    </span>
                    <span id='close-button' onClick={toggleConfirm}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div id='chat-messages'>
                {messages.map(m => <Message message={m.message} user={m.user} />)}
            </div>
            <form onSubmit={sendMessage}>
                <input value={message} onChange={handleChange} placeholder='Message...' id='chat-input'></input>
            </form>
            { 
                confirm && <Confirm toggleConfirm={toggleConfirm} close={close} />
            }

        </div>
    )
}

export default ChatBox