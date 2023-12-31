
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
  `;

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    border-radius: 10px;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    `;

const Image = styled.img`
    height: 100%;
    width: 100%;
    z-index: 2;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  `;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        border-radius: 10px;
      transform: scale(1.1);
    }
  `;

const Title = styled.p`
    margin-bottom: 20px;
    font-size: 4;
    padding: 4px;
    position: absolute;
    top: -16px;
    left: 6px;
    z-index: 9;
    background-color: #000;
    color: #fff;
    width: 40px;
    text-align: center;
    height: 40px;
    opacity: .8;
    /* border-radius: 10px 10px 0 0; */
`;

const FeaturedProducts = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            {item.tag && <Title>{item.tag}</Title>}
            <Info>
                <Icon>
                    <AiOutlineShoppingCart />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon>
                    <AiFillHeart />
                </Icon>
            </Info>
        </Container>
    );
};

export default FeaturedProducts;
