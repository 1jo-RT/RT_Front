import React from "react";
import styled from "styled-components";

function Post() {
  return <div>oo</div>;
}

export default Post();

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
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  margin: 5vw;
`;
