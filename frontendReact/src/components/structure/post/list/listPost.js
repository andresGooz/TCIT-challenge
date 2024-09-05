import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listPost, resetPost } from '../../../behavior/post/listPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { Link } from 'react-router-dom';
import LocalFilter from '../filter/localFilter';

function ListPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, status, error } = useSelector((state) => state.post);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resultData = await dispatch(listPost());      
      if (listPost.fulfilled.match(resultData)) {
        setPosts(resultData.payload);
        setFilteredPosts(resultData.payload);
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
      <div>
        <LocalFilter posts={posts} onFilteredPostsChange={setFilteredPosts} />
      </div>
      <ul className="mdc-list">
        {filteredPosts.map(post => (
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
