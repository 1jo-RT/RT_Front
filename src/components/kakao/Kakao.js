import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../redux/modules/userSlice";


const Kakao = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log('code:',code);
  
 useEffect(() => {
     dispatch(kakaoLogin(code));
  }, []);

  return <div>ddd</div>;
};

export default Kakao;