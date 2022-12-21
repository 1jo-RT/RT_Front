import styled from "styled-components";

function SignUp() {
  return (
    <>
      <Layout>
        <ImageContainer>IMAGE</ImageContainer>
        <InputContainer>
          <LogoBox>
            <BackButton>이전으로</BackButton>
            <p>LOGO</p>
          </LogoBox>
          <InputBox>
            <p>아이디</p>
            <Inputform placeholder="아이디를 입력하세요"></Inputform>
          </InputBox>
          <InputBox>
            <p>닉네임</p>
            <Inputform placeholder="닉네임을 입력하세요"></Inputform>
          </InputBox>
          <p>비밀번호</p>
          <Inputform placeholder="비밀번호를 입력하세요"></Inputform>
          <InputBox>
            <p>비밀번호 확인</p>
            <Inputform placeholder="비밀번호를 입력하세요"></Inputform>
          </InputBox>
          <SignButton>가입하기</SignButton>
        </InputContainer>
      </Layout>
      ;
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
