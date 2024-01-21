const ChatButton = ({ toggleChat }) => {
    return (
        <img id='chat-button' src='../../../assets/chat-icon.png' onClick={toggleChat}/>
    )
}

export default ChatButton