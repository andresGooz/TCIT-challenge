import { configureStore } from '@reduxjs/toolkit'
import postReducer from './components/behavior/post/createPostSlicer';
import postGetDetailsReducer from './components/behavior/post/getDetailsPostSlicer';
import postDeleteReducer from './components/behavior/post/deletePostSlicer';
import postListReducer from './components/behavior/post/listPostSlicer';


const store = configureStore({
  reducer: {
    post: postReducer,
    postDelete: postDeleteReducer,
    postList: postListReducer,
    postGetDetails: postGetDetailsReducer
  },
});

export default store;
