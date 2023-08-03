import React from 'react'
import styled from "styled-components";

function UserProfile() {
  return (
    <Profile>
        <Banner>
            <img src="../images/banner.png" />
        </Banner>
        <ProfilePhoto>
            <img src="../images/user.svg" />
        </ProfilePhoto>
        <FeedIdentity>
            <p>Samuel Oseh</p> 
            <p>Aspiring Web Developer</p>
        </FeedIdentity>
        <FeedMetrics>
            <div>
                <p>Who's viewed your profile</p>
                <p>110</p>
            </div>
            <div>
                <p>Impression on your posts</p>
                <p>2345</p>
            </div>
        </FeedMetrics>
        <AdBar>
            <p>Access tools and insights</p>
            <p>
                <span>
                    <img src='../images/premium.svg' />    
                </span>
                Reactivate Premium: Get 50% Off
            </p>
        </AdBar>
        <MyItems>
            <p>My Items</p>
        </MyItems>
    </Profile>
  )
}

export default UserProfile


const Profile = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Banner = styled.div`
    img {
        height: 50px;
        width: 100%;
        object-fit: cover;
    }
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`;

const ProfilePhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    left: calc(50% - 35px);

    img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
`;

const FeedIdentity = styled.div`
    display: flex;
    padding-top: 70px;
    padding-bottom: 10px;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    

    p:first-child {
        font-size: 16px;
        font-weight: 800;
        font-family: "Roboto";
        padding: 5px 0;
        transition: all 250ms ease-in;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
            text-decoration-color: purple;

        }
    }

    p:last-child {
        font-size: 12px;
        font-family: "Roboto";
    }
    
`;

const FeedMetrics = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;    

    div {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        width: 100%;
        cursor: pointer;

        p {
            font-size: 12px;
            font-weight: 600;
            font-family: "Roboto";
        }

        p:first-child {
            color: #666;
        }

        p:last-child {
            color: #307ecc
        }
    }
`;

const AdBar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    p {
        font-size: 11px;
        font-family: "Roboto"; 
        color: #666;
    }

    p:last-child {
        color: #111;
        text-decoration: underline;
        display: flex;
        align-items: center;
        span {
           img {
            height: 15px !important;
            width: 15px !important;
            margin-right: 3px;
           }
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const MyItems = styled.div`
    padding: 20px 10px;

    p {
        font-size: 12px;
        font-family: "Roboto";
        color: #666;
        font-weight: 600;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;