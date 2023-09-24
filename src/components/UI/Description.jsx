import styled from "styled-components";

const Description = ({ children }) => {
	return <P>{children}</P>;
};

const P = styled.p`
	text-align: center;
	opacity: 0.6;
`;

export default Description;
