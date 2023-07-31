import React from "react";
import styled from "styled-components";
import UserHeader from "./UserHeader";

function User() {
    return (
        <Body>
            <UserHeader />
        </Body>
    )
}

export default User;

const Body = styled.div`
    background-color: #f3f2ef;
    height: 100vh; 
    width: 100%;
`