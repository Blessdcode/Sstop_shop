import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { sliderItems } from '../data'
import { mobile } from "../reponsive";


// /*Styling */

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
   margin-top: 2rem;
   ${mobile({ margin: "70px 0",
   height:"120vh"
   })}
`


const Arrow = styled.div`
    width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  /* opacity: .5; */
  z-index: 2;

  ${mobile({
      top: "-50%",

})}

`
const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  

`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    object-fit: cover;
    object-position: center;
    background-color: #${props => props.bg};
    ${mobile({
      display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   height:"120vh"

})}

`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
  height: 100%;
  ${mobile({
     width:"100%"
})}
`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  ${mobile({
   fontSize: "20px",
})}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: palevioletred;
    color: #fff;
    box-shadow: 8px 6px 0 rgba(0,0,0,.5);
    border-color: palevioletred;
    transition: .5s ease;
  }
`;




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };


    setTimeout(handleClick, 4000)


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <AiOutlineArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <AiOutlineArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider
