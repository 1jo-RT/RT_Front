import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBoardInfo } from "../../redux/modules/boardSlice";

export default function Detail() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  const { id } = useParams();
  console.log(id);
  console.log(boards);
  let detailPage = boards.find((data) => {
    if (data.id == id) {
      return data;
    }
  });
  console.log(detailPage);
  useEffect(() => {
    dispatch(getBoardInfo());
  }, [dispatch]);

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
              <span className="detail_title">{detailPage.title}</span>
              <StLink to="/">뒤로</StLink>
            </StTitle>
            <StContent>
              <div className="content_header">
                <span>작성자 :{detailPage.usename}</span>
                <span>{detailPage.createdAt}</span>
              </div>
              <div className="content_main">{detailPage.content}</div>
              <div>
                <button className="modify_btn">수정</button>
                <button className="delete_btn">삭제</button>
              </div>
            </StContent>
            <StReple>
              <div className="reple_container">
                <span className="reple_user">닉네임</span>
                <span className="reple_content">댓글 내용이 들어갑니다.</span>
                <StButtonContainer>
                  <StButton>수정</StButton>
                  <StButton>삭제</StButton>
                </StButtonContainer>
              </div>
              <div>
                <form action="" className="reple_form">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="reple_textarea"
                  ></textarea>
                  <div className="reple_submit">
                    <button>작성</button>
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
const StButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
