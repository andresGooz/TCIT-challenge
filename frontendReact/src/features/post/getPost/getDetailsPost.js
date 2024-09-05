import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDetailsPost, resetPost } from './getDetailsPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function GetDetailsPost() {
  const { postId, postName } = useParams();
  console.log("//////////////////////");
  console.log(postId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, status, error } = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]); // Estado local para almacenar posts

  useEffect(() => {
    const fetchPosts = async () => {
      const resultData = await dispatch(getDetailsPost({postId, postName}));
      console.log(resultData);
      
      if (getDetailsPost.fulfilled.match(resultData)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultData = await dispatch(getDetailsPost());
    console.log(resultData);
  
    if (getDetailsPost.fulfilled.match(resultData)) {
      setPosts(resultData.payload); // Actualiza el estado local con los posts
      dispatch(resetPost());
      navigate(`/post/${resultData.payload.id}`);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul className="mdc-list">
      <li key={posts.id} className="mdc-list-item" tabIndex="0">
    <Link to={`/post/${posts.id}`}>
      <span className="mdc-list-item__text">{posts.id}</span><br/>
      <span className="mdc-list-item__text">{posts.name}</span><br/>
      <span className="mdc-list-item__text">{posts.description}</span>
    </Link>
  </li>

      </ul>
    </div>
  );
}

export default GetDetailsPost;
