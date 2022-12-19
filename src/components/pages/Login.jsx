import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
import { getLoginInfo } from "../../redux/modules/userSlice";

export default function Login() {
  const getId = useRef();
  const getPw = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    dispatch(
      getLoginInfo({ id: getId.current.value, password: getPw.current.value })
    );
  };
  return (
    <StWrapper>
      <div className="signup_inner">
        <div className="img_container">
          <img
            className="view_img"
            src="https://blog.kakaocdn.net/dn/dkoo6T/btrJfqhC9ZR/dTKjPEo4wo5s8kmJAxIht0/img.jpg"
            alt=""
          />
        </div>
        <div className="login_container">
          <div className="login_inner">
            <StLoginTitle>Login</StLoginTitle>
            <StForm action="">
              <div className="input_field_container">
                <span className="input_field_tit">아이디</span>
                <StInputField type="text" ref={getId} />
              </div>
              <div className="input_field_container">
                <span className="input_field_tit">비밀번호</span>
                <StInputField type="text" ref={getPw} />
              </div>
              <div></div>
              <div className="button_box">
                <StLoginBtn type="button" onClick={onSubmitHandler}>
                  로그인
                </StLoginBtn>
              </div>
            </StForm>
            <div className="util_container">
              <StLine>
                <span className="line_or">또는</span>
              </StLine>

              <StKakaoBtn href={KAKAO_AUTH_URL}>
                <StKaKaoLogo className="kakao_logo" />
                카카오톡 로그인
              </StKakaoBtn>

              <div className="signup_btn_container">
                아직 계정이 없으시다면? <StLink to="/signup">회원가입</StLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background: rgba(237, 237, 237);
  position: relative;
  height: 100vh;
  .signup_inner {
    max-width: 1200px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;

    width: 90%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 1px 7px 3px rgb(148 148 148 / 30%);
  }
  .login_container {
    width: 50%;
  }
  .login_inner {
    position: relative;
    padding: 5vw;
    background: #fff;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 45px 0;
  }
  .img_container {
    width: 50%;
  }
  .img_wrapper {
    width: 100%;
  }
  .view_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .input_field_container {
    display: flex;
    align-items: center;
  }
  .input_field_tit {
    min-width: 80px;
    font-size: 0.9rem;
  }
  .button_box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .signup_btn_container {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    gap: 0 5px;
  }
  .util_container {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
`;
const StLoginBtn = styled.button`
  height: 40px;
  width: 100%;
  max-width: 150px;
  background: #ffc7c7;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:active {
    background: #ecb6b6;
  }
`;
const StLoginTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
  font-family: "IBM Plex Serif", serif;
`;
const StInputField = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #dddcdc;
  text-indent: 10px;
  outline: none;
  border-radius: 3px;
`;
const StForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
  margin-top: 20px;
  padding: 0 20px;
`;

const StLine = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  .line_or {
    width: fit-content;
    margin: 0 auto;
    position: relative;
    color: #dddcdc;
    font-size: 13px;
  }
  .line_or::before {
    position: absolute;
    content: "";
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background: #dddcdc;

    width: 100vw;
  }
  .line_or::after {
    position: absolute;
    content: "";
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    height: 1px;
    background: #dddcdc;
    width: 100vw;
  }
  .signup_btn {
    color: #b7b7b7;
  }
`;
const StLink = styled(Link)`
  color: #a0a0fa;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StKakaoBtn = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 45px;
  background: #fee500;
  border-radius: 6px;
  gap: 0 10px;
  align-items: center;
  color: #3a1d1d;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:active {
    background: #dbcc05;
  }
`;
const StKaKaoLogo = styled(FaComment)`
  width: 20px;
  height: 20px;
`;
