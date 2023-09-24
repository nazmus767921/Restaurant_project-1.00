import styled from "styled-components";

const HeroTitle = ({ children }) => {
	return <H1>{children}</H1>;
};

const H1 = styled.h1`
	text-align: center;
`;

export default HeroTitle;
