import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*  */
export const kakaoLogin = (code) => {
  return async function (dispatch, getState, history) {
    console.log(code)
    await axios({
      method: "GET",
      url: `http://13.209.84.31:8080/api/user/kakao/callback?code=${code}`
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace("/"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        /* history.replace("/login"); */ // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};
export const postLoginInfo = createAsyncThunk(
  "/user/login",
  async (payload, ThunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(
        "http://13.209.84.31:8080/api/user/login",payload
      );
      console.log(payload);
      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
export const postUserInfo = createAsyncThunk(
  "/user",
  async (payload, ThunkAPI) => {
    try {
      /* console.log(payload) */
      const data = await axios.post("http://13.209.84.31:8080/user", payload);
      console.log(data);
      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "/user",
  async (payload, ThunkAPI) => {
   
    try {
      const data = await axios.get("http://localhost:3001/user");
      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.user = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
  },
});

export default postSlice.reducer;
