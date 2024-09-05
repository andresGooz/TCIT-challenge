import React from 'react';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import 'material-icons/iconfont/material-icons.css';

function CreatePostForm({ handleSubmit, name, setName, description, setDescription }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <md-outlined-text-field
          id="name"
          label="Nombre"
          value={name}
          onInput={(e) => setName(e.target.value)}
          required
        ></md-outlined-text-field>
      </div>
      <div>
        <md-outlined-text-field
          id="description"
          label="Descripción"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          textarea
          required
        ></md-outlined-text-field>
      </div>
      <md-filled-button type="submit">
        <md-icon class="material-icons">create</md-icon>
        Create Post
      </md-filled-button>
    </form>
  );
}

export default CreatePostForm;
