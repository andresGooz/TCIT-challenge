import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost, resetPost } from '../../behavior/post/createPostSlicer';
import CreatePostForm from '../../structure/post/form/createPost';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';


function CreatePost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { name, description };
    const resultAction = await dispatch(createPost(postData));
    if (createPost.fulfilled.match(resultAction)) {
      setName('');
      setDescription('');
      dispatch(resetPost());
      navigate(`/post/${resultAction.payload.id}`);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <CreatePostForm 
        handleSubmit={handleSubmit} 
        name={name} 
        setName={setName} 
        description={description} 
        setDescription={setDescription} 
      />
    </div>
  );
}

export default CreatePost;
