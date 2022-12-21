import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const getBoardInfo = createAsyncThunk(
  "/boards",
  async (payload,ThunkAPI) =>{
    try{
      const data = await axios.get("http://13.209.84.31:8080/api/boards");
      return ThunkAPI.fulfillWithValue(data.data);
    }catch(error){
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
)

export const getDetailBoardInfo = createAsyncThunk(
  "/boards/{boardId}",
  async (payload,ThunkAPI) =>{
    try{
      const data = await axios.get(`http://13.209.84.31:8080/boards/`);
      return ThunkAPI.fulfillWithValue(data.data);
    }catch(error){
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
)
  const initialState = {
    user:[],
    boards:[],
    isLoading: false,
    error: null,
  };
  
  export const postSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        
    },
    extraReducers: {
          [getBoardInfo.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [getBoardInfo.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.boards = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
          },
          [getBoardInfo.rejected]: (state, action) => {
            state.isLoading = false; // getKakaoInfo에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
         
    },
  });
  
  // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고


/*   export const { getKakaoInfo } = postSlice.actions; */
  export default postSlice.reducer;