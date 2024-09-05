import React, { useState } from 'react';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { createPost, resetPost } from '../../../behavior/post/createPostSlicer';
import {  useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CreatePostForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
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
    <form onSubmit={handleSubmit}>
      <div>
        <md-outlined-text-field
          id="name"
          label="Nombre"
          value={name}
          onInput={(e) => setName(e.target.value)}
          required
        ></md-outlined-text-field>
      </div>
      <div>
        <md-outlined-text-field
          id="description"
          label="Descripción"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          textarea
          required
        ></md-outlined-text-field>
      </div>
      <md-filled-button type="submit">
        <md-icon class="material-icons">create</md-icon>
        Create Post
      </md-filled-button>
    </form>
  );
}

export default CreatePostForm;
