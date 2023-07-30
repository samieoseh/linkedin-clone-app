import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <Wrap>
        <Logo>
          <img src='../images/login-logo.svg' alt="login logo" />
        </Logo>
        <Menu>
          <LeftMenu>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 17" focusable="false" class="lazy-loaded" aria-busy="false">
              <path d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z" fill-opacity=".9"></path>
            </svg>
              <p>Articles</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" class="lazy-loaded" aria-busy="false">
                <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" ></path>
              </svg>
              <p>People</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" class="lazy-loaded" aria-busy="false">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" ></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"  fill-opacity=".25"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"  fill-opacity=".6"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" ></path>
              </svg>
              <p>Learning</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" class="lazy-loaded" aria-busy="false">
                  <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" ></path>
                </svg>
              <p>Jobs</p>
            </div>
          </LeftMenu>
          <Line />
          <RightMenu>
            <button>Join now</button>
            <button>Sign in</button>
          </RightMenu>
        </Menu>
      </Wrap>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
  }
`;


const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 135px;
    height: 34px;
    fill: #0a66c2;
    
    @media (max-width: 768px) {
      width: 100px;
      height: 20px;
    }
    
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }

  div {
    margin: 0 15px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
     
    p {
      color: #666666;
      font-size: 12px;
      font-weight: 400;

      &:hover {
        color: #111;
      }
    }

    svg {
      height: 20;
      width: 18;
      padding: 0px;
      fill: #666;

      &:hover {
        fill: #111;
      }
    }
  }
`;

const Line = styled.div``;

const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  button {
    background-color: transparent;
    font-weight: 600;
    font-size: 13px;

    @media (max-width: 768px) {
      padding: 15px 25px;
    }
  }

  button:first-child {
    color: #666;
    padding: 14px 26px;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 32px;
    margin: 0px 10px;



    &:hover {
      background-color: rgb(230, 230, 230);
      color: #111;
    }
  }

  button:last-child {
    padding: 18px 24px;
    border: 1px solid #0a68c6;
    color: #0a68c6;
    border-radius: 40px;
    cursor: pointer;


    &:hover {
      background-color: rgba(10,102,194, 0.1);
    }
  }
`;

