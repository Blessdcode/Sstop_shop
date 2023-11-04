import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { logo } from '../assets'


const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 21px;
    font-weight: 500;
    text-transform: uppercase;
`
const Bage = styled.div`
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

const Navbar = () => {
  return (
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
            <Logo>StopShop</Logo>
          </LogoCon>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>
            <Bage>
              <Span>10</Span>
              <AiOutlineShoppingCart size={42} />
            </Bage>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
