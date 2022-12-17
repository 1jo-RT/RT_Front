import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <StWrapper>
      <div className="signup_inner">
        <div className="img_container">
          <img
            className="view_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-DjVorpuoI7M1XaAM-Lb9knlJvipkAuKbw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="login_container">
          <div className="login_inner">
            <StLoginTitle>Login</StLoginTitle>
            <StForm action="">
              <div className="input_field_container">
                <span className="input_field_tit">아이디</span>
                <StInputField type="text" />
              </div>
              <div className="input_field_container">
                <span className="input_field_tit">비밀번호</span>
                <StInputField type="text" />
              </div>
              <div></div>
              <div className="button_box">
                <StLoginBtn type="button">로그인</StLoginBtn>
              </div>
            </StForm>
            <StLine>
              <span className="line_or">또는</span>
            </StLine>

            <StKakaoBtn>
              <img
                className="kakao_logo"
                src="../../assets/img/kakao_logo.png"
                alt=""
              />
              카카오톡
            </StKakaoBtn>

            <div className="signup_btn_container">
              아직 계정이 없으시다면? <StLink to="/signup">회원가입</StLink>
            </div>
          </div>
        </div>
      </div>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: rgba(237, 237, 237);
  position: relative;
  height: 100vh;
  .signup_inner {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    max-height: 70vh;
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
  }
  .button_box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .signup_btn_container {
    font-size: 0.8rem;
    position: absolute;
    bottom: 5vw;
    right: 5vw;
  }
`;
const StLoginBtn = styled.button`
  height: 40px;
  width: 130px;
  background: #ffc7c7;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 20%);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
const StLoginTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
`;
const StInputField = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #dddcdc;
`;
const StForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
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

const StKakaoBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
  background: rgb(240 223 69);
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
  .kakao_logo {
    width: 20px;
    height: 20px;
  }
`;
