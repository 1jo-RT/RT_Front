import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { __createPost } from "../../redux/modules/postSlice";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { __patchPost, __updatePost } from "../../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const param = useParams;
  const dispatch = useDispatch;
  const [title, setTitle] = useState;
  const [content, setContent] = useState("");
  const updatePost = useSelector((state) => state.data); //받아올 값 확인해볼 것
  const [update, setUpdate] = useState(updatePost); //수정할 데이터 상태관리

  useEffect(() => {
    dispatch(__updatePost(param));
  }, [dispatch, param]); //이것도 되잖아?\

  console.log(dispatch);

  const onChangeEditHandler = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
    console.log(update);
  };

  const onClickEditButtonHandler = (updateState, params) => {
    dispatch(__patchPost({ updateState, params }));
    alert("수정이 완료 되었습니다.");
    navigate(-1);
  };

  // const uploadImage = (e) => {
  //   console.log(e.target.files);
  //   e.preventDefault();
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };

  return (
    <>
      <form>
        <Layout>
          <ImageContainer>
            {/* type="file"  name="file"  accept="image/*"  onChange= */}
          </ImageContainer>
          <InputContainer>
            <TitleInput
              type="text"
              name="title" // 제출된 후 서버에서 폼데이터 참조..? 자바스크립트에서 요소 참조
              //value={title}
              placeholder="제목을 입력해주세요"
              onChange={onChangeEditHandler}
            ></TitleInput>
            <ContentInput
              type="text"
              name="content"
              //value={content}
              placeholder="내용을 입력하세요"
              onChange={onChangeEditHandler}
            ></ContentInput>
            <div>
              <PostButton>수정하기</PostButton>
              <PostButton>취소</PostButton>
            </div>
          </InputContainer>
        </Layout>
      </form>
    </>
  );
}

export default Update;

const Layout = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 85vh;
  position: fixed;
  background: rgba(237, 237, 237);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  border: 3px solid blue;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 50%;
  border: 3px solid yellow;
`;
const InputContainer = styled.div`
  width: 50%;
  border: 3px solid green;
  margin: 2vw;
  display: flex;
  flex-direction: column;
  background-color: gray;
`;
const TitleInput = styled.input`
  width: 95%;
  height: 10%;
  margin: 1vw;
`;
const ContentInput = styled.input`
  width: 95%;
  height: 70%;
  margin: 1vw;
`;
const PostButton = styled.button`
  width: 120px;
  height: 20px;
  margin: 1vw;
`;
