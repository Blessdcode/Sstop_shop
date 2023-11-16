import styled from "styled-components";
import { featuredProducts } from "../data";
import Slider from "react-slick";
import { mobile, small } from "../reponsive";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    /* margin: 10px; */
    height: 80vh; 
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction:column ; */
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    border-radius: 10px;
    overflow: scroll;
    
    ${small({
    flexDirection: "column"

})}

    `;

const Flex = styled.div`
    width: 250px;
    /* height: 30vh; */
    /* margin-right: 10px; */
    object-fit: cover;
    object-position: center;
    `
const Box = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
    `

const Wrapper = styled.div`
    display: flex;
    `
const Image = styled.img`
    /* margin-right: 10px; */
    /* margin-bottom: 7px; */
    height:250px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  `;

const Title = styled.h1`
color:#000;
margin-bottom: 20px;
`;

const Section = styled.section`
    background-color: #f5fbfd;
    padding: 30px 10px;
    /* height: 350px; */
`

const FeaturedProduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <Section>
            <Title>Related Products</Title>
            <Container>

                {featuredProducts.map((item) => (
                    <Wrapper key={item.id}>
                        <Flex>
                            <Box>
                                <Image src={item.img} alt={item.type} />
                                <div className="feature_product">

                                    <h4>{item.name}</h4>
                                    <br />
                                    {/* <p>${item.newPrice}</p>                                     */}
                                </div>
                            </Box>
                        </Flex>
                    </Wrapper>
                ))}
            </Container>
        </Section>
    );
};

export default FeaturedProduct;
