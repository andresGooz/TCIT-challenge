import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import env from "react-dotenv";


function CreatePost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nameRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.addEventListener('input', (e) => setName(e.target.value));
    }
    if (descriptionRef.current) {
      descriptionRef.current.addEventListener('input', (e) => setDescription(e.target.value));
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      name: name,
      description: description
    };
    const username = env.BACKEND_API_USERNAME;
    const password = env.BACKEND_API_PASSWORD;
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    try {
      const response = await fetch(env.BACKEND_API_DOMAIN_URL+'/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': basicAuth
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      setName('');
      setDescription('');
      const responseData = await response.json();
      navigate(`/post/${responseData.id}`);
    } catch (error) {
      console.error('Error creating post:', error);
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
              label="Título"
              value={name}
              required
          ></md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
              ref={descriptionRef}
              id="description"
              label="Contenido"
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
