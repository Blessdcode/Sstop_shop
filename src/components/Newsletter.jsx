import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai"


const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 6px;
`;

const Input = styled.input`
  border: none;
  border-radius: 6px 0 0 6px;
  flex: 8;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  outline: none;
  `;

const Button = styled.button`
  border-radius: 0 6px 6px 0;
  flex: 1;
  border: none;
  background-color: palevioletred;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Please enter your email" type="email" required/>
                <Button>
                    <AiOutlineSend size={24}/>
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
