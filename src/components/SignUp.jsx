import React, { useState} from "react";
import { registerUser } from "../api";

const SignUp = ({setToken}) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form 
            onSubmit={async (event) => {
                event.preventDefault();
                const result = await registerUser(username, password);

                localStorage.setItem("token", result.data.token);
                const myToken = localStorage.getItem("token");
                setToken(myToken);
            }}    
            >
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                ></input>
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;