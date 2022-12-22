import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { __createPost } from "../../redux/modules/postSlice";

function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const { title, content } = post;
  // const [image, setImage] = useState({
  //   image_file: "",
  //   preview_URL:
  //     "https://thumb.mt.co.kr/06/2022/05/2022052719301144973_1.jpg/dims/optimize/",
  // });

  const onChangePostHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log({ title, content });
  };

  //이미지 업로드
  // const uploadImage = (e) => {
  //   console.log(e.target.files);
  //   e.preventDefault();
  //   const preview_URL = URL.createObjectURL(e.target.files[0]); //임시 blob주소를 만들어준다.

  //   setImage(() => ({
  //     image_file: e.target.files[0],
  //     preview_URL: preview_URL,
  //   }));
  //   setPost({ ...post, image: image.preview_URL });
  // };

  // useEffect(() => {
  //   return () => {
  //     URL.revokeObjectURL(image.preview_URL); // 삭제해서 데이터 누수를 줄일 수 있다.
  //   };
  // }, [image.preview_URL]);

  const onSubmitPostHandler = () => {
    // const formData = new FormData();
    // // const json = JSON.stringify(image);
    // // const blob = new Blob([json], { type: "application/json" });
    // formData.append("image", image.image_file); //append의 첫번째 인자에는 name, 두번째는 value
    // formData.append(
    //   "post",
    //   post
    //   // new Blob([JSON.stringify(post)], "type:application/json") //type은 axios쓰면 자동으로.
    // );
    dispatch(__createPost(post));
    alert("게시글 등록 완료");
    navigate("/api/boards");
  };

  return (
    <>
      <Layout>
        <ImageContainer>
          {/* <input
            type="file"
            name="image_file"
            accept="image/*"
            onChange={uploadImage}
          />
          <PostImg src={image.preview_URL} alt="" />
          <button>submit</button> */}
        </ImageContainer>
        <InputContainer>
          <TitleInput
            type="text"
            name="title" // 제출된 후 서버에서 폼데이터 참조..? 자바스크립트에서 요소 참조
            value={title || ""}
            placeholder="제목을 입력해주세요"
            onChange={onChangePostHandler}
          ></TitleInput>
          <ContentInput
            type="text"
            name="content"
            value={content || ""}
            placeholder="내용을 입력하세요"
            onChange={onChangePostHandler}
          ></ContentInput>
          <div>
            {/* <PostButton>이미지 추가</PostButton> */}
            <PostButton onClick={onSubmitPostHandler}>업로드</PostButton>
            <Link to="/">
              <PostButton>닫기</PostButton>
            </Link>
          </div>
        </InputContainer>
      </Layout>
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
  overflow: hidden;
`;
const ImageContainer = styled.div`
  width: 50%;
  border: 3px solid yellow;
`;
// const PostImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
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
