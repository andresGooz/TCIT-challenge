import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MDCDataTable } from '@material/data-table';
import '@material/data-table/dist/mdc.data-table.css';
import '@material/theme/dist/mdc.theme.css';
import env from "react-dotenv";


function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataTableRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(env.BACKEND_API_DOMAIN_URL+`/api/posts/${id}/`)
      .then(response => {
        if (!response.ok) {
          navigate(`/NotFound`);
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id, navigate]);

  useEffect(() => {
    if (dataTableRef.current) {
      new MDCDataTable(dataTableRef.current);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    navigate(`/NotFound`);
  }

  if (!post || !post.id) {
    navigate(`/NotFound`);
  }

  return (
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
  );
}

export default PostDetail;

