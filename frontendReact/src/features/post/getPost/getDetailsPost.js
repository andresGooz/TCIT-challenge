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
import DeletePost from '../../../features/post/deletePost/deletePost';


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
    <>
    <div>
      <h2>Post detail</h2>
      <ul className="mdc-list">
        <li key={posts.id} className="mdc-list-item" tabIndex="0">
          <Link to={`/post/${posts.id}`}>
            <span className="mdc-list-item__text">{posts.id}</span><br/>
            <span className="mdc-list-item__text">{posts.name}</span><br/>
            <span className="mdc-list-item__text">{posts.description}</span>
          </Link>
          <div>
            < DeletePost postId={posts.id} />
          </div>
        </li>
      </ul>
      
    </div>
    </>
  );
}

export default GetDetailsPost;


/*
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MDCDataTable } from '@material/data-table';
import '@material/data-table/dist/mdc.data-table.css';
import '@material/theme/dist/mdc.theme.css';
import GetPostController from '../../behavior/post/getPost';  // Importa el controlador
import DeletePost from '../../../features/post/deletePost/deletePost';

function PostDetail() {
  const { id, name } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataTableRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPostController = new GetPostController();
    const fetchPost = async () => {
      try {
        const data = await getPostController.getPost(id, name);
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        navigate(`/NotFound`);
      }
    };
    fetchPost();
  }, [id, name, navigate]);

  useEffect(() => {
    if (dataTableRef.current) {
      new MDCDataTable(dataTableRef.current);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading post</div>;
  }

  if (!post || !post.id) {
    navigate(`/NotFound`);
    return null;
  }

  return (
    <>
    <div className="mdc-data-table" ref={dataTableRef}>
      <div className="mdc-data-table__table-container">
        <table className="mdc-data-table__table" aria-label="">
          <thead>
            <tr className="mdc-data-table__header-row">
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Field</th>
              <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Value</th>
            </tr>
          </thead>
          <tbody className="mdc-data-table__content">
            <tr className="mdc-data-table__row">
              <th className="mdc-data-table__header-cell" scope="row">Id</th>
              <td className="mdc-data-table__cell">{post.id}</td>
            </tr>
            <tr className="mdc-data-table__row">
              <th className="mdc-data-table__header-cell" scope="row">Title</th>
              <td className="mdc-data-table__cell">{post.title}</td>
            </tr>
            <tr className="mdc-data-table__row">
              <th className="mdc-data-table__header-cell" scope="row">Content</th>
              <td className="mdc-data-table__cell">{post.content}</td>
            </tr>
            <tr className="mdc-data-table__row">
              <th className="mdc-data-table__header-cell" scope="row">Author</th>
              <td className="mdc-data-table__cell">{post.author}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <DeletePost postId={post.id} />
    </div>
    </>
  );
}

export default PostDetail;
*/