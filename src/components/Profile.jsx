import React from "react";

const Profile = ({ setToken, theUser, setTheUser}) => {
    const handleLogOut = () => {
        setToken("");
        localStorage.clear();
        setTheUser({
            messages: [],
            username: "",
            _id: "",
        });
    };
    return (
      <div>
        <h3>Sent Messages</h3>
        <div>
            {theUser.messages.length ? (
                theUser.messages.map((msg, idx) => 
                msg.fromUser.username === theUser.username ? (
                    <div key={`Inbox : ${idx}`}>
                        <div> Subject: {msg.post.title}</div>
                        <div> Sent: {msg.content}</div>
                    </div>
                    ) : null
                )
            ) : (
                <div>No Messages</div>
            )}

        <h3>INBOX</h3>
        {theUser.messages.length ? (
            theUser.nmessages.map((msg, idx) =>
                msg.fromUser.username === theUser.username ? (
                    <div>
                        <div> Subject: {msg.post.title}</div>
                        <div> Message: {msg.content}</div>
                        <div> Sent By: {msg.fromUser.username}</div>
                    </div>
                ) : null
            )
        ) : (
            <div>No Messages</div>
        )}
        </div>

        <form
        onSubmit={async (event) => {
            event.preventDefault();
            handleLogOut();
        }}
        >
            <button type="submit">Log Out</button>
        </form>
      </div>
    )
};

export default Profile;