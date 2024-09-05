import React from 'react';
import CreatePostForm from '../../structure/post/form/createPost';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';


function CreatePost() {
  return (
    <div>
      <h2>Create a New Post</h2>
      <CreatePostForm />
    </div>
  );
}

export default CreatePost;
