import React, {useState} from 'react'
import styled from "styled-components";

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  
  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      <LeftWrap>
        <Title>
          <h1>Welcome to your</h1>
          <h1>professional community</h1>
        </Title>
        <EmailField>
          <label>Email or phone</label>
          <input type="text" />
        </EmailField>
        <PasswordField>
          <label>Password</label>
          <PasswordWrapper>
            <input type={showPassword ? "text": "password"}/>
            <button onClick={() => togglePasswordVisibility()}>
              {showPassword ? 'Hide': 'Show'}
            </button>
          </PasswordWrapper>
        </PasswordField>
        <SignIn>
          <a href="#">Forgot password?</a>
          <input type="submit" value="Sign in" />
        </SignIn>
        <Join>
          <div>
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <div>
            <img src='../images/google.svg' alt="Google logo" />
            <p>Continue with Google</p>
          </div>
          <button>New to Linkedin? Join now</button>
        </Join>
      </LeftWrap>
      <RightWrap>
        <img data-test-id="hero__illustration" src="../images/home-svg.svg" />
      </RightWrap>
    </Container>
  )
}

export default Login

const Container = styled.div`
  margin-top: 2.5vh;
  display: flex;
  justify-content: space-between;
`;

const LeftWrap = styled.div`
  margin: 6vh 7.5%;

  @media(max-width: 768px) {
    margin: 1vh 2.5%;
    width: 100%;
  }
`;

const RightWrap = styled.div`
  position: absolute;
  top: 18vh;
  right: -120px;

  @media(max-width: 768px) {
    display: none;
  }

  img {
    height: 750px;
    width: 750px;
  }
`;

const Title = styled.div`
  
  h1 {
    font-size: 54px;
    color: #8f5849;
    font-weight: 300;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const EmailField = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  label {
    color: #666;
    padding: 8px 0;
    font-weight: 500;
    font-size: 15px;
  }

  input {
    border: 1px solid #111;
    padding: 15px;
    width: 70%;
    color: #111;
    border-radius: 5px;
    font-size: 15px;
    outline: none;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const PasswordWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }

  button {
    background-color: transparent;
    width: 15%;
    border: none;
    font-weight: 700;
    cursor: pointer;
    color: #0a68c6;
  }

  input {
    width: 85%;
    border: none;
  }

`
const PasswordField = styled(EmailField)`
  padding-top: 20px;
`;

const SignIn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    color: #0a68c6;
    margin: 20px 0;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
  }

  input {
    border-radius: 25px;
    padding: 15px 0;
    color: #fff;
    background-color: #0a68c6;
    font-size: 16px;
    cursor: pointer;
    border: none;

    &:hover {
      background: #281593;
    }
  }
`;

const Join = styled.div`
  margin: 4vh 0;

  @media (max-width: 768px) {
    width: 100%;
  }
  div:first-child {
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
    }

    span {
      width: 45%;
      background-color: #111;
      height: 1px;
    }

    p {
      font-size: 12px;
      width: 10%;
      text-align: center;
    }
  }

  div:nth-child(2) {
    margin: 4vh 0;
    border-radius: 25px;
    font-size: 12px;
    font-family: "Roboto";
    border: 1.3px solid #f0f1f3;
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%;
    }

    img {
      height: 18px;
      width: 18px;
      margin: 0 8px;
    }

    p {
      font-size: 13px;
      font-family: "Roboto";
    }

    &:hover {
      background-color: #f7f9ff
    }
  }

  button {
    width: 70%;
    padding: 15px 25px;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid #111;
    border-radius: 25px;
    font-weight: 600;
    font-family: 'Roboto';

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;