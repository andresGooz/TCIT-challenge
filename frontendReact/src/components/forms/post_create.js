import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import env from "react-dotenv";


function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.addEventListener('input', (e) => setTitle(e.target.value));
    }
    if (contentRef.current) {
      contentRef.current.addEventListener('input', (e) => setContent(e.target.value));
    }
    if (authorRef.current) {
      authorRef.current.addEventListener('input', (e) => setAuthor(e.target.value));
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title: title,
      content: content,
      author: author
    };
    const username = env.BACKEND_API_USERNAME;
    const password = env.BACKEND_API_PASSWORD;
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    try {
      const response = await fetch(env.BACKEND_API_DOMAIN_URL+'/api/posts/', {
        
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
      setTitle('');
      setContent('');
      setAuthor('');
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
              ref={titleRef}
              id="title"
              label="Título"
              value={title}
              required
          ></md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
              ref={contentRef}
              id="content"
              label="Contenido"
              value={content}
              textarea
              required
          ></md-outlined-text-field>
        </div>
        <div>
          <md-outlined-text-field
              ref={authorRef}
              id="author"
              label="Autor"
              value={author}
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
