import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __createPost } from "../../redux/modules/postSlice";

function Post() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: "", content: "" });
  const [image, setImage] = useState("");
  const { title, content } = post;

  const onChangePostHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };

  const uploadImage = (e) => {
    console.log(e.target.files);
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmitPostHandler = (e) => {
    e.preventDefault();
    dispatch(__createPost({ title, content }));
    alert("게시글 등록 완료");
  };

  return (
    <>
      <form onSubmit={onSubmitPostHandler}>
        <Layout>
          <ImageContainer>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={uploadImage}
            />
            <button>submit</button>
          </ImageContainer>
          <InputContainer>
            <TitleInput
              type="text"
              name="title" // 제출된 후 서버에서 폼데이터 참조..? 자바스크립트에서 요소 참조
              value={post.title || ""}
              placeholder="제목을 입력해주세요"
              onChange={onChangePostHandler}
            ></TitleInput>
            <ContentInput
              type="text"
              name="content"
              value={post.content || ""}
              placeholder="내용을 입력하세요"
              onChange={onChangePostHandler}
            ></ContentInput>
            <div>
              <PostButton>이미지 추가</PostButton>
              <PostButton>업로드</PostButton>
              <PostButton>닫기</PostButton>
            </div>
          </InputContainer>
        </Layout>
      </form>
    </>
  );
}

export default Post;

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
