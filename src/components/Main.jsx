import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./Navbar"
import { grabData } from "../api";
import {Switch, Route} from "react-router-dom"

const Main = () => {
    const [theUser, setTheUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      setToken(myToken);
      setIsLoggedIn(true)
    }
  }, [token]);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        const response = await grabData(token);
        setTheUser({
          messages: response.data.messages,
          username: response.data.username,
          _id: response.data._id,
        });
      }
    };
    getUser();
  }, [token]);

  return (
    <div className="main_container">
        <Navbar token={token} />
        <Switch>
          <Route
            path="/SignUp"><SignUp token={token} setToken={setToken} />
          </Route>

          <Route path="/Login"><Login setToken={setToken} /></Route>

          <Route path="/CreatePost"><CreatePost token={token} setToken={setToken} /></Route>

          <Route
            path="/Posts">
              <Posts
              theUser={theUser}
              token={token}
              setToken={setToken}
              posts={posts}
              setPosts={setPosts}
              />
          </Route>
          <Route
              path="/Profile">
                <Profile
                token={token}
                setToken={setToken}
                theUser={theUser}
                setTheUser={setTheUser}
                />
          </Route>
        </Switch>
    </div>
  );
};

export default Main;


