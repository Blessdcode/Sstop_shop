import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { logo } from '../assets'
import { mobile } from "../reponsive";
import { Link, useNavigate } from 'react-router-dom';
// import Newsletter from './Newsletter';
import Announcement from './Announcement';
import { ShopContext } from '../context/shopContext';

const Container = styled.div`
    height: 60px;
  ${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}

    
`
// Left side
const Left = styled.div`
    flex: 1.5;  
`
const Language = styled.div`
    display:flex ;
    align-items: center;
    font-size: 14;
  cursor: pointer;
  ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
  ${mobile({ width: "50px" })}

`


const Center = styled.div`
    flex: 1;
    text-align: center;
    `
const LogoCon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const Logo = styled.h1`
    font-weight: bold;
  ${mobile({ fontSize: "24px" })}

`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  ${mobile({ flex: 2, justifyContent: "center" })}

`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;    
    font-weight: 500;
    text-transform: uppercase;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover{
      color: palevioletred;
    }
`
const Badge = styled.div`
  position: relative;
`
const Span = styled.span`
background-color: palevioletred;
color:White;
padding: 6px;
border-radius: 50%;
font-weight: 500;
position: absolute;
right: -7px;
bottom: 30px;
font-size: 12px;
`


const Navbar = (props) => {

  // State to track when an item is added to the cart
  const [itemAddedToCart, setItemAddedToCart] = useState(false);

  // useEffect to reset the itemAddedToCart state after a delay
  useEffect(() => {
    if (itemAddedToCart) {
      // Set itemAddedToCart to false after 2 seconds (you can adjust the delay)
      const timeout = setTimeout(() => {
        setItemAddedToCart(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [itemAddedToCart]);

  const id = props.data && props.data.id;

  const { getTotalItemCount } = useContext(ShopContext);

  const { cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];

  const navigate = useNavigate()
  return (
    <>
      {/* <Announcement/> */}
      <Container>
        <Wrapper>
          <Left>
            <Language>
              En
              <SearchContainer>
                <Input />
                <AiOutlineSearch style={{ color: "gray", fontSize: "16px" }} />
              </SearchContainer>
            </Language>
          </Left>
          <Center>
            <LogoCon>
              <img src={logo} alt="Logo" aria-label='LOGO' />
              <Logo onClick={() => navigate('/')}>StopShop</Logo>
            </LogoCon>
          </Center>
          <Right>
            <MenuItem onClick={() => navigate('/register')} >Register</MenuItem>
            <MenuItem onClick={() => navigate('/login')}>Log In</MenuItem>
            <MenuItem>
              <Badge>
                <Span>{getTotalItemCount()}</Span>
                <AiOutlineShoppingCart size={42} onClick={() => navigate('/cart')} />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar
