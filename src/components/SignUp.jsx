import React, { useState} from "react";
import { registerUser } from "../api";
import { useHistory } from "react-router-dom";

const SignUp = (setIsLoggedIn) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = setIsLoggedIn;

    let history = useHistory();

    async function handleClick(event) {
        event.preventDefault();
        await registerUser(username, password);
    
        setUsername("");
        setPassword("");
        const token = localStorage.getItem("token");
    
        if (token) {
          history.push("/");
          await setIsLoggedIn(true);
        }
      }
    

    return (
        <div>
            <form 
            onSubmit={handleClick}    
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