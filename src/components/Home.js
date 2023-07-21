import React from 'react'

import { styled } from 'styled-components'

// components
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Onliine for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order Onliine for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Onliine for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Onliine for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Lowest cost solar panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
         <Section 
          title="Solar for new roofs"
          description="Money-back guarantee"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Order now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`