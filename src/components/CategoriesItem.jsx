import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;

const Info = styled.div`
  position: absolute;
  top: 40rem; /* Reduced top value */
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: 0; */
  transition: top 0.5s;
  
  ${Container}:hover & {
    /* opacity: 1; */
    top: 0;
  }
`;


const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: palevioletred;
        color: #fff;
        border-color: palevioletred;
        transition: .5s ease;
    }
`;

const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoriesItem;
