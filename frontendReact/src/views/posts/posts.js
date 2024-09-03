import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {MDCList} from '@material/list';
import '@material/list/dist/mdc.list.css';
import env from "react-dotenv";


function Posts() {
  const [posts, setPosts] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    fetch(env.BACKEND_API_DOMAIN_URL+'/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  useEffect(() => {
    if (listRef.current) {
      new MDCList(listRef.current);
    }
  }, [posts]);

  return (
    <div>
      <h2>Posts</h2>
      <ul class="mdc-list" ref={listRef}>
        {posts.map(post => (
                <li key={post.id} class="mdc-list-item" tabindex="0">
                  <Link to={`/post/${post.id}`}>
                  <span class="mdc-list-item__text">{post.title}</span>
                  </Link>
                </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;