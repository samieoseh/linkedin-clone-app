import React, {useState} from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function UserHeader() {
    const items = [
        { icon: '../images/nav-home.svg', text: 'Home' },
        { icon: '../images/nav-network.svg', text: 'My Network' },
        { icon: '../images/nav-jobs.svg', text: 'Jobs' },
        { icon: '../images/nav-messaging.svg', text: 'Messaging' },
        { icon: '../images/nav-notifications.svg', text: 'Notifications' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
        <Wrap>
            <Logo>
                <img src='../images/linked-userpage-logo.svg' />
                <input type='text' placeholder='Search'/>
                <CustomSearchIcon />
            </Logo>
            <Menu>
                <RightMenu>
                    {items.map((item, index) => (
                      <Item key={index} onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active': 'not-active'}>
                        <img src={item.icon} />
                        <a href="#">{item.text}</a>
                        </Item>  
                    ))}
                    <Item>
                        <img src='../images/user.svg' />
                        <div>
                            <a href="#">Me</a>
                            <CustomDropDown />
                        </div>
                    </Item>
                </RightMenu>
            </Menu>
            <BusinessMenu>
                <div>
                    <img src='../images/business.svg'/>
                    <div>
                        <p>For Business</p>
                        <CustomDropDown />
                    </div>
                </div>
                <div className='reactivate'>
                    <p>Reactivate</p>
                    <p>Premium: 50% Off</p>
                </div>
            </BusinessMenu>
        </Wrap>
    </Container>
  )
}

export default UserHeader

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: sticky;
`

const Wrap = styled.div`
    width: 85%;
    height: 55px;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
    img {
        height: 40px;
        width: 40px;
        margin-right: 5px;
    }

    input {
        height: 35px;
        width: 50%;
        border: none;
        padding: 6px 20px 6px 40px;
        border-radius: 4px;
        font-size: 14px;
        font-family: "Roboto";
        background-color: #f3f2ef;
        transition: all 250ms ease-in;
        letter-spacing: 1px;
        &:active, &:focus {
            width: 80%;
        }
    }

`;
const CustomSearchIcon = styled(SearchIcon)`
    position: absolute;
    top: 16px;
    bottom: 0;
    left: 12%;
    font-size: 20px !important;
    color: #666;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
`;

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .active::after {
        content: "";
        position: absolute;
        bottom: -8px;
        margin: 0 12px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #111;
        border-radius: 2px;
    }
`;

const LeftMenu = styled.div`
    display: flex;

`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;
    cursor: pointer;
    position: relative;

    img {
        height: 24px;
        width: 24px;
        fill: #111;
        border-radius: 50%;
    }

    a {
        text-decoration: none;
        font-size: 12px;
        font-family: "Roboto";
        color: rgba(0,0,0,0.6);

        &:hover {
            color: #111;
        }
    }
    
    div {
        display: flex;
        align-items: center;
    }
`;

const BusinessMenu = styled.div`
    display: flex;
    border-left: 1px solid rgba(0, 0, 0, 0.2);

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 4px;

        img {
            height: 24px;
            width: 24px;
        }

        div {
            display: flex;
            flex-direction: row;
            p {
                font-size: 12px;
            }
        }
    }

    .reactivate {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p { 
            font-size: 12px;
            text-decoration: underline;
            color: #915907;
        }
    }
`;

const CustomDropDown = styled(ArrowDropDownIcon)``;


