import React from 'react'

import { styled } from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order Onliine for Touchless Delivery</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>Custom Order</LeftButton>
                <RightButton>Existing Inventory</RightButton>
            </ButtonGroup>
            <DownArrow src="./images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: rgba(23, 26, 32, 0.8);
`

const DownArrow = styled.img`
    margin-top: 5px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div``