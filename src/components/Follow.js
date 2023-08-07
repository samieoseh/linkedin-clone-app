import React from "react";
import { styled } from "styled-components";

function Follow() {
  return (
    <Container>
      <h2>Add to your feed</h2>
      <Wrap>
        <ImgContainer>
          <img src="https://media.licdn.com/dms/image/C4E0BAQGktA2fmyBokw/company-logo_100_100/0/1645049991454?e=1699488000&amp;v=beta&amp;t=D8WsK98T3Gc7TLSYW_ahBJ9He2w6oigonX7nvBrna7s" />
        </ImgContainer>
        <DescContainer>
          <h3>MTN Nigeria</h3>
          <p>Company . Telecommunications</p>
          <button>Follow</button>
        </DescContainer>
      </Wrap>
      <Wrap>
        <ImgContainer>
          <img src="https://media.licdn.com/dms/image/C4E0BAQG0lRhNgYJCXw/company-logo_100_100/0/1678382029586?e=1699488000&amp;v=beta&amp;t=KnZ3VYoNPpQUA1Bf2BPA9SJd8Mcf8XDcM8jRQpUKIpI" />
        </ImgContainer>
        <DescContainer>
          <h3>MTN Nigeria</h3>
          <p>Company . Telecommunications</p>
          <button>Follow</button>
        </DescContainer>
      </Wrap>
      <Wrap>
        <ImgContainer>
          <img src="https://media.licdn.com/dms/image/D4E03AQEJiW-imUHCVQ/profile-displayphoto-shrink_100_100/0/1681214634864?e=1697068800&amp;v=beta&amp;t=QMcV1y6_y2om5Ykng1YOSBaE_IeNNpf3_LOwkKEi2HQ" />
        </ImgContainer>
        <DescContainer>
          <h3>MTN Nigeria</h3>
          <p>Company . Telecommunications</p>
          <button>Follow</button>
        </DescContainer>
      </Wrap>
    </Container>
  );
}

export default Follow;

const Container = styled.div`
  height: auto;
  width: 80%;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`;

const Wrap = styled.div`
  display: flex;
  padding: 15px 0;
`;

const ImgContainer = styled.div`
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-left: 10px;

  p {
    font-size: 12px;
    color: #666;
    font-family: "Roboto";
  }

  h2 {
    font-size: 13px;
    color: #666;
    font-family: "Roboto";
  }

  button {
    padding: 8px 10px;
    width: 60%;
    box-sizing: border-box;
    color: #666;
    border-radius: 20px;
    font-family: "Roboto";
    background-color: transparent;
    outline: none;
    border: 0.2px solid #666;
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover {
      background-color: rgba(1, 1, 1, 0.1);
    }
  }
`;
