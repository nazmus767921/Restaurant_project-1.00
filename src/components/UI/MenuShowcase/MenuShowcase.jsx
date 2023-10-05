import styled from "styled-components";

const MenuShowcase = ({ children, style }) => {
	return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 1em;
	gap: 1em;
`;

export default MenuShowcase;
