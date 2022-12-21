// src/redux/modules/todosSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [
    {
      userId: "",
      username: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const __addUser = createAsyncThunk(
  "user/addUser",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(
        "http://13.209.84.31:8080/api/user",
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

export const signupSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: {
    [__addUser.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addUser.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.user = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__addUser.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
export const {} = signupSlice.actions;
export default signupSlice.reducer;
