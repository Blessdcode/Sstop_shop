import styled from "styled-components";
import { featuredProducts } from "../data";

const Container = styled.div`
    /* margin: 10px; */
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    border-radius: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    `;

const Flex = styled.div`
    width: 250px;
    height: 30vh;
    /* margin-right: 10px; */
    object-fit: cover;
    object-position: center;
    `

const Wrapper = styled.div`
    display: flex;
    `
const Image = styled.img`
    /* margin-right: 10px; */
    margin-bottom: 10px;
    height: 100%;
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
    return (
        <Section>
            <Title>Related Products</Title>
            <Container>
                {featuredProducts.map((item) => (
                    <Wrapper key={item.id}>
                        <Flex>
                            <Image src={item.img} alt={item.type} />
                        </Flex>
                    </Wrapper>
                ))}
            </Container>
        </Section>
    );
};

export default FeaturedProduct;
