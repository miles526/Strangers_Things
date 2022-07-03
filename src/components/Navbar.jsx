import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = ({ token }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <div className="NavBarCLass">
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/Posts">POSTS</Link>
        </li>
        {!isLoggedIn ? (
            <li>
                <Link to="/SignUp">REGISTER</Link>
            </li>
        ) : (
            <li>
                <Link to="/Profile">PROFILE</Link>
            </li>
        )}
        {!isLoggedIn ? (
            <li>
                <Link to="/Login">LOGIN</Link>
            </li>
        ) : (
            <li>
                <Link
                    to="/"
                    onClick={() => {
                        localStorage.removeItem("token");
                        setIsLoggedIn(false);
                    }}
                >
                    LOGOUT
                </Link>
            </li>
        )}
    </div>
    );
};

export default Nav;