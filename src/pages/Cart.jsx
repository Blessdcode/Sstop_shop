import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { ShopContext } from '../context/shopContext'
import { popularProducts } from "../data";
import CartDet from './CartDet'
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { mobile } from "../reponsive";








const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  text-decoration: underline;
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
  width: 200px;
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
  height: 3px;
  margin-bottom: 48px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const CartE = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  `

const Text = styled.div`
margin: 7rem 0 4rem 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Pra = styled.p`
  text-decoration: underline;
  cursor: pointer;
`

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
  cursor: pointer;
  `;

const BTNS = styled.div`
  display: flex;
  gap:4px;
  `;
const Buttons = styled.button`
  cursor: pointer;
width: 200px;
`




const Cart = () => {
  const { cartItems, getTotalAmount, updateCartItem, getTotalItemCount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()

  const handleRemoveAll = () => {
    // Clear the cart by setting the quantity of all items to 0
    for (const item in cartItems) {
      updateCartItem(0, item);
    }
    // You can also clear the cart from local storage if needed
    localStorage.removeItem('cart');
    // Navigate to the checkout page

 
  }

  return (
    <>
      <Announcement />
      {/* <Navbar /> */}
      <div>

        {totalAmount > 0 ? (
          <>


            <Wrapper>
              <Title>YOUR CART ITEMS</Title>
              <Top>
                <Link to='/'>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                  <TopText>Shopping Bag({getTotalItemCount()})</TopText>
                  {/* <TopText onClick={() => navigate('/wishlist')}>Your Wishlist (0)</TopText> */}
                </TopTexts>

              </Top>

            </Wrapper>
          </>
        ) : (
          <></>
        )}

        <div className='cartItems'>
          {popularProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartDet data={product} key={product.id} />
            }

            <div>

            </div>
          })}
        </div>


        {totalAmount > 0 ? (
          <>


            <Wrapper>
              <Hr />
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>


                <SummaryItem>
                  <SummaryItemText>Shipping Fee</SummaryItemText>
                  <SummaryItemPrice><b>$</b> 25.37</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice> <b>$</b> {totalAmount.toFixed(2)}</SummaryItemPrice>
                </SummaryItem>
                <BTNS>
                  <Button>CHECKOUT NOW</Button>
                  <Buttons onClick={handleRemoveAll}> REMOVE ALL</Buttons>

                </BTNS>
              </Summary>
            </Wrapper>
          </>
        ) : (
          <Text>
            <CartE>Your cart is Empty</CartE>
            <Pra>Vist your watchlist</Pra>
          </Text>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Cart
