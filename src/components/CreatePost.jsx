import React, { useState } from "react";
import { createPost } from "../api" 

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title,
            description,
            price,
            location
    };
    createPost(newPost, localStorage.getItem("token"));
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    }

    return (
        <div>
            <h3>New Post</h3>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                ></input>
                <input
                    required
                    type="text"
                    placeholder="Description of Item"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></input>
                <input
                    required
                    type="text"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Location of Item"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                ></input>

                <button type="submit" className="add_posts_button">
                    Create New Post
                </button>
            </form>
        </div>
    )
}

export default CreatePost;