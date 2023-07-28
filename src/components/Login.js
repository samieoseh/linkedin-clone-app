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
`;

const RightWrap = styled.div`
  position: absolute;
  top: 18vh;
  right: -120px;

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
    padding: 15px 10px;
    width: 70%;
    color: #111;
    border-radius: 5px;
    font-size: 15px;
    outline: none;

  }
`;


const PasswordWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-radius: 5px;

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
  }
`