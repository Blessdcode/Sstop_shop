import React, { useContext } from 'react'
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from '../context/shopContext'
import { mobile } from "../reponsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}


`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;
  height:400px;
  object-fit: cover;
  object-position: center;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Input = styled.div``


const CartDet = (props) => {
  const { cartItems, addToCart, removeCart, updateCartItem,getTotalItemCount } = useContext(ShopContext)

  const { id, name, price, img, newPrice, tag, off } = props.data
  const itemTotalPrice = cartItems[id] * price;

  return (
    <Container>
      <Wrapper>

        <div className='cartItem'>
          <Image src={img} alt={name} />
          <div className='description'>

            <h2 className='productName'>
              {name}
            </h2>
            <b><p className='price'>${itemTotalPrice.toFixed(2)} </p></b>
            {off && <div className='Title'>{off}</div>}

            <div className="countHandler">
              <AiOutlineMinus onClick={() => removeCart(id)} className='btn-add-rem' />
              <input className='Input-el' value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />
              {/* <h1 className='heading'>{getTotalItemCount()}</h1> */}
              <AiOutlinePlus onClick={() => addToCart(id)} className='btn-add-rem' />
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default CartDet
