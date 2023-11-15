import styled from "styled-components";
import Typed from 'react-typed';
import React from 'react';
import { mobile, small } from "../reponsive";









const typeWriter = [" Men ", " Women ", " Shoes "];

const Container = styled.div`
  height: 30px;
  background-color: palevioletred;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  
  ${mobile({
  height: "50px",
  flexDirection: "column",
  padding: "10px",
  width: "100%",
})}
`;

const Text = styled.span`
`;

const Spacing = styled.span`
  margin: 0 4px; 
  font-weight: 700;
  color:#000;
  ${mobile({ margin: "0" })}
`;

const Announcement = () => {
  return (
    <>
      <Container>
        <Text>Get Super Discount on Orders Over $150 when you shop on

          <Spacing>
            <Typed
              strings={typeWriter}
              typeSpeed={40}
              backSpeed={50}
              delay={30}
              loop
              showCursor={false}
            />
          </Spacing>
        <Text>Categories</Text>
        </Text>
      </Container>
    </>
  );
};

export default Announcement;
