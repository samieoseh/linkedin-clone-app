import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

function UserHeader() {
  const items = [
    { icon: "../images/nav-home.svg", text: "Home" },
    { icon: "../images/nav-network.svg", text: "My Network" },
    { icon: "../images/plus-icon.svg", text: "Post" },
    { icon: "../images/nav-notifications.svg", text: "Notifications" },
    { icon: "../images/nav-jobs.svg", text: "Jobs" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <Wrap>
        <TopBar>
          <img src="../images/user.svg" className="user-icon" />
          <input type="text" placeholder="Search" />
          <CustomSearchIcon />
          <img src="../images/nav-messaging.svg" className="message-icon" />
        </TopBar>
        <BottomBar>
          {items.map((item, index) => (
            <Item
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : "not-active"}
            >
              <img src={item.icon} />
              <a href="#">{item.text}</a>
            </Item>
          ))}
        </BottomBar>
      </Wrap>
    </Container>
  );
}

export default UserHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Wrap = styled.div`
  width: 98%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 30px;
    width: 30px;
    margin-left: 12px;
  }

  .user-icon {
    border-radius: 50%;
    margin-right: 12px;
  }

  .message-icon {
  }

  input {
    flex: 1;
    padding: 8px 4px 8px 30px;
    position: relative;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #666;
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  row-gap: 12px;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  z-index: 100;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    font-size: 12px;
    text-decoration: none;
    color: #666;
  }
`;

const CustomSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 18px;
  left: 18%;
  height: 20px !important;
  width: 20px !important;
  fill: #666 !important;
`;
