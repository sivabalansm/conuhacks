const Message = ({ message, user }) => {
    const messageStyle = user == 'human'
        ? {
            marginLeft: 'auto',
            marginRight: 24,
            backgroundColor: '#eaeaf9'
        } : {
            
        }

    return (
        <div className="message" style={messageStyle}>
            {message}
        </div>
    )
}

export default Message