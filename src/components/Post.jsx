import React from "react";
import { Link } from "react-router-dom"

const Post = ({ post, loggedIn, userObj }) => {
    return (
        <div className="single_post" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Seller: {post.author.username}</p>
            <p>Location: {post.location}</p>
            {loggedIn && post.author._id === userObj._id ? (
                <Link to={`/posts/view/${post._id}`}>
                    <button>View</button>
                </Link>
            ) : null}
        </div>
    )
}

export default Post;