import React, {useState} from "react";
import {userLogin} from "../api";

const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login_form">
            <form 
                onSubmit={async (event) => {
                    event.preventDefault();
                    const result = await userLogin(username, password);

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
                ></input>
                <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;