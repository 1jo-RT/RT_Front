import React, { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoardInfo,
  PostDetailBoardInfo,
} from "../../redux/modules/boardSlice";
import axios from "axios";
import { getCookie } from "../../redux/modules/userSlice";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export default function Detail() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  const { id } = useParams();
  const uploadReple = useRef();
  const loginUser = JSON.parse(window.localStorage.getItem("Token"));

  let token = localStorage.getItem("Authorization").split(`\"`, -1)[1];
  console.log(loginUser);
  let detailPage = boards.find((data) => {
    console.log(data.username, id);
    if (data.id == id) {
      return data;
    }
  });

  console.log(detailPage);
  useEffect(() => {
    dispatch(getBoardInfo());
  }, [dispatch]);

  const onSumbitHandler = async () => {
    console.log(uploadReple.current.value);
    axios
      .post(
        `http://13.209.84.31:8080/api/boards/${id}/newcomment`,
        { comment: uploadReple.current.value },
        { withCredentials: true }
      )
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      });

    /* http://13.209.84.31:8080/api/boards/${id}/newcomment */
    /* http://localhost:3000/comment */

    dispatch(
      PostDetailBoardInfo({ pageId: id, comment: uploadReple.current.value })
    );
  };
  return (
    <StWrapper>
      <div className="detail_inner">
        <div className="img_container">
          <img
            className="view_img"
            src="https://blog.kakaocdn.net/dn/dkoo6T/btrJfqhC9ZR/dTKjPEo4wo5s8kmJAxIht0/img.jpg"
            alt=""
          />
        </div>

        <div className="content_container">
          <div className="content_inner">
            <StTitle>
              <span className="detail_title">
                {detailPage && detailPage.title}
              </span>
              <StLink to="/">뒤로</StLink>
            </StTitle>
            <StContent>
              <div className="content_header">
                <span>작성자 :{detailPage && detailPage.userId}</span>
                <span className="post_time">
                  {detailPage && detailPage.createdAt}
                </span>
              </div>
              <div className="content_main">
                내용 : {detailPage && detailPage.content}
              </div>
              {loginUser.username == Detail.username ? (
                <div className="board_reple_container">
                  <StBoardBtn className="modify_btn">수정</StBoardBtn>
                  <StBoardBtn className="delete_btn">삭제</StBoardBtn>
                </div>
              ) : (
                ""
              )}
            </StContent>
            <StReple>
              <div className="reple_container">
                <span className="reple_user">닉네임</span>
                <span className="reple_content">댓글 내용이 들어갑니다.</span>
                <StButtonContainer>
                  <StRePleButton>수정</StRePleButton>
                  <StRePleButton>삭제</StRePleButton>
                </StButtonContainer>
              </div>
              <div>
                <form action="" className="reple_form">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    ref={uploadReple}
                    className="reple_textarea"
                  ></textarea>
                  <div className="reple_submit">
                    <button type="button" onClick={onSumbitHandler}>
                      작성
                    </button>
                  </div>
                </form>
              </div>
            </StReple>
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh 0;
  .po-stiky {
    position: sticky;
  }
  .detail_inner {
    max-width: 1200px;

    display: flex;
    min-height: 80vh;
    width: 90%;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 1px 7px 3px rgb(148 148 148 / 30%);
  }
  .content_container {
    width: 50%;
  }
  .content_main {
    min-height: 300px;
  }
  .content_inner {
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
    position: relative;
  }
  .img_wrapper {
    width: 100%;
  }
  .view_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .reple_form {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  .reple_submit {
    text-align: right;
  }
  .reple_textarea {
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
  }
`;

const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  .content_header {
    display: flex;
    justify-content: space-between;
  }
  .board_reple_container {
    display: flex;
    justify-content: flex-end;
    gap: 0 10px;
  }
  .post_time {
    font-size: 0.7rem;
    color: #727070;
  }
`;
const StBoardBtn = styled.button`
  padding: 8px 15px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #dddddd;
  &:active {
    box-shadow: inset 0 0 3px 1px rgba(193, 193, 193, 0.3);
  }
`;
const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StReple = styled.div`
  display: flex;
  flex-direction: column;
  .reple_container {
    display: flex;
    min-height: 60px;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .reple_user {
    width: 30%;
    word-break: break-word;
  }
  .reple_content {
    width: 60%;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  min-width: fit-content;
`;
const StRePleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
