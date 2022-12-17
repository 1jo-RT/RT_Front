import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
export default function Login() {
  return (
    <StWrapper>
      <div className="login_inner">
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
              <StKaKaoLogo className="kakao_logo" />
              카카오톡 로그인
            </StKakaoBtn>

            <div className="login_btn_container">
              아직 계정이 없으시다면? <StLink to="/login">회원가입</StLink>
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
  .login_inner {
    max-width: 1200px;
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
  .login_btn_container {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
  }
`;
const StLoginBtn = styled.button`
  height: 40px;
  width: 130px;
  background: #ffc7c7;
  font-weight: 600;
  font-size: 0.9rem;
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
  .login_btn {
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
  background: #f7e600;
  border-radius: 6px;
  align-items: center;
  color: #3a1d1d;
  cursor: pointer;
  gap: 0 10px;
`;
const StKaKaoLogo = styled(FaComment)`
  width: 20px;
  height: 20px;
`;
