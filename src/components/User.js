import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserHeader from "./UserHeader";
import UserMobileHeader from "./UserMobileHeader";
import UserProfile from "./UserProfile";
import Recent from "./Recent";
import PostCard from "./PostCard";
import Follow from "./Follow";

function User() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add event listener to track window width changes
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Body>
      {windowWidth <= 768 ? <UserMobileHeader /> : <UserHeader />}
      <Content>
        <LeftContent>
          <UserProfile />
          <Recent />
        </LeftContent>
        <MiddleContent>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </MiddleContent>
        <RightContent>
          <Follow />
        </RightContent>
      </Content>
    </Body>
  );
}

export default User;

const Body = styled.div`
  background-color: #f3f2ef;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr;
  width: 85%;
  column-gap: 5px;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  margin-top: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MiddleContent = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const RightContent = styled.div`
  width: 100%;
  margin-top: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;
