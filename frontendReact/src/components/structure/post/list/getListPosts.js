import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <ul className="mdc-list">
      {posts.map(post => (
        <li key={post.id} className="mdc-list-item" tabIndex="0">
          <Link to={`/post/${post.id}`}>
            <span className="mdc-list-item__text">{post.id}</span><br />
            <span className="mdc-list-item__text">{post.name}</span><br />
            <span className="mdc-list-item__text">{post.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
