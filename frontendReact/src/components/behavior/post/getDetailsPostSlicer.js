import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

function getPostUrl(id, postName) {
  let url = null;
  if (id) {
    url = `${process.env.REACT_APP_BACKEND_API_DOMAIN_URL}/posts/id/${id}/`;
  } else if (postName) {
    url = `${process.env.REACT_APP_BACKEND_API_DOMAIN_URL}/posts/name/${postName}/`;
  } else {
    throw new Error("Neither id nor name is provided.");
  }
  return url;
}

export const getDetailsPost = createAsyncThunk(
  'get/getDetailsPost',
  async ({ postId, postName}, { rejectWithValue }) => {
    try {
      const url = getPostUrl(postId, postName);
      const response = await fetch(url, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
        throw new Error('Failed to getDetailsPost post');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postGetDetailsSlice = createSlice({
  name: 'postGetDetails',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetPost: (state) => {
      state.post = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailsPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDetailsPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(getDetailsPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetPost } = postGetDetailsSlice.actions;

export default postGetDetailsSlice.reducer;
