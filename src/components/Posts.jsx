import React from "react";
import Post from "./Post";

const Posts = ({ posts, theUser, token }) => {
    return(
        <div>
            <h1>Posts</h1>
            {posts.map((post, i) => {
                return (
                    <Post
                        post={post}
                        theUser={theUser}
                        key={i}
                    />
                )
            })}
        </div>
    )
}

export default Posts;