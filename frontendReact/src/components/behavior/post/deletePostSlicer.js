import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const deletePost = createAsyncThunk(
  'deletePost/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_DOMAIN_URL}/posts/${postId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      return { postId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deletePostSlice = createSlice({
  name: 'postDelete',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {
    resetDeletePost: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetDeletePost } = deletePostSlice.actions;

export default deletePostSlice.reducer;
