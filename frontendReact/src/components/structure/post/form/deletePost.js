import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost, resetDeletePost } from '../../../behavior/post/deletePostSlicer';


function DeletePost({ postId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector((state) => state.postDelete);

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(resetDeletePost());
      navigate('/');
    }
  }, [status, dispatch, navigate]);

  const handleDelete = async () => {
    await dispatch(deletePost(postId));
  };

  return (
    <button onClick={handleDelete}>
      Delete Post
    </button>
  );
}

export default DeletePost;
