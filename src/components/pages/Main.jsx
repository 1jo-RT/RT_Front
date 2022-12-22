import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBoardInfo } from "../../redux/modules/boardSlice";
import { Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { useNavigate } from "react-router-dom/dist";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector((state) => state.board.boards);
  console.log(boards);
  const loginUser = JSON.parse(window.localStorage.getItem("Token"));

  // 여기서 key는 userId,username객체 내부의 key data가 아닌 localstorage의 key를 말하는 것

  useEffect(() => {
    dispatch(getBoardInfo());
  }, [dispatch]);
  const handleClickLog = (user) => {
    if (!user) {
      console.log("false");
      return navigate("/api/user/login");
    }
    console.log("true");
  };
  return (
    <StMain>
      <main className="main_container">
        <StHeader>
          <h2 className="header_title">자유게시판</h2>
          <div className="log_btn_container">
            <div className="welcome_user">
              <StUserName className="user_name">
                {loginUser ? loginUser.userId : "게스트"}
              </StUserName>
              님, 반갑습니다.
            </div>
            {loginUser ? (
              <StLogButton
                type="button"
                onClick={() => handleClickLog(loginUser)}
              >
                로그아웃
              </StLogButton>
            ) : (
              <StLogButton
                type="button"
                onClick={() => handleClickLog(loginUser)}
              >
                로그인
              </StLogButton>
            )}
          </div>
        </StHeader>
        <div className="contents_container">
          <StContent className="contents_inner">
            {boards &&
              boards.map((data) => {
                return (
                  <StLink to={`/boards/${data.id}`} key={data.id}>
                    <Card data={data} key={data.id} />
                  </StLink>
                );
              })}
          </StContent>
        </div>
      </main>
    </StMain>
  );
}
const StMain = styled.div`
  width: 100%;
  .header_title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .main_container {
    min-height: 100vh;
    overflow-y: auto;
  }
  .contents_container {
    padding: 20px;
    box-sizing: border-box;
    height: calc(100vh - 71px);
  }
  .user_contents_container {
  }
`;
const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  min-height: 70px;
  border-bottom: 1px solid #e4e4e4;
  .log_btn_container {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
  .welcome_user {
    font-size: 0.8rem;
  }
`;
const StContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;
const StUserName = styled.span`
  font-weight: 700;
`;

const StLogButton = styled.button`
  height: 25px;
  width: 80px;
  font-weight: 700;
  background: #ededed;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 20%);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
