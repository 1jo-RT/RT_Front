import React from "react";
import Sidebar from "../pages/Sidebar";
import Main from "../pages/Main";
import styled from "styled-components";

export default function Home() {
  return (
    <StWrapper>
      <Sidebar />
      <Main />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
`;
