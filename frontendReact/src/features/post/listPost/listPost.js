import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listPost, resetPost } from './listPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom';

function ListPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, status, error } = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]); // Estado local para almacenar posts

  useEffect(() => {
    const fetchPosts = async () => {
      const resultData = await dispatch(listPost());
      console.log(resultData);
      
      if (listPost.fulfilled.match(resultData)) {
        setPosts(resultData.payload); // Actualiza el estado local con los posts
      } else {
        console.error("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded' && post) {
      dispatch(resetPost());
      navigate(`/post/${post.id}`);
    }
  }, [status, post, dispatch, navigate]);

  return (
    <div>
      <h2>Posts</h2>
      <ul className="mdc-list">
        {posts.map(post => (
          <li key={post.id} className="mdc-list-item" tabIndex="0">
            <Link to={`/post/${post.id}`}>
              <span className="mdc-list-item__text">{post.id}</span><br/>
              <span className="mdc-list-item__text">{post.name}</span><br/>
              <span className="mdc-list-item__text">{post.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPost;
