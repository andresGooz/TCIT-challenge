import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listPost, resetPost } from '../../behavior/post/listPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import LocalFilter from '../post/filter/localFilter';
import PostList from '../post/list/getListPosts';


function ListPost() {
  const dispatch = useDispatch();
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

  return (
    <div>
      <h2>Posts</h2>
      <LocalFilter posts={posts} onFilteredPostsChange={setFilteredPosts} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default ListPost;
