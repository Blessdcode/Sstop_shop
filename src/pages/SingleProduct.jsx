import { AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai'
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { pic8 } from '../assets'
import { mobile } from "../reponsive";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { popularProducts } from '../data'
import { ShopContext } from '../context/shopContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
  margin: "30px 0px",
  flexDirection: "column"
})}


`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  object-position: center;
  ${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid palevioletred;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  width: 100%;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const TopButton = styled.button`
  padding: 10px ;
  margin-bottom:30px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const SingleProduct = (props) => {
  const { id, img, dec, name, price } = useParams()
  const navigate = useNavigate()
  const product = popularProducts.find(product => product.id === parseInt(id));


  const { cartItems, addToCart, removeCart, updateCartItem } = useContext(ShopContext)
  const itemTotalPrice = cartItems[id] * price;


  const handlerToCart = () => {
    addToCart(id);

  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Link to='/'>
          <TopButton>
            <AiOutlineArrowLeft size={22} />
          </TopButton>
        </Link>

        <ImgContainer>
          <Image src={product.img} onClick={() => navigate('/singleProduct')} alt='hello' />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
            {product.dec}
          </Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <div className="countHandler">
                {/* <AiOutlineMinus onClick={() => removeCart(id)} className='btn-add-rem' /> */}
                {/* <input className='Input-el' value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} /> */}
                {/* <AiOutlinePlus onClick={() => addToCart(id)} className='btn-add-rem' /> */}
              </div>
            </AmountContainer>
            <Button onClick={handlerToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
