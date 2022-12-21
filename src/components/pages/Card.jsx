import React from "react";
import styled from "styled-components";

export default function Card({ data }) {
  return (
    <StCard key={data.id}>
      <span className="user_name">{data.userId}</span>
      <div>
        <StCardImg src={data.img} alt="" />
      </div>
      <StUserContent>
        <span className="user_title">{data.title}</span>
        <span className="user_content">{data.content}</span>
      </StUserContent>
    </StCard>
  );
}

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  box-shadow: 3px 1px 7px 1px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  .user_name {
    font-size: 0.8rem;
    letter-spacing: 0.2px;
  }
`;
const StCardImg = styled.img`
  aspect-ratio: 16/10;
  width: 100%;
  object-fit: cover;
`;
const StUserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin-top: 5px;
  font-size: 0.9rem;

  .user_title {
    font-weight: 700;
    width: 14vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    list-style: none;
  }
  .user_content {
    width: 14vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
  }
`;
