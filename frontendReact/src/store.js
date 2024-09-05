import { configureStore } from '@reduxjs/toolkit'
import postReducer from './features/post/createPost/createPostSlicer';
import postGetDetailsReducer from './features/post/getPost/getDetailsPostSlicer';
import postDeleteReducer from './features/post/deletePost/deletePostSlicer';
import postListReducer from './features/post/listPost/listPostSlicer'


const store = configureStore({
  reducer: {
    post: postReducer,
    postDelete: postDeleteReducer,
    postList: postListReducer,
    postGetDetails: postGetDetailsReducer
  },
});

export default store;

/*
// src/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Agrega thunk como middleware
);

export default store;

*/