import styled from "styled-components";
import React, { useState } from "react";
// import axios from "axios";
import { __addUser } from "../../redux/modules/signupSlice";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

function SignUp() {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userId: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  const { userId, username, password, passwordCheck } = user;
  // const [users, setUsers] = useState();

  //정규식 상태관리
  const [userIdInput, setUserIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordCheckInput, setPasswordCheckInput] = useState("");
  //정규식
  const regexUserId = /^(?=.*[a-z])(?=.*\\d)[a-z\\d]{4,10}$/;
  const regexpassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,15}/;

  //유효성검사
  const onChangeUserHandler = (e) => {
    const { name, value } = e.target;

    if (name === "userId")
      !regexUserId.test(value)
        ? setUserIdInput("4~10자의 영문 소문자와 숫자로 입력해주세요.")
        : setUserIdInput("");

    if (name === "password")
      !regexpassword.test(value)
        ? setPasswordInput(
            "8~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
          )
        : setPasswordInput("");

    if (name === "passwordCheck")
      password !== value
        ? setPasswordCheckInput("비밀번호가 불일치합니다")
        : setPasswordCheckInput("비밀번호가 일치합니다");

    setUser({ ...user, [name]: value });
  };

  // const onSubmitUserHandler = (user) => {
  //   axios.post("http://localhost:3001/users", user);
  // };

  const onSubmitUserHandler = (event) => {
    event.preventDefault();
    if (
      userId.trim() === "" ||
      username.trim() === "" ||
      password.trim() === "" ||
      passwordCheck.trim() === ""
    ) {
      return alert("아이디랑 비밀번호를 입력해주세요!");
    }
    console.log(user);
    console.log(userId, username, password);
    dispatch(__addUser({ userId, username, password })); //키값...! db.json에는 고유한 id값을 넘겨줘야한다!
  };

  return (
    <>
      <Layout>
        <ImageContainer>IMAGE</ImageContainer>
        <InputContainer>
          <LogoBox>
            <BackButton>이전으로</BackButton>
            <p>LOGO</p>
          </LogoBox>
          <form onSubmit={onSubmitUserHandler}>
            <InputBox>
              <p>아이디</p>
              <Inputform
                type="text"
                name="userId"
                value={userId}
                placeholder="아이디를 입력하세요"
                onChange={onChangeUserHandler}
              ></Inputform>
              <p>{userIdInput}</p>
            </InputBox>
            <InputBox>
              <p>닉네임</p>
              <Inputform
                type="text"
                name="username"
                value={username}
                placeholder="닉네임을 입력하세요"
                onChange={onChangeUserHandler}
              ></Inputform>
            </InputBox>
            <p>비밀번호</p>
            <Inputform
              type="password"
              name="password"
              value={password}
              placeholder="비밀번호를 입력하세요"
              onChange={onChangeUserHandler}
            ></Inputform>
            <p>{passwordInput}</p>
            <InputBox>
              <p>비밀번호 확인</p>
              <Inputform
                type="password"
                name="passwordCheck"
                value={passwordCheck}
                placeholder="비밀번호를 확인해주세요"
                onChange={onChangeUserHandler}
              ></Inputform>
              <p>{passwordCheckInput}</p>
            </InputBox>

            <SignButton disabled={password !== passwordCheck}>
              가입하기
            </SignButton>
          </form>
        </InputContainer>
      </Layout>
    </>
  );
}

export default SignUp;

const Layout = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 80vh;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  border: 3px solid blue;
  display: flex;
  background: rgba(237, 237, 237);
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 3px solid yellow;
`;
const InputContainer = styled.div`
  width: 50%;
  // height: 100%;
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  margin: 5vw;
`;
const LogoBox = styled.div`
  width: 50%;
  height: 100px;
  border: 3px solid gray;
  color: gray;
  font-size: 30px;

  display: flex;
  justify-content: center;
`;
const BackButton = styled.button`
  display: flex;
  min-width: 5%;
  height: 30px;
  justify-content: space-evenly;
  font-size: 15px;
`;

const InputBox = styled.div`
  width: 100%;
  height: 3vw;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Inputform = styled.input`
  width: 250px;
  height: 50px;

  margin: auto;
`;
const SignButton = styled.button`
  width: 200px;
  height: 30px;
  margin: auto;
`;
