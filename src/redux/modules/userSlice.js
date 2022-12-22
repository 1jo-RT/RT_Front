import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { Cookies } from 'react-cookie';
import jwtDecode from "jwt-decode";
import { authInstance } from "../../api/axios";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { path: '/' });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const kakaoLogin = (code) => {
 
  return async function (dispatch, getState, history) {
    console.log(code)
    authInstance.get(
      `http://13.209.84.31:8080/api/user/kakao/callback?code=${code}`)
     

      .then((response) => {
     
      
      
        let jwtToken = response.headers.authorization
        setCookie('accessJwtToken',jwtToken);
        
        const decoded = jwtDecode(jwtToken);
        localStorage.setItem("Token", JSON.stringify(decoded));
        localStorage.setItem("Authorization", JSON.stringify(jwtToken));

  
        window.location.href= "/"
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
   
      });
  };
};
export const postLoginInfo = createAsyncThunk(
  "/user/login",
  async (payload, ThunkAPI) => {
    try {
      
      console.log(payload);
      authInstance.post(
        'http://13.209.84.31:8080/api/user/login', 
        { userId: payload.userId, password: payload.password }, 
        { withCredentials: true }
      ).then(response => { 
        
        let jwtToken = response.headers.authorization
        setCookie('accessJwtToken',jwtToken);
        
        const decoded = jwtDecode(jwtToken);
        localStorage.setItem("Token", JSON.stringify(decoded));
        localStorage.setItem("Authorization", JSON.stringify(jwtToken));

        alert('로그인이 완료 되었습니다.');

        window.location.href= "/"
    })
    
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
    
      const data = await authInstance.post("http://13.209.84.31:8080/api/user", payload);
      
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
      const data = await authInstance.get("http://13.209.84.31:8080/api/user/thumb");
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
