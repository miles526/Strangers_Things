import React from "react";

const Profile = ({ setToken, setTheUser}) => {
    const logOut = () => {
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
        <form
        onSubmit={async (event) => {
            event.preventDefault();
            logOut();
        }}
        >
            <button type="submit">Log Out</button>
        </form>
      </div>
    )
};

export default Profile;