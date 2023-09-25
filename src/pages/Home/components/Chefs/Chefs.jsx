import styled from "styled-components";
import ChefCard from "./components/ChefCard";

const Chefs = () => {
	return <Wrapper>
    <ChefCard />
  </Wrapper>;
};

const Wrapper = styled.div`
	display: flex;
`;
export default Chefs;
