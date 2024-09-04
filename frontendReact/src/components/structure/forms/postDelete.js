import React from 'react';
import env from "react-dotenv";


function DeletePost({ postId }) {
  const handleDelete = async () => {
    const username = env.BACKEND_API_USERNAME;
    const password = env.BACKEND_API_PASSWORD;
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    try {
      const response = await fetch(`${env.BACKEND_API_DOMAIN_URL}/posts/${postId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': basicAuth
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Failed to delete post');
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Post
    </button>
  );
}

export default DeletePost;
