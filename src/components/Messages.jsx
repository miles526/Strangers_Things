import React, { useState } from "react";
import { newMessage } from "../api";

const Messages = ({ post, idx, token, theUser, setTheUser }) => {
    const [msgs, setMsgs] = useState("");

    const allMsgs = (msgs, post ) => {
        const newObject = {
            msgs,
            post: {
                title: post.title,
            },
            whichUser: {
                username: theUser.username,
            },
        };
        const response = theUser.messages;
        response.push(newObject);
        setTheUser({...theUser, messages: response });
    };

return (
    <form
    key={post._id}
    onSubmit={async (event) => {
        event.preventDefault();
        const response = await newMessage(token, post._id, msgs);
        allMsgs(msgs, post);
        setMsgs("");
    }}
    >
        <input
            required
            placeholder="Enter text here"
            key={`message: ${idx}`}
            value={msgs}
            onChange={(event) => {
                setMsgs(event.target.value);
            }}
        ></input>
        <button type="submit">SEND</button>
    </form>
    );
};

export default Messages;