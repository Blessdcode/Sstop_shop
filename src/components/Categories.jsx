import styled from "styled-components";
import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../reponsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 50px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}


`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoriesItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
