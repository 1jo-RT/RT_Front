import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [
    {
      image: "",
      title: "",
      content: "",
    },
  ],
  isLoading: false,
  error: null,
};
//게시글 post
export const __createPost = createAsyncThunk(
  "createPost",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(
        "http://localhost:3001/api/boards/newboard",
        payload
      ); //data는 프로미스를 반환
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//수정페이지 get

export const __updatePost = createAsyncThunk(
  "updatePost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.209.84.31:8080/api/boards/newboard/${boardId}`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = postSlice.actions;
export default postSlice.reducer;
