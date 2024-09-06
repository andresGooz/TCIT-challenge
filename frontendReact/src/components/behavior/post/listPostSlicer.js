import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const listPost = createAsyncThunk(
  'post/listPost',
  async (postData, { rejectWithValue }) => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_API_DOMAIN_URL+'/posts', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
        throw new Error('Failed to list post');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
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
      .addCase(listPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(listPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetPost } = postSlice.actions;

export default postSlice.reducer;
