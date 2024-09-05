import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailsPost, resetPost } from '../../behavior/post/getDetailsPostSlicer';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';
import { useParams } from 'react-router-dom';
import DeletePost from '../post/form/deletePost';
import ItemDetail from '../post/list/itemDetail';


function GetDetailsPost() {
  const { postId, postName } = useParams();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resultData = await dispatch(getDetailsPost({postId, postName}));      
      if (getDetailsPost.fulfilled.match(resultData)) {
        setPosts(resultData.payload);
      } else {
        console.error("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, [dispatch]);

  return (
    <>
    <div>
      <h2>Post detail</h2>
      < ItemDetail post={posts} />
      < DeletePost postId={posts.id} />
    </div>
    </>
  );
}

export default GetDetailsPost;

