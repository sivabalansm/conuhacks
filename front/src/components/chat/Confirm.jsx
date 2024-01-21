const Confirm = ({ toggleConfirm, close }) => {
    return (
        <>
            <div id='grey-screen'></div>
            <div id='confirm-box'>
                <p><b>End Conversation</b></p>
                <p>Are you sure you want to end this conversation?</p>

                <div id='confirm-buttons'>
                    <button onClick={close} className="confirm-button" id="end-button"><b>End Chat</b></button>
                    <button onClick={toggleConfirm} className="confirm-button" id="cancel-button"><b>Cancel</b></button>
                </div>

            </div>
        </>

    )
}

export default Confirm