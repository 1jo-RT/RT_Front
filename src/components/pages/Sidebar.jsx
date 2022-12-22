import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCookie, getUserInfo } from "../../redux/modules/userSlice";
import { getBoardInfo } from "../../redux/modules/boardSlice";
import axios from "axios";

export default function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loginUser = JSON.parse(window.localStorage.getItem("Token"));
  const [img, setImg] = useState({
    image:
      "data:image/png;base64,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",
    upload: "",
  });

  const [upload, setUpload] = useState("");
  console.log("render");
  useEffect(() => {
    /*  dispatch(getUserInfo()); */
    return () => {
      URL.revokeObjectURL(img.preview_URL); // 이미지를 삭제해서 데이터 누수를 줄일 수 있다.
    };
  }, [dispatch]);

  //Usage example:
  const handleFileSelect = async (e) => {
    console.log("ok1");
    /*     await setUpload(e.target.files[0]); */
    setImg({
      image: URL.createObjectURL(e.target.files[0]),
      upload: e.target.files[0],
    });

    onFileChangeHandler();
  };
  const onFileChangeHandler = async (e) => {
    const formData = new FormData();
    console.log(upload);
    formData.append("image", img.upload); //append의 첫번째 인자에는 name, 두번째는 value

    console.log(formData.get("image"));

    await axios.post("http://13.209.84.31:8080/api/user/thumb", {
      headers: {
        "Contest-Type": "multipart/form-data",
        Authorization: localStorage.getItem("Authorization").split(`\"`, -1)[1],
      },
      formData,
    });
  };

  return (
    <StSideContainer>
      <div className="sidebar_inner flex-gap">
        <div className="logo">LOGO</div>

        <div className="profile_wrapper">
          <StProfile /* onChange={handleFileSelect} */>
            <label htmlFor="file_item" className="profile_label">
              <span className=""></span>
              {img && <img src={img.image} alt="" id="profile_img" />}
            </label>
            <input
              type="file"
              hidden
              id="file_item"
              onChange={handleFileSelect}
            />
          </StProfile>
          <StUserInfo>
            <div className="userInfo_container">
              <span>아이디: </span>
              <span>{loginUser ? loginUser.userId : "게스트"}</span>
            </div>
            <div className="userInfo_container">
              <span>닉네임: </span>
              <span>{loginUser && loginUser.username}</span>
            </div>
          </StUserInfo>
          <div className="writing_btn_container">
            <StWritingbtn to="/api/boards/newboard" className="writing_btn">
              글쓰기
            </StWritingbtn>
          </div>
        </div>

        <span className="copyright">Coypright reserved RTteam</span>
      </div>
    </StSideContainer>
  );
}

const StSideContainer = styled.div`
  max-width: 350px;
  width: 100%;

  .sidebar_inner {
    position: relative;
    padding: 20px 30px;
    box-sizing: border-box;
    border-right: 1px solid #e4e4e4;
    min-height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    font-size: 0.9rem;
  }
  .flex-gap {
    display: flex;
    flex-direction: column;
    gap: 45px 0;
  }
  .sidebar_main {
    display: flex;
    flex-direction: column;
    gap: 35px 0;
    align-items: center;
  }
  .logo {
    max-width: 200px;
    height: 40px;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .profile_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  #profile_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
  .writing_btn_container {
    display: flex;
    justify-content: flex-end;
    margin-top: 70px;
  }

  .userInfo_container {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.8rem;
  }
  .copyright {
    position: absolute;
    bottom: 20px;
    color: #cecece;
    font-size: 0.8rem;
  }
`;
const StProfile = styled.form`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 170px;
  height: 170px;
  margin: 0 auto;
  border: 2px solid #e5e5e5;
`;

const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  padding: 15px 10px;
  box-sizing: border-box;
  background: #f7f7f7;
  border-radius: 3px;
  min-height: 150px;
`;

const StWritingbtn = styled(Link)`
  width: 90px;
  height: 30px;
  border: none;
  font-weight: 700;
  border-radius: 3px;
  box-shadow: 2px 2px 6px -2px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  background: #f3f3f3;
  border-radius: 3px;
  font-size: 0.8rem;
  &:active {
    box-shadow: none;
  }
`;
