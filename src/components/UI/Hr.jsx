import styled from "styled-components";

const Hr = ({ className }) => {
	return <Line className={className}></Line>;
};

const Line = styled.div`
	height: 2px;
	margin-top: -2px;
	width: 100%;
	background: ${(props) => props.theme["brand"]};
`;

export default Hr;
