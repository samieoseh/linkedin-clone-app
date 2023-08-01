import React, {useState, useEffect} from "react";
import styled from "styled-components";
import UserHeader from "./UserHeader";
import UserMobileHeader from "./UserMobileHeader";

function User() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Add event listener to track window width changes
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return (
        <Body>
            {windowWidth <= 768 ? <UserMobileHeader /> : <UserHeader />}
        </Body>
    )
}

export default User;

const Body = styled.div`
    background-color: #f3f2ef;
    height: 100vh; 
    width: 100%;
`