import React from 'react';
import DeletePostController from '../../behavior/post/deletePost';  // Asegúrate de que la ruta sea correcta


function DeletePost({ postId }) {
  const handleDelete = async () => {
    const deletePostController = new DeletePostController();

    try {
      await deletePostController.deletePost(postId);
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
