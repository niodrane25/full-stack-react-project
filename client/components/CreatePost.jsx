import React, { useState } from 'react';
import axios from "axios";

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to create a new post
      const response = await axios.post("/api/posts", { content: postContent });
      const newPost = response.data;
      // Do something with the new post, such as updating the post list or displaying a success message
      console.log("New post:", newPost);
      // Clear the post content after successful submission
      setPostContent("");
    } catch (error) {
      // Handle any error that occurred during post creation
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={handlePostContentChange}
          placeholder="Write your post..."
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
