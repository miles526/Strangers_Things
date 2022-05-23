import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Login from "./Login";
import { grabData } from "../api";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Main = () => {
    const [theUser, setTheUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      setToken(myToken);
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
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/SignUp"
            element={<SignUp token={token} setToken={setToken} />}
            >
          </Route>

          <Route exact path="/Login" element={<Login setToken={setToken} />}></Route>

          <Route exact path="/CreatePost" element={<CreatePost token={token} setToken={setToken} />}></Route>

          <Route
            exact path="/Posts"
            element={
              <Posts
              theUser={theUser}
              token={token}
              setToken={setToken}
              posts={posts}
              setPosts={setPosts}
              />
            }
            ></Route>
            <Route
              exact path="/Profile"
              element={
                <Profile
                token={token}
                setToken={setToken}
                theUser={theUser}
                setTheUser={setTheUser}
                />
              }
              ></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Main;


