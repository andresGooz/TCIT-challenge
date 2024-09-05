import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost, resetPost } from './createPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';


function CreatePost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nameRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, status, error } = useSelector((state) => state.post);

  useEffect(() => {
    if (status === 'succeeded' && post) {
      setName('');
      setDescription('');
      dispatch(resetPost());
      navigate(`/post/${post.id}`);
    }
  }, [status, post, dispatch, navigate]);

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
      <form onSubmit={handleSubmit}>
        <div>
          <md-outlined-text-field
              ref={nameRef}
              id="name"
              label="Nombre"
              value={name}
              required
          ></md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
              ref={descriptionRef}
              id="description"
              label="Descripción"
              value={description}
              textarea
              required
          ></md-outlined-text-field>
        </div>
        <md-filled-button type="submit">
          <md-icon class="material-icons">create</md-icon>
          Create Post
        </md-filled-button>
      </form>
    </div>
  );
}

export default CreatePost;
