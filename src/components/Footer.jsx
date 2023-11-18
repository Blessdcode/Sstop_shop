import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillMail,
    AiFillPhone,
    AiOutlineTwitter,
    AiFillHome,

} from "react-icons/ai";
import { footerLinks } from '../data'

import { logo, payment } from '../assets'
import styled from "styled-components";
import { mobile } from "../reponsive";



const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.div`  
    display: flex;
    align-items: center;
`
const Name = styled.h1`
    font-weight: bold;
`;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        color:palevioletred;
    }
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    <img src={logo} alt="Logo" aria-label='LOGO' />
                    <Name>StopShop</Name>
                </Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <AiFillFacebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <AiFillInstagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <AiOutlineTwitter />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>

                    {footerLinks.map((links) => (
                        <ListItem key={links.id}>{links.title}</ListItem>
                    ))}
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <AiFillHome style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <AiFillPhone style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <AiFillMail style={{ marginRight: "10px" }} /> contact@lama.dev
                </ContactItem>
                <Payment src={payment} />
            </Right>
        </Container >
    );
};

export default Footer;
